FROM node:18-alpine AS base
# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /static
COPY frontend/admin/package.json frontend/admin/package-lock.json ./
RUN npm ci
FROM base AS nextbuilder
WORKDIR /static
COPY --from=deps /static/node_modules ./node_modules
COPY frontend/admin .
RUN npm run build
FROM golang:1.24.6-alpine AS builder
WORKDIR /srv
COPY go.mod go.sum ./
RUN go mod download
COPY ./ .
COPY --from=nextbuilder /static/out/ ./cmd/rest/static
RUN echo $(ls -la /srv/cmd/rest/static)

RUN go build -o app cmd/rest/main.go
FROM alpine:3.22.1
WORKDIR /root/
COPY --from=builder /srv/app .
EXPOSE 3000
CMD ["./app"]