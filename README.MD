#OPENAPI

```
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli generate \
-i /local/openapi/onehost.yaml \
-g go \
-o /local/internal/onehost \
-c /local/openapi/config.json
```