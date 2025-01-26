global.console.warn = jest.fn();
global.console.error = jest.fn();

import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

