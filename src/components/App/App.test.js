import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

function testApp() {
    test('renders App', () => {
        render(<App />);

        const main = screen.getByRole('main');
        const mainHeading = screen.getByRole('heading', { level: 1 });

        expect(main).toBeVisible();
        expect(main).toBeInTheDocument();

        expect(mainHeading).toBeVisible();
        expect(mainHeading).toBeInTheDocument();
        expect(mainHeading).toHaveClass('main__heading');
        expect(mainHeading).toHaveTextContent(/Ashley Mays/);
    });
}

describe('Testing the App component and the main heading', testApp);
