import React from "react";
import { footerLinks } from "../constants";
import { motion } from "framer-motion";

function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // const footerVariants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       delay: 1,
  //     },
  //   },
  // };

  return (
    <motion.footer
    // variants={footerVariants}
    // initial="hidden"
    // animate="show"
    // key="footer"
    >
      <div className=" footer-spacer"></div>
      <div
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

          <p className="mt-8 mb-20 leading-5 text-white uppercase letter-spacing-xs hover-underline-animation-light up-letters-animation font-ppmori">
            <a href="#">Let's work together</a>
          </p>
          <p className="flex items-center justify-center flex-1 font-bold leading-none text-white uppercase hero font-bebas letter-spacing-xs">
            eliot besson
          </p>

          <div className="flex justify-between text-white uppercase ">
            <a href="#" className="hover:text-lightDesaturated">
              Info & Credits
            </a>
            <a
              href="#"
              className="hover:text-lightDesaturated"
              onClick={scrollToTop}
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
