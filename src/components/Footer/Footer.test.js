import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';

function checkLinks(links) {
    links.forEach((link) => {
        expect(link).toBeVisible();
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noreferrer');
        expect(link).toHaveAttribute('href');
    });
}

function testFooterSection() {
    test('renders Footer section', () => {
        render(<Footer />);
        const generics = screen.getAllByRole('generic');
        const footer = generics[0].querySelector('footer');

        expect(footer).toBeVisible();
        expect(footer).toBeInTheDocument();
        expect(footer).toHaveTextContent(/Design/);

        const links = footer.querySelectorAll('a');
        checkLinks(links);
    });
}

describe('Test Footer component', testFooterSection);
