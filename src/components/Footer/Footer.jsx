import Divider from "../Divider/Divider";

function Footer() {
  return (
    <>
      <Divider />
      <footer className="flex-col flex-align-end flex-justify-center">
        <span>
          Developed by Ashley Mays. Design inspired by the websites of:{" "}
          <span className="anchor-link-container">
            <a href="https://www.josesentis.com/">Jose Sentis</a>, <a href="https://www.todordimov.com/">Todor Dimov</a>
            , <a href="https://www.connormurphy.design/">Connor Murphy</a>,{" "}
            <a href="https://www.dejan.works/">Dejan Markovic</a>,{" "}
            <a href="https://www.olivier-guilleux.com/">Olivier Guilleux</a>.
          </span>
        </span>
      </footer>
    </>
  );
}

export default Footer;
