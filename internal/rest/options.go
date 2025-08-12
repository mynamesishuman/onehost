package rest

type Options struct {
	BaseUrl string
	Timeout int
	Headers map[string]string
}

func NewOptions(baseUrl string, headers map[string]string, timeout int) *Options {
	return &Options{
		BaseUrl: baseUrl,
		Timeout: timeout,
		Headers: headers,
	}
}

func (o *Options) GetTimeout() int {
	return o.Timeout
}

func (o *Options) GetBaseUrl() string {
	return o.BaseUrl
}

func (o *Options) GetHeaders() map[string]string {
	return o.Headers
}
