const villes = [
  {
    name: "Île-de-France",
    description:
      "Région autour de Paris, riche en patrimoine historique et culturel.",
    activité:
      "Visiter musées et monuments (Louvre, Tour Eiffel), balades en ville",
    img1Text: "Le Louvre",
    img2Text: "Tour eiffel",
    img3Text: "Arc de Triomphe",
    img1: "../public/photo-louvre.jpg",
    img2: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/41/5c/8d.jpg",
    img3: "https://cdn-imgix.headout.com/media/images/33ac22c30b1018ac1aa75c6a4c24075a-7504-Paris-ArcdeTriompheTicketswithRooftopAccess-09.jpg?auto=format&q=90&crop=faces&fit=crop",
  },
  {
    name: "Auvergne-Rhône-Alpes",
    description:
      "Paysages variés : montagnes (Alpes), volcans, grandes villes comme Lyon.",
    activité: "Ski, randonnées en montagne, gastronomie lyonnaise",
    img1Text: "Le Puy de Dôme et la Chaîne des Puys (Puy-de-Dôme, Auvergne)",
    img2Text: "Le lac d’Annecy et ses montagnes (Haute-Savoie)",
    img3Text: "Lyon, capitale de la gastronomie (Rhône)",
    img1: "https://www.auvergne-destination.com/wp-content/uploads/2019/06/thio-denis-pourcher-1600x900-4.jpg",
    img2: "https://www.annecy-ville.fr/wp-content/uploads/2021/04/montagne-annecy.jpg",
    img3: "https://aucoeurduchr.fr/wp-content/uploads/2024/03/Lyon%C2%A9DelphineCastel_MG_0637_SEO.webp",
  },
  {
    name: "Bourgogne-Franche-Comté",
    description: "Terroir renommé, vignobles et patrimoine médiéval.",
    activité: "Dégustation de vins, visites de châteaux et canaux",
    img1Text: "La Route des Grands Crus (Côte-d’Or, Bourgogne)",
    img2Text: "Le parc naturel régional du Haut-Jura (Franche-Comté)",
    img3Text: "Dijon, capitale des Ducs de Bourgogne (Côte-d’Or)",
    img1: "https://www.cri-dijon.com/wp-content/uploads/2024/08/beautiful-view-of-a-vineyard-in-the-green-hills-at-2023-11-27-05-28-25-utc.jpg",
    img2: "https://www.parc-haut-jura.fr/content/uploads/2023/04/paysage-et-amenagement-du-territoire_GODIN-PNRHJ_portrait-2_41-scaled.jpg",
    img3: "https://blog.mappy.com/wp-content/uploads/2023/04/0b98e-istock-1074291938-blog.png",
  },
  {
    name: "Bretagne",
    description:
      "Côtes découpées, traditions maritimes et fortes identités locales.",
    activité: "Balades côtières, fruits de mer, festivals celtiques",
    img1Text: "La Côte de Granit Rose (Côtes-d’Armor)",
    img2Text: "La Forêt de Brocéliande (Ille-et-Vilaine / Morbihan)",
    img3Text: "Saint-Malo et la Baie du Mont-Saint-Michel (Ille-et-Vilaine)",
    img1: "https://www.cotesdarmor.com/uploads/2020/10/Perros-guirec_2018-10_phare-de-ploumanach_alexandre-lamoureux.jpg",
    img2: "https://woody.cloudly.space/app/uploads/morbihan/2023/10/thumbs/Broceliande-paysageThibault-Poriel-31-10-2028-640x640.jpg",
    img3: "https://crtb.cloudly.space/app/uploads/crt-bretagne/2024/06/thumbs/crtb-ae04787_PORIEL-Thibault-1920x960.webp",
  },
  {
    name: "Centre-Val de Loire",
    description: "Région des châteaux de la Loire et paysages agricoles.",
    activité: "Visiter châteaux, balade à vélo le long de la Loire",
    img1Text: "Les Châteaux de la Loire",
    img2Text: "Le Parc Naturel Régional de la Brenne (Indre)",
    img3Text: "Saint-Malo et la Baie du Mont-Saint-Michel (Ille-et-Vilaine)",
    img1: "https://res.cloudinary.com/funbooker/images/w_1920,h_1080,c_scale/f_auto,q_auto/v1685345930/blog_wordpress/shutterstock_1407078329-1/shutterstock_1407078329-1.jpg?_i=AA",
    img2: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/6d/92/e7.jpg",
    img3: "https://a.storyblok.com/f/319768/1365x768/e01f57174b/vue-aerienne-parc-naturel-de-la-brenne.jpg",
  },
  {
    name: "Corse",
    description:
      "Île méditerranéenne avec montagnes intérieures et plages sublimes.",
    activité: "Randonnée (GR20), plages, découverte de la gastronomie corse",

    img1Text: "Les plages du sud : Bonifacio & Porto-Vecchio",
    img2Text: "Les montagnes du centre : Corte et le GR20",
    img3Text: "Le golfe de Porto et les Calanques de Piana (Ouest)",
    img1: "https://bonifacio.fr/app/uploads/bonifacio/2023/12/thumbs/plage-santa-giulia-vue-aerienne-porto-vecchio-sud-corse-1920x960.jpg",
    img2: "https://photos.altai-travel.com/1280x0/village-de-montagne-vizzavona-en-corse-o-lacaze-11345.jpg",
    img3: "https://lepasspartout.com/wp-content/uploads/2024/03/Calanques-de-Piana-par-la-mer.jpg",
  },
  {
    name: "Grand Est",
    description:
      "Région frontalière à l’histoire riche, vignobles d’Alsace et villes historiques.",
    activité:
      "Visiter marchés de Noël, déguster vins d'Alsace, découvrir Strasbourg",
      
    img1Text: "La Route des Vins d’Alsace (Bas-Rhin & Haut-Rhin)",
    img2Text: "Strasbourg et sa Grande Île (Bas-Rhin)",
    img3Text: "Le Parc naturel des Ballons des Vosges",
    img1: "https://pgwrk-websitemedia.s3.eu-west-1.amazonaws.com/production/pwk-web-jdefr2019-p/s3fs-public/2023-05/VeloVignes%20Domaine%20Riefle%CC%81-8.jpg?jqzzV0AqwNc_ycrL703JbAK4HyT_AUV.",
    img2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Strasbourg_%28Bas-Rhin%29_-_Grande_%C3%8Ele_%28centre_historique%29_-_Mus%C3%A9e_historique.jpg/330px-Strasbourg_%28Bas-Rhin%29_-_Grande_%C3%8Ele_%28centre_historique%29_-_Mus%C3%A9e_historique.jpg",
    img3: "https://static.secureholiday.net/static/CMS/photos/000/072/000072565.jpg?w=2600&format=webp",
  },
  {
    name: "Hauts-de-France",
    description:
      "Nord de la France : histoire industrielle, plages et villes comme Lille.",
    activité: "Patrimoine industriel, plages, gastronomie du Nord",
     img1Text: "Lille, la capitale des Flandres (Nord)",
    img2Text: "La Côte d’Opale (Pas-de-Calais)",
    img3Text: "Amiens et la Baie de Somme (Somme)",
    img1: "https://cdn.unitycms.io/images/8FOqtR4Kq3g9SvEsitBw-g.jpg",
    img2: "https://www.pas-de-calais-tourisme.com/wp-content/uploads/Cap-Blanc-Nez-4%C2%A9lescoflocs.jpg",
    img3: "https://images.squarespace-cdn.com/content/v1/5c2cf1f4d274cb12e1341495/3665bc4b-385a-482c-a034-38216e140354/Visiter-Somme-baie-de-vallee-de-amiens-hauts-de-france-week-end-baie-vue-drone-lever-soleil.jpg",
  },
  {
    name: "Normandie",
    description:
      "Côtes, bocage, plages du Débarquement et produits laitiers célèbres.",
    activité: "Découvrir plages du Débarquement, cidre, fromages",

    img1Text: "Le Mont-Saint-Michel (Manche)",
    img2Text: "Les falaises d’Étretat (Seine-Maritime)",
    img3Text: "Les plages du Débarquement (Calvados & Manche)",
    img1: "https://woody.cloudly.space/app/uploads/coutances/2021/03/thumbs/fab-lentz-qqfoyn5vrd4-unsplash-640x640.jpg",
    img2: "https://www.lehavre-etretat-tourisme.com/uploads/2020/04/etretat_0000-00_paddle-a-etretat_vincent-rustuel-2-768x512.jpg",
    img3: "https://www.que-faire-en-voyage.com/wp-content/uploads/2020/04/Visiter-les-plages-du-d%C3%A9barquement-Omaha-Beach-Credit-FlickR-mats-eye.jpg",
  },
  {
    name: "Nouvelle-Aquitaine",
    description:
      "Grande région aux vignobles (Bordeaux), côtes atlantiques et forêts.",
    activité: "Surf, dégustation de vins, visites de Bastides",

    img1Text: "Bordeaux et ses vignobles (Gironde)",
    img2Text: "Le Bassin d’Arcachon et la Dune du Pilat (Gironde)",
    img3Text: "Le Pays Basque et Biarritz (Pyrénées-Atlantiques)",
    img1: "https://asset-prod.france.fr/ok_Adobe_Stock_298234045_3069b8b03a.jpeg",
    img2: "https://media.sudouest.fr/21810676/600x600/archive-quay-a1-31752042.jpg",
    img3: "https://passion-aquitaine.ouest-france.fr/wp-content/uploads/2025/05/biarritz-pays-basque.jpg",
  },
  {
    name: "Occitanie",
    description:
      "Du littoral méditerranéen aux montagnes des Pyrénées, riche patrimoine occitan.",
    activité:
      "Plages, randonnées pyrénéennes, visites historiques (Carcassonne)",
    img1Text: "La Cité médiévale de Carcassonne (Aude)",
    img2Text: "Les gorges du Tarn (Lozère / Aveyron)",
    img3Text: "Toulouse, “la Ville Rose” (Haute-Garonne)",
    img1: "https://radio.vinci-autoroutes.com/medias/image/0ed5e6362837fea789a720a7bd320ec9.jpg",
    img2: "https://www.laviesauvage-rando.com/images/2025/01/21/pont-saint-chely-gorges-du-tarn.jpeg",
    img3: "https://images.ladepeche.fr/api/v1/images/view/66823faec342cc640e29c398/large/image.jpg?v=1",
  },
  {
    name: "Pays de la Loire",
    description:
      "Côte atlantique, vignobles et villes dynamiques comme Nantes.",
    activité: "Balades en bord d'eau, châteaux, festivals",

    img1Text: "Nantes et les Machines de l’Île (Loire-Atlantique)",
    img2Text: "Les Sables-d’Olonne et la Côte Atlantique (Vendée)",
    img3Text: "Angers et les châteaux de la Loire occidentale (Maine-et-Loire)",
    img1: "https://www.lesmachines-nantes.fr/wp-content/uploads/2018/01/home_01.jpg",
    img2: "https://www.villagevacanceschantonnay.fr/medias/2018/07/Baie-des-Sables-d-Olonne-Credit-AlexandreLamoureux-SPLDestinationSablesdOlonne-e1532698534627.jpg",
    img3: "https://www.anjou-tourisme.com/sites/public_files/styles/medium_970x970/public/upload/bandeau/Le_Chateau_d_Angers-%28c%29Sebastien_GAUDARD-5653-AnjouTourisme-1920px.JPG?itok=-LsWDUab",
  },
  {
    name: "Provence-Alpes-Côte d'Azur",
    description: "Littoral méditerranéen, montagnes et patrimoine provençal.",
    activité:
      "Plages, marchés provençaux, randonnées et stations de ski proches",

      img1Text: "Les Calanques de Marseille à Cassis (Bouches-du-Rhône)",
    img2Text: "Le Luberon et les villages de Provence (Vaucluse / Alpes-de-Haute-Provence)",
    img3Text: "La Côte d’Azur : Nice, Cannes et Saint-Tropez",
    img1: "https://cloetclem.fr/wp-content/uploads/2018/09/calanque-sormiou.jpg",
    img2: "https://www.leslovetrotteurs.com/wp-content/uploads/2018/05/gordes-une.jpg",
    img3: "https://www.trans-cote-azur.com/base/uploads/2024/03/ST-TROP-1920xauto_0_1_1.jpg",
  },
];
