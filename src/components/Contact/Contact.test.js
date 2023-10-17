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

        expect(emailAddress).toBeVisible();
        expect(emailAddress).toBeInTheDocument();
        expect(emailAddress).toHaveAttribute('href', 'mailto:ashleymays091@gmail.com');
        expect(emailAddress).toHaveTextContent('ashleymays091@gmail.com');
    });
}

describe('Test Contact component', testContactSection);
