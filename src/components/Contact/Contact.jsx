import AnchorLink from '../AnchorLink/AnchorLink';
import './Contact.scss';

function Contact() {
    return (
        <section className='flex-col flex-al-end flex-just-center'>
            <AnchorLink
                href="mailto:ashleymays091@gmail.com"
                url="ashleymays091@gmail.com"
            />
            <AnchorLink
                href="https://github.com/ashleymays"
                url="github.com/ashleymays"
            />
        </section>
    )
}

export default Contact;