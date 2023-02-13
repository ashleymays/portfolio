import Layout from "../../layout/Layout";
import useHeadingAnimation from "../../hooks/useHeadingAnimation";

function Error() {
  const heading = ["404 ", "Error"];
  const animatedHeading = useHeadingAnimation(heading);

  return (
    <Layout>
      <h1 className="flex-row flex-align-end">{animatedHeading}</h1>
    </Layout>
  );
}

export default Error;
