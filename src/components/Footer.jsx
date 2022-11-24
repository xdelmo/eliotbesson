import React from "react";
import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer
      id="contact"
      className=" bg-primary footer rounded-t-3xl font-ppmori"
    >
      <div className="py-4 wrapper">
        <div className="flex flex-row flex-wrap justify-between gap-2 mt-8 ">
          {/* mappa tutti i footerLink del footerLinks */}
          {footerLinks.map((footerLink) => (
            <div className="flex flex-col my-4" key={footerLink.title}>
              {/* stampa il titolo di ogni footerLink */}
              <h4 className="text-white uppercase">{footerLink.title}</h4>
              <ul className="mt-2">
                {/* mappa tutti i link di ogni footerLink */}
                {/* prendo index a */}
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`text-lightDesaturated hover:text-white ${
                      index !== footerLink.length - 1 ? "mb-2" : "mb-0"
                    }`}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 leading-5 text-white uppercase letter-spacing-xs hover-underline-animation-light up-letters-animation font-ppmori">
          <a href="#">Let's work together</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
