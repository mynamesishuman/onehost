package main

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	onehost "github.com/mynamesishuman/onehost/openapi/client/onehost"
)

func main() {
	/*var (
		baseUrl = flag.String("baseUrl", "", "Base URL")
		token   = flag.String("token", "", "Token")
	)

	flag.Parse()*/

	oneHostApiConfiguration := onehost.NewConfiguration()
	oneHostApiClient := onehost.NewAPIClient(oneHostApiConfiguration)

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
		resp, r, err := oneHostApiClient.DefaultAPI.UserGet(context.Background()).Execute()
		if err != nil {
			fmt.Fprintf(os.Stderr, "Error when calling `DefaultAPI.UserGet``: %v\n", err)
			fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
		}
		// response from `UserGet`: UserGet200Response
		fmt.Fprintf(os.Stdout, "Response from `DefaultAPI.UserGet`: %v\n", resp)
	})
	http.ListenAndServe(":3000", r)
}
