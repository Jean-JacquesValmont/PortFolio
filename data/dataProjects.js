export default [
    {
        title: "Pokedex",
        image: "/image/Pokedex_picture_project.png",
        alt: "Picture site web",
        summarise: "Conception d'un Pokédex interactif en utilisant l'API Pokebuild.",
        technology:[
            {techno: "React"},
            {techno: "TypeScript"},
            {techno: "NextJS"},
            {techno: "TailWind"},
            {techno: "Vercel"},
        ],
        vercel:"https://pokedex-five-omega-39.vercel.app/",
        github:"https://github.com/Jean-JacquesValmont/Pokedex",
        text:"Ce projet avait pour objectif d'apprendre à récupérer des données d'une API pour ensuite les utiliser en les affichant (avec la méthode map), mais aussi de les filtrer au moyen de méthodes JavaScript. Cela m'a permis d'appliquer TypeScript dans un projet et de me servir de Vercel pour mettre un site web en ligne.",
        challenge:[
            {challenge: "Mettre en place un filtre qui prend 2 types d'un pokémon au lieu de un"},
            {challenge: "Problème de chargement d'image entre la carte pokémon et la page pokémon"},
            {challenge:"Règle spécifique à Vercel pour mettre en ligne mon site que je ne connaissais pas"}
    ],
        resolution:[
            {resolution: "Prendre le premier type filtré et rajouter le nouveau ensuite avec une méthode slice."},
            {resolution: "Mise en place d'un setTimeout de chargement au moment du changement de page."},
            {resolution: "Résoudre un par un les problèmes relever de Vercel (Taille des images, double quote en simple quote etc...)"}
    ],
    },

    {
        title: "PortFolio",
        image: "/image/Portfolio_Jean-Jacques_Valmont.png",
        alt: "Picture site web",
        summarise: "Réalisation de mon portfolio responsive et accessible.",
        technology:[
            {techno: "React"},
            {techno: "TypeScript"},
            {techno: "NextJS"},
            {techno: "TailWind"},
            {techno: "Shadcn/ui"},
            {techno: "Vercel"},
        ],
        vercel:"https://port-folio-three-umber.vercel.app/",
        github:"https://github.com/Jean-JacquesValmont/PortFolio",
        text:"Le but était de créer un site web professionnel avec une interface utilisateur/ expérience utilisateur (UI/UX) simple, responsive et accessible en utilisant la librairie shadcn/ui et Tailwind CSS.",
        challenge:[
            {challenge: "Réaliser une interface simple, responsive et accessible."},
            {challenge: "Création d'une modal pour la vue PC et d'un drawer pour la vue mobile."},
            {challenge:""}
    ],
        resolution:[
            {resolution: "Utilisation de Tailwind et de shadcn/ui pour l'interface."},
            {resolution: "Apprentissage de la création d'une modal et utilisation de shadcn/ui pour le drawer."},
            {resolution: ""}
    ],
    },

    // {
    //     title: "Project 3",
    //     image: "/image/Vercel_logo.png",
    //     alt: "Picture site web",
    //     summarise: "Description text",
    //     technology:[
    //         {techno: "Techno 1"},
    //         {techno: "Techno 2"},
    //     ],
    //     link:"http://localhost:3000/"
    // }
]