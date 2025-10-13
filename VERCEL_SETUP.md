# Configuration EmailJS pour Vercel

## Variables d'environnement requises

Pour que EmailJS fonctionne correctement en production sur Vercel, vous devez configurer les variables d'environnement suivantes :

### 1. Dans le Dashboard Vercel

1. Allez sur votre projet dans [Vercel Dashboard](https://vercel.com/dashboard)
2. Cliquez sur **Settings** > **Environment Variables**
3. Ajoutez les variables suivantes :

| Variable | Valeur | Description |
|----------|--------|-------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Votre Service ID EmailJS | ID du service EmailJS |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Votre Template ID EmailJS | ID du template EmailJS |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Votre Public Key EmailJS | Clé publique EmailJS |

### 2. Pour le développement local

1. Copiez le fichier `.env.example` vers `.env.local`
2. Remplacez les valeurs d'exemple par vos vraies valeurs EmailJS

### 3. Configuration du template EmailJS

Assurez-vous que votre template EmailJS contient les variables suivantes :
- `{{nom}}`
- `{{prenom}}`
- `{{email}}`
- `{{telephone}}`
- `{{message}}`
- `{{time}}`

### 4. Redéploiement

Après avoir ajouté les variables d'environnement :
1. Allez dans l'onglet **Deployments** de votre projet Vercel
2. Cliquez sur **Redeploy** pour appliquer les nouvelles variables

### 5. Vérification

Une fois redéployé, testez le formulaire de contact pour vérifier que les emails sont bien envoyés.