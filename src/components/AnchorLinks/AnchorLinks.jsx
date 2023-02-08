import AnchorLink from './AnchorLink/AnchorLink'

function AnchorLinks ({ links }) {
  return (
    <div className="flex-col flex-al-end flex-just-center min-height-75">
      {links.map((link) => (
        <AnchorLink key={link.href} href={link.href} title={link.title} />
      ))}
    </div>
  )
}

export default AnchorLinks
