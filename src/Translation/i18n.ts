import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: {
        translation: {
          signIn: 'Sign in to your account'
        }
      },
      fr: {
        translation: {
          signIn: 'Connectez-vous à votre compte'
        }
      }
    }
  });

export default i18n;