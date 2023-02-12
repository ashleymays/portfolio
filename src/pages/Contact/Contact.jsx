import Layout from "../../layout/Layout";
import AnchorLinks from "../../components/AnchorLinks/AnchorLinks";
import contactLinks from "../../constants/contactLinks";

function Contact() {
  return (
    <Layout>
      <AnchorLinks links={contactLinks} heading="h2" />
    </Layout>
  );
}

export default Contact;
