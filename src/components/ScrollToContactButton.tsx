'use client';

import { ReactNode } from 'react';

interface ScrollToContactButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function ScrollToContactButton({
  children,
  className = '',
  onClick
}: ScrollToContactButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // Comportement par défaut - scroll vers le formulaire de contact
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
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}