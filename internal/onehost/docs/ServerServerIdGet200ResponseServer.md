# ServerServerIdGet200ResponseServer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Ip** | Pointer to **string** |  | [optional] 
**Login** | Pointer to **string** |  | [optional] 
**Password** | Pointer to **string** |  | [optional] 
**Location** | Pointer to [**ServerServerIdGet200ResponseServerLocation**](ServerServerIdGet200ResponseServerLocation.md) |  | [optional] 
**Conf** | Pointer to [**ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs**](ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs.md) |  | [optional] 
**Price** | Pointer to **float32** |  | [optional] 
**Owner** | Pointer to **string** |  | [optional] 
**Os** | Pointer to **string** |  | [optional] 
**AutoRenew** | Pointer to **bool** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Start** | Pointer to **string** |  | [optional] 
**End** | Pointer to **string** |  | [optional] 

## Methods

### NewServerServerIdGet200ResponseServer

`func NewServerServerIdGet200ResponseServer() *ServerServerIdGet200ResponseServer`

NewServerServerIdGet200ResponseServer instantiates a new ServerServerIdGet200ResponseServer object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServerServerIdGet200ResponseServerWithDefaults

`func NewServerServerIdGet200ResponseServerWithDefaults() *ServerServerIdGet200ResponseServer`

NewServerServerIdGet200ResponseServerWithDefaults instantiates a new ServerServerIdGet200ResponseServer object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServerServerIdGet200ResponseServer) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServerServerIdGet200ResponseServer) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServerServerIdGet200ResponseServer) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *ServerServerIdGet200ResponseServer) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ServerServerIdGet200ResponseServer) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ServerServerIdGet200ResponseServer) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ServerServerIdGet200ResponseServer) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ServerServerIdGet200ResponseServer) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIp

`func (o *ServerServerIdGet200ResponseServer) GetIp() string`

GetIp returns the Ip field if non-nil, zero value otherwise.

### GetIpOk

`func (o *ServerServerIdGet200ResponseServer) GetIpOk() (*string, bool)`

GetIpOk returns a tuple with the Ip field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIp

`func (o *ServerServerIdGet200ResponseServer) SetIp(v string)`

SetIp sets Ip field to given value.

### HasIp

`func (o *ServerServerIdGet200ResponseServer) HasIp() bool`

HasIp returns a boolean if a field has been set.

### GetLogin

`func (o *ServerServerIdGet200ResponseServer) GetLogin() string`

GetLogin returns the Login field if non-nil, zero value otherwise.

### GetLoginOk

`func (o *ServerServerIdGet200ResponseServer) GetLoginOk() (*string, bool)`

GetLoginOk returns a tuple with the Login field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogin

`func (o *ServerServerIdGet200ResponseServer) SetLogin(v string)`

SetLogin sets Login field to given value.

### HasLogin

`func (o *ServerServerIdGet200ResponseServer) HasLogin() bool`

HasLogin returns a boolean if a field has been set.

### GetPassword

`func (o *ServerServerIdGet200ResponseServer) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *ServerServerIdGet200ResponseServer) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *ServerServerIdGet200ResponseServer) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *ServerServerIdGet200ResponseServer) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### GetLocation

`func (o *ServerServerIdGet200ResponseServer) GetLocation() ServerServerIdGet200ResponseServerLocation`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ServerServerIdGet200ResponseServer) GetLocationOk() (*ServerServerIdGet200ResponseServerLocation, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ServerServerIdGet200ResponseServer) SetLocation(v ServerServerIdGet200ResponseServerLocation)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ServerServerIdGet200ResponseServer) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetConf

`func (o *ServerServerIdGet200ResponseServer) GetConf() ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs`

GetConf returns the Conf field if non-nil, zero value otherwise.

### GetConfOk

`func (o *ServerServerIdGet200ResponseServer) GetConfOk() (*ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs, bool)`

GetConfOk returns a tuple with the Conf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConf

`func (o *ServerServerIdGet200ResponseServer) SetConf(v ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs)`

SetConf sets Conf field to given value.

### HasConf

`func (o *ServerServerIdGet200ResponseServer) HasConf() bool`

HasConf returns a boolean if a field has been set.

### GetPrice

`func (o *ServerServerIdGet200ResponseServer) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ServerServerIdGet200ResponseServer) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ServerServerIdGet200ResponseServer) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ServerServerIdGet200ResponseServer) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetOwner

`func (o *ServerServerIdGet200ResponseServer) GetOwner() string`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ServerServerIdGet200ResponseServer) GetOwnerOk() (*string, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ServerServerIdGet200ResponseServer) SetOwner(v string)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *ServerServerIdGet200ResponseServer) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetOs

`func (o *ServerServerIdGet200ResponseServer) GetOs() string`

GetOs returns the Os field if non-nil, zero value otherwise.

### GetOsOk

`func (o *ServerServerIdGet200ResponseServer) GetOsOk() (*string, bool)`

GetOsOk returns a tuple with the Os field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOs

`func (o *ServerServerIdGet200ResponseServer) SetOs(v string)`

SetOs sets Os field to given value.

### HasOs

`func (o *ServerServerIdGet200ResponseServer) HasOs() bool`

HasOs returns a boolean if a field has been set.

### GetAutoRenew

`func (o *ServerServerIdGet200ResponseServer) GetAutoRenew() bool`

GetAutoRenew returns the AutoRenew field if non-nil, zero value otherwise.

### GetAutoRenewOk

`func (o *ServerServerIdGet200ResponseServer) GetAutoRenewOk() (*bool, bool)`

GetAutoRenewOk returns a tuple with the AutoRenew field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoRenew

`func (o *ServerServerIdGet200ResponseServer) SetAutoRenew(v bool)`

SetAutoRenew sets AutoRenew field to given value.

### HasAutoRenew

`func (o *ServerServerIdGet200ResponseServer) HasAutoRenew() bool`

HasAutoRenew returns a boolean if a field has been set.

### GetStatus

`func (o *ServerServerIdGet200ResponseServer) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ServerServerIdGet200ResponseServer) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ServerServerIdGet200ResponseServer) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *ServerServerIdGet200ResponseServer) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStart

`func (o *ServerServerIdGet200ResponseServer) GetStart() string`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *ServerServerIdGet200ResponseServer) GetStartOk() (*string, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *ServerServerIdGet200ResponseServer) SetStart(v string)`

SetStart sets Start field to given value.

### HasStart

`func (o *ServerServerIdGet200ResponseServer) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetEnd

`func (o *ServerServerIdGet200ResponseServer) GetEnd() string`

GetEnd returns the End field if non-nil, zero value otherwise.

### GetEndOk

`func (o *ServerServerIdGet200ResponseServer) GetEndOk() (*string, bool)`

GetEndOk returns a tuple with the End field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnd

`func (o *ServerServerIdGet200ResponseServer) SetEnd(v string)`

SetEnd sets End field to given value.

### HasEnd

`func (o *ServerServerIdGet200ResponseServer) HasEnd() bool`

HasEnd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


