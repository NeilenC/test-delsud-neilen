import React from 'react';

const SectionTitle = ({ title, wordIndex }) => {
  const words = title.split(' ');
  const adjustedIndex = wordIndex - 1;

  return (
    <h2>
      {words.map((word, i) => (
        <span
          key={i}
          style={{ 
            color: i === adjustedIndex ? 'var(--text-secondary)' : 'var(--text-color)', 
            fontWeight: i === adjustedIndex ? 800 : 400, 
            marginRight: '5px' 
          }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
};

export default SectionTitle;
