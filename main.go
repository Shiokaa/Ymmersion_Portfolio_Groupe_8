package main

import (
	"fmt"
	"html/template"
	"net/http"
)

func main() {

	InitTemplates()

	fileServer := http.FileServer(http.Dir("./assets/"))
	http.Handle("/static/", http.StripPrefix("/static/", fileServer))

	http.HandleFunc("/home", func(w http.ResponseWriter, r *http.Request) {
		Temp.ExecuteTemplate(w, "index", nil)
	})

	http.HandleFunc("/challenge", func(w http.ResponseWriter, r *http.Request) {
		Temp.ExecuteTemplate(w, "challenge", nil)
	})

	http.HandleFunc("/dashbord", func(w http.ResponseWriter, r *http.Request) {
		Temp.ExecuteTemplate(w, "dashbord", nil)
	})

	fmt.Println(http.ListenAndServe(":8080", nil))

}

var Temp *template.Template

func InitTemplates() {
	parsedTemplate, err := template.ParseGlob("templates/*.html")

	if err != nil {
		fmt.Println("Error parsing templates", err)

	}

	Temp = parsedTemplate
}
