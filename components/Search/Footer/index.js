import React from 'react';
import styles from './styles';
import FooterRow from './FooterRow';
import FooterLink from './FooterLink';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <FooterRow>
        <FooterLink
          label="DenisSavisko"
          href="https://www.linkedin.com/in/denyssavisko/"
          isNewTab
        />
      </FooterRow>
      <FooterRow>
        <div>
          <FooterLink label="Advertising" href="/" />
          <FooterLink label="Business" href="/" />
          <FooterLink label="About" href="/" />
          <FooterLink label="How Search works" href="/" />
        </div>
        <div>
          <FooterLink label="Privacy" href="/" />
          <FooterLink label="Terms" href="/" />
          <FooterLink label="Settings" href="/" />
        </div>
      </FooterRow>
    </footer>
  );
};

export default Footer;
