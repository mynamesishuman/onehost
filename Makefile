
.PHONY: all
all: openapi docker_build

.PHONY: build
build:
	GOOS=linux GOARH=amd64 go build -o app cmd/rest/main.go

.PHONY: docker_build
docker_build:
	docker build -f ./Dockerfile -t onehost:latest .

.PHONY: openapi
openapi:
	docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/openapi/scheme/onehost.yaml \
    -g go \
    -o /local/pkg/onehost \
    -c /local/openapi/scheme/config.json