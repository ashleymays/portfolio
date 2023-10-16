function getCurrentYear() {
    const today = new Date();
    return today.getFullYear();
}

function Footer() {
    const currentYear = getCurrentYear();
    return (
        <footer>
            Copyright &copy; {currentYear}. Design inspired by the websites of{' '}
            <a target="_blank" rel="noreferrer" href="https://manuelmoreale.com">
                Manuel Moreale
            </a>
            ,{' '}
            <a target="_blank" rel="noreferrer" href="https://andrewcouldwell.com">
                Andrew Couldwell
            </a>
            , and{' '}
            <a target="_blank" rel="noreferrer" href="https://www.miquelreinabooks.com">
                Miquel Reina
            </a>
            .
        </footer>
    );
}

export default Footer;
