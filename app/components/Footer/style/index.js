import styled from 'styled-components';
import { ISF_COLOR } from 'utils/layout';

export const Wrapper = styled.div`
display: flex;
width: 100%;
padding:100px;
background-image: radial-gradient(at center top, rgb(28, 59, 68), rgb(0, 25, 54) 70%);
justify-content:space-around;
flex-wrap: wrap;
`;

export const GroupeLogo = styled.div`
display: flex;
flex-direction: column;
p {
    margin: 20px 20px 0px 20px;
    color: white;
    font-weight: bold;
}
margin: 0px 50px;


`;

export const LogoList = styled.div`
display: flex;
justify-content:space-around;
align-items: center;

`;

export const Logo = styled.div`
margin: 20px;
.enercoop {
    width: 150px;
}
.energiePartagee{
    height: 120px;
}
.isf{
    width: 100px;
}


`;
