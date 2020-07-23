/** arquivo de estilo global */

import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  /**tirando todas as margens, padding, outline padrões de todos os componentes html*/
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
}

html, body, #root {
  min-height: 100%;
}

body {
  background: #7159c1;
  -webkit-font-smoothing: antialiased !important;/**Usamo o important para que o browser não tire. Essa propriedade vai deixar as fontes bem definidas */
}

body, input, button{
  color:  #222;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif,
}

button{
  cursor: pointer
}
`;
