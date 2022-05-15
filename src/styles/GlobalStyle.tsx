import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		text-decoration: none;
		border: none;
	}

	body {
		background-color: #161616;
		font-family: 'Gorditas', cursive;
    	color: rgba(0, 0, 0, 0.8);
	}
`;

export default GlobalStyle;
