import React from "react";
import "../css/footer.css";
import footerConstants from "../constants/footer.constants";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__top">
        {footerConstants.top.map(({ title, contactsInfo }, index) => {
          return (
            <div className="footer__item" key={index}>
              <h2>{title}</h2>
              <div className="item__list">
                {contactsInfo.map((contact, index) => {
                  return (
                    <a key={index} href={contact?.itemUrl}>
                      {contact.itemTxt}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer__bottom">
        <p>{footerConstants.bottom.left}</p>
        <div>
          {footerConstants.bottom.right.map((item, index) => {
            return (
              <a key={index} href={item.iconUrl}>
                {item.iconTxt == "facebook" && <FacebookIcon />}
                {item.iconTxt == "youtube" && <YouTubeIcon />}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
