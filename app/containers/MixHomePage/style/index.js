import styled from 'styled-components';
import { ISF_COLOR } from 'utils/layout';
import fond from './fondMix.jpg';

export const PageContainer = styled.div`
flex:1;
display: flex;
justify-content: center;
width: 100%;
min-height: 100%;
`;

export const WrapperIntroduction = styled.div`
flex:1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 100%;
background-image : url(${fond});
background-attachment: fixed;
background-position: center;
`;



export const DivTitre = styled.div`
min-width: 600px;
padding: 50px;

background-color: rgb(0, 25, 54);
color: white;
`;

export const DivTexte = styled.div`
width: 600px;
padding: 50px;
margin-bottom: 150px;
background-color: rgb(28, 59, 68);
color:white;
`;

export const Wrapper = styled.div`
/*flex: 1 1 600px;*/
min-width: 600px;
display : flex;
flex-direction: column;
margin-top: 50px;
margin-bottom: 50px;
`;
export const DivTitreMix = styled.div`
min-width: 600px;
padding: 50px;
margin-top: 50px;
background-color: rgb(0, 25, 54);
color: white;
`;

export const DivContent = styled.div`
min-width: 600px;
padding: 30px;
background-color: white;
display:flex;
justify-content: center;
flex-wrap:wrap;
`;
export const SliderColumn = styled.div`
min-width: 600px;
padding: 20px;
`;
export const GraphColumn = styled.div`
min-width: 600px;
padding: 20px;
`;
