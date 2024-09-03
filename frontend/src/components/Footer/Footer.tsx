import { makeClass } from '/src/utils'

import styles from './Footer.module.scss'

interface FooterProps {
  isSmall?: boolean
}

const Footer = async ({ isSmall }: FooterProps) => {
  return <footer className={makeClass(styles.footer, isSmall && styles.small)}>
    <p>
      Based on <a href="https://github.com/GRA0007/crab.fit">Crab Fit</a> from <a href="https://bengrant.dev/"> Ben Grant</a> for custom style and content of pages. 
      CLIC repo is available <a href="https://github.com/clicepfl/crab.fit">here</a>.
    </p>
  </footer>
} 

export default Footer
