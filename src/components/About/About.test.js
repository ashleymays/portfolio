import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import About from './About';

function checkStrikethroughs(strikethroughs) {
    const NUMBER_OF_STRIKETHROUGHS = 2;
    strikethroughs.forEach((strikethrough) => {
        expect(strikethrough).toBeInTheDocument();
        expect(strikethrough).toHaveClass('strikethrough');
    });
    expect(strikethroughs.length).toBe(NUMBER_OF_STRIKETHROUGHS);
}

function checkParagraphs(paragraphs) {
    const NUMBER_OF_PARAGRAPHS = 4;
    paragraphs.forEach((paragraph) => {
        expect(paragraph).toBeInTheDocument();
        expect(paragraph).toBeVisible();
    });
    expect(paragraphs.length).toBe(NUMBER_OF_PARAGRAPHS);
}

function checkAboutSection(section) {
    expect(section).toBeVisible();
    expect(section).toBeInTheDocument();
}

function testAboutSection() {
    test('render About', () => {
        render(<About />);
        const section = screen.getByRole('generic');
        const strikethroughs = section.querySelectorAll('s');
        const paragraphs = section.querySelectorAll('p');

        checkAboutSection(section);
        checkStrikethroughs(strikethroughs);
        checkParagraphs(paragraphs);
    });
}

describe('Testing the About component', testAboutSection);
