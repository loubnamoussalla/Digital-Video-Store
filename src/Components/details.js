import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../CSS/details.css';
import { getMediaById, updateMedia, deleteMedia } from '../API/media';

export default function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getMediaById(id).then(res => {
      const media = res.body[0];
      setItem(media);
      setFormData({
        title: media.title || '',
        year: media.year || '',
        smallPoster: media.smallPoster,
        poster: media.poster,
        rate: media.rate,
        genre: media.genre || '',
        synopsis: media.synopsis || '',
        rentPrice: media.rentPrice || '',
        purchasePrice: media.purchasePrice || '',
        type: media.type,
        featured: media.featured,
        price: media.price || '',
      });
    });
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteMedia(id);
      alert('Media deleted!');
      navigate('/listings');
      window.location.reload();

    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdate = async () => {
    try {
      const res = await updateMedia(id, formData);
      if(res.message === "Media updated!")
      {
      setItem(res.body);
      setEditing(false);
      alert('Media updated!');
      window.location.reload();

      }
      else{
        alert(res.message);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="details-container">
      <div className="details-content">
        <div className="details-info">
          {editing ? (
            <div className="edit-form">
              <label>
                Title:
                <input
                  value={formData.title}
                  onChange={e => setFormData({ ...formData, title: e.target.value })}
                />
              </label>
              <label>
                Year:
                <input
                  value={formData.year}
                  onChange={e => setFormData({ ...formData, year: e.target.value })}
                />
              </label>
              <label>
                Genre:
                <input
                  value={formData.genre}
                  onChange={e => setFormData({ ...formData, genre: e.target.value })}
                />
              </label>
              <label>
              Synopsis:
                <textarea
                rows="4"
                  value={formData.synopsis}
                  onChange={e => setFormData({ ...formData, synopsis: e.target.value })}
                />
              </label>
              <label>
                Rent Price:
                <input
                  value={formData.rentPrice}
                  onChange={e => setFormData({ ...formData, rentPrice: e.target.value })}
                />
              </label>
              <label>
                Purchase Price:
                <input
                  value={formData.purchasePrice}
                  onChange={e => setFormData({ ...formData, purchasePrice: e.target.value })}
                />
              </label>
              <label>
                Price:
                <input
                  value={formData.price}
                  onChange={e => setFormData({ ...formData, price: e.target.value })}
                />
              </label>
              <button className="edit" onClick={handleUpdate}>Submit</button>
              <button className="cancel-del" onClick={() => setEditing(false)}>Cancel</button>
            </div>
          ) : (
            <>
              <h1 className="title">
                {item.title} {item.year}
              </h1>
              <img src={item.smallPoster} alt={item.title} className="details-image" />
              <div className="metadata">
                <span className="rating">Rating: {item.rate}/10</span>
              </div>
              <p className="genre">{item.genre}</p>
              <p className="description">{item.synopsis}</p>
              <div className="pricing">
                <div className="price-box">
                  <p className="price-label">Rent</p>
                  <p className="price">${item.rentPrice}</p>
                </div>
                <div className="price-box">
                  <p className="price-label">Buy</p>
                  <p className="price">${item.purchasePrice}</p>
                </div>
              </div>
              <div className="action-buttons">
                <button className="edit" onClick={() => setEditing(true)}>Edit</button>
                <button className="cancel-del" onClick={handleDelete}>Delete</button>
              </div>
            </>
          )}
        </div>
        <div className="poster-container">
          <img src={item.poster} alt={item.title} className="poster" />
        </div>
      </div>
    </div>
  );
}
