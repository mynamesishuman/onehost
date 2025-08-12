# ServerLocationConfigurationsGet200ResponseConfigurationsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **int32** |  | [optional] 
**Type** | Pointer to **string** |  | [optional] 
**Location** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**WindowsDisabled** | Pointer to **bool** |  | [optional] 
**Specs** | Pointer to [**ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs**](ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs.md) |  | [optional] 
**ShortSpecs** | Pointer to **string** |  | [optional] 
**Price** | Pointer to **float32** |  | [optional] 

## Methods

### NewServerLocationConfigurationsGet200ResponseConfigurationsInner

`func NewServerLocationConfigurationsGet200ResponseConfigurationsInner() *ServerLocationConfigurationsGet200ResponseConfigurationsInner`

NewServerLocationConfigurationsGet200ResponseConfigurationsInner instantiates a new ServerLocationConfigurationsGet200ResponseConfigurationsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewServerLocationConfigurationsGet200ResponseConfigurationsInnerWithDefaults

`func NewServerLocationConfigurationsGet200ResponseConfigurationsInnerWithDefaults() *ServerLocationConfigurationsGet200ResponseConfigurationsInner`

NewServerLocationConfigurationsGet200ResponseConfigurationsInnerWithDefaults instantiates a new ServerLocationConfigurationsGet200ResponseConfigurationsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetId() int32`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetIdOk() (*int32, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetId(v int32)`

SetId sets Id field to given value.

### HasId

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetLocation

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetLocation() string`

GetLocation returns the Location field if non-nil, zero value otherwise.

### GetLocationOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetLocationOk() (*string, bool)`

GetLocationOk returns a tuple with the Location field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocation

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetLocation(v string)`

SetLocation sets Location field to given value.

### HasLocation

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasLocation() bool`

HasLocation returns a boolean if a field has been set.

### GetName

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetWindowsDisabled

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetWindowsDisabled() bool`

GetWindowsDisabled returns the WindowsDisabled field if non-nil, zero value otherwise.

### GetWindowsDisabledOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetWindowsDisabledOk() (*bool, bool)`

GetWindowsDisabledOk returns a tuple with the WindowsDisabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWindowsDisabled

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetWindowsDisabled(v bool)`

SetWindowsDisabled sets WindowsDisabled field to given value.

### HasWindowsDisabled

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasWindowsDisabled() bool`

HasWindowsDisabled returns a boolean if a field has been set.

### GetSpecs

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetSpecs() ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs`

GetSpecs returns the Specs field if non-nil, zero value otherwise.

### GetSpecsOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetSpecsOk() (*ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs, bool)`

GetSpecsOk returns a tuple with the Specs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpecs

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetSpecs(v ServerLocationConfigurationsGet200ResponseConfigurationsInnerSpecs)`

SetSpecs sets Specs field to given value.

### HasSpecs

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasSpecs() bool`

HasSpecs returns a boolean if a field has been set.

### GetShortSpecs

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetShortSpecs() string`

GetShortSpecs returns the ShortSpecs field if non-nil, zero value otherwise.

### GetShortSpecsOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetShortSpecsOk() (*string, bool)`

GetShortSpecsOk returns a tuple with the ShortSpecs field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortSpecs

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetShortSpecs(v string)`

SetShortSpecs sets ShortSpecs field to given value.

### HasShortSpecs

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasShortSpecs() bool`

HasShortSpecs returns a boolean if a field has been set.

### GetPrice

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetPrice() float32`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) GetPriceOk() (*float32, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) SetPrice(v float32)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ServerLocationConfigurationsGet200ResponseConfigurationsInner) HasPrice() bool`

HasPrice returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


