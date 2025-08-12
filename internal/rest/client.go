package rest

import (
	"net/http"
	"time"
)

type Client struct {
	Options *Options
	Http    *http.Client
	Headers map[string]string
}

func NewClient(options *Options) *Client {
	return &Client{
		Options: options,
		Http: &http.Client{
			Timeout: time.Second * time.Duration(options.GetTimeout()),
		},
		Headers: options.GetHeaders(),
	}
}

func (c *Client) Get(path string) (*http.Response, error) {
	req, err := http.NewRequest("GET", c.Options.GetBaseUrl()+path, nil)
	if err != nil {
		return nil, err
	}

	//req.Header.Set("Authorization", "Bearer "+c.Options.Token)
	// Add default headers
	for key, value := range c.Headers {
		req.Header.Set(key, value)
	}

	return c.Http.Do(req)
}
