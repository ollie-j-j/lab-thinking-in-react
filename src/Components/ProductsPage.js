import { useState } from 'react';
import jsonData from '../data.json';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProductTable products={products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))}/>
    </div>
  );
}

export default ProductsPage;