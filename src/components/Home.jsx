import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Enjoy Your Coffee before your activity</h1>
      <p>Boost your productivity and build your mood with a glass of coffee in the morning</p>
      <button>
        <Link to="/order">Order Now</Link>
      </button>
      <button>
        <Link to="/feedback">Feedback</Link>
      </button>
    </div>
  );
};

export default Home;
