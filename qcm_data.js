// Fichier : qcm_data.js
// Contient les données des 24 jours : Question, Options, Réponse, Image

const qcmData = [
    {
        day: 1,
        title: "Le Mystère de la déferlante",
        question: "La collection BELHARRA est inspirée par une vague mythique du Pays Basque. Quelle caractéristique met en valeur cette création murale ?",
        image: "Creation-murale-Belharra-emaux-dorfeve-sur-cuivre_3-Anne-de-La-Forge-copie.jpg",
        options: [
            { text: "A. Le calme et l'immobilité de l'océan", value: "A" },
            { text: "B. Les fonds marins profonds et silencieux", value: "B" },
            { text: "C. L'ondulation de la vague", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 2,
        title: "La Magie du saupoudrage",
        question: "Comment dépose-t-on les fines couches d'émail d'orfèvre dans une technique à sec ?",
        image: "jour 2_la magie du saupoudrage.jpg",
        options: [
            { text: "A. Par immersion dans un bain", value: "A" },
            { text: "B. À la main, à l'aide d'un tamis", value: "B" },
             { text: "C. Avec un pistolet à air comprimé", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 3,
        title: "Un Partenariat Textile",
        question: "Avec lequel de ces artisans , Anne de la Forge, a-t-elle travaillé sur ce projet ?",
        image: "564629110_18556304542016266_5969967451891582940_nlow.webp",
        options: [
            { text: "A. Un Céramiste", value: "A" },
            { text: "B. Un Photographe", value: "B" },
            { text: "C. Un Passementier", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 4,
        title: "Lumière émaillée",
        question: "Parmi mes luminaires, lequel a-t-il été co-créé en dernier ?",
        image: "jour 4 -appliques murales.jpg",
        options: [
            { text: "A. Des appliques murales", value: "A" },
            { text: "B. Des lampadaires sur pied", value: "B" },
            { text: "C. Des lustres en cristal", value: "C" }
        ],
        correctAnswer: "A"
    },
    {
        day: 5,
        title: "La naissance de la matière-lumière",
        question: "Qu'est ce que la vitrification ?",
        image: "SOSSUVLEI-Anne-de-La-Forge.jpg",
        options: [
            { text: "A. Appliquer une couche de vernis brillant sur le cuivre", value: "A" },
            { text: "B. Fusionner l’émail en verre à haute température", value: "B" },
            { text: "C. Faire sécher l’émail à l’air libre", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 6,
        title: "Jouer avec les couleurs",
        question: "Quel est l'un des défis important dans le processus de vitrification ?",
        image: "emaux-sur-cuivre-collection-TERRES-MESSAGERES-@ANNE-DE-LA-FORGE-1detail.jpg",
        options: [
            { text: "A. Comprendre la personnalité de ses émaux", value: "A" },
            { text: "B. Ajouter plus d'émail pour éviter les défauts", value: "B" },
            { text: "C. Ajouter de l'eau", value: "C" }
        ],
        correctAnswer: "A"
    },
    {
        day: 7,
        title: "Au Cœur du Cadeau",
        question: "Quelle est l'une des valeurs d'un cadeau réalisé par un Artisan d'Art ?",
        image: "jour  7 - valeur cadeau.JPG",
        options: [
            { text: "A. Son prix élevé", value: "A" },
            { text: "B. Le packaging luxueux", value: "B" },
            { text: "C. L’attention unique apportée à la création", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 8,
        title: "La matière sous l’émail",
        question: "Sur quel métal sont émaillées les créations d'Anne de la Forge ?",
        image: "jour 8 -metal.JPG",
        options: [
            { text: "A. L'or", value: "A" },
            { text: "B. Le cuivre", value: "B" },
            { text: "C. Le laiton", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 9,
        title: "Se Rassembler",
        question: "Anne de La Forge est membre des Ateliers d'Art de France. Quelle est leur mission principale ?",
        image: "ateliers-dart-de-france-page-network.jpg",
        options: [
            { text: "A. Organiser des compétitions sportives", value: "A" },
            { text: "B. Vendre des produits industriels en série", value: "B" },
            { text: "C. Valoriser et soutenir les métiers d'art", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 10,
        title: "Dialoguer avec d'autres matières",
        question: "Le concept de Duos  permet de réunir des savoir-faire. Quel métier pratique l'autre artisan d'art de ce guéridon?",
        image: "gueridon.jpeg",
        options: [
            { text: "A. La Bijouterie", value: "A" },
            { text: "B. Le Design Culinaire", value: "B" },
            { text: "C. L'Ébénisterie d'art", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 11,
        title: "Voyage au cœur d’Archipel",
        question: "Combien d’îles composent l’œuvre Archipel dans sa version complète 2025?",
        image: "jour 11 -Archipel.jpg",
        options: [
            { text: "A. 6  îles", value: "A" },
            { text: "B. 14  îles", value: "B" },
            { text: "C. 21  îles", value: "C" }
        ],
        correctAnswer: "A"
    },
    {
        day: 12,
        title: "L’instant où tout bascule",
        question: "Combien de temps reste une pièce dans le four ?",
        image: "jour 12- Marion Saupin 2025-92.JPG",
        options: [
            { text: "A. Quelques minutes seulement", value: "A" },
            { text: "B. Une heure entière", value: "B" },
            { text: "C. Une demi-journée", value: "C" }
        ],
        correctAnswer: "A"
    },
    {
        day: 13,
        title: "Ecorces cristallines",
        question: "Qu’est-ce qui caractérise les totems « bouleaux »  ?",
        image: "Totems-bouleaux-Anne-de-La-Forge-.jpg",
        options: [
            { text: "A. Ce sont des poteaux techniques destinés à suspendre des luminaires", value: "A" },
            { text: "B. Ils sont réalisés à l'aiguille et au pinceau", value: "B" },
            { text: "C. Ils représentent des colonnes antiques", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 14,
        title: "L’envers qui protège l’endroit",
        question: "Pourquoi contre-émailler (émailler le dos d’une pièce)?",
        image: "jour 14 - Marion Saupin 2025-3.JPG",
        options: [
            { text: "A. Pour équilibrer les tensions entre les deux faces", value: "A" },
            { text: "B. Pour empêcher le cuivre de s’oxyder au contact de l’air", value: "B" },
            { text: "C. Pour accélérer la cuisson en chauffant les deux côtés", value: "C" }
        ],
        correctAnswer: "A"
    },
    {
        day: 15,
        title: "Méandres Vénitiens",
        question: "Lors de la Biennale Homo Faber à Venise, qu'est devenue la pièce Méandres Vénitiens ?",
        image: "jour 15 - meandres venitiens@ Anne de La Forge.jpg",
        options: [
            { text: "A. Elle a été remise en trophée lors de la cérémonie de clôture", value: "A" },
            { text: "B. Elle a été prêtée au Teatro La Fenice", value: "B" },
            { text: "C. Elle a quitté l’exposition sur la gondole d'un collectionneur", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 16,
        title: "Le maître du feu",
        question: "À quelle température les pièces passent-elles au four?",
        image: "jour 16 - Marion Saupin 2025-84.JPG",
        options: [
            { text: "A. Entre 450 °C et 550 °C", value: "A" },
            { text: "B. Autour de 850 °C", value: "B" },
            { text: "C. À 1 200 °C", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 17,
        title: "Lumière & texture",
        question: "Collaboration : les empreinte de Galuchat par GK-designs sont...",
        image: "jour 17 - lumieres et textures @Anne de la Forge.jpg",
        options: [
            { text: "A. Des empreintes de peau de caïman", value: "A" },
            { text: "B. Des empreintes de  peau de morue", value: "B" },
            { text: "C. Des empreintes de peau de raie (ou de requin)", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 18,
        title: "Les infinies nuances",
        question: "Pourquoi deux pièces émaillées de la même couleur peuvent-elles être légèrement différentes ?",
        image: "jour 18.jpg",
        options: [
            { text: "A. Parce qu'il peut y avoir des variations de température et de quantité de matière", value: "A" },
            { text: "B. Parce que les pigments changent selon l'hydrométrie", value: "B" },
            { text: "C. Parce que le cuivre absorbe plus ou moins la couleur selon sa composition", value: "C" }
        ],
        correctAnswer: "A"
    },
    {
        day: 19,
        title: "Paravent Ornament",
        question: "Combien de pièces émaillées ont été réalisées pour le paravent de Marion Stora ?",
        image: "jour 19 paravent.jpg",
        options: [
            { text: "A. 48 pièces émaillées", value: "A" },
            { text: "B. 62 pièces émaillées", value: "B" },
            { text: "C. 76 pièces émaillées", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 20,
        title: "Le chant du four",
        question: "Comment sait-on qu’une pièce est prête à sortir du four ?",
        image: "jour 20 - le chant du four - Marion Saupin 2025-82.JPG",
        options: [
            { text: "A. Dès que la couleur devient rouge", value: "A" },
            { text: "B. L’émail est lisse et brillant", value: "B" },
            { text: "C. Quand le minuteur sonne après 2 minutes", value: "C" }
        ],
        correctAnswer: "B"
    },
    {
        day: 21,
        title: "L'Inspiration Naturelle",
        question: "Quelles sont les principales sources d'inspiration des motifs et des couleurs des émaux d'Anne de la Forge ?",
        image: "ecume.jpg",
        options: [
            { text: "A. Les villes modernes et l'architecture", value: "A" },
            { text: "B. Le cosmos et les galaxies lointaines", value: "B" },
            { text: "C. Les éléments naturels (eau, roche, ciel)", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 22,
        title: "Le Geste Unique",
        question: "Quelle est la signature qui rend chaque création absolument unique et sans équivalent ?",
        image: "573705153_18562573573016266_5788673195324190255_nthumb.webp",
        options: [
            { text: "A. Une machine automatique", value: "A" },
            { text: "B. L'impression 3D", value: "B" },
            { text: "C. Le travail manuel (chaque pièce est unique et irremplaçable)", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 23,
        title: "Parcours d’Artiste",
        question: "Avant de se consacrer à l’émaillage d’art, quelle profession exerçait Anne de la Forge ?",
        image: "Ecumes-pieces-aimantees-Anne-de-La-FORGE-copie.jpg",
        options: [
            { text: "A. Restauratrice de meubles anciens", value: "A" },
            { text: "B. Juriste", value: "B" },
            { text: "C. Architecte d'intérieure", value: "C" }
        ],
        correctAnswer: "C"
    },
    {
        day: 24,
        title: "Le Secret d'AD Émaux",
        question: "Quel est l'ingrédient secret qui garantit la valeur et l'authenticité de chaque pièce d'émail ?",
        image: "Totems-bouleaux-Anne-de-La-Forge-.jpg",
        options: [
            { text: "A. La production en série", value: "A" },
            { text: "B. L'utilisation de la robotisation", value: "B" },
            { text: "C. Le temps et l'âme que l'artiste investit dans chaque pièce", value: "C" }
        ],
        correctAnswer: "C"
    },
    // 🎁 ENTRÉE POUR LE JOUR 25 🎁
    {
        day: 25,
        title: "Jour du Grand Tirage",
        question: "Joyeux Noël !",
        image: "chad-madden-SUTfFCAHV_A-unsplash.jpg", 
        options: [], 
        correctAnswer: null 
    }
];
