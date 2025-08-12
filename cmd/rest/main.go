package main

import (
	"flag"
	"fmt"
	"io"
	"net/http"
	"srv/internal/rest"
	onehost "github.com/GIT_USER_ID/GIT_REPO_ID"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	var (
		baseUrl = flag.String("baseUrl", "", "Base URL")
		token   = flag.String("token", "", "Token")
	)

	flag.Parse()

	/*headers := make(map[string]string)
	headers["Content-Type"] = "application/json"
	headers["Authorization"] = "Bearer " + *token

	options := rest.NewOptions(
		*baseUrl,
		headers,
		30,
	)
	httpClient := rest.NewClient(options)
	res, err := httpClient.Get("/server/locations")

	if err != nil {
		panic(err)
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		panic(err)
	}

	fmt.Println(string(body))*/

	oneHostApiConfiguration := onehost.NewConfiguration()
	oneHostApiConfiguration.
	oneHostApiClient := onehost.NewAPIClient()

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("welcome"))
	})
	http.ListenAndServe(":3000", r)
}
