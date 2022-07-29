import { createGlobalStyle } from 'styled-components'
import { Colors } from './colors'

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Times New Roman', sans-serif; 
        
    }


    body{
        background-color: ${Colors.black};
    }




    
`

export default GlobalStyles
