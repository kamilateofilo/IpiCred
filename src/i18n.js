import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importando os arquivos de tradução
import PtBr from '../i18n/pt-BR.json';
import En from '../i18n/en.json';  // Certifique-se de que este arquivo existe
import Es from '../i18n/es.json';  // Certifique-se de que este arquivo existe

const browserLanguage = navigator.language;

const defaultLanguage = browserLanguage.includes('pt')
  ? 'pt-BR'
  : browserLanguage.includes('es')
  ? 'es'
  : 'en';

const resources = {
  'pt-BR': { translation: PtBr },
  en: { translation: En },
  es: { translation: Es },
};

i18n
  .use(initReactI18next) // Passa i18n para o react-i18next
  .init({
    resources,
    lng: defaultLanguage, // Define o idioma padrão
    fallbackLng: 'pt-BR', // Define o idioma de fallback
    interpolation: {
      escapeValue: false, // React já faz escaping por padrão
    },
  });

export default i18n;
