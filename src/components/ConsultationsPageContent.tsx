'use client'

import { useState, useEffect } from "react";
import Consultations from "./Consultations";

export default function ConsultationsPageContent() {
  // Gérer le scroll vers l'ancre au chargement
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (window.location.hash === "#bilans") {
        const bilansSection = document.getElementById("bilans");
        if (bilansSection) {
          bilansSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="consultationPage home">
      <section className="consultationPage-top">
        <h1 className="consultations-title">CONSULTATIONS</h1>
        <Consultations
          onScrollToContact={() => {
            setTimeout(() => {
              const footerForm = document.querySelector(".home-contact");
              if (footerForm) {
                const elementPosition =
                  footerForm.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - 100;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: "smooth",
                });
              }
            }, 100);
          }}
        />
      </section>
      {/* Section Bilans */}
      <section className="bilans-section " id="bilans">
        <div className="decalc-bot">
          <div className="bilans-intro">
            <h2 className="bilans-title">BILANS</h2>
            <p>
              Les bilans proposés au sein de mon cabinet à Craponne s'adressent
              aux enfants de 2 ans à 17 ans. Un bilan comporte plusieurs temps :
            </p>
            <ol>
              <li>un premier entretien avec les parents</li>
              <li>
                une ou deux séances de passation du principal outil choisi
              </li>
              <li>une éventuelle séance pour des épreuves complémentaires.</li>
              <li>
                entre 3H et 4H de cotation, analyse et rédaction du compte
                rendu.
              </li>
              <li>un entretien de restitution.</li>
            </ol>
            <p>
              Le compte rendu précis et détaillé qui vous est remis lors de
              l'entretien de restitution peut comporter, si nécessaire, des
              pistes et propositions de prises en charge. Le tarif indiqué pour
              chaque bilan comprend l'ensemble des 5 étapes de celui-ci.
            </p>
          </div>
          <BilansCategories />
        </div>
      </section>
    </div>
  );
}

function BilansCategories() {
  const [openItems, setOpenItems] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const categories = [
    {
      key: "cognitif",
      title: "Bilan cognitif pour les enfants de 6 à 17 ans",
      content: (
        <>
          <p>
            La psychométrie (WISC V) permet d'évaluer le fonctionnement
            intellectuel en comparant les performances de l'enfant à des normes
            (et de calculer un QI). Un tel bilan permet de repérer les
            potentialités de votre enfant mais aussi ses difficultés et voir un
            trouble spécifique. Il permet d'accompagner la scolarité de l'enfant
            (demande d'aide, orientation, aménagements scolaires…) et de dégager
            des pistes de prises en charge adaptées (médiation, cognitive,
            rééducation orthophonique, psychomotrice, ergothérapie…). Si
            nécessaire, des épreuves complémentaires peuvent être proposées. A
            l'issue, un compte rendu précis et détaillé vous est remis lors de
            l'entretien de restitution.
          </p>
          <p>
            <strong>Les motifs pour un bilan cognitif peuvent être :</strong>
          </p>
          <ul>
            <li>Difficultés dans les apprentissages scolaires.</li>
            <li>Choix d'orientation scolaire.</li>
            <li>
              Suspicion d'un trouble spécifique (langage, dys…, déficit
              attentionnel).
            </li>
            <li>
              Suspicion d'un haut potentiel intellectuel ou d'une déficience.
            </li>
          </ul>
          <p>
            <strong>Tarif bilan cognitif : 270€</strong>
          </p>
        </>
      ),
    },
    {
      key: "piagétien",
      title: "Bilan opératoire logique piagétien",
      content: (
        <>
          <p>
            Certains enfants présentent des difficultés dans les apprentissages
            (mathématiques) et au quotidien sans pour autant souffrir d'un
            trouble spécifique. Auquel cas, il peut s'avérer nécessaire de
            vérifier le développement de la pensée logique. Un tel bilan permet
            de repérer le fonctionnement de votre enfant face à des situations
            nouvelles d'apprentissages et de réflexion ainsi que son niveau dans
            la construction de la pensée logique en fonction de son âge.
          </p>
          <p>
            <strong>Les motifs pour un bilan piagétien peuvent être :</strong>
          </p>
          <ul>
            <li>Difficultés dans les apprentissages mathématiques.</li>
            <li>Difficultés de repérage dans le temps,</li>
            <li>
              Difficultés dans des situations du quotidien (tâches, devoirs,
              jeux de sociétés…)
            </li>
          </ul>
          <p>
            <strong>Tarif bilan opératoire logique piagétien : 180€</strong>
          </p>
        </>
      ),
    },
    {
      key: "projectif",
      title: "Bilan projectif",
      content: (
        <>
          <p>
            Ce type de bilan peut être réalisé lorsque nous nous inquiétons
            particulièrement autour de la vie psychique et affective d'un enfant
            ou adolescent. A l'aide d'épreuves projectives, nous investiguons à
            travers le fonctionnement psychique de l'enfant (angoisses,
            mécanismes de défenses, expression et contrôle des affects…) pour
            éclairer là où les récits et la parole n'ont pu suffir.
          </p>
          <p>
            <strong>Les motifs pour un bilan projectif peuvent être :</strong>
          </p>
          <ul>
            <li>
              Besoin de comprendre les blocages, défenses, phobies, angoisses.
            </li>
            <li>
              Suspicion d'un trouble psychologique (trouble de l'attachement,
              dépression, état limite…).
            </li>
            <li>Suspicion d'un traumatisme non dit.</li>
          </ul>
          <p>
            <strong>Tarif bilan projectif : 180€</strong>
          </p>
        </>
      ),
    },
    {
      key: "autisme",
      title: "Bilan pré-diagnostic à l'autisme",
      content: (
        <>
          <p>
            Ce type de bilan s'adresse aux enfants dont le comportement et les
            difficultés font suspecter un Trouble du Spectre de l'Autisme (repli
            relationnel, retard de langage, particularités sensorielles,
            intérêts restreints…). Les épreuves et questionnaires proposés vous
            permettent de savoir si l'hypothèse d'un autisme chez votre enfant
            est valable. Par ailleurs, chaque personne souffrant d'autisme est
            différente, les tests permettent d'éclairer précisément le profil et
            le fonctionnement d'une personne atteinte d'un TSA ainsi que de
            fournir des pistes de prise en charge. Le diagnostic final doit
            ensuite être posé par un médecin.
          </p>
          <p>
            <strong>Tarif bilan pré-diagnostic à l'autisme : 210€</strong>
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="bilans-categories">
      {categories.map((cat, idx) => (
        <div className="bilan-block" key={cat.key}>
          <button
            type="button"
            className="bilan-btn"
            onClick={() => toggleItem(idx)}
          >
            {cat.title}
          </button>
          <div
            className="bilan-content"
            style={{
              maxHeight: openItems[idx] ? "2000px" : "0px",
              opacity: openItems[idx] ? 1 : 0,
              overflow: "hidden",
              transition: "all 0.5s ease-in-out",
              paddingTop: openItems[idx] ? "20px" : "0px",
              paddingBottom: openItems[idx] ? "20px" : "0px",
            }}
          >
            {cat.content}
          </div>
        </div>
      ))}
    </div>
  );
}