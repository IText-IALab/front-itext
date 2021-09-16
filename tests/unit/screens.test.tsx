/**
 * @packageDocumentation
 * @module Tests/Screens
 * It has the unit tests for the app screens.
 */

import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import MainScreen from '../../src/components/Home';
import i18n from '../../src/internationalization';

describe('Main Screen', () => {
  it('should render correctly', () => {
    render(<MainScreen />);
    expect(screen.getByTestId('main-container')).toBeInTheDocument();
  });
  it('should has the correct title', () => {
    render(<MainScreen />);
    expect(screen.getByTestId('main-title')).toHaveTextContent(i18n.get('MAIN_TITLE'));
  });
});
