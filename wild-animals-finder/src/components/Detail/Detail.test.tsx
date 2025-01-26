import { render, screen } from '@testing-library/react';
import Detail from './Detail.tsx';

describe('Detail Component', () => {
  
  const mockProps = {
    img: 'https://example.com/image.jpg',
    url: 'https://example.com',
    title: 'Test Title',
    description: 'Test Description',
  };

  test('Detail render with all the props', () => {
    render(<Detail {...mockProps} />);
    
    const imgElement = screen.getByAltText('Image of Test Title');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.img);

    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    const urlElement = screen.getByText(mockProps.url);
    expect(urlElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(mockProps.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('Detail doesnt render without title prop', () => {
    const { container } = render(<Detail {...mockProps} title={''} />);

    const detailContainer = container.querySelector('.detail-container');
    expect(detailContainer).toBeNull();
  });
});
