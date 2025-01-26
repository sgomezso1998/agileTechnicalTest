import { render, screen, fireEvent } from '@testing-library/react';
import SearchResult from './SearchResult.tsx';

describe('SearchResult Component', () => {
  
  const mockItem = {
    id: '1',
    url: 'https://example.com',
    title: 'Test Item Title',
    description: 'Test Item Description',
  };
  
  const mockOnClick = jest.fn();

  test('SearhItem render with all the props', () => {
    render(<SearchResult item={mockItem} onClick={mockOnClick} />);
    
    const urlElement = screen.getByText(mockItem.url);
    expect(urlElement).toBeInTheDocument();
    
    const titleElement = screen.getByText(mockItem.title);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(mockItem.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('Click event in Title works correctly', () => {
    render(<SearchResult item={mockItem} onClick={mockOnClick} />);
    
    const titleElement = screen.getByText(mockItem.title);
    fireEvent.click(titleElement);
    
    expect(mockOnClick).toHaveBeenCalledWith(mockItem.id);
  });

  test('Skeleton works when item is null', () => {
    render(<SearchResult onClick={mockOnClick} />);
    
    const skeletonTitle = screen.getByTestId('item-skeleton-title');
    expect(skeletonTitle).toBeInTheDocument();
    
    const skeletonDescription = screen.getByTestId('item-skeleton-description');
    expect(skeletonDescription).toBeInTheDocument();
    
    const skeletonUrl = screen.getByTestId('item-skeleton-url');
    expect(skeletonUrl).toBeInTheDocument();
  });
});
