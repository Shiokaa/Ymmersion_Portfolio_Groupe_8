package main

import (
	"fmt"
	"math/rand"
)

func main() {

	var mdp int

	fmt.Println("Entrez la longueur du mdp entre 8 et 16 caractères : ")
	fmt.Scanf("%d", &mdp)

	for mdp < 8 || mdp > 16 {
		fmt.Println("Entrez la longueur du mdp entre 8 et 16 caractères : ")
		fmt.Scanf("%d", &mdp)
	}

	var mdpGenere string

	for i := 0; i < mdp; i++ {
		mdpGenere += string(rand.Intn(94) + 33)
	}

	fmt.Println("Votre mdp est : ", mdpGenere)
}
