import styled from 'styled-components';

export const COLORS = {
  rougeInactif : "hsla(0,85%,14%,0.4)",
  rougeActif : "hsla(0,85%,42%,1)",
  orangeInactif : "hsla(24,93%,37%,0.4)",
  orangeActif : "hsla(24,93%,47%,1)",
  vertInactif : "hsla(112,86%,19%,0.4)",
  vertActif : "hsla(112,86%,39%,1)",
}

export const Wrapper = styled.div`
height: 400px;
min-width: 120px;
display: flex;
margin: 15px;
// padding:20px;
`;
export const BarDiv = styled.div`
width:30px;

`;
export const LegendDiv = styled.div`
width:70px;

`;
export const BarElement = styled.div`
height: ${props => props.elementHeight}px;
width: 30px;
padding: 1px 5px;
display: flex;


.line{
  border-top: 1px solid grey;
  background-color: grey;
}

.green{
  background-color: green;
}


`;



export const RectangleDeCouleur = styled.div`

background-color: ${props => props.couleur};
flex:1;





`;

export const LegendElement = styled.div`

font-size:

.emission1990{

}

.Objectif{

}

`;
