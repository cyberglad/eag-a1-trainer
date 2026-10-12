/* Données des tests — textes et questions en français (comme à l'examen), explications en russe. */
(function () {
  const VFI = [`Vrai`, `Faux`, `Indéterminé`];
  const VFP = [`Vrai`, `Faux`, `On ne peut pas savoir`];

  /* ---------- Scales Verbal : textes ---------- */
  const scalesTexts = [
    [`Texte 1 : L'IA et le marché du travail`, [
      `L'intelligence artificielle transforme profondément le marché du travail. Dans certains secteurs comme la finance, la logistique ou l'industrie, l'automatisation des tâches a conduit à une diminution des emplois humains. Un rapport du Forum économique mondial estime que d'ici 2030, près de 85 millions d'emplois pourraient disparaître à cause de l'IA et de la robotisation, mais environ 97 millions de nouveaux postes pourraient être créés dans les domaines du développement technologique et de l'analyse de données. Toutefois, cette transition n'est pas sans conséquences : les employés peu qualifiés risquent d'être les plus touchés, et l'adaptation à ces nouvelles compétences requiert des formations coûteuses.`,
      `L'IA ne se contente pas d'automatiser les tâches répétitives. Elle est aussi capable d'effectuer des analyses complexes, comme la gestion de portefeuilles financiers, la prise de décisions dans les centres d'appels ou encore la détection de fraudes. Cette montée en puissance de l'IA pose la question de l'avenir des professions intellectuelles. Par exemple, les avocats et médecins s'appuient désormais sur des outils d'IA pour traiter d'énormes volumes d'informations. Mais cette assistance technologique pourrait-elle à terme rendre certaines professions obsolètes ?`,
      `Enfin, les disparités géographiques sont notables. Dans les pays en développement, l'automatisation rapide pourrait ralentir la croissance économique en réduisant la demande de main-d'œuvre. À l'inverse, dans les économies avancées, l'IA peut être un levier de productivité, à condition que les politiques publiques accompagnent cette transition par des mesures de reconversion et d'éducation adaptées.`]],
    [`Texte 2 : L'IA en médecine`, [
      `L'intelligence artificielle joue un rôle clé dans l'évolution du secteur médical. Grâce aux avancées en apprentissage automatique, des systèmes d'IA sont aujourd'hui capables de détecter des anomalies dans des imageries médicales avec une précision équivalente, voire supérieure, à celle des radiologues expérimentés. Par exemple, une étude menée en 2022 sur des algorithmes de dépistage du cancer du sein a révélé un taux de détection de 92 %, contre 88 % pour un diagnostic humain classique.`,
      `En complément du diagnostic, l'IA contribue à la médecine personnalisée en analysant d'immenses bases de données génétiques. Des plateformes utilisent des algorithmes pour identifier les traitements les plus efficaces selon le profil moléculaire du patient, réduisant ainsi les effets secondaires et optimisant les résultats. Toutefois, ces avancées suscitent des débats éthiques. L'accès massif aux données médicales personnelles pose la question de la confidentialité et du consentement des patients. De plus, en cas d'erreur de diagnostic d'un algorithme, la responsabilité médicale devient floue : qui est à blâmer, le médecin ou le programme ?`,
      `Enfin, la dépendance croissante à l'IA pourrait altérer les compétences humaines. Certains professionnels de santé alertent sur le risque que les jeunes médecins se reposent excessivement sur ces technologies, réduisant ainsi leur capacité à poser un diagnostic sans assistance algorithmique.`]],
    [`Texte 3 : Les biais et limites de l'IA`, [
      `L'intelligence artificielle est souvent perçue comme une technologie objective et rationnelle. Pourtant, ses décisions sont influencées par les données sur lesquelles elle est entraînée. En 2018, une étude a montré que certains algorithmes de recrutement éliminaient inconsciemment des candidatures féminines car ils avaient été entraînés sur des données historiques privilégiant les hommes. Ce phénomène, appelé biais algorithmique, est particulièrement problématique dans les domaines de la justice, de la finance et de la police, où les erreurs peuvent avoir des conséquences graves.`,
      `Un autre défi majeur est le manque de transparence des modèles d'IA avancés, notamment ceux basés sur les réseaux neuronaux profonds. Ces systèmes fonctionnent comme des « boîtes noires » : leurs résultats sont souvent impossibles à expliquer de manière compréhensible. Cela pose des problèmes pour les décisions critiques, par exemple lorsqu'une IA refuse un prêt bancaire sans que l'emprunteur puisse comprendre pourquoi.`,
      `Enfin, bien que l'IA excelle dans l'analyse de tendances et la reconnaissance de modèles, elle ne possède aucune compréhension réelle du contexte. Elle est incapable de faire preuve d'intuition ou de jugements subjectifs, ce qui limite son efficacité dans les tâches nécessitant de la créativité ou une interprétation fine des situations.`]],
    [`Texte 4 : L'IA et la sécurité globale`, [
      `L'essor de l'intelligence artificielle dans les domaines militaires et de la cybersécurité soulève des préoccupations majeures. Les armées modernes utilisent de plus en plus l'IA pour automatiser la surveillance, analyser d'énormes quantités de données et coordonner des opérations. Certains pays ont développé des drones autonomes capables d'identifier et de neutraliser des cibles sans intervention humaine. Cette évolution suscite des débats éthiques : faut-il autoriser des machines à prendre des décisions de vie ou de mort ?`,
      `Dans le domaine de la cybersécurité, l'IA est une arme à double tranchant. D'un côté, elle permet de détecter et de bloquer les cyberattaques bien plus rapidement qu'un humain. D'un autre côté, elle est aussi utilisée par les hackers pour créer des attaques automatisées capables d'exploiter des failles informatiques en quelques millisecondes.`,
      `Enfin, l'IA est de plus en plus employée dans la surveillance de masse. Certains gouvernements utilisent des systèmes de reconnaissance faciale pour identifier et suivre des individus en temps réel. Ces technologies posent la question de la protection des libertés individuelles et du risque d'un contrôle excessif de la population.`]],
    [`Texte 5 : L'IA et la créativité humaine`, [
      `L'intelligence artificielle bouleverse également le domaine de la création artistique. Aujourd'hui, des algorithmes sont capables de générer de la musique, des peintures et même des œuvres littéraires d'une qualité impressionnante. Par exemple, en 2018, une peinture réalisée par une IA a été vendue aux enchères pour 432 500 dollars, un prix bien supérieur aux attentes.`,
      `Cependant, cette montée en puissance soulève des interrogations sur le rôle de l'artiste. Si une IA peut composer une symphonie ou rédiger un roman, peut-on encore parler de création humaine ? Certains artistes utilisent ces outils comme une aide, tandis que d'autres craignent une uniformisation de l'art, où les œuvres se baseraient uniquement sur des schémas préexistants plutôt que sur une véritable innovation.`,
      `De plus, des questions juridiques émergent : qui détient les droits d'auteur d'une œuvre générée par une IA ? Le programmeur, l'utilisateur ou l'algorithme lui-même ? À ce jour, la législation peine à s'adapter à ces nouvelles formes de création.`]]
  ];
  const scalesHTML = scalesTexts.map(([t, ps]) =>
    `<h3>${t}</h3>` + ps.map(p => `<p>${p}</p>`).join('')).join('<hr>');

  /* V=0, F=1, I=2 */
  const scalesQ = [
    [`Le développement rapide de l'IA pourrait aggraver les inégalités économiques entre les pays.`, 0, `Т1: развивающиеся страны растут медленнее, развитые получают прирост производительности — разрыв растёт. «Pourrait» совпадает с текстом.`],
    [`Contrairement à son utilisation dans les systèmes de défense informatique, l'exploitation de l'intelligence artificielle par les cybercriminels demeure une possibilité théorique.`, 1, `Т4: хакеры уже используют ИИ для автоматизированных атак.`],
    [`L'automatisation par l'IA profite de manière équitable à toutes les catégories de travailleurs.`, 1, `Т1: низкоквалифицированные работники пострадают сильнее всего.`],
    [`Les décisions prises par une intelligence artificielle dans des affaires juridiques sont toujours irréfutables.`, 1, `Т3: предвзятость особенно опасна в правосудии, ошибки тяжёлые. «Toujours» — сигнал.`],
    [`Les performances de l'intelligence artificielle dans certains diagnostics médicaux s'expliquent par sa capacité à comprendre intuitivement les situations cliniques, de la même manière qu'un médecin.`, 1, `Т3: у ИИ нет реального понимания контекста и интуиции.`],
    [`Un algorithme d'IA utilisé pour la reconnaissance vocale peut discriminer involontairement certains accents.`, 2, `Т3 описывает предвзятость в целом (пример — найм); распознавание речи и акценты не упоминаются.`],
    [`Les jeunes médecins utilisant l'IA dans leur pratique médicale sont plus compétents que ceux qui n'en utilisent pas.`, 2, `Т2 говорит только о риске потери навыков; сравнения компетентности нет.`],
    [`L'IA est uniquement utilisée à des fins militaires et industrielles, sans applications dans les domaines artistiques ou culturels.`, 1, `Т5: музыка, живопись, литература.`],
    [`Les entreprises technologiques sont obligées de révéler comment leurs intelligences artificielles prennent des décisions.`, 2, `Т3 описывает «чёрные ящики», но о юридической обязанности ничего нет.`],
    [`L'intelligence artificielle est désormais capable de remplacer complètement les journalistes en écrivant des articles de presse.`, 2, `Журналисты и пресса в текстах не упоминаются.`],
    [`Les algorithmes d'IA sont toujours capables d'expliquer leurs décisions de manière claire et compréhensible.`, 1, `Т3: «boîtes noires», результаты часто невозможно объяснить.`],
    [`Les progrès de l'intelligence artificielle permettent de produire des œuvres artistiques de qualité, mais leur valeur commerciale demeure purement hypothétique.`, 1, `Т5: картина продана за 432 500 $.`],
    [`Les IA utilisées dans la cybersécurité peuvent détecter des attaques en temps réel avant qu'un humain ne puisse les repérer.`, 0, `Т4: обнаруживает и блокирует атаки гораздо быстрее человека.`],
    [`L'utilisation de l'IA dans l'art permet uniquement d'améliorer des œuvres créées par des humains, sans générer d'œuvres originales.`, 1, `Т5: алгоритмы сами создают произведения.`],
    [`Les machines intelligentes peuvent remplacer la créativité humaine en inventant de nouvelles formes d'art totalement inédites.`, 1, `Т3: творчество ИИ ограничено; Т5: опасение, что работы будут опираться на существующие шаблоны.`],
    [`Toutes les professions intellectuelles sont protégées de l'automatisation par l'IA.`, 1, `Т1: некоторые профессии могут устареть.`],
    [`L'IA est utilisée par les hackers pour automatiser des cyberattaques extrêmement rapides.`, 0, `Т4: атаки за несколько миллисекунд.`],
    [`Tous les gouvernements interdisent l'utilisation de la reconnaissance faciale pour des raisons éthiques.`, 1, `Т4: «certains gouvernements utilisent».`],
    [`Le fait qu'un système d'intelligence artificielle soit capable de prendre une décision ne garantit pas que les personnes concernées puissent comprendre les raisons précises de cette décision.`, 0, `Т3: отказ в кредите, а заёмщик не понимает почему.`],
    [`Deux patients atteints d'une même maladie pourraient se voir recommander des traitements différents à la suite d'analyses réalisées par une intelligence artificielle.`, 0, `Т2: лечение по молекулярному профилю пациента.`],
    [`Une étude de 2018 a montré que certains algorithmes de recrutement défavorisaient les candidatures féminines.`, 0, `Т3: алгоритмы найма отсеивали кандидатуры женщин.`],
    [`La peinture réalisée par une IA a été vendue à un prix inférieur à l'estimation initiale.`, 1, `Т5: «bien supérieur aux attentes».`],
    [`L'IA est utilisée pour détecter des fraudes.`, 0, `Т1: выявление мошенничества названо прямо.`],
    [`Les drones autonomes évoqués dans le texte nécessitent systématiquement une validation humaine avant de neutraliser une cible.`, 1, `Т4: «sans intervention humaine».`],
    [`La majorité des patients refusent que leurs données génétiques soient analysées par une IA.`, 2, `Т2: только вопрос о согласии, никаких цифр.`],
    [`Selon le Forum économique mondial, 97 millions d'emplois pourraient disparaître d'ici 2030.`, 1, `Т1: исчезнут 85 млн, появятся 97 млн. Перестановка чисел.`],
    [`La législation actuelle détermine clairement à qui appartiennent les droits d'auteur d'une œuvre générée par une IA.`, 1, `Т5: законодательство не успевает адаптироваться.`],
    [`L'IA excelle dans la reconnaissance de modèles.`, 0, `Т3: «excelle dans … la reconnaissance de modèles».`],
    [`En cas d'erreur de diagnostic d'un algorithme, la loi désigne clairement le médecin comme responsable.`, 1, `Т2: ответственность размыта — врач или программа?`],
    [`L'utilisation de drones autonomes est interdite par le droit international.`, 2, `Т4: этические споры есть, о запрете ничего.`],
    [`D'ici 2030, le nombre d'emplois créés grâce à l'IA pourrait dépasser celui des emplois supprimés.`, 0, `Т1: 97 млн больше 85 млн.`],
    [`Certains artistes craignent que l'IA conduise à une uniformisation de l'art.`, 0, `Т5: опасение унификации названо прямо.`],
    [`Le biais algorithmique résulte d'une programmation volontairement discriminatoire.`, 1, `Т3: «inconsciemment», из-за данных обучения.`],
    [`Dans l'étude de 2022, les algorithmes ont obtenu un taux de détection supérieur de 4 points au diagnostic humain classique.`, 0, `Т2: 92 % против 88 %.`],
    [`La surveillance de masse par l'IA ne soulève aucune question relative aux libertés individuelles.`, 1, `Т4: вопрос о свободах поставлен явно.`],
    [`Les formations nécessaires pour s'adapter aux nouvelles compétences sont financées par l'État.`, 2, `Т1: обучение дорогое; кто платит — не сказано.`],
    [`La peinture créée par une IA a été achetée par un collectionneur européen.`, 2, `Т5: покупатель не упоминается.`],
    [`L'étude de 2022 portait sur le dépistage du cancer du poumon.`, 1, `Т2: рак молочной железы.`],
    [`Les armées utilisent l'IA pour analyser de grandes quantités de données.`, 0, `Т4: анализ огромных объёмов данных.`],
    [`Les avocats ont cessé d'utiliser les outils d'IA en raison de leur manque de fiabilité.`, 1, `Т1: юристы уже опираются на ИИ.`],
    [`Les réseaux neuronaux profonds sont les modèles d'IA les plus utilisés dans le secteur bancaire.`, 2, `Т3: нейросети и кредит упомянуты, доли рынка нет.`],
    [`La médecine personnalisée fondée sur l'IA peut contribuer à réduire les effets secondaires des traitements.`, 0, `Т2: снижение побочных эффектов.`],
    [`Tous les artistes rejettent l'utilisation de l'IA dans leur travail.`, 1, `Т5: некоторые используют ИИ как помощь.`],
    [`Dans les économies avancées, l'IA garantit un gain de productivité quelles que soient les politiques publiques.`, 1, `Т1: «à condition que» государство сопровождает переход.`],
    [`La reconnaissance faciale permet de suivre des individus en temps réel.`, 0, `Т4: отслеживание в реальном времени.`],
    [`L'IA a déjà totalement remplacé les radiologues dans les hôpitaux.`, 2, `Т2: точность сопоставима, о замене ничего.`],
    [`Le biais algorithmique n'a de conséquences que dans le domaine du recrutement.`, 1, `Т3: также правосудие, финансы, полиция.`],
    [`Les œuvres musicales générées par une IA rencontrent plus de succès commercial que les œuvres littéraires.`, 2, `Т5: цена указана только у одной картины.`],
    [`L'IA suscite des débats éthiques aussi bien dans le domaine médical que dans le domaine militaire.`, 0, `Т2 и Т4: этические споры в обоих текстах.`]
  ];

  /* ---------- Raisonnement verbal ---------- */
  const verbal = [
    { cat: `Compréhension`, text: `Guide de passation des marchés publics : La définition préalable des besoins par le pouvoir adjudicateur constitue la clé de voûte de toute consultation réussie. Une description imprécise des prestations induit des offres disparates et difficilement comparables. Par conséquent, […]`,
      prompt: `Quelle proposition complète logiquement le paragraphe tout en respectant l'argumentation ?`,
      options: [`le choix du prix le plus bas dispense de formaliser les attentes de fond.`, `les soumissionnaires doivent définir eux-mêmes les attendus du marché.`, `un cahier des charges rigoureux limite les risques de litiges ultérieurs.`, `la phase d'analyse des offres peut corriger tout défaut de cadrage amont.`],
      answer: 2, explain: `После «Par conséquent» нужен вывод в пользу точного описания потребностей. Остальные противоречат тезису, перекладывают ответственность на участников или содержат абсолютное «tout».` },
    { cat: `Inférence`, text: `Extrait du compte rendu du service des achats. Tout marché public d'un montant supérieur à 100 000 euros requiert un avis préalable du contrôleur financier. L'audit interne de l'an dernier a confirmé que le service applique cette règle sans exception. Les marchés sont publiés sur la plateforme des achats publics et attribués par une commission de trois membres. Le marché X, relatif à l'acquisition de matériel informatique pour les écoles, a été attribué le 2 février sans avis du contrôleur financier. La livraison du matériel est prévue en avril, et une formation des enseignants sera organisée en mai.`,
      prompt: `Quelle conclusion est certaine à partir des éléments fournis ?`,
      options: [`Le marché X sera réexaminé lors de la prochaine session.`, `Le montant du marché X ne dépasse pas 100 000 euros.`, `Le marché X a été attribué de manière irrégulière.`, `Le contrôleur financier a refusé de valider le marché X.`],
      answer: 1, explain: `Контрапозиция: правило «> 100 000 → заключение» соблюдается «sans exception»; заключения нет → сумма ≤ 100 000. «Irrégulière» противоречит аудиту; «a refusé» — заключения не было вовсе.` },
    { cat: `Application de consigne`, text: `Note d'information aux usagers – Réclamations relatives à l'impôt foncier communal. Les réclamations doivent être introduites dans un délai de trois mois à compter de la date d'envoi de l'avis d'imposition. Elles sont transmises exclusivement par lettre recommandée avec avis de réception ou déposées au secrétariat communal contre récépissé. La réclamation indique le numéro de l'avis et les motifs de la contestation. Le secrétariat est ouvert du lundi au vendredi de 8 h à 12 h. Les questions générales peuvent être posées par téléphone ou par courrier électronique, mais ces échanges ne valent pas réclamation.`,
      prompt: `Mme Weber souhaite contester son avis d'impôt foncier. Quelle façon de transmettre sa réclamation est conforme à la note ?`,
      options: [`Exposer ses motifs par téléphone à l'agent de permanence.`, `Déposer une lettre simple dans la boîte aux lettres communale.`, `Envoyer un courrier électronique avec confirmation de lecture.`, `Envoyer une lettre recommandée avec avis de réception.`],
      answer: 3, explain: `«Exclusivement» закрывает список: заказное письмо или подача под расписку. E-mail с подтверждением прочтения — ловушка-«аналог».` },
    { cat: `Vrai / Faux / Indéterminé`, text: `Pour le poste de chargé d'études, le jury retient en priorité les candidats titulaires d'un master. Les candidats sans master ne sont retenus que s'ils justifient d'au moins cinq ans d'expérience dans le domaine. Le jury a retenu M. Koch, qui n'est pas titulaire d'un master.`,
      prompt: `Affirmation : M. Koch justifie d'au moins cinq ans d'expérience dans le domaine.`,
      options: VFP, answer: 0, explain: `«Ne… que si» — необходимое условие. Кох без мастера и отобран → опыт ≥ 5 лет. «Vrai» не требует дословного упоминания.` },
    { cat: `Synthèse`, text: `Compte rendu – Bilan du logiciel de gestion des congés, trois mois après son déploiement. Le logiciel enregistre en moyenne 1 200 connexions par jour ouvrable. Selon la direction des ressources humaines, 85 % des demandes de congé passent désormais par cet outil, contre un formulaire papier auparavant. Deux défauts ont été signalés : l'affichage des soldes de congé est erroné pour les agents à temps partiel, et les chefs de service ne reçoivent pas toujours d'alerte lorsqu'une demande leur est soumise. Le prestataire s'est engagé à corriger ces deux défauts en mai. Une formation complémentaire sera proposée aux secrétariats en juin.`,
      prompt: `Quelle proposition résume le plus fidèlement ce compte rendu ?`,
      options: [`Le logiciel est bien utilisé, mais aucune correction n'est prévue.`, `Le logiciel est très utilisé ; deux défauts seront corrigés en mai.`, `Le logiciel ne sert qu'aux chefs de service pour valider les congés.`, `Le logiciel est abandonné en raison de défauts trop nombreux.`],
      answer: 1, explain: `Обе главные идеи: высокое использование + исправление в мае. Первый вариант — «наполовину правда».` },
    { cat: `Compréhension`, text: `Accès aux documents publics : Le droit d'accès aux documents administratifs s'applique aux actes achevés. Les documents préparatoires à une décision en cours d'élaboration ne sont communicables qu'après que la décision finale a été formellement adoptée et signée par l'autorité compétente.`,
      prompt: `Selon cette note, quelle condition régit la communication de documents administratifs préparatoires ?`,
      options: [`Ils sont librement accessibles à tout citoyen dès leur première version de travail.`, `Ils ne peuvent jamais être communiqués au public, même après adoption finale.`, `Ils deviennent communicables seulement après l'adoption formelle de la décision finale.`, `Leur communication exige impérativement une autorisation du médiateur de l'État.`],
      answer: 2, explain: `«Ne… qu'après» = «seulement après». Ограничительное слово верно, потому что оно есть в самом тексте. Медиатора в тексте нет.` },
    { cat: `Synthèse`, text: `Plan d'action pour des administrations durables : La politique d'éco-responsabilité vise à intégrer systématiquement des critères environnementaux stricts dans l'ensemble des marchés de fournitures, de travaux et de restauration collective. Elle entend réduire l'empreinte carbone globale du secteur public tout en stimulant la filière économique verte régionale.`,
      prompt: `Quel est le but central de la démarche d'éco-responsabilité exposée dans cette circulaire ?`,
      options: [`Résilier l'ensemble des contrats passés avec les fournisseurs régionaux.`, `Diminuer l'empreinte carbone publique tout en stimulant l'économie verte.`, `Réduire unilatéralement les rations de repas dans les cantines scolaires.`, `Interdire tout achat de matériel informatique neuf au sein de l'État.`],
      answer: 1, explain: `Пересказ последнего предложения. Неверные варианты цепляются за отдельные слова текста («régionaux», «restauration»).` },
    { cat: `Vrai / Faux / Indéterminé`, text: `Note de l'inspection du travail – Organisation des contrôles. Tous les inspecteurs assermentés disposent d'un droit d'accès aux locaux professionnels contrôlés. L'assermentation est délivrée après une formation de six mois et une prestation de serment ; aucun stagiaire n'est assermenté. Les stagiaires peuvent toutefois accompagner un inspecteur lors des visites, à titre d'observateurs. Le service compte actuellement plusieurs inspecteurs assermentés et quatre stagiaires. Les rapports de contrôle sont rédigés dans les dix jours suivant la visite. Un nouveau modèle de rapport sera utilisé à partir de janvier.`,
      prompt: `Affirmation : Au moins une personne disposant du droit d'accès aux locaux contrôlés n'est pas stagiaire.`,
      options: VFP, answer: 0, explain: `Инспекторы существуют («compte actuellement plusieurs»), у всех есть доступ, ни один не стажёр. Без факта существования ответ был бы «нельзя определить».` },
    { cat: `Application de consigne`, text: `Indemnités de mission à l'étranger – Extrait de la procédure. Le versement des indemnités journalières de mission est subordonné au dépôt d'un rapport de fin de mission visé par le chef de délégation et accompagné des titres de transport originaux, dans les quinze jours suivant le retour. À défaut de dépôt dans ce délai, le versement est suspendu jusqu'à la réception du rapport. Au-delà de soixante jours après le retour, les indemnités ne sont plus dues, sauf motif légitime apprécié par le directeur. Les indemnités sont versées sur le compte bancaire de l'agent. Les avances sur frais de mission restent régies par une circulaire distincte.`,
      prompt: `Un agent rentré de mission le 1er mars dépose son rapport, visé et complet, le 31 mars, sans motif légitime. Que doit faire le gestionnaire ?`,
      options: [`Verser l'indemnité avec une retenue proportionnelle au retard.`, `Verser l'indemnité, la suspension cessant à la réception.`, `Refuser l'indemnité, le délai de quinze jours étant dépassé.`, `Soumettre le dossier au directeur pour apprécier le retard.`],
      answer: 1, explain: `30 дней — зона 15–60: выплата приостановлена до получения отчёта. Отказ — только после 60 дней; директор — только после 60 дней и при уважительной причине.` },
    { cat: `Inférence`, text: `Procédure d'instruction des demandes : Lorsque le dossier déposé par un usager ne comporte pas l'ensemble des pièces exigées, le service instructeur lui adresse un avis de pièces manquantes dans un délai de quinze jours. Ce courrier fixe un terme de trente jours pour régulariser l'envoi, faute de quoi la demande est réputée caduque.`,
      prompt: `Que peut-on inférer sur un dossier resté incomplet quarante jours après réception de l'avis ?`,
      options: [`Le dossier est juridiquement réputé caduc en raison du dépassement du délai imparti.`, `Le délai de régularisation est automatiquement reconduit pour une durée équivalente.`, `L'administration est obligée de relancer l'usager par courrier recommandé avec accusé.`, `La demande est transférée d'office à une commission arbitrale pour réexamen complet.`],
      answer: 0, explain: `Отсчёт от получения уведомления: 40 > 30 → caduque. 15 дней — срок для службы, это шум.` },
    { cat: `Inférence`, text: `Protocole d'archivage administratif : Les dossiers de recours contentieux sont conservés au greffe durant dix ans à compter de la décision définitive. À l'issue de cette période d'utilité administrative, seuls les dossiers présentant un intérêt jurisprudentiel remarquable sont versés aux archives nationales, les autres faisant l'objet d'une élimination réglementée.`,
      prompt: `Quelle déduction relative à la conservation des archives découle directement de ce protocole ?`,
      options: [`Aucun recours contentieux ne peut être éliminé avant un demi-siècle.`, `Les dossiers ordinaires sont détruits au terme du délai de dix ans.`, `Les pièces de procédure sont éliminées dès le prononcé du jugement.`, `L'ensemble des dossiers contentieux est préservé aux archives nationales.`],
      answer: 1, explain: `«Seuls» — только ценные в архив, остальные уничтожаются через 10 лет. 50 лет выдуманы.` },
    { cat: `Application de consigne`, text: `Toute demande de télétravail occasionnel doit être déposée au moins 5 jours ouvrés à l'avance auprès de la hiérarchie. Par exception, en cas d'intempéries majeures constatées par un avis officiel, le délai est réduit à 24 heures. L'agent Laurent dépose sa demande 3 jours ouvrés avant la date souhaitée, en l'absence de tout avis officiel d'intempéries.`,
      prompt: `Quelle décision est strictement conforme à la directive de service ?`,
      options: [`La demande de Laurent est automatiquement validée par défaut.`, `Laurent peut bénéficier de la dérogation réduite à 24 heures.`, `La demande de Laurent ne respecte pas le délai réglementaire exigé.`, `Le délai de 5 jours ouvrés ne s'applique qu'au télétravail régulier.`],
      answer: 2, explain: `Условие исключения (официальное уведомление) не выполнено → общее правило: 3 < 5.` },
    { cat: `Synthèse`, text: `Maîtrise des risques organisationnels : Le contrôle interne a pour finalité d'assurer la conformité des opérations administratives aux lois et règlements, la fiabilité des états financiers et la protection du patrimoine public. Il ne constitue pas un mécanisme d'inspection punitive mais un outil préventif de sécurisation des processus opérationnels.`,
      prompt: `Quel est l'objectif premier du contrôle interne de gestion décrit dans ce document ?`,
      options: [`Externaliser le contrôle de légalité auprès de cabinets d'audit privés étrangers.`, `Supprimer les procédures d'audit pour alléger la charge de travail des directeurs de pôle.`, `Sécuriser préventivement les processus publics pour garantir la régularité et la probité.`, `Sanctionner systématiquement les erreurs de saisie commises par les agents opérationnels.`],
      answer: 2, explain: `«Ce n'est pas X mais Y»: верный ответ строится на Y (превентивно), ловушка — на X (наказание).` },
    { cat: `Vrai / Faux / Indéterminé`, text: `La bibliothèque centrale d'Orvalle ouvre du mardi au samedi. Depuis mars, une borne permet d'emprunter des livres le dimanche, mais uniquement aux lecteurs titulaires d'une carte annuelle. Les retours restent possibles tous les jours grâce à une boîte extérieure accessible en permanence.`,
      prompt: `Affirmation : un lecteur sans carte annuelle peut rendre un livre le dimanche.`,
      options: VFP, answer: 0, explain: `«Uniquement» относится к выдаче, а не к возврату. Возврат — каждый день, без условий.` }
  ];

  /* ---------- Planification ---------- */
  const agenda = [
    [`Lundi`, `09:00-10:00 Réunion hebdomadaire<br>14:00-15:00 Réunion avec la direction`],
    [`Mardi`, `10:30-11:30 Appel fournisseur<br>15:00-16:00 Réunion paie`],
    [`Mercredi`, `09:00-10:00 Formation interne<br>13:30-14:30 Rendez-vous client`],
    [`Jeudi`, `11:00-12:00 Réunion de service<br>15:30-16:30 Permanence à l'accueil`],
    [`Vendredi`, `09:30-10:30 Rapport mensuel<br>13:00-14:00 Réunion d'équipe`]
  ];
  const inbox = [
    [`Marc Weber - Service bâtiment`, `Inspection de la salle`, `L'inspection dure 60 minutes. Je suis disponible lundi 11:00-12:00 ou mardi 13:00-14:00. Les mesures doivent être transmises au décorateur avant mardi 12:00.`],
    [`Anne Schmit - Ressources humaines`, `Liste définitive des participants`, `La vérification de la liste prendra 45 minutes. Je suis disponible lundi 10:00-10:45 ou mardi 09:00-09:45. La liste doit être finalisée lundi avant 12:00.`],
    [`Sophie Muller - Traiteur`, `Validation du menu`, `La validation du menu et du devis prendra 60 minutes. Je suis disponible mardi 11:30-12:30 ou mercredi 10:30-11:30. Le devis doit ensuite être approuvé par le service financier avant confirmation de la commande.`],
    [`Service financier`, `Approbation du devis traiteur`, `L'approbation prend 30 minutes et nécessite le devis définitif. Nous sommes disponibles mercredi 10:45-11:15 ou jeudi 09:00-09:30. La commande doit être confirmée mercredi avant 12:00.`],
    [`Communication interne`, `Rappel aux participants`, `Après finalisation de la liste des participants, prévoyez 30 minutes pour préparer et envoyer le rappel. Le créneau réservé dans l'outil d'envoi est mercredi 10:00-10:30.`],
    [`Décorateur`, `Installation de la décoration`, `L'installation nécessite 90 minutes et ne peut commencer qu'après l'inspection de la salle. Nous sommes disponibles jeudi 09:00-10:30 ou jeudi 13:00-14:30.`],
    [`Direction`, `Occupation de la salle jeudi`, `La salle est occupée jeudi de 08:30 à 11:00 par une formation des cadres. Elle est libre l'après-midi.`],
    [`Service administratif`, `Impression des badges`, `Les badges ne peuvent être imprimés qu'après finalisation de la liste des participants. L'impression prend 60 minutes. L'imprimante est disponible mercredi 14:30-15:30 ou jeudi 10:00-11:00.`],
    [`Paul Hoffmann - Photographe`, `Repérage de la salle`, `J'ai besoin de 30 minutes dans la salle. Je suis disponible mercredi 15:30-16:00 ou jeudi 14:30-15:00.`],
    [`Service informatique`, `Test du matériel audio`, `Le test du système audio dure 60 minutes et doit être terminé avant le contrôle de sécurité. Nous sommes disponibles jeudi 16:00-17:00 ou vendredi 10:30-11:30.`],
    [`Service sécurité`, `Contrôle avant l'événement`, `Le contrôle dure 45 minutes et ne peut avoir lieu qu'après l'installation de la décoration et le test du matériel audio. Je suis disponible jeudi 13:00-13:45 ou vendredi 11:30-12:15.`],
    [`Responsable événement`, `Briefing de l'équipe`, `Le briefing dure 30 minutes et doit avoir lieu après le contrôle de sécurité. L'équipe est disponible vendredi 14:00-14:30 ou vendredi 15:30-16:00.`],
    [`Directrice`, `Vérification finale`, `Je souhaite effectuer une vérification finale de 30 minutes après le briefing de l'équipe et avant l'arrivée du traiteur. Je suis disponible vendredi 15:00-15:30 ou vendredi 16:30-17:00.`],
    [`Sophie Muller - Traiteur`, `Livraison vendredi`, `La livraison commence vendredi à 16:00 et dure environ 45 minutes. Une personne doit être présente pendant toute la livraison.`]
  ];
  const planningHTML =
    `<div class="box"><h4>Contexte</h4><p>Vous êtes assistant(e) administratif(ve). Une fête d'entreprise est prévue vendredi à 17:30. Vous devez organiser les différentes activités nécessaires à sa préparation.</p><p><strong>Horaires de travail :</strong> 08:30-12:30 et 13:00-17:00.</p></div>` +
    `<div class="box white"><h4>Agenda déjà confirmé</h4><table class="agenda">` +
    agenda.map(([d, s]) => `<tr><th>${d}</th><td>${s}</td></tr>`).join('') + `</table></div>` +
    `<h3 class="inbox-title">Boîte de réception</h3>` +
    inbox.map(([f, o, b]) => `<div class="mail"><div class="mail-head"><strong>${f}</strong><br>Objet : ${o}</div><div class="mail-body">${b}</div></div>`).join('');

  const seq = (rows) => `<table class="seq">` + rows.map(r => `<tr><th>${r[0]}</th><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('') + `</table>`;
  const planning = [
    { prompt: `À quel moment devez-vous planifier l'inspection de la salle afin que les mesures puissent être transmises au décorateur dans le délai indiqué ?`,
      options: [`Lundi 10:00-11:00`, `Mardi 11:30-12:30`, `Mardi 13:00-14:00`, `Lundi 11:00-12:00`], answer: 3,
      explain: `Марк свободен только пн 11–12 или вт 13–14. Вторник позже дедлайна «avant mardi 12:00».` },
    { prompt: `Quelle combinaison respecte à la fois le délai de finalisation de la liste des participants et la contrainte d'envoi du rappel ?`,
      options: [`Liste lundi 10:00-10:45, puis rappel mardi 10:00-10:30`, `Liste mardi 09:00-09:45, puis rappel mercredi 10:00-10:30`, `Liste lundi 10:00-10:45, puis rappel mercredi 10:00-10:30`, `Liste lundi 11:00-11:45, puis rappel mercredi 10:00-10:30`], answer: 2,
      explain: `Список до пн 12:00 → только пн 10:00–10:45 (Анна). Рассылка — только в зарезервированный слот ср 10:00–10:30.` },
    { prompt: `À quel créneau faut-il valider le menu et le devis avec le traiteur pour que toute la chaîne de validation reste possible ?`,
      options: [`Mardi 11:00-12:00`, `Mercredi 10:30-11:30`, `Mardi 11:30-12:30`, `Jeudi 09:00-10:00`], answer: 2,
      explain: `Заказ до ср 12:00 → финансы ср 10:45 → меню раньше: вт 11:30–12:30 (звонок кончается в 11:30). Ср 10:30–11:30 пересекается с финансами.` },
    { prompt: `Quelle séquence permet de valider le menu, d'obtenir l'approbation financière et de confirmer la commande dans le délai prévu, sans chevaucher l'agenda déjà confirmé ?`,
      options: [
        seq([[`Menu`, `Mar 11:30-12:30`, `Validation`], [`Finances`, `Mer 10:45-11:15`, `Approbation`], [`Commande`, `Mer 11:15`, `Confirmation`]]),
        seq([[`Menu`, `Mer 10:30-11:30`, `Validation`], [`Finances`, `Jeu 09:00-09:30`, `Approbation`], [`Commande`, `Jeu 09:30`, `Confirmation`]]),
        seq([[`Menu`, `Mer 10:30-11:30`, `Validation`], [`Finances`, `Mer 10:45-11:15`, `Approbation`], [`Commande`, `Mer 11:15`, `Confirmation`]]),
        seq([[`Menu`, `Mar 11:30-12:30`, `Validation`], [`Finances`, `Jeu 09:00-09:30`, `Approbation`], [`Commande`, `Jeu 09:30`, `Confirmation`]])], answer: 0,
      explain: `В Б и Г заказ в четверг — позже дедлайна. В В меню пересекается с финансами.` },
    { prompt: `Quel créneau doit être retenu pour l'installation de la décoration ?`,
      options: [`Jeudi 12:30-14:00`, `Mercredi 15:30-17:00`, `Jeudi 09:00-10:30`, `Jeudi 13:00-14:30`], answer: 3,
      explain: `А и Б — не слоты декоратора (и 12:30–13:00 — обед). Утро четверга зал занят (письмо Direction). Текст этого письма на исходном скриншоте был обрезан — в тренажёре он восстановлен.` },
    { prompt: `Quel créneau doit être retenu pour le test du matériel audio ?`,
      options: [`Jeudi 16:00-17:00`, `Vendredi 10:30-11:30`, `Vendredi 09:30-10:30`, `Jeudi 13:00-14:00`], answer: 1,
      explain: `Чт 16:00–17:00 пересекается с дежурством на ресепшене (15:30–16:30). Остальные — не слоты IT. Вопрос составлен по письмам.` },
    { prompt: `Quel créneau doit être retenu pour le briefing de l'équipe ?`,
      options: [`Vendredi 14:00-14:30`, `Vendredi 15:30-16:00`, `Jeudi 16:00-16:30`, `Vendredi 13:00-13:30`], answer: 0,
      explain: `Безопасность пт 11:30–12:15 (в чт 13:00 аудио ещё не протестировано). Директор должна успеть после брифинга и до 16:00 → брифинг 14:00, директор 15:00. Вопрос составлен по письмам.` },
    { prompt: `Quel créneau doit être retenu pour la vérification finale de la directrice ?`,
      options: [`Vendredi 15:00-15:30`, `Vendredi 16:30-17:00`, `Vendredi 14:30-15:00`, `Vendredi 16:00-16:30`], answer: 0,
      explain: `16:30 — уже после приезда кейтеринга (16:00). Остальные — не слоты директора. Вопрос составлен по письмам.` }
  ];

  /* ---------- Jugement situationnel ---------- */
  const S4 = [`Très inapproprié`, `Plutôt inapproprié`, `Plutôt approprié`, `Très approprié`];
  const P4 = `Évaluez la pertinence de cette réaction dans ce contexte.`;
  const P5 = `Quelle mesure prenez-vous dans ce cas ? Évaluez la mesure de « pas du tout d'accord (− −) » à « tout à fait d'accord (++) ».`;
  /* scale4 : réponse = note 1..4 ; scale5 : 0 = −−, 1 = −, 2 = +−, 3 = +, 4 = ++ */
  const mail = (d, de, a, obj, corps) => `<p><strong>Date :</strong> ${d}</p><p><strong>De :</strong> ${de}</p><p><strong>À :</strong> ${a}</p><p><strong>Objet :</strong> ${obj}</p>${corps}`;

  const conseiller = [
    { scale: 5, situation: mail(`21 septembre 2025`, `Ressources humaines – Administration centrale`, `M. Paul Wagner`, `Retards fréquents d'un collaborateur`,
        `<p>Bonjour Monsieur Wagner,</p><p>Un supérieur hiérarchique vous informe qu'un collaborateur arrive en retard presque tous les matins depuis deux semaines. Cette situation commence à perturber l'organisation de l'équipe et à créer des tensions entre collègues. Le supérieur souhaite savoir comment procéder.</p><p>Cordialement,<br>Ressources humaines</p>`),
      reactions: [
        [`J'organise un entretien avec le collaborateur pour comprendre les raisons de ses retards et trouver une solution adaptée.`, 4, [], `Эталон: диалог, понять причины, найти решение.`],
        [`Je propose de sanctionner immédiatement le collaborateur afin de donner un signal clair au reste de l'équipe.`, 0, [], `Санкция без разговора и выяснения причин — «−−».`],
        [`Je décide de ne rien entreprendre et de laisser la situation évoluer naturellement.`, 0, [], `Бездействие при явном ущербе команде — худший вариант.`]] },
    { scale: 4, situation: `<p>Un collègue doit répondre aujourd'hui à un usager sur le traitement fiscal d'une subvention et vous demande conseil. Ce sujet ne relève pas de votre expertise. La référente fiscale du service est joignable dans l'heure.</p>`,
      reactions: [
        [`Lui transmettre le nom et les coordonnées de la référente fiscale du service.`, 3, [], `Правильный канал без риска, но пассивнее, чем организовать разговор.`],
        [`Reconnaître vos limites et organiser avec lui un échange rapide avec la référente.`, 4, [], `Честность о границах + активная помощь к эксперту.`],
        [`Lui dire que ce n'est pas votre domaine et le laisser trouver lui-même le bon interlocuteur.`, 1, [], `Знаешь эксперта, но не говоришь — отказ в сотрудничестве.`],
        [`Donner votre meilleure estimation, en précisant qu'elle reste à confirmer par la référente.`, 2, [], `Совет вне компетенции, хотя эксперт доступен в течение часа.`]] },
    { scale: 4, situation: `<p>Vous êtes chargé d'études dans l'équipe du nouveau portail des démarches, organisée en cycles de deux semaines avec un point quotidien. Un collègue expérimenté refuse de participer aux points et livre son travail en fin de cycle, ce qui a déjà retardé une mise en production. Le chef de projet, qui n'a pas d'autorité hiérarchique sur ce collègue, vous demande conseil avant de lui parler.</p>`,
      reactions: [
        [`Lui conseiller d'écouter les réticences du collègue, puis de convenir avec lui de règles communes.`, 4, [], `Диалог → договорённость; у руководителя проекта нет иерархической власти.`],
        [`Lui conseiller de signaler le collègue à son chef de service avant toute discussion avec l'intéressé.`, 2, [], `Эскалация допустима, но после разговора, а не до.`],
        [`Lui conseiller de tolérer la méthode du collègue en lui fixant des échéances de livraison plus strictes.`, 2, [3], `Полумера: корень проблемы не решён.`],
        [`Lui conseiller de retirer au collègue ses tâches pour les répartir entre les autres membres de l'équipe.`, 1, [], `Односторонняя мера, превышение полномочий, перегрузка команды.`]] },
    { scale: 4, situation: `<p>Chargé d'études, vous préparez avec un collègue le tableau statistique annuel que le service doit transmettre au ministère vendredi. Deux communes sur douze n'ont pas encore envoyé leurs chiffres. Votre collègue vous demande votre avis : il propose d'estimer leurs données à partir des tendances des années précédentes, sans le signaler, pour livrer un tableau complet. Le ministère accepte les tableaux partiels s'ils sont annotés.</p>`,
      reactions: [
        [`Lui conseiller d'estimer les chiffres manquants, l'écart avec la réalité devant rester faible.`, 1, [], `Выдать оценку за реальные данные — нарушение достоверности.`],
        [`Lui conseiller de reprendre les chiffres de l'an passé en signalant clairement cette reconduction.`, 2, [3], `Прозрачно, но вставляет устаревшие данные, хотя частичная таблица допустима.`],
        [`Lui conseiller de relancer les deux communes et de livrer à temps en signalant les manques.`, 4, [], `Опирается на законный путь из контекста: частичная таблица с пометкой.`],
        [`Lui conseiller de demander un report d'une semaine au ministère, sans lui en préciser la raison.`, 2, [], `Непрозрачно и не нужно.`]] },
    { scale: 4, situation: `<p>Vous êtes chargé d'études auprès du chef de la division des bourses d'études. Une réforme imprévue a doublé le nombre de demandes à traiter avant le 31 décembre. Les agents expriment leur fatigue et craignent de ne pas atteindre les objectifs annuels fixés par la direction. Votre chef doit présenter la situation à la direction lundi et vous demande comment l'aborder.</p>`,
      reactions: [
        [`Lui conseiller de présenter un plan de priorités chiffré et de demander un renfort temporaire.`, 4, [], `Прозрачность + конкретные решения.`],
        [`Lui conseiller de ne rien signaler avant la fin de l'année, pour ne pas paraître en difficulté.`, 1, [], `Сокрытие проблемы ради имиджа — красная линия.`],
        [`Lui conseiller de demander le report des objectifs annuels, sans proposer d'autres mesures.`, 2, [], `Честно, но пассивно: роль советника — предлагать меры.`],
        [`Lui conseiller d'annoncer que les objectifs seront tenus grâce à des heures supplémentaires.`, 1, [2], `Игнорирует усталость сотрудников, обещание без консультации.`]] },
    { scale: 4, situation: `<p>Un stagiaire de votre équipe vous demande conseil : son tuteur lui a confié la rédaction d'une note de synthèse, mais il ne comprend pas bien ce qu'on attend de lui et n'ose pas le dire.</p>`,
      reactions: [
        [`Lui conseiller de reformuler la demande par écrit et de la faire valider par son tuteur avant de commencer.`, 4, [], `Безопасный способ уточнить у правильного источника.`],
        [`Lui expliquer vous-même ce qu'on attend en général d'une note de synthèse et lui montrer un exemple.`, 3, [], `Помощь по существу, но общие ожидания вместо ожиданий тутора.`],
        [`Lui conseiller de rédiger une première version et d'attendre les corrections de son tuteur pour comprendre.`, 2, [], `Работа вслепую вместо уточнения.`],
        [`Lui proposer de rédiger la note à sa place, pour lui éviter de se mettre en difficulté devant son tuteur.`, 1, [], `Нечестно перед тутором, стажёр ничему не учится.`]] },
    { scale: 4, situation: `<p>Votre cheffe de service vous demande oralement d'accorder une aide d'urgence à une famille dont le logement vient de brûler, alors que le dossier ne remplit pas la condition de résidence de six mois prévue par le règlement. Elle invoque la détresse de la famille et le manque de temps. Le règlement permet au directeur d'accorder une dérogation sur demande motivée. Le directeur est joignable aujourd'hui.</p>`,
      reactions: [
        [`Soumettre d'abord le cas au service juridique pour vérifier s'il existe une autre base légale.`, 2, [], `Лишняя задержка: законный путь уже есть в регламенте.`],
        [`Accorder l'aide comme demandé, la détresse de la famille justifiant de s'écarter du règlement.`, 1, [], `Нарушение регламента; исключение даёт только директор.`],
        [`Lui demander une confirmation écrite de l'instruction avant d'accorder l'aide, pour couvrir le service.`, 2, [1], `Письменное указание не делает решение законным.`],
        [`Lui proposer de rédiger avec vous dès aujourd'hui une demande motivée de dérogation au directeur.`, 4, [], `Законная альтернатива + активная помощь, быстро.`]] }
  ];

  const client = [
    { scale: 5, situation: mail(`20 septembre 2025`, `Service logistique – Ministère de la Fonction publique`, `Mme Anne Keller`, `Problème de matériel technique pour une réunion`,
        `<p>Bonjour Madame Keller,</p><p>Demain matin doit se tenir une réunion importante avec plusieurs partenaires externes. La salle réservée n'est cependant pas équipée d'un projecteur, et l'un des participants doit faire une présentation PowerPoint. Le responsable demande une solution rapide afin d'éviter tout retard.</p><p>Cordialement,<br>Service logistique</p>`),
      reactions: [
        [`J'estime que la réunion peut se tenir sans projecteur et je laisse les participants s'adapter.`, 0, [1], `Проблема перекладывается на других перед важной встречей.`],
        [`Je contacte immédiatement le support technique pour réserver un projecteur mobile et vérifier l'installation avant la réunion.`, 4, [], `Проактивно, решает проблему и включает проверку.`]] },
    { scale: 4, situation: `<p>Vous êtes gestionnaire au service des allocations de vie chère. Au guichet, M. Kieffer conteste vivement le refus de son allocation, notifié la semaine dernière : ses revenus dépassent le plafond réglementaire de 4 %. La décision est conforme et vous n'avez pas le pouvoir de la modifier ; seule la commission de recours, saisie par écrit dans un délai de trois mois, peut la réexaminer. Plusieurs personnes attendent derrière lui.</p>`,
      reactions: [
        [`Lui remettre la notice sur les recours, qui précise le délai de trois mois, et l'inviter à la lire chez lui.`, 3, [], `Верная информация, но без диалога.`],
        [`Lui confirmer que le calcul est conforme au règlement et l'inviter à écrire au service s'il veut contester.`, 2, [1], `Неправильная инстанция и не назван срок.`],
        [`Transmettre sa réclamation au chef de service en lui indiquant qu'une révision reste tout à fait envisageable.`, 1, [], `Ложная надежда + неправильный канал.`],
        [`L'écouter, lui montrer le calcul qui fonde le refus, puis lui indiquer la commission de recours et son délai.`, 4, [], `Выслушать, объяснить, правильная инстанция и срок.`]] },
    { scale: 4, situation: `<p>Au bureau de la population, une usagère arrive paniquée : elle a perdu son portefeuille avec sa carte d'identité. La procédure prévoit de déclarer la perte à la police, puis de demander une nouvelle carte au bureau de la population, sur présentation de la déclaration de perte.</p>`,
      reactions: [
        [`La rassurer, lui expliquer les deux étapes et lui remettre la liste des pièces à fournir pour la nouvelle carte.`, 4, [], `Поддержка + процедура + практическая помощь.`],
        [`Commencer tout de suite la demande de nouvelle carte, la déclaration de perte pouvant être ajoutée plus tard.`, 1, [], `Обход процедуры.`],
        [`L'orienter vers le commissariat le plus proche pour déclarer la perte, en l'invitant à revenir ensuite.`, 3, [], `Правильный порядок, но без успокоения и списка документов.`],
        [`Lui conseiller d'attendre quelques jours, le portefeuille pouvant être retrouvé ou rapporté par un passant.`, 1, [2], `Риск мошенничества, совет не опирается на процедуру.`]] },
    { scale: 4, situation: `<p>Gestionnaire au service des allocations de rentrée, vous recevez Mme Kieffer au guichet. La date limite de dépôt est vendredi. Son dossier est complet, sauf l'attestation de son employeur, qui tarde à la lui remettre. Elle vous demande une dispense de cette pièce. Selon la procédure, seule la cheffe de service peut accorder une dispense ou un délai supplémentaire, sur demande écrite et motivée. La cheffe de service est présente cette semaine.</p>`,
      reactions: [
        [`Enregistrer le dossier sans l'attestation, en notant qu'elle sera fournie dès que possible.`, 1, [], `Фактическая отсрочка без полномочий.`],
        [`Lui donner les coordonnées de la cheffe de service pour qu'elle lui adresse elle-même un courrier.`, 3, [], `Правильный канал, но без активной помощи.`],
        [`Préciser que vous n'êtes pas habilité, recueillir sa demande motivée et la remettre à la cheffe.`, 4, [], `Честно о полномочиях + процедура + активная помощь.`],
        [`Lui expliquer que l'attestation est obligatoire et l'inviter à relancer son employeur avant vendredi.`, 2, [], `Умалчивает о законной возможности освобождения.`]] },
    { scale: 4, situation: `<p>Agent au service des aides sociales de la commune, vous recevez M. Hoffmann, dont la demande d'aide financière a été rejetée deux fois : ses revenus dépassent le plafond. Très mécontent, il annonce qu'il va saisir le médiateur. Le règlement prévoit que tout usager peut saisir le médiateur et qu'une demande n'est réexaminée que si des éléments nouveaux sont apportés.</p>`,
      reactions: [
        [`Lui proposer un réexamen par un collègue, sans élément nouveau, pour éviter la saisine.`, 1, [], `Нарушение регламента + мотив защитить себя.`],
        [`Lui indiquer qu'une saisine du médiateur ne changera rien, la décision ayant été confirmée.`, 1, [2], `Отговаривание от законного права.`],
        [`Prendre acte, lui donner les coordonnées du médiateur et réexpliquer le motif du rejet.`, 4, [], `Уважение права + помощь его реализовать + прозрачность.`],
        [`Lui réexpliquer calmement les critères d'attribution et le plafond qui ont motivé le rejet.`, 3, [], `Хорошо, но без помощи с медиатором.`]] },
    { scale: 4, situation: `<p>Gestionnaire au service des autorisations, vous recevez le représentant d'une association locale de protection de l'environnement. Il demande copie du rapport géologique joint à une demande d'autorisation de carrière, encore en cours d'instruction. Selon la procédure interne, toute demande de communication de document est soumise au service juridique, qui vérifie si le document est communicable, et une réponse écrite est due dans un délai d'un mois.</p>`,
      reactions: [
        [`Lui conseiller de revenir après la délivrance de l'autorisation, quand le dossier sera complet.`, 2, [1], `Мягкий отказ: запрос не зарегистрирован.`],
        [`Lui permettre de consulter le rapport sur place dès aujourd'hui, pour lui éviter d'attendre.`, 1, [], `Решаешь за юристов — раскрытие без проверки.`],
        [`Enregistrer sa demande, la soumettre au service juridique et lui indiquer le délai de réponse.`, 4, [], `Буквально процедура + срок.`],
        [`Lui répondre qu'un document lié à un dossier en cours d'instruction n'est pas communicable.`, 1, [], `Решаешь за юристов — отказ без проверки.`]] },
    { scale: 4, situation: `<p>À l'accueil du centre des impôts locaux, une usagère vous suggère d'ajouter au sol un marquage coloré vers les guichets, car elle s'est perdue deux fois dans le hall. Sa remarque vous paraît pertinente. La signalétique relève du service de la logistique du bâtiment, et l'administration tient un registre des suggestions des usagers, avec une réponse écrite sous un mois.</p>`,
      reactions: [
        [`Lui promettre que le marquage sera installé, puisque sa remarque vous paraît tout à fait pertinente.`, 1, [], `Обещание вне компетенции.`],
        [`La remercier, inscrire sa suggestion au registre et lui annoncer une réponse écrite sous un mois.`, 4, [], `Благодарность + реестр + срок.`],
        [`Transmettre directement sa suggestion au responsable de la logistique pour qu'il en étudie l'intérêt.`, 2, [3], `Правильный адресат, но в обход реестра.`],
        [`La remercier en expliquant que la signalétique relève d'un autre service et que vous n'y pouvez rien.`, 1, [2], `Ложное «ничего не могу»: реестр существует.`]] }
  ];

  const sjtItems = (list) => list.flatMap(s => s.reactions.map(([r, ans, acc, ex]) => ({
    type: 'sjt', scale: s.scale, text: s.situation + `<p><strong>${s.scale === 5 ? P5 : P4}</strong></p>`,
    prompt: s.scale === 5 ? P5 : P4, reaction: r, answer: ans, accept: acc, explain: ex
  })));

  /* ---------- Numérique & abstrait ---------- */
  const plus = (x, y, s, fill) => `<path d="M${x - s / 3} ${y - s}h${2 * s / 3}v${2 * s / 3}h${2 * s / 3}v${2 * s / 3}h-${2 * s / 3}v${2 * s / 3}h-${2 * s / 3}v-${2 * s / 3}h-${2 * s / 3}v-${2 * s / 3}h${2 * s / 3}z" fill="${fill}" stroke="#222" stroke-width="2"/>`;
  const cross = (x, y, s, fill) => `<g transform="rotate(45 ${x} ${y})">${plus(x, y, s, fill).replace(/<path /, '<path ')}</g>`;
  const rect = (x, y, w, h, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="#222" stroke-width="2"/>`;
  const circ = (x, y, r, fill) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="#222" stroke-width="2"/>`;
  const cell = (inner, w = 120) => `<svg viewBox="0 0 ${w} ${w}" width="${w}" height="${w}" role="img"><rect x="2" y="2" width="${w - 4}" height="${w - 4}" fill="#fff" stroke="#111" stroke-width="3"/>${inner}</svg>`;
  const DARK = '#3b3b3b', GREY = '#a9a6a1', WHITE = '#fff';
  const matrix = `<div class="matrix">` +
    cell(plus(28, 92, 12, DARK) + rect(52, 85, 34, 14, WHITE)) +
    cell(rect(22, 20, 32, 14, DARK) + plus(82, 27, 12, WHITE)) +
    cell(cross(92, 32, 12, GREY) + circ(92, 90, 13, WHITE)) +
    `<svg viewBox="0 0 120 120" width="120" height="120"><rect x="2" y="2" width="116" height="116" fill="#fff" stroke="#111" stroke-width="3"/><text x="60" y="84" text-anchor="middle" font-size="72" font-weight="700" fill="#111">?</text></svg>` +
    `</div>`;
  const abstractOptions = [
    cell(circ(92, 30, 13, GREY) + cross(92, 90, 12, WHITE)),
    cell(circ(30, 30, 13, WHITE) + cross(30, 90, 12, GREY)),
    cell(circ(30, 30, 13, GREY) + cross(30, 90, 12, WHITE)),
    cell(circ(60, 30, 13, WHITE) + cross(60, 90, 12, GREY))
  ];

  const mini = [
    { prompt: `Un bus parcourt 900 km en 10 heures. Quelle est sa vitesse moyenne en km/h ?`,
      options: [`85 km/h`, `95 km/h`, `90 km/h`, `100 km/h`, `105 km/h`], answer: 2,
      explain: `900 / 10 = 90 км/ч.` },
    { prompt: `Complétez cette séquence.`, figure: matrix, options: abstractOptions, answer: 2, optionsAreFigures: true,
      explain: `По первому ряду: фигуры меняются местами, цвет привязан к позиции, пара зеркально переносится (снизу наверх). В нижнем ряду пара справа → в ответе слева, сверху серый круг, снизу белый крест.` }
  ];


  /* ---------- Численное рассуждение: казино (на русском) ---------- */
  const VNI = [`Верно`, `Неверно`, `Невозможно определить`];
  const tbl = (head, rows, cls = '') => `<table class="data ${cls}"><thead><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr${r.total ? ' class="total"' : ''}>${(r.c || r).map((c, k) => k === 0 ? `<td>${c}</td>` : `<td class="num">${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  const Y3 = ['2018', '2017', '2016'];
  const casinoHTML =
    `<p>Данные относятся к группе, управляющей казино. Суммы в таблицах указаны в тысячах евро по состоянию на 31 октября, операционные расходы — в миллионах евро (млн €), общие расходы — в миллионах евро.</p>` +
    `<h3>Финансы</h3>` +
    tbl(['Казино, тыс. €', ...Y3], [
      ['Валовой доход от игр против заведения и клубных игр', '114 552', '109 642', '96 179'],
      ['Валовой доход от спортивных ставок', '15 759', '10 075', '9 146'],
      ['Валовой доход от игровых автоматов', '508 421', '519 068', '530 434'],
      { total: 1, c: ['ИТОГО валовой доход от игр (ВДИ)', '638 732', '638 784', '635 759'] },
      ['Отчисления (налоги и сборы с игр)', '318 057', '317 978', '318 537'],
      ['В % от ВДИ', '49,8 %', '49,8 %', '50,1 %'],
      { total: 1, c: ['ЧИСТЫЙ ДОХОД ОТ ИГР', '320 675', '320 807', '317 222'] },
      ['Количество казино', '43', '43', '43'],
      ['в том числе казино во Франции', '39', '39', '39'],
      ['Количество игровых автоматов во Франции', '5 113', '5 112', '5 074']
    ]) +
    `<h3>Финансовая структура</h3>` +
    tbl(['Активы, тыс. €', ...Y3], [
      ['Внеоборотные активы', '553 618', '530 292', '511 227'],
      ['Оборотные активы', '168 487', '168 191', '194 465'],
      { total: 1, c: ['ИТОГО АКТИВЫ', '722 105', '698 583', '705 692'] }
    ]) +
    tbl(['Пассивы, тыс. €', ...Y3], [
      ['Собственный капитал, доля Группы', '349 068', '343 409', '310 962'],
      ['Доля миноритарных акционеров', '22 859', '24 509', '24 197'],
      ['Итого собственный капитал', '371 926', '367 918', '335 159'],
      ['Итого долгосрочные обязательства', '184 922', '178 274', '214 158'],
      ['Итого краткосрочные обязательства', '165 257', '152 391', '156 375'],
      { total: 1, c: ['ИТОГО ПАССИВЫ', '722 105', '698 583', '705 692'] }
    ]) +
    `<h3>Персонал по возрасту (распределение, %)</h3>` +
    tbl(['Возраст', '2016', '2017'], [
      ['Младше 25 лет', '16 %', '14 %'], ['25–34 года', '25 %', '27 %'], ['35–44 года', '26 %', '25 %'],
      ['45–54 года', '22 %', '24 %'], ['55 лет и старше', '10 %', '10 %']
    ]) +
    `<h3>Персонал по географическим зонам (распределение, %)</h3>` +
    tbl(['Зона', '2016', '2017'], [
      ['Франция', '94 %', '92 %'], ['Еврозона (без Франции)', '2 %', '2 %'], ['Вне еврозоны', '4 %', '5 %']
    ]) +
    `<h3>Операционные расходы, млн €</h3>` +
    tbl(['Статья', ...Y3], [
      ['Закупки и внешние расходы', '146,9', '134,6', '133,5'],
      ['Налоги и сборы', '17,0', '17,9', '18,0'],
      ['Расходы на персонал', '175,4', '173,0', '168,4'],
      ['Амортизация и обесценение основных средств', '40,2', '37,6', '35,5'],
      ['Прочие текущие операционные доходы и расходы', '4,7', '7,4', '8,5'],
      { total: 1, c: ['Итого', '384,2', '370,5', '363,9'] }
    ]) +
    `<h3>Общие расходы, млн € (линейный график)</h3>` +
    tbl(['Статья', '2016', '2017', '2018', 'Прогноз 2019'], [
      ['Закупка товаров', '3,38', '2,678', '1,553', '3,802'],
      ['Зарплаты и оклады', '3,93', '4,011', '2,808', '3,546'],
      ['Социальные отчисления', '2,22', '2,055', '1,846', '2,489'],
      ['Прочие расходы', '1,296', '1,27', '1,194', '1,954']
    ]) +
    `<h3>Распределение персонала (количество человек, круговые диаграммы)</h3>` +
    tbl(['Категория', '2016', '2017', '2018'], [
      ['Руководящие специалисты (cadres)', '567', '812', '846'],
      ['Мастера, линейные руководители (agents de maîtrise)', '354', '157', '262'],
      ['Служащие (employés)', '2 432', '2 546', '3 023'],
      ['Рабочие (ouvriers)', '174', '280', '135']
    ]);

  const casinoQ = [
    [`Совокупная доля руководящих специалистов, мастеров и рабочих в 2018 году была выше, чем в 2017 году.`, 1, `2017: (812+157+280)/3795 = 32,9 %; 2018: (846+262+135)/4266 = 29,1 %. Доля снизилась.`],
    [`Доля расходов на персонал увеличивалась каждый год с 2016 по 2018.`, 1, `46,3 % → 46,7 % → 45,7 %. В 2018 доля упала, хотя сумма выросла. «Доля» — не сумма.`],
    [`Количество руководящих специалистов будет наибольшим в 2019 году.`, 2, `Данных о численности за 2019 год нет.`],
    [`Доля миноритарных акционеров превышает долю Группы (мажоритарную) в 2018 году.`, 1, `22 859 против 349 068.`],
    [`Доля мастеров в 2017 году составляла менее 5 % от общего числа работников Группы.`, 0, `157/3795 = 4,1 %.`],
    [`Доля сотрудников старше 55 лет оставалась стабильной в течение трёх лет.`, 2, `Данные есть только за 2016 и 2017 годы.`],
    [`Расходы на персонал вместе с налогами и сборами в 2017 году составляют больше половины всех операционных расходов этого года.`, 0, `173,0 + 17,9 = 190,9 > 370,5 / 2 = 185,25.`],
    [`Доля служащих в 2016 году составляла 69 % от общего числа работников Группы.`, 0, `2432/3527 = 68,95 % ≈ 69 %.`],
    [`Согласно линейному графику, сумма общих расходов в 2016 году превышает 10 млн евро.`, 0, `3,93 + 3,38 + 2,22 + 1,296 = 10,83 млн €.`],
    [`Разница между прочими расходами в 2017 и в 2016 году составляет 26 000 000 евро.`, 1, `1,296 − 1,27 = 0,026 млн € = 26 000 €, а не 26 млн.`],
    [`Валовой доход от игр против заведения и клубных игр вырос на 4,48 % с 2017 по 2018 год.`, 0, `(114 552 − 109 642)/109 642 = 4,48 %.`],
    [`В 2017 году число сотрудников, работающих за пределами Франции, было больше, чем в 2016 году.`, 0, `6 % × 3527 ≈ 212; 8 % × 3795 ≈ 304.`],
    [`Социальные отчисления увеличивались каждый год с 2016 по 2019 (с учётом прогноза).`, 1, `2,22 → 2,055 → 1,846: снижение до 2019.`],
    [`С 2016 по 2018 год собственный капитал (доля Группы) вырос более чем на 50 000 €.`, 0, `+38 106 тыс. € ≈ 38 млн € — таблица в тысячах евро.`],
    [`Разница в общих операционных расходах между 2017 и 2018 годом составляет 13,7 €.`, 1, `Разница 13,7 млн €, а не 13,7 €.`],
    [`Валовой доход от спортивных ставок вырос более чем на 50 % с 2017 по 2018 год.`, 0, `15 759/10 075 = +56,4 %.`],
    [`Закупки и внешние расходы выросли более чем на 10 % с 2017 по 2018 год.`, 1, `146,9/134,6 = +9,1 %.`],
    [`В 2017 году сотрудники в возрасте от 25 до 44 лет составляли больше половины персонала.`, 0, `27 % + 25 % = 52 %.`],
    [`Оборотные активы сократились более чем на 10 % с 2016 по 2017 год.`, 0, `168 191/194 465 = −13,5 %.`],
    [`Согласно линейному графику, зарплаты и оклады — крупнейшая статья каждый год с 2016 по 2019 (с учётом прогноза).`, 1, `В прогнозе 2019 закупка товаров (3,802) больше зарплат (3,546).`],
    [`В 2018 году большинство персонала Группы работало во Франции.`, 2, `Географических данных за 2018 год нет.`],
    [`В 2018 году доход от игровых автоматов составляет более 80 % от общего валового дохода от игр.`, 1, `508 421/638 732 = 79,6 %.`],
    [`Общие операционные расходы выросли более чем на 5 % с 2016 по 2018 год.`, 0, `384,2/363,9 = +5,6 %.`],
    [`В 2018 году руководящие специалисты составляли более 20 % от общего числа работников Группы.`, 1, `846/4266 = 19,8 %.`],
    [`Чистая прибыль Группы выросла с 2017 по 2018 год.`, 2, `Чистой прибыли в данных нет (чистый доход от игр ≠ чистая прибыль).`],
    [`В 2018 году среднее количество игровых автоматов на одно казино во Франции превышает 130.`, 0, `5113/39 = 131,1.`],
    [`Прочие текущие операционные доходы и расходы сократились более чем вдвое с 2017 по 2018 год.`, 1, `7,4/4,7 = 1,57 — меньше чем в 2 раза.`],
    [`С 2016 по 2017 год доля персонала, работающего вне еврозоны, выросла на 25 %.`, 0, `4 % → 5 %: +1 процентный пункт = +25 % в относительном выражении. Ловушка «пункты или проценты».`],
    [`Долгосрочные обязательства увеличивались каждый год с 2016 по 2018.`, 1, `214 158 → 178 274 → 184 922: в 2017 снижение.`],
    [`Согласно линейному графику, сумма общих расходов по прогнозу на 2019 год превышает 11 млн евро.`, 0, `3,802 + 3,546 + 2,489 + 1,954 = 11,79 млн €.`],
    [`Количество игровых автоматов за пределами Франции выросло с 2017 по 2018 год.`, 2, `Дано только количество автоматов во Франции.`],
    [`Количество рабочих сократилось более чем на 50 % с 2017 по 2018 год.`, 0, `135/280 = −51,8 %.`],
    [`Отчисления в 2018 году выше, чем в 2016 году.`, 1, `318 057 < 318 537.`],
    [`В 2016 году амортизация и обесценение составляли менее 10 % от общих операционных расходов.`, 0, `35,5/363,9 = 9,8 %.`],
    [`Доля сотрудников 45–54 лет в 2018 году была выше, чем в 2017 году.`, 2, `Возрастных данных за 2018 год нет.`],
    [`В 2018 году средний валовой доход от игр на одно казино превышает 15 млн евро.`, 1, `638 732/43 = 14 854 тыс. € ≈ 14,85 млн €.`],
    [`В 2018 году расходы на персонал превышают сумму закупок и внешних расходов и налогов и сборов.`, 0, `175,4 > 146,9 + 17,0 = 163,9.`],
    [`Количество мастеров сокращалось каждый год с 2016 по 2018.`, 1, `354 → 157 → 262: в 2018 рост.`],
    [`В 2018 году итоговый собственный капитал составляет более половины всех пассивов.`, 0, `371 926/722 105 = 51,5 %.`],
    [`Прогноз на 2019 год по прочим расходам будет выполнен.`, 2, `Выполнение прогноза из данных не следует.`],
    [`Согласно линейному графику, в 2018 году социальные отчисления составляли менее 60 % от зарплат и окладов.`, 1, `1,846/2,808 = 65,7 %.`],
    [`В 2018 году казино за пределами Франции составляли менее 10 % от общего количества казино.`, 0, `(43 − 39)/43 = 9,3 %.`],
    [`Количество казино во Франции увеличилось с 2016 по 2018 год.`, 1, `39 каждый год.`],
    [`Средняя зарплата руководящих специалистов выросла с 2017 по 2018 год.`, 2, `Данных о зарплатах по категориям нет.`],
    [`Чистый доход от игр увеличивался каждый год с 2016 по 2018.`, 1, `320 807 → 320 675: в 2018 снижение.`]
  ];
  const casinoItems = casinoQ.map(([p, a, e]) => ({ type: 'mcq', text: casinoHTML, prompt: p, options: VNI, answer: a, explain: e }));
  const casinoIntro = (n) => `<p>Слева приведены данные группы, управляющей казино. Для каждого утверждения выберите ответ, опираясь только на эти данные.</p><p><strong>Верно</strong> — утверждение следует из данных. <strong>Неверно</strong> — данные ему противоречат. <strong>Невозможно определить</strong> — данных недостаточно (нет года, нет показателя, прогноз).</p><p>Следите за единицами измерения: тысячи евро, миллионы евро, проценты. ${n} вопросов, около минуты на вопрос.</p>`;

  window.TESTS = [
    { id: 'scales', title: `Scales Verbal — L'intelligence artificielle`, minutes: 12, kind: 'Raisonnement verbal',
      intro: `<p>Dans ce test, vous devez analyser rapidement plusieurs courts textes présentés les uns à la suite des autres.</p><p><strong>Objectif :</strong> pour chaque question, trouvez l'information pertinente dans le bon texte afin de déterminer si l'affirmation est vraie, fausse ou indéterminée selon le contenu fourni.</p><p>Tous les textes sont accessibles à gauche des questions. 49 questions en 12 minutes, soit moins de 15 secondes par question.</p>`,
      items: scalesQ.map(([p, a, e]) => ({ type: 'mcq', text: scalesHTML, prompt: p, options: VFI, answer: a, explain: e })) },
    { id: 'verbal', title: `Raisonnement verbal`, minutes: 12, kind: 'Raisonnement verbal',
      intro: `<p>Chaque question présente un court texte administratif. Choisissez la réponse qui découle strictement du texte, sans connaissances extérieures.</p><p>14 questions.</p>`,
      items: verbal.map(v => ({ type: 'mcq', cat: v.cat, text: `<p>${v.text}</p>`, prompt: v.prompt, options: v.options, answer: v.answer, explain: v.explain })) },
    { id: 'planning', title: `Test de capacité de planification`, minutes: 12, kind: 'Planification',
      intro: `<p>Vous êtes assistant(e) administratif(ve) et devez organiser la préparation d'une fête d'entreprise. Utilisez l'agenda déjà confirmé et la boîte de réception pour répondre à chaque question.</p><p>Tenez compte des durées, des disponibilités de chaque interlocuteur, de vos horaires de travail, des dépendances entre les tâches et des délais.</p><p>8 questions.</p>`,
      items: planning.map(q => ({ type: 'mcq', text: planningHTML, prompt: q.prompt, options: q.options, answer: q.answer, explain: q.explain, optionsAreHTML: true })) },
    { id: 'sjt-conseiller', title: `Test de jugement situationnel — Conseiller`, minutes: 14, kind: 'Jugement situationnel',
      intro: `<p>Chaque page présente une situation professionnelle et une réaction possible. Évaluez la pertinence de la réaction sur l'échelle proposée.</p><p>Il n'y a pas une seule bonne réaction par situation : chaque réaction est notée séparément.</p>`,
      items: sjtItems(conseiller) },
    { id: 'sjt-client', title: `Test de jugement situationnel — Servir le client-usager`, minutes: 13, kind: 'Jugement situationnel',
      intro: `<p>Chaque page présente une situation d'accueil ou de service à l'usager et une réaction possible. Évaluez la pertinence de la réaction sur l'échelle proposée.</p><p>Chaque réaction est notée séparément.</p>`,
      items: sjtItems(client) },
    { id: 'mini', title: `Raisonnement numérique et abstrait — exemples`, minutes: 3, kind: 'Numérique / abstrait',
      intro: `<p>Deux questions d'exemple : une question de raisonnement numérique et une matrice de raisonnement abstrait.</p>`,
      items: mini.map(q => ({ type: 'mcq', prompt: q.prompt, figure: q.figure, options: q.options, answer: q.answer, explain: q.explain, optionsAreHTML: !!q.optionsAreFigures, figures: !!q.optionsAreFigures })) },
    { id: 'num-casino-1', title: `Численное рассуждение — Казино, часть 1`, minutes: 15, kind: 'Numérique',
      intro: casinoIntro(15), items: casinoItems.slice(0, 15) },
    { id: 'num-casino-2', title: `Численное рассуждение — Казино, часть 2`, minutes: 30, kind: 'Numérique',
      intro: casinoIntro(30), items: casinoItems.slice(15) }
  ];
  window.SCALE4 = S4;
})();
