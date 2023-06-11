import styled from 'styled-components'

export const ProductListStyle = styled.ul`
    display: flex;
    flex-direction: row;
    align-self: center;
    width: 90vw;
    flex-wrap: wrap;
    row-gap: 3.5rem; 
    column-gap: 3.25rem;
    list-style-type: none;
    margin-top: 2rem;

    @media (max-width: 764px) {
        display: flex;
        flex-direction: row;
        overflow-x: auto;
        flex-wrap: nowrap;
        margin-top: 11rem;
        gap: 1rem;
    }

    li:hover {
            border: 2px solid var(--color-color-primary);
        }

    li:hover button {
            background-color: var(--color-color-primary);
        }
    
    li:hover img {
        animation: floatAnimation 3s ease-in-out infinite;
    }

    @keyframes floatAnimation {
        0% {
            transform: translate(0, 0) rotate(0);
        }
        10% {
            transform: translate(-2px, -2px) rotate(-2deg);
        }
        20% {
            transform: translate(2px, -2px) rotate(2deg);
        }
        30% {
            transform: translate(-2px, 2px) rotate(-2deg);
        }
        40% {
            transform: translate(2px, 2px) rotate(2deg);
        }
        50% {
            transform: translate(-2px, -2px) rotate(-2deg);
        }
        60% {
            transform: translate(2px, -2px) rotate(2deg);
        }
        70% {
            transform: translate(-2px, 2px) rotate(-2deg);
        }
        80% {
            transform: translate(2px, 2px) rotate(2deg);
        }
        90% {
            transform: translate(-2px, -2px) rotate(-2deg);
        }
        100% {
            transform: translate(0, 0) rotate(0);
        }
    }
`