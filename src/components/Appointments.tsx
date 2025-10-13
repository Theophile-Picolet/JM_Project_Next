'use client';

import { useEffect, useState } from "react";
import ScrollToContactButton from './ScrollToContactButton';

// Composant SVG d'urgence - Panneau d'attention triangulaire
function EmergencyIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Attention - Urgence"
    >
      <title>Panneau d'attention - Urgence</title>
      {/* Triangle d'attention avec bordure rouge */}
      <path
        d="M12 2L22 20H2L12 2Z"
        fill="var(--orange-color)"
        stroke="#dc2626"
        strokeWidth="1.5"
      />
      {/* Point d'exclamation */}
      <path d="M12 8V13" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="white" />
    </svg>
  );
}

// Props pour le composant principal
interface AppointmentsProps {
  onScrollToContact?: () => void;
  className?: string;
  refCallback?: (openFn: () => void) => void;
}

// Modale pour les informations de prise de rendez-vous
function AppointmentInfoModal({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => onClose(), 260);
  };

  const handleConfirm = () => {
    setIsAnimating(false);
    setTimeout(() => onConfirm(), 400);
  };

  if (!isOpen) return null;

  return (
    <div
      className={`modal-overlay ${isAnimating ? "modal-entering" : "modal-exiting"}`}
      onClick={handleClose}
      onKeyDown={(e) => e.key === "Escape" && handleClose()}
    >
      <div
        className="modal-content appointment-info-modal"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={handleClose}>
          ×
        </button>
        <div className="appointment-info-content">
          <h3>Prendre rendez-vous</h3>
          <div className="appointment-info-text">
            <p>
              Vous pouvez prendre un rendez-vous en me contactant par téléphone
              au <br />
              <strong>06 24 16 23 86</strong> (si je ne peux répondre, n'hésitez
              pas à laisser un message avec votre nom et votre numéro afin
              d'être rapidement recontacté).
            </p>
            <p>
              Vous pouvez également m'écrire via le formulaire ci-dessous. Outre
              le motif de votre demande, n'hésitez pas à préciser vos
              disponibilités. Je vous recontacterai dans les plus brefs délais
              afin de vous proposer une date et un horaire.
            </p>
            <div className="appointment-important-info">
              <p>
                <strong>
                  Une séance non honorée et non annulée 48h avant est facturée.
                </strong>
              </p>
              <p>
                Les séances ne sont pas remboursées mais vous pouvez vous
                renseigner auprès de votre mutuelle car nombreuses sont celles
                qui prennent en charge une partie du coût des séances. Je
                fournis les factures nécessaires pour cela.
              </p>
              <p>
                <strong>Moyens de paiement acceptés :</strong> chèque, espèces,
                virement bancaire.
              </p>
            </div>
          </div>

          {/* Message d'urgence */}
          <div className="emergency-message">
            <EmergencyIcon />
            <span>En cas d'urgence veuillez contacter le 15</span>
          </div>

          {/* Bouton scroll réutilisable */}
          <ScrollToContactButton
            className="modal-contact-btn"
            onClick={handleConfirm}
          >
            Accéder au formulaire
          </ScrollToContactButton>
        </div>
      </div>
    </div>
  );
}

// Hook personnalisé pour gérer les rendez-vous
export function useAppointments(onScrollToContact?: () => void) {
  const [showAppointmentInfo, setShowAppointmentInfo] = useState(false);

  // Fonction par défaut pour le scroll vers le contact
  const handleScrollToContact = () => {
    if (onScrollToContact) {
      onScrollToContact();
    } else {
      // Comportement par défaut - chercher le formulaire de contact
      setTimeout(() => {
        const footerForm = document.querySelector(".home-contact");
        if (footerForm) {
          const elementPosition =
            footerForm.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - 100; // Offset pour la navbar

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  const openAppointmentInfo = () => setShowAppointmentInfo(true);
  const closeAppointmentInfo = () => setShowAppointmentInfo(false);

  const confirmAppointment = () => {
    setShowAppointmentInfo(false);
    handleScrollToContact();
  };

  return {
    showAppointmentInfo,
    openAppointmentInfo,
    closeAppointmentInfo,
    confirmAppointment,
  };
}

// Composant principal pour gérer les rendez-vous
export default function Appointments({
  onScrollToContact,
  className = "",
  refCallback,
}: AppointmentsProps) {
  const {
    showAppointmentInfo,
    openAppointmentInfo,
    closeAppointmentInfo,
    confirmAppointment,
  } = useAppointments(onScrollToContact);

  // Permet à un parent d'ouvrir la modale automatiquement
  if (refCallback) {
    refCallback(openAppointmentInfo);
  }

  return (
    <div className={className}>
      {/* Bouton pour ouvrir la modale de rendez-vous */}
      <button
        type="button"
        className="modal-contact-btn"
        onClick={openAppointmentInfo}
      >
        Prendre rendez-vous
      </button>

      {/* Modale d'informations de rendez-vous */}
      <AppointmentInfoModal
        isOpen={showAppointmentInfo}
        onClose={closeAppointmentInfo}
        onConfirm={confirmAppointment}
      />
    </div>
  );
}

// Export du composant modal seul pour une utilisation avancée
export { AppointmentInfoModal };