# AdaQuiz

Un petit quiz en ligne pour tester ses connaissances en **HTML**, fait en HTML, CSS et JavaScript.

## Comment ça marche

Le quiz a 3 écrans :

1. **Accueil** : on clique sur « Commencer ».
2. **Questions** : 10 questions, chacune avec une image et 4 réponses.
   - On clique sur une réponse : la bonne s'affiche en vert, la mauvaise en rouge.
   - On clique sur « Question suivante » pour continuer.
3. **Résultats** : le score s'affiche (ex. `7/10`).
   - 5 bonnes réponses ou plus : message de félicitations.
   - Moins de 5 : message d'encouragement.
   - Le bouton « Rejouer » ramène à l'accueil.

## Fichiers

| Fichier          | Rôle                                                   |
| ---------------- | ------------------------------------------------------ |
| `index.html`     | La structure de la page avec les 3 écrans              |
| `style.css`      | Le style du site (la classe `.cache` cache un écran)   |
| `script.js`      | La logique du quiz : questions, réponses, score        |
| `questions.json` | La liste des 10 questions                              |
| `images/`        | Les images de l'accueil, des questions et des résultats |

## Les fonctions principales (`script.js`)

- `afficher(ecran)` : affiche un écran et cache les autres.
- `afficherQuestion()` : affiche la question en cours et crée les boutons de réponse.
- `verifierReponse(index)` : vérifie la réponse, colore les boutons et met à jour le score.
- `afficherResultats()` : affiche le score final et le message.

