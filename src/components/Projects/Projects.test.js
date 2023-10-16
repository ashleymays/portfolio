import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Projects from './Projects';
import projectsData from './Projects.data';

function checkSubtitles(subtitles) {
    const NUMBER_OF_SUBTITLES = 2;

    expect(subtitles.length).toBe(NUMBER_OF_SUBTITLES);

    subtitles.forEach((subtitle) => {
        expect(subtitle).toBeVisible();
        expect(subtitle).toBeInTheDocument();
        expect(subtitle).toHaveClass('project-details__subtitle');
    });
}

function checkDetails(details) {
    expect(details).toBeVisible();
    expect(details).toBeInTheDocument();

    const subtitles = details.querySelectorAll('span');
    checkSubtitles(subtitles);
}

function checkLink(link) {
    expect(link).toBeVisible();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noreferrer');
    expect(link).toHaveAttribute('href');
}

function checkImage(image) {
    expect(image).toBeVisible();
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('project__image');
    expect(image).toHaveAttribute('alt');
    expect(image).toHaveAttribute('src');
}

function checkImageWrapper(imageWrapper) {
    expect(imageWrapper).toBeVisible();
    expect(imageWrapper).toBeInTheDocument();
    expect(imageWrapper).toHaveClass('project__image-wrapper');
}

function checkProject(project) {
    expect(project).toBeVisible();
    expect(project).toBeInTheDocument();

    const imageWrapper = project.querySelector('.project__image-wrapper');
    const image = project.querySelector('.project__image');
    const details = project.querySelector('.project-details');
    const link = project.querySelector('a');

    checkImageWrapper(imageWrapper);
    checkImage(image);
    checkDetails(details);
    checkLink(link);
}

function checkProjects(projects) {
    const NUMBER_OF_PROJECTS = projectsData.length;
    expect(projects.length).toBe(NUMBER_OF_PROJECTS);

    projects.forEach((project) => {
        checkProject(project);
    });
}

function testProjects() {
    test('renders Projects', () => {
        render(<Projects />);

        const generics = screen.getAllByRole('generic');
        const projects = generics[0].querySelectorAll('.project');

        checkProjects(projects);
    });
}

describe('Testing the Projects component', testProjects);
