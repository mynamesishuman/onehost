package main

import (
	"context"
	"embed"
	"flag"
	"io/fs"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/go-chi/render"
	onehost "github.com/mynamesishuman/onehost/pkg/onehost"
)

//go:embed static/*
var staticContent embed.FS

func main() {
	var (
		token = flag.String("token", "", "Token")
	)

	flag.Parse()

	oneHostApiConfiguration := onehost.NewConfiguration()
	oneHostApiConfiguration.AddDefaultHeader("Authorization", "Bearer "+*token)
	oneHostApiClient := onehost.NewAPIClient(oneHostApiConfiguration)

	r := chi.NewRouter()
	r.Use(middleware.RequestID)
	r.Use(middleware.RealIP)
	r.Use(middleware.Logger)
	r.Use(middleware.Recoverer)
	r.Use(render.SetContentType(render.ContentTypeJSON))

	root, err := fs.Sub(staticContent, "static")
	if err != nil {
		log.Fatal(err)
	}

	r.Handle("/", http.FileServer(http.FS(root)))

	r.Get("/user", func(w http.ResponseWriter, r *http.Request) {
		data, response, err := oneHostApiClient.DefaultAPI.UserGet(context.Background()).Execute()

		if err != nil {
			switch response.StatusCode {
			case http.StatusUnauthorized:
				http.Error(w, err.Error(), http.StatusUnauthorized)
			default:
				http.Error(w, err.Error(), http.StatusInternalServerError)
			}
			return
		}

		render.Status(r, http.StatusOK)
		render.JSON(w, r, data)
	})
	http.ListenAndServe(":3000", r)
}
