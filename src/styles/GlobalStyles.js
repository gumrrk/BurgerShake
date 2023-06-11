import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    :root {
        --color-color-primary: #27ae60;
        --color-color-secondary: #eb5757;
        --color-grey-600: #333333;
        --color-grey-400: #e0e0e0;
        --color-grey-300: #828282;
        --color-grey-200: #BDBDBD;
        --color-grey-100: #f5f5f5;
        --color-negative: #e60000;
        --color-warning: #ffcd07;
        --color-sucess: #168821;
        --color-information: #155bcb;
        --color-white:#ffffff;
        --color-black:#000000; 
        --font-family-1: 'Inter', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        user-select: none; 
        -webkit-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
        -o-user-select: none;
        transition: 0.2s linear;
    }
    
    #root {
        width: 100%;
    }

    body {
        display: flex;
        justify-content: center;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    button, select, option {
        cursor: pointer;
    }

    body.modal-open {
    overflow: hidden;
  }
`