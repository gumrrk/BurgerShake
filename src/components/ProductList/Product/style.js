import { styled } from 'styled-components';

export const LiStyle = styled.li`
    display: flex;
    flex-direction: column;
    min-width: 18.75rem;
    height: 21.625rem;
    background: #FFFFFF;
    border: 2px solid var(--color-grey-400);
    border-radius: 5px;
    
    .div1 {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-grey-100);
        width: 100%;
        height: 150px;
        background-size: contain;

            img {
            width: 11.0625rem;
            object-fit: contain;
            height: 100%;
        }
    }

    .div2 {
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
        gap: 14px;
        :hover {border:none}

        h1 {
            font-family: var(--font-family-1);
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            color: var(--color-grey-600);
        }

        h2 {
            font-family: var(--font-family-1);
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 24px;
            color: var(--color-color-primary);
        }

        h3 {
            font-family: var(--font-family-1);
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: var(--color-grey-300);
        }

        button {
            font-family: var(--font-family-1);
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: var(--color-white);
            padding: .7188rem 1.25rem;
            background-color: var(--color-grey-200);
            border-radius: 8px;
            border: none;
            width: fit-content;
        }

        button:hover {
            background-color: var(--color-sucess);
        }
    }
`