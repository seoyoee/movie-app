import React from "react";
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://m.unlimga.com/web/product/medium/202204/15fb42e1dec2d997bc18dad0a764f4d8.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbop',
    image: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg',
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Donkatsu',
    image: 'https://t1.daumcdn.net/cfile/tistory/9951473F5D4633FD2C',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Kimbop',
    image: 'https://img.hankyung.com/photo/202110/99.27136316.1.jpg',
    rating: 4.6,
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
