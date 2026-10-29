// ════════════════════════════════════════════
//   ADAQUIZ — script.js
//   Certaines fonctions sont déjà écrites.
//   Les fonctions marquées TODO sont à compléter.
// ════════════════════════════════════════════


// ── Sélection des éléments DOM ──────────────
// Ces lignes récupèrent les éléments HTML par leur id.
// Tu n'as pas besoin de les modifier.

const btnCommencer = document.getElementById('btn-commencer')
const listeReponses = document.getElementById('liste-reponses')
const ecranAccueil = document.getElementById('ecran-accueil')
const ecranQuestion = document.getElementById('ecran-question')
const ecranResultats = document.getElementById('ecran-resultats')
const texteQuestion = document.getElementById('texte-question')
const btnSuivant = document.getElementById('btn-suivant')
const btnRejouer = document.getElementById('btn-rejouer')
const scoreFinal = document.getElementById('score-final')
const messageFin = document.getElementById('message-fin')
const numeroQuestion = document.getElementById('numero-question')
const imageQuestiojn = document.getElementById('image-question')
const imageResultat = document.getElementById('image-resultat')
//... Crée autant de constantes que d'éléments HTML à récupérer


// ── État du quiz ─────────────────────────────
// Ces variables stockent les données en cours de partie.
// Tu n'as pas besoin de les modifier.

let questions = [
  {
    id: 1,
    question: "Que signifie HTML ?",
    image: "images/question-1.svg",
    reponses: ["HyperText Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
    bonne_reponse: 0
  },
  {
    id: 2,
    question: "Quelle balise crée le titre le plus important d'une page ?",
    image: "images/question-2.svg",
    reponses: ["<title>", "<h6>", "<h1>", "<header>"],
    bonne_reponse: 2
  },
  {
    id: 3,
    question: "Quelle balise sert à créer un lien ?",
    image: "images/question-3.svg",
    reponses: ["<link>", "<a>", "<href>", "<url>"],
    bonne_reponse: 1
  },
  {
    id: 4,
    question: "Quel attribut indique le chemin d'une image ?",
    image: "images/question-4.svg",
    reponses: ["href", "alt", "link", "src"],
    bonne_reponse: 3
  },
  {
    id: 5,
    question: "À quoi sert l'attribut alt d'une image ?",
    image: "images/question-5.svg",
    reponses: ["Changer sa taille", "Décrire l'image pour l'accessibilité", "Ajouter une bordure", "Aligner l'image"],
    bonne_reponse: 1
  },
  {
    id: 6,
    question: "Quelle balise crée une liste non ordonnée ?",
    image: "images/question-6.svg",
    reponses: ["<ul>", "<ol>", "<li>", "<list>"],
    bonne_reponse: 0
  },
  {
    id: 7,
    question: "Où place-t-on la balise <title> ?",
    image: "images/question-7.svg",
    reponses: ["Dans le <body>", "Dans le <footer>", "Dans le <head>", "Dans le <main>"],
    bonne_reponse: 2
  },
   {
    id: 8,
    question: "Quelle balise insère un saut de ligne ?",
    image: "images/question-8.svg",
    reponses: ["<lb>", "<break>", "<newline>", "<br>"],
    bonne_reponse: 3
  },
   {
    id: 9,
    question: "Quelle balise relie une feuille de style CSS à la page ?",
    image: "images/question-9.svg",
    reponses: ["<style>", "<link>", "<css>", "<script>"],
    bonne_reponse: 1
  },
   {
    id: 10,
    question: "Laquelle de ces balises est une balise sémantique de structure ?",
    image: "images/question-10.svg",
    reponses: ["<div>", "<span>", "<b>", "<article>"],
    bonne_reponse: 3
  }
]
  // tableau des questions chargées depuis le JSON
let indexCourant = 0    // numéro de la question en cours (commence à 0)
let score = 0    // nombre de bonnes réponses





// ── Navigation entre les écrans ──────────────
// Cette fonction est déjà écrite.
// Elle cache tous les écrans puis affiche celui qu'on lui donne.

const afficher = (ecran) => {
  ecranAccueil.classList.add('cache')
  ecranQuestion.classList.add('cache')
  ecranResultats.classList.add('cache')
  ecran.classList.remove('cache')
}


// ════════════════════════════════════════════
//   TODO — Fonctions à compléter
// ════════════════════════════════════════════


// ── TODO : afficherQuestion ──────────────────
// Cette fonction doit afficher la question en cours.
// Elle est appelée au début de chaque nouvelle question.
//
// Ce qu'elle doit faire :
//   1. Récupérer la question courante : questions[indexCourant]
//   2. Mettre à jour la barre de progression
//   3. Mettre à jour le compteur ("Question X / Y")
//   4. Afficher le texte de la question dans #texte-question
//   5. Cacher le bouton "Question suivante"
//   6. Vider #liste-reponses, puis créer un bouton pour chaque réponse
//      Chaque bouton doit appeler verifierReponse() au clic

const afficherQuestion = () => {
  // Écris ton code ici
  const questionCourante = questions[indexCourant]
  numeroQuestion.textContent = "Question " + (indexCourant + 1) + " / " + questions.length
  texteQuestion.textContent = questionCourante.question
  imageQuestiojn.src = questionCourante.image
  imageQuestiojn.style.animation = 'none'
  imageQuestiojn.offsetHeight
  imageQuestiojn.style.animation= ''
  btnSuivant.classList.add('cache')
  listeReponses.innerHTML = ''
  questionCourante.reponses.forEach((reponse,index) => {
    const bouton = document.createElement('button')
    bouton.textContent = reponse
    bouton.addEventListener("click", ()=> {
      verifierReponse(index)
    })
    listeReponses.appendChild(bouton)
    
  });

}


// ── TODO : verifierReponse ───────────────────
// Cette fonction est appelée quand une apprenante clique sur une réponse.
// Elle reçoit en paramètre l'index de la réponse choisie (0, 1, 2 ou 3).
//
// Ce qu'elle doit faire :
//   1. Récupérer la question courante
//   2. Désactiver tous les boutons de réponse
//   3. Colorier en vert la bonne réponse (ajouter la classe "correcte")
//   4. Si la réponse choisie est mauvaise, la colorier en rouge ("incorrecte")
//   5. Si la réponse est bonne, incrémenter le score
//   6. Afficher le bouton "Question suivante"

const verifierReponse = (indexChoisi) => {
  // Écris ton code ici
  const questionCourante = questions[indexCourant]
  const boutons = listeReponses.querySelectorAll('button')
  boutons.forEach((btn) => {
    btn.disabled = true

  })
  const bonneReponse = questionCourante.bonne_reponse
  boutons[bonneReponse].classList.add('correcte')
  if (indexChoisi !== bonneReponse) {
    boutons[indexChoisi].classList.add('incorrecte')
  } else {
    score++
  }
  btnSuivant.classList.remove('cache')
}



const lancerConfettis = () => {
  const couleurs = ['#ffd60a', '#3b2eff', '#ff6fae', '#ffffff']
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('span')
    confetti.classList.add('confetti')
    confetti.style.left = Math.random() * 100 + 'vw'
    confetti.style.backgroundColor = couleurs[Math.floor(Math.random() * couleurs.length)]
    confetti.style.animationDelay = Math.random() * 1.5 + 'S'
    document.body.appendChild(confetti)
    setTimeout(() => confetti.remove(), 5000)
  
  }
}
// ── TODO : afficherResultats ─────────────────
// Cette fonction est appelée quand toutes les questions ont été répondues.
//
// Ce qu'elle doit faire :
//   1. Afficher le score dans #score-final (ex. "4 / 7")
//   2. Afficher un message dans #message-fin selon le score
//   3. Appeler afficher(ecranResultats) pour passer à l'écran résultats

