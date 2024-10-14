import React from 'react';

const LeadershipProfile = ({ name, title, imageSrc, description, blurBg = true }) => {
  return (
    <div className={blurBg ? "leadership-profile blur-bg" : "leadership-profile"} style={{ 
      margin: '10px', 
      padding: '20px', 
      borderRadius: '10px',
      textAlign: 'center',
      maxWidth: '300px'
    }}>
      <img 
        src={imageSrc} 
        alt={name} 
        style={{ 
          width: '200px', 
          height: '200px', 
          borderRadius: '50%', 
          objectFit: 'cover',
          marginBottom: '15px'
        }} 
      />
      <h3 style={{ color: '#FFF', marginBottom: '0', fontSize: '1.5em' }}>{name}</h3>
      <h4 style={{ color: '#FFF', margin: '0 10px' }}>{title}</h4>
      <p style={{ color: '#FFF', fontSize: '1em' }}>{description}</p>
    </div>
  );
};

export default LeadershipProfile;
