'use client';

import { useState, useEffect } from "react";
import Slider from './Slider';
import { useAppointments, AppointmentInfoModal } from './Appointments';

// Composant SVG d'attention pour les tarifs spéciaux
function AttentionIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 36 36"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#cd7c25"
      role="img"
      aria-label="Attention"
    >
      <title>Attention - Tarif spécial</title>
      <g strokeWidth="0" />
      <g strokeLinecap="round" strokeLinejoin="round" />
      <g>
        <g fillRule="nonzero">
          <path d="M18,0 C27.94113,0 36,8.058875 36,18 C36,27.941125 27.94113,36 18,36 C8.05887,36 0,27.941125 0,18 C0,8.058875 8.05887,0 18,0 Z M18,2 C9.16344,2 2,9.163444 2,18 C2,26.836556 9.16344,34 18,34 C26.83656,34 34,26.836556 34,18 C34,9.163444 26.83656,2 18,2 Z M18,24 C18.55228,24 19,24.447715 19,25 C19,25.552285 18.55228,26 18,26 C17.44772,26 17,25.552285 17,25 C17,24.447715 17.44772,24 18,24 Z M18,10 C18.55228,10 19,10.447715 19,11 L19,21 C19,21.552285 18.55228,22 18,22 C17.44772,22 17,21.552285 17,21 L17,11 C17,10.447715 17.44772,10 18,10 Z" />
        </g>
      </g>
    </svg>
  );
}

interface ConsultationContent {
  intro: string;
  listTitle?: string;
  listItems?: Array<{ title: string; description: string }>;
  conclusion?: string;
}

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image: string;
  altText: string;
  content: ConsultationContent;
  price: string;
  secondaryPrice?: {
    value: string;
    label: string;
    icon: React.ReactElement;
  } | null;
  onShowAppointmentInfo: () => void;
}

