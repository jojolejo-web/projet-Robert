const villes = [
        {
          name: "Île-de-France",
          description:
            "Région autour de Paris, riche en patrimoine historique et culturel.",
          activité:
            "Visiter musées et monuments (Louvre, Tour Eiffel), balades en ville",
          img1Text:"Le Louvre",
           img2Text:"Tour eiffel",
            img3Text:"Arc de Triomphe",
          img1: "../public/photo-louvre.jpg",
          img2: "https://media.tacdn.com/media/attractions-splice-spp-674x446/12/41/5c/8d.jpg",
          img3: "https://cdn-imgix.headout.com/media/images/33ac22c30b1018ac1aa75c6a4c24075a-7504-Paris-ArcdeTriompheTicketswithRooftopAccess-09.jpg?auto=format&q=90&crop=faces&fit=crop",
        },
        {
          name: "Auvergne-Rhône-Alpes",
          description:
            "Paysages variés : montagnes (Alpes), volcans, grandes villes comme Lyon.",
          activité: "Ski, randonnées en montagne, gastronomie lyonnaise",
          img1Text:"Le Puy de Dôme et la Chaîne des Puys (Puy-de-Dôme, Auvergne)",
           img2Text:"Le lac d’Annecy et ses montagnes (Haute-Savoie)",
            img3Text:"Lyon, capitale de la gastronomie (Rhône)",
          img1: "https://www.auvergne-destination.com/wp-content/uploads/2019/06/thio-denis-pourcher-1600x900-4.jpg",
          img2: "https://www.annecy-ville.fr/wp-content/uploads/2021/04/montagne-annecy.jpg",
          img3: "https://aucoeurduchr.fr/wp-content/uploads/2024/03/Lyon%C2%A9DelphineCastel_MG_0637_SEO.webp",
        },
        {
          name: "Bourgogne-Franche-Comté",
          description: "Terroir renommé, vignobles et patrimoine médiéval.",
          activité: "Dégustation de vins, visites de châteaux et canaux",
          img1Text:"La Route des Grands Crus (Côte-d’Or, Bourgogne)",
           img2Text:"Le parc naturel régional du Haut-Jura (Franche-Comté)",
            img3Text:"Dijon, capitale des Ducs de Bourgogne (Côte-d’Or)",
          img1: "https://www.cri-dijon.com/wp-content/uploads/2024/08/beautiful-view-of-a-vineyard-in-the-green-hills-at-2023-11-27-05-28-25-utc.jpg",
          img2: "https://www.parc-haut-jura.fr/content/uploads/2023/04/paysage-et-amenagement-du-territoire_GODIN-PNRHJ_portrait-2_41-scaled.jpg",
          img3: "https://blog.mappy.com/wp-content/uploads/2023/04/0b98e-istock-1074291938-blog.png",
        },
        {
          name: "Bretagne",
          description:
            "Côtes découpées, traditions maritimes et fortes identités locales.",
          activité: "Balades côtières, fruits de mer, festivals celtiques",
          img1Text:"La Côte de Granit Rose (Côtes-d’Armor)",
           img2Text:"La Forêt de Brocéliande (Ille-et-Vilaine / Morbihan)",
            img3Text:"Saint-Malo et la Baie du Mont-Saint-Michel (Ille-et-Vilaine)",
          img1: "https://www.cotesdarmor.com/uploads/2020/10/Perros-guirec_2018-10_phare-de-ploumanach_alexandre-lamoureux.jpg",
          img2: "https://woody.cloudly.space/app/uploads/morbihan/2023/10/thumbs/Broceliande-paysageThibault-Poriel-31-10-2028-640x640.jpg",
          img3: "https://crtb.cloudly.space/app/uploads/crt-bretagne/2024/06/thumbs/crtb-ae04787_PORIEL-Thibault-1920x960.webp",
        },
        {
          name: "Centre-Val de Loire",
          description: "Région des châteaux de la Loire et paysages agricoles.",
          activité: "Visiter châteaux, balade à vélo le long de la Loire",
        },
        {
          name: "Corse",
          description:
            "Île méditerranéenne avec montagnes intérieures et plages sublimes.",
          activité:
            "Randonnée (GR20), plages, découverte de la gastronomie corse",
        },
        {
          name: "Grand Est",
          description:
            "Région frontalière à l’histoire riche, vignobles d’Alsace et villes historiques.",
          activité:
            "Visiter marchés de Noël, déguster vins d'Alsace, découvrir Strasbourg",
        },
        {
          name: "Hauts-de-France",
          description:
            "Nord de la France : histoire industrielle, plages et villes comme Lille.",
          activité: "Patrimoine industriel, plages, gastronomie du Nord",
        },
        {
          name: "Normandie",
          description:
            "Côtes, bocage, plages du Débarquement et produits laitiers célèbres.",
          activité: "Découvrir plages du Débarquement, cidre, fromages",
        },
        {
          name: "Nouvelle-Aquitaine",
          description:
            "Grande région aux vignobles (Bordeaux), côtes atlantiques et forêts.",
          activité: "Surf, dégustation de vins, visites de Bastides",
        },
        {
          name: "Occitanie",
          description:
            "Du littoral méditerranéen aux montagnes des Pyrénées, riche patrimoine occitan.",
          activité:
            "Plages, randonnées pyrénéennes, visites historiques (Carcassonne)",
            img1Text:"La Cité médiévale de Carcassonne (Aude)",
           img2Text:"Les gorges du Tarn (Lozère / Aveyron)",
            img3Text:"Toulouse, “la Ville Rose” (Haute-Garonne)",
          img1: "https://radio.vinci-autoroutes.com/medias/image/0ed5e6362837fea789a720a7bd320ec9.jpg",
          img2: "https://www.laviesauvage-rando.com/images/2025/01/21/pont-saint-chely-gorges-du-tarn.jpeg",
          img3: "https://images.ladepeche.fr/api/v1/images/view/66823faec342cc640e29c398/large/image.jpg?v=1",
        },
        {
          name: "Pays de la Loire",
          description:
            "Côte atlantique, vignobles et villes dynamiques comme Nantes.",
          activité: "Balades en bord d'eau, châteaux, festivals",
        },
        {
          name: "Provence-Alpes-Côte d'Azur",
          description:
            "Littoral méditerranéen, montagnes et patrimoine provençal.",
          activité:
            "Plages, marchés provençaux, randonnées et stations de ski proches",
        },
      ];