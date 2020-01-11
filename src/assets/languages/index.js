import en from './en.json'
import fr from './fr.json'

const files = {
    en_phrases: en,
    fr_phrases: fr,
}

export default function(phrase) {
  const language_code = getLanguage() ? getLanguage : 'en'
  const code = `${language_code}_phrases`
  return files[code] && files[code][phrase] ? files[code][phrase] : phrase
}

export function setLanguage(newLang) {
  localStorage.setItem('lang', newLang)
}

export function getLanguage() {
  return localStorage.getItem('lang')
}
