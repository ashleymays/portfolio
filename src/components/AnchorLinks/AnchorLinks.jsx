import AnchorLink from './AnchorLink/AnchorLink';

function AnchorLinks(props) {
    const links = props.links;
    return (
        <div className='flex-col flex-al-end flex-just-center min-height-80'>
            {
                links.map((link) => 
                    <AnchorLink
                        href={link.href}
                        title={link.title}
                    />
                )
            }
        </div>
    )
}

export default AnchorLinks;