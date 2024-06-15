import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Card.css';

function Card({ data }) {
  console.log(data);
  return (
    <div className="inside-card">
      <div className="in-card">
        {data?.map((d) => (
          <div key={d._id} className="id-card">
            <div className="image-card">
              <img src={'http://localhost:5000' + d.imageUrl} alt={d.campaignName} />
            </div>
            <div className="container-card">
              <p className="name-card">{d.campaignName}</p>
              <p className="cause-card">{d.description}</p>
              <Link to={`/donate/${d._id}`}>
                <button className="button-card">Donate Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Card.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      campaignName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Card;
