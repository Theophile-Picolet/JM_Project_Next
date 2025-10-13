import type { Metadata } from 'next';
import AboutPageContent from '../../components/AboutPageContent';

export const metadata: Metadata = {
  title: "À propos - Jean-Marie Picolet",
  description: "Découvrez le parcours professionnel et l'approche de Jean-Marie Picolet, psychologue du développement à Craponne.",
  openGraph: {
    title: "À propos - Jean-Marie Picolet",
    description: "Parcours professionnel et approche thérapeutique de Jean-Marie Picolet, psychologue du développement à Craponne.",
    images: [
      {
        url: '/Jm_Picolet_S.webp',
        width: 800,
        height: 600,
        alt: 'Jean-Marie Picolet Psychologue',
      },
    ],
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}