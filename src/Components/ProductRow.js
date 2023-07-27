function ProductRow(props) {
  const productClass = props.product.inStock ? "in-stock" : "out-of-stock";
  
  return (
      <tr className={productClass}>
          <td>{props.product.name}</td>
          <td>{props.product.price}</td>
      </tr>
  );
}

export default ProductRow;


