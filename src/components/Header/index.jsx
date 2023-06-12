import { HeaderStyle, InputStyle } from './style';
import Logo from '../../assets/logo.svg';
import Lupa from '../../assets/lupa.svg';
import Cart from '../../assets/cart.svg';

export const Header = ({ openModal, handleSearchChange, cartItemCount }) => {
  const handleLogoClick = () => {
    window.location.reload();
  };
  return (
    <HeaderStyle>
      <img className='logo' src={Logo} alt='Logotipo do site Burguer Kenzie' onClick={handleLogoClick} />
      <InputStyle>
        <div className='cartDiv'>
          <p>{cartItemCount}</p>
          <button className='cartButton hoverable' onClick={openModal}>
            <img src={Cart} alt='Ícone do carrinho' />
          </button>
        </div>
        <div className='divInput'>
          <input
            type='text'
            placeholder='Digitar pesquisa'
            onChange={handleSearchChange}
          />
          <button className='searchButton'>
            <img src={Lupa} alt='Ícone de busca' />
          </button>
        </div>
      </InputStyle>
    </HeaderStyle>
  );
};