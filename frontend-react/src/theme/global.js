import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
    margin: 0; 
    padding: 0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Oswald' , sans-serif;
    

}
html , body , :root{
    min-height: 100%;
}

body{
    background-color: ${(props) => props.theme.colors.background} ;
    color:  ${(props) => props.theme.colors.text};
}

h1{
    color:  ${(props) => props.theme.colors.text};
    font-size: 2rem;
    font-weight:semi-bold;
}
h2{
    color:  ${(props) => props.theme.colors.title};
    font-size: 1.75rem;
}
h3, h4{
    font-weight:normal;
}


`;
