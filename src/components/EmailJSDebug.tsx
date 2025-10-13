// Script de diagnostic pour tester EmailJS
'use client';

import { useState } from 'react';
import { emailjsConfig } from '../config/emailjs';

export default function EmailJSDebug() {
  const [debugInfo, setDebugInfo] = useState<string>('');

  const testConfig = () => {
    const info = [
      `Service ID: ${emailjsConfig.serviceId ? '✅ Configuré' : '❌ Manquant'}`,
      `Template ID: ${emailjsConfig.templateId ? '✅ Configuré' : '❌ Manquant'}`,
      `Public Key: ${emailjsConfig.publicKey ? '✅ Configuré' : '❌ Manquant'}`,
      `Service ID Value: ${emailjsConfig.serviceId || 'undefined'}`,
      `Template ID Value: ${emailjsConfig.templateId || 'undefined'}`,
      `Public Key Value: ${emailjsConfig.publicKey || 'undefined'}`,
    ];
    
    setDebugInfo(info.join('\n'));
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#f0f0f0', 
      padding: '15px', 
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '400px',
      border: '1px solid #ccc'
    }}>
      <h4>🔧 Debug EmailJS</h4>
      <button onClick={testConfig} style={{ marginBottom: '10px' }}>
        Tester la configuration
      </button>
      {debugInfo && (
        <pre style={{ fontSize: '11px', whiteSpace: 'pre-wrap' }}>
          {debugInfo}
        </pre>
      )}
    </div>
  );
}