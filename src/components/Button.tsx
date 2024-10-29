import React from 'react';

interface ButtonProps {
  text: string;
  link: string;
  icon: string;
}

const Button: React.FC<ButtonProps> = ({ text, link, icon }) => {
  const icons: { [key: string]: string } = {
    twitter: '🐦',
    star: '⭐',
    file: '📄',
    telegram: '✈️',
    discord: '🎮'
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4b4d5f',
        color: '#ffffff',
        padding: '12px',
        borderRadius: '8px',
        fontSize: '16px',
        fontWeight: 'bold',
        textDecoration: 'none',
        margin: '8px 0',
        transition: 'background-color 0.3s',
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#67698a'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4b4d5f'}
    >
      <span style={{ marginRight: '8px' }}>{icons[icon] || '🔗'}</span>
      {text}
    </a>
  );
};

export default Button;
