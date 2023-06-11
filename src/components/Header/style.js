import styled from 'styled-components'

export const HeaderStyle = styled.header`
    display: flex;
    position: sticky;
    top: 0;
    flex-direction: row;
    justify-content: space-between;
    background-color: var(--color-grey-100);
    text-align: center;
    z-index: 5;
    padding: .625rem 6.875rem;

    @media (max-width: 764px) {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        width: 100vw;
        flex-direction: column;
        align-items: start;
        padding: 28px 1.875rem 1.125rem 1.875rem;
        background-color: #f2f2f2;
        gap: 1.0625rem;
    }  

    .logo {
        width: 9.9375rem;
        cursor: pointer;
    }
`

export const InputStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1.75rem;
    align-items: center;

    @media (max-width: 764px) {
        display: flex;
        align-items: center;
        width: 100vw;
    }

    .cartDiv {
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width:767px) {
        position: absolute;
            top: 1.75rem;
            right: 2.5rem;
        }
        
        p {
        position: relative;
        bottom:15px;
        left:15px;
        z-index: 30;
        padding: .75rem .3125rem;
        background-color: var(--color-color-primary);
        color: var(--color-white);
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 900;
        font-size: 14px;
        line-height: 0px;
        border-radius: 7px;
    }

    .cartButton {
        position: absolute;
        width: 1.5625rem;
        height: 1.5625rem;
        border: none;
        background: none;
        padding: 0;
    }
}

    .searchButton {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0px 20px;
        gap: 10px;
        width: 53px;
        height: 40px;
        background: var(--color-color-primary);
        border: 2px solid var(--color-color-primary);
        border-radius: 8px;
        flex-grow: 0;
        z-index: 2;
        align-self: center;
        right: 4.0625rem;
    }

    .divInput{
        display: flex;
        flex-direction: row;
        margin-right: -50px;

        @media (max-width: 767px) {
            width: 100vw;
            align-self: center;

        }
    }
    
    input {
        position: relative;
        display: flex;
        align-items: center;
        padding: 0px 4.5rem 0px .9375rem;
        width: 87%;
        height: 60px;
        background: var(--color-white);
        border: 2px solid var(--color-grey-400);
        border-radius: 8px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        @media (max-width: 764px) {
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 85%;
            padding: 0px 4.5rem 0px .9375rem;
        }
    }

    input:focus{
        border: 2px solid var(--color-grey-600);
    }
`