'use client'

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Consultations from './Consultations';

export default function HomePage() {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Cleanup des timeouts au démontage
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const scrollTop = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const scrollToBio = () => {
    const bioSection = document.querySelector(".bio");
    if (bioSection) {
      bioSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const scrollToConsultations = () => {
    window.location.href = "/consultation#bilans";
  };

  return (
    <div className="home">
      <div className="home-header">
        <div className="decalc">
          <h1>Jean-Marie Picolet</h1>
          <h2>Psychologue du Développement</h2>
          <h3>À Craponne</h3>
        </div>
        <button
          type="button"
          className="arrow-button"
          onClick={scrollToBio}
          onKeyDown={(e) => e.key === "Enter" && scrollToBio()}
          aria-label="Découvrir le profil de Jean-Marie Picolet"
        >
          <img src="chevron.webp" alt="" className="arrow" />
        </button>
      </div>
      <div className="container-home1">
        <section className="bio">
          <div className="bio-right">
            <h2>Qui est Jean-Marie Picolet ?</h2>
            <p>
              <span className="bold">Psychologue depuis 15 ans</span>, j'ai
              exercé en pédopsychiatrie et dans le médico-social avant de
              m'installer <span className="bold">en cabinet à Craponne</span>.
              Mon approche est <span className="it-bold">intégrative</span>,
              fondée sur des bases théoriques plurielles et complémentaires :{" "}
              <span className="bold-bot">
                psychodynamique, théorie de l'attachement, développement normal
                et pathologique, neuropsychologique et systémique.
              </span>
              <br />
              Mon <span className="bold">expérience</span> auprès d'
              <span className="bold">enfants</span>, d'
              <span className="bold">adolescents</span>, d'
              <span className="bold">adultes</span> et de{" "}
              <span className="bold">familles</span> m'a permis de développer
              une expertise sur une large variété de troubles et de
              problématiques psychiques.
              <br />
              Je vous accueille dans{" "}
              <span className="bold">un cadre bienveillant</span> et{" "}
              <span className="bold">sans jugement</span>, avec{" "}
              <span className="bold">une écoute attentive</span>. Qu'il s'agisse
              d'un <span className="it-bold">soutien ponctuel</span>, d'une{" "}
              <span className="it-bold">psychothérapie</span> individuelle ou
              familiale, d'une{" "}
              <span className="it-bold">médiation cognitive</span> ou d'un{" "}
              <span className="it-bold">bilan psychologique</span>, chaque
              accompagnement est adapté à votre histoire et vos spécificités.
            </p>
            <div className="link-about">
              <Link
                href="/about"
                className="en-savoir-plus-link"
                onClick={scrollTop}
              >
                <img src="chevron.webp" alt="en savoir plus" />
                <span className="en-savoir-plus-text">en savoir plus ...</span>
              </Link>
            </div>
          </div>
          <div className="bio-left">
            <img src="/Jm_Picolet_S.webp" alt="Jean-Marie Picolet, Psychologue du développement" />
            <div className="bio-overlay" />
          </div>
        </section>
      </div>
      <section className="container2">
        <p>
          <h3>
            Le contenu et la visée du soin sont construits avec vous, afin de :
          </h3>
          <div className="bold-bot">
            Surmonter une difficulté ou une période de transition
            <br /> Résoudre un conflit familial, social ou professionnel <br />{" "}
            Dépasser une crise ou un schéma répétitif
            <br /> Faciliter l'adaptation à un environnement
            <br /> Lever un blocage dans les apprentissages
            <br /> Soigner un trouble ou ses effets
          </div>
        </p>
      </section>

      <Consultations
        onScrollToContact={() => {
          setTimeout(() => {
            const footerForm = document.querySelector(".home-contact");
            if (footerForm) {
              const elementPosition =
                footerForm.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - 100;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });
            }
          }, 100);
        }}
      />

      <div className="container-home1">
        <section className="bilan">
          <div className="bilan-left">
            <h2>Les bilans</h2>
            <p>
              Qu'il s'agisse de la{" "}
              <span className="bold">demande initiale</span> ou que celle-ci
              émerge en <span className="bold">cours de thérapie</span>; un
              bilan psychologique permet une{" "}
              <span className="bold">évaluation</span> précise des
              <span className="it-bold">
                {" "}
                potentialités, limites et fonctionnement cognitif et/ou
                psycho-affectif
              </span>{" "}
              à un instant donné de la vie d'une personne. Un bilan peut être
              réalisé dans{" "}
              <span className="bold">une démarche diagnostique</span>{" "}
              <span className="it-bold">
                (TND, TSA, TDAH, Dys…, dépression, trouble de l'attachement…)
              </span>{" "}
              et/ou permettre d'étayer la réalisation d'un{" "}
              <span className="bold">dossier MDPH </span>
              (aménagements et orientations scolaires) ou encore de vous
              <span className="bold"> orienter vers les rééducations</span> les
              plus appropriées. Actuellement je propose plusieurs types de
              bilans à destination des{" "}
              <span className="it-bold">enfants de 2 à 17 ans</span>.
            </p>
            <div className="link-about">
              <Link
                href="/consultation"
                className="en-savoir-plus-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToConsultations();
                }}
              >
                <img src="chevron.webp" alt="en savoir plus" loading="lazy" />
                <span className="en-savoir-plus-text">en savoir plus ...</span>
              </Link>
            </div>
          </div>
          <div className="bilan-right">
            <img src="bilan_8.webp" alt="Bilan psychologique" />
          </div>
        </section>
      </div>
      <div className="home-bot">
        <div className="decalc-bot">
          <p>
            "Dans un cadre bienveillant et sécure,
            <br />
            réussir à mieux se connaître
            <br />
            pour cheminer vers un mieux être"
          </p>
        </div>
      </div>
    </div>
  );
}