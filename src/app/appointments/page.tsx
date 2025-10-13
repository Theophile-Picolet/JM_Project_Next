import type { Metadata } from 'next';
import AppointmentsPageContent from '../../components/AppointmentsPageContent';

export const metadata: Metadata = {
  title: "Prendre un rendez-vous - Jean-Marie Picolet",
  description: "Prenez rendez-vous avec Jean-Marie Picolet, psychologue du développement à Craponne. Consultations et bilans psychologiques.",
  openGraph: {
    title: "Prendre un rendez-vous - Jean-Marie Picolet",
    description: "Contactez Jean-Marie Picolet pour prendre rendez-vous. Cabinet de psychologie à Craponne.",
    images: [
      {
        url: '/cabinet1.webp',
        width: 800,
        height: 600,
        alt: 'Cabinet de psychologie',
      },
    ],
  },
};

export default function AppointmentsPage() {
  return <AppointmentsPageContent />;
}