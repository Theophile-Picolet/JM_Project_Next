import type { Metadata } from 'next';
import ConsultationsPageContent from '../../components/ConsultationsPageContent';

export const metadata: Metadata = {
  title: "Consultations & Bilans - Jean-Marie Picolet",
  description: "Consultations psychologiques et bilans pour enfants, adolescents, adultes et familles. Cabinet de Jean-Marie Picolet à Craponne.",
  openGraph: {
    title: "Consultations & Bilans - Jean-Marie Picolet",
    description: "Découvrez tous les types de consultations et bilans psychologiques proposés par Jean-Marie Picolet à Craponne.",
    images: [
      {
        url: '/bilan_8.webp',
        width: 800,
        height: 600,
        alt: 'Bilans psychologiques',
      },
    ],
  },
};

export default function ConsultationPage() {
  return <ConsultationsPageContent />;
}