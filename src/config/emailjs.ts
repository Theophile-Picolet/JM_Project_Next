// Configuration EmailJS avec variables d'environnement
// Compatible avec Vercel et environnements de production

export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
};

// Validation des variables d'environnement
if (!emailjsConfig.serviceId || !emailjsConfig.templateId || !emailjsConfig.publicKey) {
  console.error('Variables d\'environnement EmailJS manquantes. Vérifiez votre configuration.');
}

// Instructions pour le déploiement :
// 1. Ajoutez ces variables dans Vercel Dashboard > Settings > Environment Variables :
//    - NEXT_PUBLIC_EMAILJS_SERVICE_ID
//    - NEXT_PUBLIC_EMAILJS_TEMPLATE_ID  
//    - NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
// 2. Template EmailJS doit contenir : {{nom}}, {{prenom}}, {{email}}, {{telephone}}, {{message}}, {{time}}