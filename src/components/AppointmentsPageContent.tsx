'use client'

import { useEffect, useRef } from "react";
import Appointments from "./Appointments";

export default function AppointmentsPageContent() {
  // Ref pour accéder à la méthode d'ouverture de la modale
  const openModalRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    // Ouvre la modale dès le montage
    if (openModalRef.current) {
      openModalRef.current();
    }
  }, []);

  // On passe une fonction à Appointments pour récupérer openAppointmentInfo
  return (
    <div className="appointments">
      <Appointments
        refCallback={(openFn: () => void) => {
          openModalRef.current = openFn;
        }}
      />
    </div>
  );
}