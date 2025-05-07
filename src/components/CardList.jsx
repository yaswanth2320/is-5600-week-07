import React, { useState, useEffect } from 'react'
import Card from './Card'
import Button from './Button'
import Search from './Search'

const CardList = ({ data }) => {
  // define the limit state variable and set it to 10
// CardList.js
import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../config';
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = () => {
  const limit = 10;

  // Define the offset state variable and set it to 0
@@ -15,36 +23,59 @@ const CardList = ({ data }) => {
  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, limit, data])
  const [products, setProducts] = useState([]);

  const filterTags = (tagQuery) => {
    const filtered = data.filter(product => {
      if (!tagQuery) {
        return product
      }
  const fetchProducts = () => {
    fetch(`${BASE_URL}/products?offset=${offset}&limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

      return product.tags.find(({title}) => title === tagQuery)
    })
  useEffect(() => {
    fetchProducts();
  }, [offset]);

    setOffset(0)
    setProducts(filtered)
  }
  const handlePrevious = () => {
    if (offset >= limit) {
      setOffset(offset - limit);
    }
  };

  const handleNext = () => {
    setOffset(offset + limit);
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags}/>
      <Search />
      <div className="mt2 mb2">
      {products && products.map((product) => (
        {products.map((product) => (
          <Card key={product._id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => setOffset(offset - limit)} />
        <Button text="Next" handleClick={() => setOffset(offset + limit)} />
        <Button text="Previous" handleClick={handlePrevious} />
        <Button text="Next" handleClick={handleNext} />
      </div>
    </div>
  )
}
  );
};

export default CardList;