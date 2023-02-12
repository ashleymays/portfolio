import AnchorLink from "./AnchorLink/AnchorLink";

function AnchorLinks(props) {
  const links = props.links;
  return (
    <div className="flex-col flex-justify-center">
      {links.map((link) => (
        <AnchorLink key={link.href} href={link.href} title={link.title} heading={props.heading} />
      ))}
    </div>
  );
}

export default AnchorLinks;
