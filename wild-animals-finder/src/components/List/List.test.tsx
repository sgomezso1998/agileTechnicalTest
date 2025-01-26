import { render, screen } from '@testing-library/react';
import List from './List.tsx';

jest.mock('../SearchResult/SearchResult.tsx', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="search">SearchResult</div>),
}));

jest.mock('../Empty/Empty.tsx', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="empty">Empty</div>),
}));
  
describe('List Component', () => {
  const mockOnClick = jest.fn();

  test('List works correctly when dont have items and not loading', () => {
    render(<List items={[]} loading={false} searchQuery="test" onClick={mockOnClick} />);

    const emptyMessage = screen.getByTestId('empty');
    expect(emptyMessage).toBeInTheDocument();
  });

});
