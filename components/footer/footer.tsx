import FooterSocialComp from "./footerSocialComp";
import { footerIconData } from "@/data/pageData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container px-4 sm:px-8">
        <h4 className="mb-8 lg:max-w-3xl lg:mx-auto">
          Pavo is a mobile application for marketing automation and you can
          reach the team at{" "}
          <a
            className="text-indigo-600 hover:text-gray-500"
            href="mailto:email@domain.com"
          >
            email@domain.com
          </a>
        </h4>
        <div className="social-container">
          {footerIconData.map((value, index) => (
            <FooterSocialComp key={index} icon={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
