import Bin from '../../../assets/bin.svg';
import { LiCartStyle } from './style';

export const CartProduct = ({ item, onRemoveItem, onAddItem, onRemoveAllItems }) => {
  const handleRemoveItem = () => {
    onRemoveItem(item.id, 1);
  };

  const handleAddItem = () => {
    onAddItem(item.id);
  };

  const handleRemoveAllItems = () => {
    onRemoveAllItems(item.id);
  };

  return (
    <LiCartStyle>
      <div className='contentDiv'>
        <div className='imgDiv'>
          <img src={item.img} alt='' />
        </div>
        <div className='nameDiv'>
          <h1>{item.name}</h1>
          <div className='quantityDiv'>
            <span className='itemQuantity'>({item.quantity}x)</span>
            <div className='addDiv'>
              <span className='addButton' onClick={handleRemoveItem}>-</span>
              <span className='addButton' onClick={handleAddItem}>+</span>
            </div>
          </div>
        </div>
      </div>
      <div className='binDiv'>
        <img src={Bin} alt='' onClick={handleRemoveAllItems} />
      </div>
    </LiCartStyle>
  );
};
