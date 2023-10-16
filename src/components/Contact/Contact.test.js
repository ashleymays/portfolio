import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contact from './Contact';

function testContactSection() {
    test('renders Contact section', () => {
        render(<Contact />);
        const heading = screen.getByRole('heading');
        const emailAddress = heading.querySelector('a');

        expect(heading).toBeVisible();
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass('contact__heading');
        expect(heading).toHaveTextContent(/email me/);

        expect(emailAddress).toBeVisible();
        expect(emailAddress).toBeInTheDocument();
        expect(emailAddress).toHaveAttribute('href', 'mailto:ashleymays091@gmail.com');
        expect(emailAddress).toHaveTextContent('ashleymays091@gmail.com.');
    });
}

describe('Test Contact component', testContactSection);
