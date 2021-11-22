import './Footer.css';

function Footer() {
  return (
    <footer className="footerContainer">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
      <p className="theDevs">Techa Repo: </p>
      <a href="">
        <i className="devicon-github-original" ></i>
      </a>
      <p className="pipe">|</p>
      <p>Noah Garcia</p>
      <a href="https://github.com/NoahSharretts">
        <i className="devicon-github-original"></i>
      </a>
      <a href="https://www.linkedin.com/in/noah-garcia-sharretts-7ab735208/">
        <i className="devicon-linkedin-plain"></i>
      </a>
    </footer>

  )
}


export default Footer;
