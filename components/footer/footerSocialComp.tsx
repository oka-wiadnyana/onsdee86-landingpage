const FooterSocialComp = ({ icon }: { icon: string }) => {
  return (
    <span className="fa-stack">
      <a href="#your-link">
        <i className="fas fa-circle fa-stack-2x"></i>
        <i className={`${icon} fa-stack-1x`}></i>
      </a>
    </span>
  );
};

export default FooterSocialComp;