function ConsultationModal({
  isOpen,
  onClose,
  title,
  image,
  altText,
  content,
  price,
  secondaryPrice,
  onShowAppointmentInfo,
}: ConsultationModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 400);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isAnimating ? "modal-entering" : "modal-exiting"}`}
      onClick={handleClose}
      onKeyDown={(e) => e.key === "Escape" && handleClose()}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={handleClose}>
          ×
        </button>
        <div className="modal-consultation">
          <div className="modal-image-section">
            <img src={image} alt={altText} />
            <h3>{title}</h3>
            <div className="modal-price">
              <span className="price-label">Tarif :</span>
              <span className="price-value">{price}</span>
            </div>
            {secondaryPrice && (
              <div className="modal-secondary-price">
                <div className="secondary-price-icon">
                  {secondaryPrice.icon}
                </div>
                <div className="secondary-price-content">
                  <span className="secondary-price-value">
                    {secondaryPrice.value}
                  </span>
                  <span className="secondary-price-label">
                    {secondaryPrice.label}
                  </span>
                </div>
              </div>
            )}
            <button
              type="button"
              className="modal-contact-btn"
              onClick={() => {
                handleClose();
                setTimeout(() => onShowAppointmentInfo(), 400);
              }}
            >
              Prendre rendez-vous
            </button>
          </div>
          <div className="modal-text-section">
            <p>{content.intro}</p>

            {content.listTitle && (
              <>
                <p>
                  <strong>{content.listTitle}</strong>
                </p>
                {content.listItems && (
                  <ul>
                    {content.listItems.map((item, index) => (
                      <li key={`${item.title}-${index}`}>
                        <strong>{item.title} :</strong> {item.description}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}

            {content.conclusion && <p>{content.conclusion}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// Props pour le composant principal
interface ConsultationsProps {
  onScrollToContact?: () => void;
  showSlider?: boolean;
  className?: string;
}

// Composant principal des consultations
export default function Consultations({
  onScrollToContact,
  showSlider = true,
  className = "",
}: ConsultationsProps) {
  const [selectedConsultation, setSelectedConsultation] = useState<
    number | null
  >(null);

  // Utilisation du hook pour les rendez-vous
  const {
    showAppointmentInfo,
    openAppointmentInfo,
    closeAppointmentInfo,
    confirmAppointment,
  } = useAppointments(onScrollToContact);

  // Données des consultations
  const whichImages = [
    "petite_enfance_3.webp",
    "enfants_4.webp",
    "adolescents_5.webp",
    "adultes_6.webp",
    "familles_7.webp",
    "professionnels_14.webp",
  ];

  const whichAltTexts = [
    "Périnatalité",
    "Enfants",
    "Adolescents",
    "Adultes",
    "Familles",
    "Professionnels",
  ];

  const whichTitle = [
    "Périnatalité",
    "Enfants",
    "Adolescents",
    "Adultes",
    "Familles",
    "Professionnels",
  ];

  const consultContent: ConsultationContent[] = [
    // Petite enfance
    {
      intro:
        "Vouloir puis attendre et accueillir un enfant ne sont pas des étapes anodines dans la vie d'un futur parent. Ces périodes soulèvent à minima de nombreuses questions et préoccupations. En tant que futurs ou jeunes parents, ou bien même parents avertis; vous pouvez solliciter l'aide d'un psychologue pour traverser ces moments clés de votre vie familiale et de celle de votre enfant.",
      listTitle: "Les motifs de consultation peuvent être :",
      listItems: [
        {
          title: "Autour de l'arrivée du bébé",
          description:
            "questions sur la parentalité, difficulté à avoir un enfant, processus de PMA, inquiétudes…",
        },
        {
          title: "Durant la grossesse",
          description:
            "annonce d'une maladie, deuil familial, grossesse difficile, fausse couche, déni de grossesse, dépression…",
        },
        {
          title: "Après la naissance",
          description:
            "accouchement traumatique, dépression post-partum, accueil difficile de l'enfant dans la famille, inquiétudes liées au développement du bébé (éveil, motricité, communication…), trouble du sommeil ou de l'alimentation du nourrisson...",
        },
      ],
      conclusion:
        "En fonction de l'âge de votre bébé, l'espace de consultation sera aménagé pour l'accueillir dans les meilleures conditions (tapis de jeu, coussins au sol…)",
    },
    // Enfants
    {
      intro:
        "Vous sentez que votre enfant ne va pas bien sans pouvoir mettre des mots dessus; ou bien il présente des symptômes et comportements qui vous interrogent; ou encore des proches ou l'école vous ont avertis de soucis ou difficultés concernant votre enfant: il s'agit d'autant de raisons valables pour consulter un psychologue.",
      listTitle:
        "Pour un enfant, les motifs de consultation peuvent être d'ordre :",
      listItems: [
        {
          title: "Relationnel",
          description:
            "difficultés de séparations, phobie sociale, repli sur soi, harcèlement scolaire, trouble oppositionnel, conflit dans la fratrie, manque d'empathie, manque d'autonomie…",
        },
        {
          title: "Affectif",
          description:
            "peurs, phobies, anxiété, trouble du sommeil, gestion des émotions, traumatisme…",
        },
        {
          title: "Comportemental",
          description:
            "agitation, hyperactivité, déficit attentionnel, boulimie, anorexie, énurésie, encoprésie…",
        },
        {
          title: "Cognitif",
          description:
            "retard ou trouble du langage, troubles des apprentissages…",
        },
      ],
      conclusion:
        "Dans l'approche développementale, l'ensemble de ces dimensions (relationnelle, affective, comportementale et cognitive) sont traitées en lien étroit. En fonction de la compréhension des difficultés de votre enfant, le soin peut se penser de différentes façons (psychothérapie par la parole, le jeu ou encore médiation cognitive). Il peut aussi s'avérer que la modalité choisie ensemble soit celle de la guidance parentale qui consiste en l'accompagnement des parents dans la compréhension de leur enfant et dans leur positionnement.",
    },
    // Adolescents
    {
      intro:
        "L'adolescence est une période de grands bouleversements qui peuvent mettre à rude épreuve la personne et ses proches. Lorsqu'il est perçu qu'un mal être, un trouble, une souffrance s'installe chez l'adolescent, il est nécessaire d'aller en parler auprès d'un psychologue. Il s'agit de mettre du sens, d'apaiser et de permettre à l'adolescent de surmonter les nombreux obstacles liés à la transition vers l'âge adulte.",
      listTitle:
        "Pour un adolescent, les motifs de consultation peuvent-être concernant :",
      listItems: [
        {
          title: "la scolarité",
          description:
            "choix d'orientation, difficultés (ou troubles) d'apprentissages, harcèlement scolaire…",
        },
        {
          title: "le comportement",
          description:
            "conduites à risque, troubles alimentaires, addictions (alcool, drogue, jeux vidéo, réseaux sociaux), scarifications, opposition, difficultés relationnelles, immaturité et manque d'autonomie…",
        },
        {
          title: "l'état affectif",
          description:
            "anxiété, stress, idées noires et pensées suicidaires, dépression, trouble de l'humeur",
        },
        {
          title: "la construction identitaire",
          description:
            "orientation sexuelle, construction du genre, questionnement sur la personnalité…",
        },
      ],
      conclusion:
        "Il peut être difficile de convaincre son adolescent de consulter un psychologue. Nous pouvons en parler si besoin. En fonction de l'âge et de la situation : une consultation initiale en présence des parents peut-être décidée.",
    },
    // Adultes
    {
      intro:
        "Adultes aussi nous traversons des périodes de crises, de changements, de remises en questions… ou bien certains éléments douloureux voir traumatiques de l'histoire personnelles et familiales refont surface. L'on peut percevoir un mal-être en famille, au travail ou encore seul face à soi-même. Cela peut entraîner jusqu'à l'apparition de symptômes ou de troubles spécifiques. Consulter un psychologue va permettre de mettre en mots et en sens ce que vous traversez, comprendre votre fonctionnement et ainsi de cheminer vers un mieux-être.",
      listTitle: "Les motifs de consultations peuvent être :",
      listItems: [
        {
          title: "Troubles de l'humeur",
          description: "irritabilité, excès de colère, violence…",
        },
        {
          title: "États dépressifs",
          description:
            "tristesse, dépression, idées noires, pensées suicidaires…",
        },
        {
          title: "Troubles anxieux",
          description:
            "anxiété massive, stress important, phobies, comportements compulsifs…",
        },
        {
          title: "Traumatismes",
          description: "accident, maladie longue ou grave…",
        },
        {
          title: "Événements de vie",
          description: "deuil, séparation familiale ou conjugale…",
        },
        {
          title: "Difficultés professionnelles",
          description: "épuisement professionnel, perte d'emploi…",
        },
        {
          title: "Conduites à risque",
          description: "addictions (alcool, drogue, écrans)",
        },
        {
          title: "Isolement social",
          description: "repli sur soi…",
        },
        {
          title: "Questionnements identitaires",
          description: "liés à l'histoire personnelle",
        },
      ],
    },
    // Familles
    {
      intro:
        "Les thérapies familiales s'adressent généralement aux parents et à leurs enfants et plus largement aux personnes vivant dans le même foyer (familles recomposées…). La famille est un système avec ses propres modalités de fonctionnement, son équilibre, ses alliances, ses coutumes mais aussi ses non-dits, ses tabous, ses interdits, ses pactes… Au sein du système familial chaque membre est à une place bien définie - consciemment ou non - avec son rôle et sa fonction.",
      listTitle: "Les motifs de consultations en famille peuvent être :",
      listItems: [
        {
          title: "Relations conflictuelles",
          description: "entre des membres",
        },
        {
          title: "Questions de place",
          description:
            "préoccupations et difficultés autour de la place d'un ou des membres",
        },
        {
          title: "Histoire familiale",
          description: "traumatismes, histoire familiale douloureuse",
        },
        {
          title: "Événements de vie",
          description:
            "deuil familial, séparation, rupture, recomposition de la famille",
        },
        {
          title: "Bouleversements",
          description: "changements importants dans la famille",
        },
        {
          title: "Maladie ou handicap",
          description: "annonce d'une maladie ou d'un handicap chez un membre…",
        },
      ],
      conclusion:
        "Un évènement familial ou personnel chez un membre, un cap, un changement important, un membre qui souffre… peuvent bouleverser l'équilibre familial et mettre la famille en crise. La visée d'une thérapie familiale est de permettre à chacun et à tous de redéfinir sa place et d'accéder à un nouvel équilibre familial qui ne soit plus souffrant. Au sein d'une thérapie familiale, la parole et le point de vue de chaque membre sont considérés avec la même importance. L'usage d'outils thérapeutiques peut être nécessaire pour lever des blocages ou aborder des sujets douloureux.",
    },
    // Professionnels
    {
      intro:
        "A titre individuel vous pouvez me solliciter pour une supervision si vous êtes psychologue du développement, étudiant en psychologie du développement, enseignant, éducateur… Les séances en visio sont possibles.",
      conclusion:
        "En équipe, pour une analyse de la pratique ou une formation autour de la psychologie du développement, je me déplace au sein de votre structure du Sud et de l'Ouest Lyonnais. Merci de me contacter afin de présenter votre projet (attentes, besoins, volumes horaires…).",
    },
  ];

  const consultPrices = [
    "60€ (45min - 1h)",
    "55€ (45min)",
    "55€ (45min)",
    "60€ (50min)",
    "80€ (1h15)",
    "60€ (50min)",
  ];

  // Prix secondaires optionnels (index correspond à consultPrices)
  const consultSecondaryPrices = [
    null, // Petite enfance - pas de prix secondaire
    {
      // Enfants - prix avec parent
      value: "60€",
      label: "(1h avec parents)",
      icon: <AttentionIcon />,
    },
    {
      // Adolescents - prix avec parents
      value: "60€",
      label: "(1h avec parents)",
      icon: <AttentionIcon />,
    },
    null, // Adultes - pas de prix secondaire
    null, // Familles - pas de prix secondaire
    {
      // Professionnels - formation d'équipe
      value: "Sur devis",
      label: "(formation d'équipe)",
      icon: <AttentionIcon />,
    },
  ];

  return (
    <section className={`which ${className}`}>
      <h2>Pour qui ?</h2>
      {showSlider && (
        <div className="which-slider">
          <Slider
            images={whichImages}
            altTexts={whichAltTexts}
            titles={whichTitle}
          />
        </div>
      )}
      <div className="which-grid">
        {whichImages.map((image, index) => (
          <div key={`${image}-${whichTitle[index]}`} className="which-card">
            <img src={image} alt={whichAltTexts[index]} loading="lazy" />
            <h3>{whichTitle[index]}</h3>
            <div className="which-card-overlay">
              <button
                type="button"
                className="consultation-link"
                onClick={() => setSelectedConsultation(index)}
              >
                Consultation <br /> & <br /> Tarif
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modale de consultation */}
      <ConsultationModal
        isOpen={selectedConsultation !== null}
        onClose={() => setSelectedConsultation(null)}
        title={
          selectedConsultation !== null ? whichTitle[selectedConsultation] : ""
        }
        image={
          selectedConsultation !== null ? whichImages[selectedConsultation] : ""
        }
        altText={
          selectedConsultation !== null
            ? whichAltTexts[selectedConsultation]
            : ""
        }
        content={
          selectedConsultation !== null
            ? consultContent[selectedConsultation]
            : consultContent[0]
        }
        price={
          selectedConsultation !== null
            ? consultPrices[selectedConsultation]
            : ""
        }
        secondaryPrice={
          selectedConsultation !== null
            ? consultSecondaryPrices[selectedConsultation]
            : null
        }
        onShowAppointmentInfo={openAppointmentInfo}
      />

      {/* Modale d'informations de rendez-vous */}
      <AppointmentInfoModal
        isOpen={showAppointmentInfo}
        onClose={closeAppointmentInfo}
        onConfirm={confirmAppointment}
      />
    </section>
  );
}