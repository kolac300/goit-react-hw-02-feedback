import styled from 'styled-components';
export const Button = styled.button`
  box-sizing: border-box;
  background-color: ${props => {
		switch (props.feedBack) {
			case "good":
				return "green";
			case "neutral":
				return "yellow";
			case "bad":
				return "red";
			default:
				break;
		}
	}};
border: 2px solid #e74c3c;
border-radius: 0.6em;
cursor: pointer;
font-size: 1rem;
font-weight: 400;
line-height: 1;
margin: 20px;
padding: 1.2em 2.8em;
font-weight: 700;
border-color: #3498db;
color: black;
box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
transition: all 550ms ease;
:hover {
	box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
	outline: 0;
}
`