'use client'

import Image from 'next/image';

export default function AboutPageContent() {
  const scrollToCursus = () => {
    const cursusSection = document.querySelector(".route");
    if (cursusSection) {
      const elementPosition =
        cursusSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 100; // Ajustement pour la navbar et le margin négatif

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="about">
      {/* Header avec image de fond */}
      <div className="about-header">
        <h1>Mon parcours professionnel</h1>
        <p className="subtitle">Psychologue du développement</p>
        <button
          type="button"
          className="arrow-button"
          onClick={scrollToCursus}
          onKeyDown={(e) => e.key === "Enter" && scrollToCursus()}
          aria-label="Découvrir mon cursus"
        >
          <Image src="/chevron.webp" alt="" className="arrow" width={20} height={20} />
        </button>
      </div>

      {/* Layout principal en deux colonnes */}
      <div className="about-main-layout">
        {/* Colonne de gauche - sections principales */}
        <div className="about-left-column">
          {/* Section parcours */}
          <div className="container-about1">
            <section className="route">
              <div className="route-left">
                <Image src="/Jm_Picolet_S.webp" alt="Psychologue clinicien" width={400} height={500} />
              </div>
              <div className="route-right" id="route-text">
                <button
                  type="button"
                  className="scroll-arrow scroll-up"
                  onClick={() => {
                    const element = document.getElementById("route-text");
                    if (element)
                      element.scrollBy({ top: -300, behavior: "smooth" });
                  }}
                  aria-label="Défiler vers le haut"
                >
                  <Image src="/chevron.webp" alt="" width={16} height={16} />
                </button>
                <button
                  type="button"
                  className="scroll-arrow scroll-down"
                  onClick={() => {
                    const element = document.getElementById("route-text");
                    if (element)
                      element.scrollBy({ top: 300, behavior: "smooth" });
                  }}
                  aria-label="Défiler vers le bas"
                >
                  <Image src="/chevron.webp" alt="" width={16} height={16} />
                </button>
                <h2>Mon cursus</h2>
                <div className="line" />
                <p>
                  <span className="bold">
                    Diplômé d'un Master 2 professionnel en psychologie
                  </span>{" "}
                  de la santé parcours psychologie du développement obtenu en
                  2010 à l'université Lyon 2, j'ai pratiqué mon métier dans le
                  secteur médico-social et hospitalier.{" "}
                  <span className="it-bold">
                    Spécialisé dans le développement socio-cognitif de l'enfant
                    et de l'adolescent, les troubles des apprentissages,
                    relationnels et comportementaux
                  </span>
                  ; mon parcours m'a permis d'élargir mes domaines de compétence
                  et de savoir-faire afin de proposer un soin intégratif et
                  adapté à chacun.{" "}
                </p>
                <p>
                  <span className="bold">
                    Les 10 années d'exercice en SESSAD - ITEP
                  </span>{" "}
                  mon amené à accompagner et prendre en charge des enfants,
                  adolescents, jeunes adultes et leur famille. Pour cela j'ai
                  été formé à{" "}
                  <span className="it-bold">l'approche systémique</span> ainsi
                  qu'aux <span className="it-bold">thérapies familiales</span>{" "}
                  sous diverses formes (psychanalytique et systémique).
                </p>
                <p>
                  Parallèlement, durant{" "}
                  <span className="bold">
                    15 ans en secteur de pédopsychiatrie
                  </span>{" "}
                  j'ai élargi ma clinique et mon expertise en accompagnant des
                  enfants et adolescents au sein de diverses structures (hôpital
                  de jour, centre d'accueil thérapeutique petite enfance, CMP).
                  J'ai été formé aux diverses{" "}
                  <span className="it-bold">médiations thérapeutiques</span>{" "}
                  individuelles et groupales, au diagnostic et à la prise en
                  charge de{" "}
                  <span className="it-bold">
                    l'autisme, à la thérapie d'échange et de développement…
                  </span>{" "}
                  Au sein de ce secteur hospitalier, nous avons créé et exercé
                  avec une collègue psychologue,{" "}
                  <span className="bold">
                    le Centre de Thérapie du développement
                  </span>{" "}
                  qui s'adressait aux enfants et adolescents pour des thérapies
                  d'après une{" "}
                  <span className="it-bold">approche néo-piagétienne</span>.{" "}
                </p>
                <p>
                  <span className="bold">La pratique des bilans</span>{" "}
                  (projectifs, piagétiens, psychométriques, neuropsychologiques)
                  comme outils pour{" "}
                  <span className="bold">
                    éclairer la clinique du patient et aider au diagnostic
                  </span>{" "}
                  m'a toujours accompagnée durant ces années.{" "}
                </p>
                <p>
                  Par ailleurs, j'ai également pu{" "}
                  <span className="bold">
                    former et superviser différents professionnels
                  </span>{" "}
                  (enseignants, éducateurs, infirmiers) et j'ai dispensé des
                  travaux dirigés pendant plusieurs années à destination des{" "}
                  <span className="bold">étudiants en psychologie</span> à
                  l'université Lyon 2.{" "}
                </p>
              </div>
            </section>
          </div>

          {/* Section cadre de travail */}
          <div className="working-section">
            <div className="working-container">
              <section className="working">
                <div className="working-text" id="working-text">
                  <button
                    type="button"
                    className="scroll-arrow scroll-up"
                    onClick={() => {
                      const element = document.getElementById("working-text");
                      if (element)
                        element.scrollBy({ top: -300, behavior: "smooth" });
                    }}
                    aria-label="Défiler vers le haut"
                  >
                    <Image src="/chevron.webp" alt="" width={16} height={16} />
                  </button>
                  <button
                    type="button"
                    className="scroll-arrow scroll-down"
                    onClick={() => {
                      const element = document.getElementById("working-text");
                      if (element)
                        element.scrollBy({ top: 300, behavior: "smooth" });
                    }}
                    aria-label="Défiler vers le bas"
                  >
                    <Image src="/chevron.webp" alt="" width={16} height={16} />
                  </button>
                  <h2>Mon cadre de travail</h2>
                  <div className="line" />
                  <p>
                    <span className="bold">
                      Le cadre des séances est sécure, bienveillant et neutre
                    </span>
                    . Le contenu de nos échanges et de notre travail est{" "}
                    <span className="bold">soumis à la confidentialité</span>.
                    C'est grâce à l'ensemble de ces règles et garanties que vous
                    pouvez avoir
                    <span className="bold">
                      {" "}
                      une parole libre sans vous sentir jugé
                    </span>
                    . Un mal-être, un symptôme, une difficulté, un blocage, une
                    addiction, un trouble spécifique… sont autant de{" "}
                    <span className="it-bold">
                      signes d'une souffrance psychologique
                    </span>{" "}
                    que je commencerai par accueillir afin de bien vous
                    comprendre.
                  </p>
                  <p>
                    A l'issue des premières séances durant lesquelles{" "}
                    <span className="it-bold">
                      nous nous représenterons votre problématique, vos
                      potentialités et limites,{" "}
                    </span>
                    <span className="bold">
                      nous définirons ensemble le rythme et la visée du soin
                    </span>{" "}
                    (soutien ponctuel, psychothérapie, médiation cognitive,
                    bilan) en fonction de vos besoins.{" "}
                  </p>
                  <p>
                    <span className="it-bold">L'alliance thérapeutique</span>{" "}
                    est primordiale pour le bon déroulement et la réussite des
                    séances.{" "}
                    <span className="bold">
                      Un psychologue doit donc se choisir
                    </span>
                    , vous pouvez à tout moment décider d'interrompre le
                    travail. Je peux vous orienter vers un(e) collègue si
                    nécessaire.{" "}
                  </p>
                  <p>
                    Au sein de mon cabinet à Craponne,{" "}
                    <span className="bold">je vous reçois en face à face</span>.
                    En fonction des personnes présentent, de vos âges et du
                    contenu des séances, l'espace sera aménagé pour répondre à
                    vos spécificités et{" "}
                    <span className="bold">
                      vous accueillir confortablement. Votre parole est au
                      centre
                    </span>{" "}
                    des séances mais celles-ci, au besoin, peuvent être{" "}
                    <span className="it-bold">
                      médiatisées par des outils spécifiques
                    </span>{" "}
                    (jeux, dessin, arts plastiques, photolangage, objets
                    flottants systémiques…).
                  </p>
                  <p>
                    En outre, comme tout psychologue, je suis soumis au{" "}
                    <span className="it-bold">
                      code de déontologie des psychologues
                    </span>{" "}
                    et <span className="bold">supervisé</span> de manière
                    régulière.{" "}
                  </p>
                  <p>
                    Par ailleurs, pour des raisons déontologiques, je n'adhère
                    pas au dispositif mon psy.{" "}
                  </p>
                </div>
                <div className="working-img">
                  <Image src="/cabinet2.webp" alt="Cabinet de consultation" width={500} height={600} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="working-insert">
        <h3>Pour bien comprendre</h3>
        <div className="insert-top">
          <div className="insert-left">
            <p>
              <span className="bold">Le diplôme de psychologue</span> est un
              diplôme d'État dont le titre est protégé et réglementé par le
              ministère de l'Enseignement supérieur et de la Recherche.
            </p>
            <p>
              Le diplôme est accessible seulement après un{" "}
              <span className="bold">Master2</span> en psychologie.
              Précédemment,
              <span className="bold">un numéro Adeli</span> régional était
              attribué à chaque psychologue détenteur du titre afin de{" "}
              <span className="bold">
                protéger les patients de tout exercice illégal
              </span>{" "}
              de la profession. Aujourd'hui, il est remplacé par{" "}
              <span className="bold">le numéro RPPS national</span> qui remplit
              la même fonction.
            </p>
            <p>
              <span className="it">
                Mon numéro RPPS est le 10009812438 (anciennement Adeli :
                019303460).
              </span>
            </p>
          </div>
          <div className="insert-right">
            <p>
              <span className="bold">
                Les psychologues ont le titre de psychothérapeute
              </span>{" "}
              par défaut car la psychothérapie est une des missions qu'ils
              exercent (Me concernant, il s'agit de la mission principale).
              Notre métier est de{" "}
              <span className="bold">soigner la souffrance psychologique </span>
              en prenant en compte l'individu dans sa globalité et son
              environnement. Nous apportons{" "}
              <span className="bold">un regard professionnel et extérieur</span>{" "}
              sur les situations de nos patients.{" "}
              <span className="bold">
                Il s'agit d'une expertise et d'un savoir-faire
              </span>{" "}
              qui permet au patient de cheminer en se questionnant.
            </p>
          </div>
        </div>
        <div className="insert-bot">
          <p>
            <span className="it">
              A contrario, il est possible d'obtenir le titre de
              psychothérapeute sans être psychologue mais ayant obtenu un
              diplôme, reconnue par l'état, spécifique à une méthode. Attention,
              certains utilisent le titre de psychopraticien pour proposer du
              soin psychologique sans avoir obtenu de diplôme reconnu par
              l'État.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}