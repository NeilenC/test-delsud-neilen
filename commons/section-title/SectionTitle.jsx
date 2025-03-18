import React, { useState, useEffect } from 'react';

const SectionTitle = ({ title, wordIndex }) => {
  const [fontSize, setFontSize] = useState('28px');
  const words = title.split(' ');
  const adjustedIndex = wordIndex - 1;
  
  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth <= 770 ? '28px' : '35.88px');
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <h2 style={{ fontSize }}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            color: i === adjustedIndex ? 'var(--text-secondary)' : 'var(--text-color)',
            fontWeight: i === adjustedIndex ? 800 : 400,
            marginRight: '5px',
          }}
        >
          {word}
        </span>
      ))}
    </h2>
  );
};

export default SectionTitle;
