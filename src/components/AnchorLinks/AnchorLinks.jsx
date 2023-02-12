import AnchorLink from "./AnchorLink/AnchorLink";

function AnchorLinks(props) {
  const links = props.links;
  return (
    <div className="flex-col flex-justify-center min-height-75">
      {links.map((link) => (
        <AnchorLink key={link.href} href={link.href} title={link.title} />
      ))}
    </div>
  );
}

export default AnchorLinks;
