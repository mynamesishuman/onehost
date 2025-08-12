#OPENAPI

```
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
-i /local/openapi/scheme/onehost.yaml \
-g go \
-o /local/openapi/client/onehost \
-c /local/openapi/scheme/config.json
```