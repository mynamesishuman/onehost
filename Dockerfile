FROM golang:1.24.6-alpine AS builder
WORKDIR /srv
COPY go.mod go.sum ./
RUN go mod download
COPY ./ .
COPY ../frontend/admin/out/ ./cmd/rest/static/

RUN go build -o app cmd/rest/main.go
FROM alpine:3.22.1
WORKDIR /root/
COPY --from=builder /srv/app .
EXPOSE 3000
CMD ["./app"]