const afficherResultats = () => {
  // Écris ton code ici
  afficher(ecranResultats)
  scoreFinal.textContent = score + "/" + questions.length 
  if (score >= 5) {
    messageFin.textContent = "Bien joué ! tu connais bien le HTML"
    imageResultat.src = "images/score-haut.jpeg"
    imageResultat.alt = "Trophée et confettis pour célébrer"
    imageResultat.classList.add('victoire')
    ecranResultats.classList.remove('defaite')
    //lancerConfettis()
  } else {
    messageFin.textContent = "Courage , tu peux faire mieux !"
    imageResultat.src = "images/score-faible.svg"
    imageResultat.alt = "Illustration d'encouragement"
    imageResultat.classList.remove('victoire')
    ecranResultats.classList.add('defaite')
  }
}


// ── TODO : écouteurs d'événements ───────────
// Branche les boutons sur les bonnes fonctions.
//
// À faire :
//   - btn-commencer → afficher l'écran question + appeler afficherQuestion()
//   - btn-suivant   → passer à la question suivante ou aux résultats
//   - btn-rejouer   → remettre indexCourant et score à 0, revenir à l'accueil

// Écris ton code ici
btnCommencer.addEventListener('click', () => {
  afficher(ecranQuestion)
  afficherQuestion()
})

btnSuivant.addEventListener('click', () => {
  indexCourant++
  if (indexCourant < questions.length) {
    afficherQuestion()
  } else {
    afficherResultats()
  }
} )

btnRejouer.addEventListener('click',() => {
  indexCourant = 0
  score = 0
  afficher(ecranAccueil)
} )
