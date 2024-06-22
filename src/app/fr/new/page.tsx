import MainBlock from '@/src/widgets/main-block';
import PostsBlock from '@/src/widgets/posts-block';

export default function Home() {
  const posts = [
    {
      id: 'fr1',
      title:
        "L'isotrétinoïne est efficace pour traiter l'acné chez les personnes sous hormonothérapie masculinisante",
      description:
        "Une étude a révélé que l'isotrétinoïne est efficace pour traiter l'acné chez les personnes suivant une hormonothérapie masculinisante. Parmi les 55 participants, 87,3 % ont signalé une amélioration et 47,3 % une résolution complète de l'acné. Les meilleurs résultats ont été obtenus avec des doses cumulatives ≥ 120 mg/kg. Les effets secondaires comprenaient la sécheresse de la peau, des douleurs articulaires et des maux de tête. Des recherches supplémentaires sont nécessaires pour déterminer les doses optimales et surmonter les obstacles au traitement chez les personnes transgenres recevant de la testostérone.",
      source: 'Medscape',
      file: '/posts/fr/L_Isotrétinoïne Semble Efficace pour l_Acné chez les Personnes Transgenres sous Thérapie Hormonale.pdf',
    },
    {
      id: 'fr2',
      title:
        "Traitement réussi de l'hémophagocytose lymphohistiocytaire (HLH) chez un adolescent immigrant sans corticostéroïdes ni chimiothérapie",
      description:
        "Un adolescent immigrant avec un VIH/SIDA nouvellement diagnostiqué et une histoplasmose a été traité avec succès pour la HLH sans utiliser de corticostéroïdes ni de chimiothérapie, en utilisant l'anakinra. Ce cas souligne l'importance d'une approche globale et individualisée dans le traitement de la HLH avec de multiples infections.",
      source: 'PubMed',
      file: '/posts/fr/Gestion réussie de l_hémophagocytose lymphohistiocytaire chez un adolescent avec un VIH_SIDA nouvellement diagnostiqué et une histoplasmose.pdf',
    },
    {
      id: 'fr3',
      title:
        'Étude sur les nævus mélanocytaires congénitaux géants (NMC) identifiant une prolifération secondaire',
      description:
        'Une étude de 10 patients avec des nævus mélanocytaires congénitaux géants (NMC) a identifié une prolifération secondaire avec une différenciation de type Schwannienne et/ou périneuriomateuse. Les patients avaient entre 3 mois et 57 ans. Quatre sous-groupes de prolifération ont été identifiés : nodulaire, diffus, ressemblant à un neurofibrome plexiforme et périneuriomateux. Le rôle des cellules de Schwann dans ces changements est discuté.',
      source: 'PubMed',
      file: '/posts/fr/Différenciation Schwannienne et Pérynéuriomateuse dans une Série de Naevus Mélanocytaires Congénitaux Géants.pdf',
    },
    {
      id: 'fr4',
      title:
        "L'intelligence artificielle améliore le diagnostic et le traitement personnalisé en dermatologie",
      description:
        "L'IA améliore le diagnostic et personnalise le traitement en dermatologie. Ses applications en dermatopathologie, dans les maladies cutanées induites par le climat et les soins aux immigrants sans papiers sont discutées. Les questions éthiques et les nouveaux traitements pour la dermatite atopique, y compris l'efficacité du dupilumab chez les enfants et l'eczéma persistant des mains, sont notées.",
      source: 'PubMed',
      file: '/posts/fr/Points Forts de l_Éditeur - Juillet 2024.pdf',
    },
    {
      id: 'fr5',
      title:
        "Le dupilumab s'avère efficace pour réduire les symptômes de l'urticaire spontanée chronique",
      description:
        "Lors d'une conférence à Scottsdale, une étude a montré que le dupilumab réduit efficacement les symptômes de l'urticaire spontanée chronique chez les patients non réactifs aux antihistaminiques. Les participants recevant du dupilumab étaient significativement plus susceptibles d'atteindre un contrôle de l'urticaire et avaient moins d'effets secondaires graves. Ces résultats soutiennent le dupilumab comme traitement prometteur pour l'urticaire spontanée chronique.",
      source: 'Dermatology Times',
      file: '/posts/fr/Traitement de l_Urticaire Spontanée Chronique _ Résultats de l_Étude LIBERTY-CSU CUPID.pdf',
    },
    {
      id: 'fr6',
      title:
        "L'étude LIBERTY-AD-HAFT montre que le dupilumab est efficace dans le traitement de la dermatite atopique des mains et des pieds (DAHP)",
      description:
        "L'étude LIBERTY-AD-HAFT a démontré que le dupilumab réduit efficacement la sévérité des lésions de la DAHP. L'étude incluait des patients avec une DAHP modérée à sévère recevant du dupilumab ou un placebo pendant 16 semaines. Le dupilumab a significativement réduit la sévérité des lésions dans tous les sous-types morphologiques de DAHP, y compris chronique sèche, hyperkératosique (paume/sol), et autres. La sécurité du dupilumab était conforme aux données précédentes, soutenant son potentiel en tant que traitement efficace pour la DAHP sévère.",
      source: 'Dermatology Times',
      file: '/posts/fr/Efficacité du Dupilumab dans le Traitement de la Dermatite Atopique des Mains et des Pieds.pdf',
    },
    {
      id: 'fr7',
      title:
        "L'intervention précoce essentielle dans le traitement de l'alopécie areata",
      description:
        "Le Dr James Song a souligné l'importance d'une intervention précoce dans le traitement de l'alopécie areata. Les thérapies efficaces incluent les inhibiteurs de la JAK baricitinib et ritlecitinib, ainsi que le prometteur deuruxolitinib. Ces médicaments ont montré une grande efficacité et de bons profils de sécurité. Song a mis en avant les aspects génétiques et immunologiques de la maladie et a noté l'intérêt croissant pour le minoxidil oral pour traiter divers types de perte de cheveux.",
      source: 'Dermatology Times',
      file: '/posts/fr/Naviguer dans le paysage de traitement de l_alopécie areata.pdf',
    },
    {
      id: 'fr8',
      title:
        'Les nouveaux progrès dans le traitement de la dermatite séborrhéique mis en avant',
      description:
        "Lors de la conférence de 2024, le Dr Raj Chovatiya a souligné l'importance de traiter la dermatite séborrhéique (Seb D) et a appelé à étudier ses causes, y compris le système immunitaire et la barrière cutanée, plutôt que seulement la levure Malassezia. Il a noté le succès des nouvelles thérapies comme la mousse topique roflumilast (Zoryve) et le potentiel des inhibiteurs de la JAK et des agonistes des récepteurs hormonaux. Chovatiya a insisté sur le besoin de solutions simples et efficaces pour les patients, notamment pour les zones pileuses, et sur l'importance de recherches supplémentaires pour améliorer le traitement de la Seb D.",
      source: 'Dermatology Times',
      file: '/posts/fr/Démêler les progrès dans le traitement de la dermatite séborrhéique.pdf',
    },
    {
      id: 'fr9',
      title:
        'Importance de la vaccination mise en avant lors de la conférence de 2024',
      description:
        "Le Dr Mark Serota a souligné l'importance de la vaccination, son efficacité élevée et sa sécurité lors de la conférence de 2024. Il a recommandé de se rappeler des étapes clés d'âge pour les vaccins vivants (1 et 4 ans) et a démystifié les mythes sur la surcharge du système immunitaire. Serota a fourni des conseils pour les dermatologues sur la vaccination des patients sous biologiques, notant que le dupilumab est sûr pour la vaccination. Il a mis en avant des vaccins importants, tels que ceux pour la fièvre jaune, le zona, le ROR et la varicelle, et a recommandé des précautions pour les patients sous immunosuppresseurs.",
      source: 'Dermatology Times',
      file: '/posts/fr/Intégration des directives de vaccination en dermatologie.pdf',
    },
    {
      id: 'fr10',
      title: "Pertinence et impact des avertissements 'black box' discutés",
      description:
        "Le Dr Jason Hawkes a discuté de la pertinence limitée et de l'impact des avertissements 'black box' sur les médicaments dermatologiques lors de la conférence de 2024. Il a noté que ces avertissements, bien qu'informatifs, peuvent être trompeurs et causer une anxiété inutile. Des exemples incluent les avertissements sur l'association du dupilumab avec le lymphome à cellules T et les avertissements pour les inhibiteurs de la calcineurine et de l'IL-17, qui peuvent ne pas refléter le risque réel. Hawkes a souligné la nécessité d'une approche équilibrée basée sur les données scientifiques pour éviter de rejeter des thérapies efficaces en raison d'avertissements potentiellement trompeurs.",
      source: 'Dermatology Times',
      file: '/posts/fr/Avertissements encadrés _ Que doivent savoir les cliniciens en dermatologie_.pdf',
    },
    {
      id: 'fr11',
      title:
        'Combinaison de thérapies systémiques pour le psoriasis et la dermatite atopique',
      description:
        "Lors de la conférence de 2024, le Dr James Song a présenté une stratégie pour combiner les thérapies systémiques pour traiter le psoriasis (PsO) et la dermatite atopique (DA). La thérapie combinée améliore les résultats des traitements, gère les comorbidités et améliore la sécurité. Les biologiques modernes sont efficaces et durables, facilitant les changements de thérapie. Song a souligné l'importance d'un diagnostic précis, d'éviter la duplication des voies thérapeutiques et de prendre en compte les toxicités potentielles. Il a également fourni des exemples réussis de sa pratique et a offert des recommandations pour accéder à la thérapie biologique pour les patients.",
      source: 'Dermatology Times',
      file: '/posts/fr/Combinaison de thérapies systémiques dans le psoriasis et la dermatite atopique.pdf',
    },
    {
      id: 'fr12',
      title: "Rôle croissant de l'IA dans la détection du cancer de la peau",
      description:
        "L'IA en dermatologie, en particulier pour la détection du cancer de la peau, devient plus acceptable pour les patients et les médecins. Joseph Zabinski de OM1 a noté que l'IA réduit les barrières diagnostiques mais nécessite une amélioration de la précision et des données représentatives. OM1 travaille sur l'utilisation éthique de l'IA. Les médecins devraient utiliser l'IA pour améliorer les pratiques avec un minimum de perturbations. L'IA a le potentiel d'améliorer considérablement la détection précoce et le traitement personnalisé du cancer de la peau.",
      source: 'Dermatology Times',
      file: '/posts/fr/Joseph Zabinski, PhD, MEM _ Naviguer dans l_avenir de l_IA dans la détection du cancer de la peau.pdf',
    },
    {
      id: 'fr13',
      title:
        "Strates de gravité pour le vitiligo définies à l'aide de scores d'évaluation globale validés par des médecins",
      description:
        "Des chercheurs de Belgique et des Pays-Bas ont publié une étude dans le Journal of Clinical Medicine, définissant les strates de gravité du vitiligo en utilisant des scores d'évaluation globale validés par des médecins (PGA). L'étude, menée à l'Université de Gand, a confirmé la validité et la fiabilité du PGA pour évaluer l'aggravation et la repigmentation de la maladie. Ils ont identifié des corrélations entre les changements de la surface cutanée affectée et les scores PGA. Ces résultats peuvent aider à standardiser les définitions internationales de l'activité et de l'amélioration du vitiligo, facilitant la prise de décision clinique et l'inclusion des patients dans les études futures.",
      source: 'Dermatology Times',
      file: '/posts/fr/Nouvelle étude définissant les strates de gravité pour le vitiligo à l_aide de scores d_évaluation globale validés par des médecins.pdf.pdf',
    },
    {
      id: 'fr14',
      title:
        "VYNE Therapeutics lance un essai de phase 2b de l'inhibiteur de BET VYN201 pour le vitiligo",
      description:
        "VYNE Therapeutics a lancé un essai de phase 2b de VYN201, un nouvel inhibiteur de BET pour traiter le vitiligo non spécifique. L'essai implique 160 participants, dure 24 semaines avec une extension de 28 semaines. L'objectif principal est d'atteindre une amélioration de 50% du vitiligo facial à la semaine 24. Les essais précédents ont montré un début d'action rapide et une bonne sécurité de VYN201, confirmant son potentiel dans le traitement des maladies inflammatoires.",
      source: 'Dermatology Times',
      file: '/posts/fr/VYNE Therapeutics lance un essai de phase 2b de l_inhibiteur de BET VYN201 pour le vitiligo.pdf',
    },
    {
      id: 'fr15',
      title: "Faits saillants de l'été pour améliorer les soins aux patients",
      description:
        "Le CDC a mis à jour les données sur les produits du tabac chez les jeunes. L'étude a montré que les cigarettes électroniques aggravent les affections cutanées. Le numéro de juin discute des méthodes de communication avec les jeunes patients sur la santé de la peau et la sensibilisation à l'acné. Les procédures cosmétiques sûres et l'augmentation des cas de cancer de la peau sont également abordées. Dermatology Times se prépare à célébrer 45 ans de recherche et d'innovation le mois prochain.",
      source: 'Dermatology Times',
      file: '/posts/fr/Points Forts de l_Été pour Améliorer les Soins aux Patients.pdf',
    },
    {
      id: 'fr16',
      title:
        'Parler des JAK : Meilleures pratiques pour une communication efficace avec les patients',
      description:
        "Les inhibiteurs de la Janus kinase (JAK) jouent un rôle crucial dans le traitement de diverses maladies dermatologiques telles que la dermatite atopique (DA), le psoriasis, l'alopécie areata et le vitiligo. Les voies de signalisation JAK-STAT sont impliquées dans les réponses immunitaires et diverses fonctions cellulaires, rendant les inhibiteurs de la JAK une classe de médicaments polyvalente pour traiter de multiples conditions.",
      source: 'Dermatology Times',
      file: '/posts/fr/Parler des JAK _ Meilleures pratiques pour une communication efficace avec les patients.pdf',
    },
  ];

  const locale = 'fr';

  return (
    <>
      <main>
        <MainBlock locale={locale} />
        <PostsBlock locale={locale} displayTitle={true} posts={posts} />
      </main>
    </>
  );
}
