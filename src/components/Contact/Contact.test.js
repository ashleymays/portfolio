import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

function testContactSection() {
    test('renders Contact section', () => {
        render(<Contact />);
        const section = screen.getByRole('generic').querySelector('.contact');
        const heading = section.querySelector('h3');
        const paragraph = section.querySelector('p');
        const links = paragraph.querySelectorAll('a');
        const emailAddress = links[0];
        const github = links[1];

        expect(section).toBeVisible();
        expect(section).toBeInTheDocument();

        expect(heading).toBeVisible();
        expect(heading).toBeInTheDocument();

        expect(paragraph).toBeVisible();
        expect(paragraph).toBeInTheDocument();

        expect(emailAddress).toBeVisible();
        expect(emailAddress).toBeInTheDocument();
        expect(emailAddress).toHaveAttribute('href', 'mailto:ashleymays091@gmail.com');
        expect(emailAddress).toHaveTextContent('ashleymays091@gmail.com');

        expect(github).toBeVisible();
        expect(github).toBeInTheDocument();
        expect(github).toHaveAttribute('href', 'https://github.com/ashleymays');
        expect(github).toHaveTextContent('Github');
    });
}

describe('Test Contact component', testContactSection);
