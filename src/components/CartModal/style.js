import { styled } from 'styled-components';

export const ModalOverlay = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    width: 100vw;
    height: 100vh;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.25);
`

export const ModalBox = styled.div`
    width: 100vw;
    max-width: min(31.25rem, 90%);
    position: relative;
    background: var(--color-white);
    border-radius: .3125rem;
    overflow: hidden;

    ul {
        display: flex;
        position: relative;
        flex-direction: column;
        padding: 20px 23px;
        gap: 18px;
        height: 220px;
        overflow-y: scroll;

        .emptyMessage {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-family: var(--font-family-1);
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            line-height: 28px;
            color: var(--color-grey-600);
            width: fit-content;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`

export const CloseButton = styled.img`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`

export const ModalHeader = styled.div`
    background-color: var(--color-color-primary);
    padding: .8125rem 1.375rem;

    h1 {
        font-family: var(--font-family-1);
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--color-white);
    }
`