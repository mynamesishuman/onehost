# \DefaultAPI

All URIs are relative to *https://api.1cent.host*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ServerLocationConfigurationsGet**](DefaultAPI.md#ServerLocationConfigurationsGet) | **Get** /server/{location}/configurations | 
[**ServerLocationsGet**](DefaultAPI.md#ServerLocationsGet) | **Get** /server/locations | 
[**ServerPurchasePost**](DefaultAPI.md#ServerPurchasePost) | **Post** /server/purchase | 
[**ServerServerIdGet**](DefaultAPI.md#ServerServerIdGet) | **Get** /server/{server_id} | 
[**ServerServerIdProlongPost**](DefaultAPI.md#ServerServerIdProlongPost) | **Post** /server/{server_id}/prolong | 
[**ServerServerIdReinstallOsIdPost**](DefaultAPI.md#ServerServerIdReinstallOsIdPost) | **Post** /server/{server_id}/reinstall/:os_id | 
[**ServerServerIdRestartPost**](DefaultAPI.md#ServerServerIdRestartPost) | **Post** /server/{server_id}/restart | 
[**ServerServerIdStartPost**](DefaultAPI.md#ServerServerIdStartPost) | **Post** /server/{server_id}/start | 
[**ServerServerIdStopPost**](DefaultAPI.md#ServerServerIdStopPost) | **Post** /server/{server_id}/stop | 
[**UserGet**](DefaultAPI.md#UserGet) | **Get** /user/ | 
[**UserServersGet**](DefaultAPI.md#UserServersGet) | **Get** /user/servers/ | 



## ServerLocationConfigurationsGet

> ServerLocationConfigurationsGet200Response ServerLocationConfigurationsGet(ctx, location).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	location := "location_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerLocationConfigurationsGet(context.Background(), location).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerLocationConfigurationsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerLocationConfigurationsGet`: ServerLocationConfigurationsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerLocationConfigurationsGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**location** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerLocationConfigurationsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServerLocationConfigurationsGet200Response**](ServerLocationConfigurationsGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerLocationsGet

> ServerLocationsGet200Response ServerLocationsGet(ctx).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerLocationsGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerLocationsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerLocationsGet`: ServerLocationsGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerLocationsGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiServerLocationsGetRequest struct via the builder pattern


### Return type

[**ServerLocationsGet200Response**](ServerLocationsGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerPurchasePost

> ServerPurchasePost200Response ServerPurchasePost(ctx).ServerPurchasePostRequest(serverPurchasePostRequest).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverPurchasePostRequest := *openapiclient.NewServerPurchasePostRequest() // ServerPurchasePostRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerPurchasePost(context.Background()).ServerPurchasePostRequest(serverPurchasePostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerPurchasePost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerPurchasePost`: ServerPurchasePost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerPurchasePost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiServerPurchasePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serverPurchasePostRequest** | [**ServerPurchasePostRequest**](ServerPurchasePostRequest.md) |  | 

### Return type

[**ServerPurchasePost200Response**](ServerPurchasePost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerServerIdGet

> ServerServerIdGet200Response ServerServerIdGet(ctx, serverId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerServerIdGet(context.Background(), serverId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerServerIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerServerIdGet`: ServerServerIdGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerServerIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerServerIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServerServerIdGet200Response**](ServerServerIdGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerServerIdProlongPost

> ServerServerIdProlongPost200Response ServerServerIdProlongPost(ctx, serverId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerServerIdProlongPost(context.Background(), serverId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerServerIdProlongPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerServerIdProlongPost`: ServerServerIdProlongPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerServerIdProlongPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerServerIdProlongPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServerServerIdProlongPost200Response**](ServerServerIdProlongPost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerServerIdReinstallOsIdPost

> ServerServerIdReinstallOsIdPost200Response ServerServerIdReinstallOsIdPost(ctx, serverId, osId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverId := int32(56) // int32 | 
	osId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerServerIdReinstallOsIdPost(context.Background(), serverId, osId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerServerIdReinstallOsIdPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerServerIdReinstallOsIdPost`: ServerServerIdReinstallOsIdPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerServerIdReinstallOsIdPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverId** | **int32** |  | 
**osId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerServerIdReinstallOsIdPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**ServerServerIdReinstallOsIdPost200Response**](ServerServerIdReinstallOsIdPost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerServerIdRestartPost

> ServerServerIdRestartPost200Response ServerServerIdRestartPost(ctx, serverId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerServerIdRestartPost(context.Background(), serverId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerServerIdRestartPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerServerIdRestartPost`: ServerServerIdRestartPost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerServerIdRestartPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerServerIdRestartPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServerServerIdRestartPost200Response**](ServerServerIdRestartPost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerServerIdStartPost

> ServerPurchasePost200Response ServerServerIdStartPost(ctx, serverId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerServerIdStartPost(context.Background(), serverId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerServerIdStartPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerServerIdStartPost`: ServerPurchasePost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerServerIdStartPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerServerIdStartPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServerPurchasePost200Response**](ServerPurchasePost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ServerServerIdStopPost

> ServerPurchasePost200Response ServerServerIdStopPost(ctx, serverId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	serverId := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.ServerServerIdStopPost(context.Background(), serverId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.ServerServerIdStopPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ServerServerIdStopPost`: ServerPurchasePost200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.ServerServerIdStopPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**serverId** | **int32** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiServerServerIdStopPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ServerPurchasePost200Response**](ServerPurchasePost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserGet

> UserGet200Response UserGet(ctx).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UserGet(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UserGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UserGet`: UserGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UserGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiUserGetRequest struct via the builder pattern


### Return type

[**UserGet200Response**](UserGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## UserServersGet

> UserServersGet200Response UserServersGet(ctx).Offset(offset).Count(count).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID/onehost"
)

func main() {
	offset := int32(56) // int32 | 
	count := int32(56) // int32 | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DefaultAPI.UserServersGet(context.Background()).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UserServersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UserServersGet`: UserServersGet200Response
	fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UserServersGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUserServersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** |  | 
 **count** | **int32** |  | 

### Return type

[**UserServersGet200Response**](UserServersGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

