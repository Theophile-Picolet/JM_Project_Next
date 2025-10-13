'use client'

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Calculer l'opacité en fonction du scroll
      // Commence à apparaître à partir de 300px, complètement visible à 500px
      const startFade = 300;
      const endFade = 500;

      if (currentScrollY <= startFade) {
        setOpacity(0);
      } else if (currentScrollY >= endFade) {
        setOpacity(1);
      } else {
        // Calcul progressif de l'opacité entre startFade et endFade
        const fadeRange = endFade - startFade;
        const scrollRange = currentScrollY - startFade;
        const calculatedOpacity = scrollRange / fadeRange;
        setOpacity(calculatedOpacity);
      }
    };

    // Ajouter l'event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Nettoyer l'event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll smooth vers le haut comme sur la HomePage
  const scrollTop = () => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  const [open, setOpen] = useState(false);
  const handleBurger = () => {
    setOpen(!open);
  };

  return (
    <>
      <div
        className={`navbar${isHome ? " navbar-home" : ""}`}
        style={
          isHome
            ? {
                opacity: opacity,
                transform: `translateY(${opacity === 0 ? "-100%" : "0"})`,
                pointerEvents: opacity === 0 ? "none" : "auto",
              }
            : {
                opacity: 1,
                transform: "translateY(0)",
                pointerEvents: "auto",
              }
        }
      >
        <nav className="nav">
          <Link href="/" onClick={scrollTop}>
            <Image
              className="header-logo"
              src="/logo.webp"
              alt="Logo"
              title="Accueil"
              width={80}
              height={80}
            />
          </Link>
          <p>
            PICOLET Jean-Marie
            <br />
            <span>Psychologue du Développement</span>
          </p>
          <ul>
            <li>
              <Link href="/about" onClick={scrollTop}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/consultation" onClick={scrollTop}>
                Consultations & Bilans
              </Link>
            </li>
            <li>
              <Link href="/appointments" onClick={scrollTop}>
                Prendre un rendez-vous
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <nav id="nav2" className={`nav-mobile ${open ? "show-nav" : "hide-nav"}`}>
        <div className="flex-mobile">
          <Link href="/" onClick={scrollTop}>
            <Image
              className="header-logo"
              src="/logo.webp"
              alt="Logo"
              title="Accueil"
              width={80}
              height={80}
            />
          </Link>
          <p>
            PICOLET Jean-Marie
            <br />
            <span>Psychologue du Développement</span>
          </p>
          <button
            className="nav-mobile-burger"
            type="button"
            onClick={handleBurger}
          >
            <span className="burger-bar" />
          </button>
        </div>
        <ul className="nav-mobile-links">
          <li>
            <Link
              href="/"
              onClick={() => {
                scrollTop();
                handleBurger();
              }}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => {
                scrollTop();
                handleBurger();
              }}
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/consultation"
              onClick={() => {
                scrollTop();
                handleBurger();
              }}
            >
              Consultations & Bilans
            </Link>
          </li>
          <li>
            <Link
              href="/appointments"
              onClick={() => {
                scrollTop();
                handleBurger();
              }}
            >
              Prendre un rendez-vous
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}