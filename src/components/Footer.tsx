'use client'

import emailjs from "@emailjs/browser";
import { type FormEvent, useState } from "react";
import Link from "next/link";
import { emailjsConfig } from "../config/emailjs";
import ScrollToContactButton from "./ScrollToContactButton";

export default function Footer() {
  // Scroll smooth vers le haut comme sur la HomePage
  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };
  const [formData, setFormData] = useState({
    nom: "",
    prénom: "",
    telephone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"" | "success" | "error">(
    "",
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Validation des variables d'environnement
    if (
      !emailjsConfig.serviceId ||
      !emailjsConfig.templateId ||
      !emailjsConfig.publicKey
    ) {
      console.error("Configuration EmailJS manquante");
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        nom: formData.nom,
        prenom: formData.prénom,
        email: formData.email,
        telephone: formData.telephone,
        message: formData.message,
        time: new Date().toLocaleString("fr-FR", {
          dateStyle: "long",
          timeStyle: "short",
        }),
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey,
      );

      setSubmitStatus("success");
      setFormData({
        nom: "",
        prénom: "",
        telephone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="home-contact">
      <div className="footer">
        <div className="footer-container">
          <div className="footer-container1">
            <h3 className="contact">Me contacter</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-line">
                <div className="form-row">
                  <label htmlFor="nom">Nom</label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    placeholder="Votre nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="prénom">Prénom</label>
                  <input
                    type="text"
                    id="prénom"
                    name="prénom"
                    placeholder="Votre prénom"
                    value={formData.prénom}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-line">
                <div className="form-row">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Votre adresse e-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <label htmlFor="telephone">Téléphone</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    placeholder="Votre numéro de téléphone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Envoi en cours..." : "Envoyer"}
              </button>

              {submitStatus === "success" && (
                <p className="success-message">Message envoyé avec succès !</p>
              )}
              {submitStatus === "error" && (
                <p className="error-message">
                  Erreur lors de l'envoi. Veuillez réessayer.
                </p>
              )}

            </form>
          </div>
          <div className="footer-container2">
            <div className="tel">
              <h3>Téléphone</h3>
              <p>06 24 16 23 86</p>
            </div>
            <div className="email">
              <h3>E-mail</h3>
              <p>JMPicolet.Psydev@outlook.fr</p>
            </div>

            <div className="adress">
              <h3>Adresse</h3>
              <p>35 rue Centrale</p>
              <p>69290 Craponne</p>
              <p className="adresse-small">Cabinet au RDC</p>
            </div>
            <div className="horaires">
              <h3>Horaires </h3>
              <p>Lundi - 11H00 - 20h30</p>
              <p>Mardi - 08H30 - 17h00</p>
              <p>Mercredi - 13H30 - 18h30</p>
              <p>Jeudi - 08H30 - 17h00</p>
              <p>Vendredi - 08H00 - 13h30</p>
            </div>
          </div>
        </div>
        <div className="footer-container3">
          <div className="iframe-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.123456789012!2d2.123456789012345!3d48.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f1234567890%3A0x1234567890abcdef!2s35%20rue%20Centrale%2C%2069290%20Craponne%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="500px"
              style={{
                border: "1px solid transparent",
                opacity: 1,
              }}
              allowFullScreen={true}
              loading="lazy"
              title="Localisation du cabinet - 35 rue Centrale, 69290 Craponne"
              className="iframe"
            />

            <div className="localisation">
              <div className="localisation-container">
                <div className="localisation-content">
                  <h3>Informations pratiques</h3>
                  <p>
                    <span className="bold">
                      Le cabinet se situe à gauche du RDC du 35 rue Centrale à
                      Craponne.
                    </span>
                  </p>
                  <p>
                    Veuillez sonner au digicode du portillon et ensuite à la
                    porte de l'immeuble.{" "}
                  </p>
                  <p>
                    Il est aisé de se garer dans la rue (places gratuites) ou au
                    parking du commerce le plus proche à 300m.
                  </p>
                  <p>
                    Le cabinet est desservi par le{" "}
                    <span className="it-bold">Bus 147</span> à 120m ou les{" "}
                    <span className="it-bold">C22</span> et{" "}
                    <span className="it-bold">C24</span> à 400m.
                  </p>
                  <p>
                    En voiture, celui-ci est rapidement accessible (-de 20 min)
                    des communes suivantes :
                  </p>
                  <span className="bold">
                    <p>
                      Saint-Genis-les-Ollières, Grézieu-la-Varenne,
                      Francheville,
                    </p>
                    <p>Chaponost, Brindas, Messimy,</p>
                    <p>Soucieu en Jarrest, Vaugneray, Pollionnay, </p>
                    <p>Sainte-Concorce, Tassin-la-demi-Lune… </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-nav-background">
          <div className="footer-nav">
            <nav aria-label="Navigation Pied de page">
              <ul className="footer-nav-left">
                <Link href="/" title="Accueil" onClick={scrollTop}>
                  <li>Accueil</li>
                </Link>
                <Link href="/about" title="À propos" onClick={scrollTop}>
                  <li>À propos</li>
                </Link>
                <Link
                  href="/consultation"
                  title="Consultation & Bilans"
                  onClick={scrollTop}
                >
                  <li>Consultation & Bilans</li>
                </Link>
                {/* Nouveau bouton scroll smooth vers le formulaire */}
                <ScrollToContactButton className="contact-btn">
                  Prendre un rendez-vous
                </ScrollToContactButton>
              </ul>
            </nav>
            <div className="nav-middle" />
            <ul className="footer-nav-right">
              <li>
                <Link href="/mentions-legales" title="Mentions légales">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/cgu" title="Conditions générales d'utilisation">
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/confidentialite"
                  title="Politique de confidentialité"
                >
                  Confidentialité & Cookies
                </Link>
              </li>
              <li>
                <Link href="/accessibilite" title="Accessibilité">
                  Accessibilité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}