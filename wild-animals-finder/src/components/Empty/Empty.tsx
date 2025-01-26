import React from 'react';
import EmptyStateProps from './Empty.ts';

const suggestions = 'insect, fish, horse, crocodile, bear, cetacean, cow, lion, rabbit, cat, snake, dog, bird';

const EmptyState: React.FC<EmptyStateProps> = ({ searchQuery }) => {
  const showSearchMessage = searchQuery && searchQuery?.length > 0;

  return (
    <>
      {showSearchMessage ? (
        <>
          <p>No results found for: <b>&apos;{searchQuery}&apos;.</b></p>
          <p>Try looking for: <b>{suggestions}</b></p>
        </>
      ) : (
        <p>Try looking for: <b>{suggestions}</b></p>
      )}
    </>
  );
};

export default EmptyState;
