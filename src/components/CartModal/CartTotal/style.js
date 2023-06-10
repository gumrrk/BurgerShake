import { styled } from 'styled-components';

export const CartTotalStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0rem 1.4375rem 1.25rem 1.4375rem;
    
    .div1 {
        display: flex;
        border-top: 2px solid var(--color-grey-100);
        justify-content: space-between;
        padding: 1.25rem 0;
    }

    .div1 h2 {
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem; 
        color: var(--color-grey-600);
    }

    .div1 h3 {
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 600;
        font-size: .875rem;
        line-height: 1.5rem; 
        color: var(--color-grey-300);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: var(--color-grey-300);
        background-color: var(--color-grey-100);
        border-radius: .5rem;
        padding: 1.2813rem 0rem;
        border: none;
    }
`