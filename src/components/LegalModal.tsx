import { ReactNode, useEffect, useState } from "react";

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export default function LegalModal({ isOpen, onClose, title, children }: LegalModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, 260);
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-overlay ${isAnimating ? "modal-entering" : "modal-exiting"}`}
      onClick={handleClose}
      onKeyDown={(e) => e.key === "Escape" && handleClose()}
      tabIndex={-1}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="modal-content appointment-info-modal"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--beige-color)',
          borderRadius: '40px 1px',
          boxShadow: '1px 1px 30px rgba(0, 0, 0, 0.307)',
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-close" onClick={handleClose}>
          ×
        </button>
        {/* Titre supprimé pour éviter le doublon dans la modale */}
        <div style={{maxHeight:'60vh',overflowY:'auto', width:'100%', padding:'1.5rem', color:'var(--third-color)'}}>{children}</div>
      </div>
    </div>
  );
}
