// Script de validation des variables d'environnement EmailJS
// Utilisé uniquement en développement pour vérifier la configuration

export function validateEmailJSConfig() {
  const missingVars: string[] = [];
  
  if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
    missingVars.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
  }
  
  if (!process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID) {
    missingVars.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
  }
  
  if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
    missingVars.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');
  }
  
  if (missingVars.length > 0) {
    console.warn('⚠️  Variables d\'environnement EmailJS manquantes:', missingVars.join(', '));
    console.warn('📖 Consultez VERCEL_SETUP.md pour les instructions de configuration');
    return false;
  }
  
  console.log('✅ Configuration EmailJS validée');
  return true;
}

// Validation automatique en développement
if (process.env.NODE_ENV === 'development') {
  validateEmailJSConfig();
}