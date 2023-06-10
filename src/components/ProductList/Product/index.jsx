import { LiStyle } from './style';

export const Product = ({ product, addToCart }) => {
  return (
    <LiStyle>
      <div className='div1'>
        <img src={product.img} alt={`Imagem de ${product.name}`} />
      </div>
      <div className='div2'>
        <h1>{product.name}</h1>
        <h3>{product.category}</h3>
        <h2>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h2>
        <button id={`button_${product.id}`} onClick={() => addToCart(product)}> Adicionar </button>
      </div>
    </LiStyle>
  );
};
