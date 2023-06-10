import { CartTotalStyle } from './style';

export const CartTotal = ({ cartTotal, onClearCart }) => {
  return (
    <CartTotalStyle>
      <div className='div1'>
        <h2>Total:</h2>
        <h3>
          {cartTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </h3>
      </div>
      <button onClick={onClearCart}>Remover todos os itens</button>
    </CartTotalStyle>
  );
};
