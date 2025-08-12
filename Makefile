
all:
	openapi

build:
	GOOS=linux GOARH=amd64 go build -o app cmd/rest/main.go

openapi:
	docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
    -i /local/openapi/scheme/onehost.yaml \
    -g go \
    -o /local/openapi/client/onehost \
    -c /local/openapi/scheme/config.json