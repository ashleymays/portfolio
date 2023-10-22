function ContactLink({ href, children }) {
    return (
        <a className="contact-link" target="_blank" rel="noreferrer" href={href}>
            {children}
        </a>
    );
}

function Contact() {
    return (
        <section className="contact">
            <div className="line" />
            <p>
                If you want to get in touch with me, you can email me at{' '}
                <a className="contact-link" href="mailto:ashleymays091@gmail.com">
                    ashleymays091@gmail.com
                </a>
                . Or you can check out my{' '}
                <ContactLink href="https://github.com/ashleymays">Github</ContactLink> to see what
                I&apos;m working on. Either way, thanks for reading and I&apos;ll (maybe) talk to
                you soon.
            </p>
            <p>
                Design inspired by the websites of{' '}
                <ContactLink href="https://slrncl.com">Nicolas Solerieu</ContactLink>,{' '}
                <ContactLink href="https://manuelmoreale.com">Manuel Moreale</ContactLink>, and{' '}
                <ContactLink href="https://brianlovin.com">Brian Lovin.</ContactLink>
            </p>
        </section>
    );
}

export default Contact;
