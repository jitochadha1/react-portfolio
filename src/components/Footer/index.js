import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";
var { SocialIcon } = require("react-social-icons");
function Footer() {
  return (
    <footer>
      <h5>Jito Chadha, &#169; 2021</h5>
      <div>
        <div>
          <SocialIcon url="mailto:jitochadha@gmail.com" />
        </div>
        <div>
          <SocialIcon url="https://github.com/jitochadha1" />
        </div>
        
        <div>
          <SocialIcon url="https://twitter.com/jitochadha" />
        </div>
        <div>
          <SocialIcon url="https://www.linkedin.com/in/jito-chadha-b17661b/" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
