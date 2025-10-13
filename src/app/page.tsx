import type { Metadata } from 'next';
import HomePage from '../components/HomePage';
import EmailJSDebug from '../components/EmailJSDebug';

export const metadata: Metadata = {
  title: "Jean-Marie Picolet - Psychologue à Craponne",
  description: "Accueil du cabinet de Jean-Marie Picolet, psychologue du développement à Craponne. Consultations, bilans psychologiques, expertise enfants, adolescents, adultes.",
  openGraph: {
    url: 'https://www.psychologue-craponne-jeanmariepicolet.fr/',
    title: 'Jean-Marie Picolet - Psychologue du Développement à Craponne', 
    description: 'Jean-Marie Picolet, Psychologue du Développement à Craponne. 15 ans d\'expertise en consultations et bilans psychologiques.',
    images: [
      {
        url: 'https://www.psychologue-craponne-jeanmariepicolet.fr/Jm_Picolet_S.webp',
        width: 800,
        height: 600,
        alt: 'Jean-Marie Picolet Psychologue',
      },
    ],
    siteName: 'Jean-Marie Picolet - Psychologue',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function Home() {
  return (
    <>
      <HomePage />
      <EmailJSDebug />
    </>
  );
}
