import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdvantageCard = ({ title, description, icon, subItems }) => {
  return (
    <div className="advantage-card blur-bg" style={{
      margin: '10px',
      padding: '20px',
      borderRadius: '10px',
      flex: '1 1 300px',
      maxWidth: '400px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
        <FontAwesomeIcon icon={icon} size="2x" style={{ color: '#FFF', marginRight: '15px' }} />
        <h3 style={{ color: '#FFF', margin: 0 }}>{title}</h3>
      </div>
      <p style={{ color: '#FFF', fontSize: '0.9em' }}>{description}</p>
      {subItems && (
        <ul style={{ color: '#FFF', paddingLeft: '20px' }}>
          {subItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '10px' }}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdvantageCard;
