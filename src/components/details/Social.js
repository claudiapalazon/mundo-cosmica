import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <nav>
      <ul className="social">
        <li>
          <a
            href="https://www.facebook.com/mundocosmica/"
            target="blank"
            title="Facebook de Cósmica"
            alt="facebook"
          >
            <div className="social-icon fa">
              <FaFacebook className="social-icon-detail" />
            </div>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/mundocosmica/"
            target="blank"
            title="Instagram de Cósmica"
            alt="Instagram"
          >
            <div className="social-icon ins">
              <FaInstagram className="social-icon-detail" />
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Social;
