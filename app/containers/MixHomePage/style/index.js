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

export const Wrapper = styled.div`
flex:1;
max-width: 800px;
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
margin-top: 150px;
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
export const DivTitreMix = styled.div`
min-width: 600px;
padding: 50px;
margin-top: 50px;
background-color: rgb(0, 25, 54);
color: white;
`;

export const DivContent = styled.div`
min-width: 600px;
padding: 50px;
margin-bottom: 50px;
background-color: white;
`;
