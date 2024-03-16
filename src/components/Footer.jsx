import Facebook from './svg/Facebook'
import Insta from './svg/Insta'
import Twitter from './svg/Twitter'
import Discord from './svg/Discord'
import { useState } from 'react'


export default function Footer() {
  const countries = {
    en: {
      language: 'English',
      flag: '🇬🇧'
    },
    fr: {
      language: 'Français',
      flag: '🇫🇷'
    },
    de: {
      language: 'Deutsch',
      flag: '🇩🇪'
    }
  }
  const [language, setLanguage] = useState(countries.en);


  function changeLanguage(e) {
    setLanguage(Object.values(countries).find((country) => {
      return e.target.value === country.language
    }
    ))
  }


  return (
    <footer>
      <div className="container">
        <div className="flex align-center justify-between">
          <div className="language flex align-center">
            <span>{language.flag}</span>
            <select name="language" id="language" onChange={changeLanguage} defaultValue={language.language}>
              {
                Object.values(countries).map((country, index) => {
                  return (
                    <option key={index}>{country.language}</option>
                  )
                })}
            </select>
          </div>


          <div className="networks">
            <a href="https://example.com"><Twitter /></a>
            <a href="https://example.com"><Facebook /></a>
            <a href="https://example.com"><Discord /></a>
            <a href="https://example.com"><Insta /></a>
          </div>
          <p>© 2022 Holocoin</p>

        </div>
      </div>
    </footer>
  )
}