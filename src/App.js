import React from "react";

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image: 'https://m.unlimga.com/web/product/medium/202204/15fb42e1dec2d997bc18dad0a764f4d8.jpg',
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'https://cdn.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
  },
  {
    id: 3,
    name: 'Bibimbop',
    image: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/S9Y/image/76pr0EfQi6R21MMIyzefN9hiqIU.jpg',
  },
  {
    id: 4,
    name: 'Donkatsu',
    image: 'https://t1.daumcdn.net/cfile/tistory/9951473F5D4633FD2C',
  },
  {
    id: 5,
    name: 'Kimbop',
    image: 'https://img.hankyung.com/photo/202110/99.27136316.1.jpg',
  },
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
