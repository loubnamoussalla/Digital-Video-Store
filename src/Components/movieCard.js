import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/card.css';

export default function MovieCard({ item }) {
  // const navigate = useNavigate();

  return (
    <div className="card-container"
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <img
          src={item.smallPoster}
          alt={item.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>
      <div style={{ padding: '0.5rem' }}>
        <p className="card-title" style={{ fontWeight: 'bold', margin: 0 }}>{item.title}</p>
      </div>
    </div>
  );
}
