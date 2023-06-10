import { styled } from 'styled-components'

export const LiCartStyle = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .contentDiv {
        display: flex;
        flex-direction: row;
        gap: 9.28px;
    }

    .imgDiv {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 13px 14px;
        background-color: var(--color-grey-100);
        border-radius: 5px;
    }

    .imgDiv img {
        width: 3.4375rem;
        height: 3.4375rem;
    }

    .nameDiv {
        display: flex;
        flex-direction: column;
        gap: .3125rem;
    }

    .nameDiv h1 {
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 700;
        font-size: 1.125rem;
        color: var(--color-grey-600);
    }

    .quantityDiv {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 5rem;
    }

    .itemQuantity {
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 700;
        font-size: .875rem;
        color: var(--color-color-primary);
    }

    .addDiv {
        display: flex;
        flex-direction: row;
        gap: .375rem;
    }

    .addButton {
        display: flex;
        font-family: var(--font-family-1);
        text-decoration: none;
        border: none;
        background: transparent;
        border-radius: 50%;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        color: var(--color-grey-300);
        height: fit-content;
        cursor: pointer;
    }

    .binDiv {
        cursor: pointer;
    }
`