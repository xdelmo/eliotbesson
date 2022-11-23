import React from "react";
import { footerLinks } from "../constants";

function Footer() {
  return (
    <footer id="contact" className=" bg-primary rounded-t-3xl font-ppmori">
      {/* larghezza fissa a 60 e si vede tutto, ma non è corretto perchè non responsive */}
      <div className=" py-4 wrapper">
        <div className=" flex flex-row justify-between flex-wrap mt-10">
          {/* mappa tutti i footerLink del footerLinks */}
          {footerLinks.map((footerLink) => (
            <div className="flex flex-col my-4" key={footerLink.title}>
              {/* stampa il titolo di ogni footerLink */}
              <h4 className="uppercase text-white">{footerLink.title}</h4>
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
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-white letter-spacing-xs leading-5 uppercase hover-underline-animation-light mt-8 up-letters-animation font-ppmori">
          <a href="#">Let's work together</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
