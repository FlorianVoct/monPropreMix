import styled from 'styled-components';
import { ISF_COLOR } from 'utils/layout';

export const Wrapper = styled.div`
display: flex;
height: 120px;
width: 100%;
padding:20px;
background-color: ${ISF_COLOR.bleu_clair};
align-items:center;
justify-content:center;
flex-direction: column;
`;

export const Titre = styled.h1`
color: white;
margin: 0px;
`;

export const SousTitre = styled.h4`
color: white;
margin: 0px;
padding-left: 100px;
`;
