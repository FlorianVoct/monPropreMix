import styled from 'styled-components';
import { ISF_COLOR } from 'utils/layout';

export const Wrapper = styled.div`
display: flex;
width: 100%;
min-height: 400px;
padding:80px;
background-image: radial-gradient(at center top, rgb(28, 59, 68), rgb(0, 25, 54) 70%);
justify-content:center;
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
margin: 0px 30px;
`;

export const LogoList = styled.div`
display: flex;
justify-content:space-around;
align-items: center;
`;

export const Logo = styled.div`
margin: 20px;
background-color: white;
border-radius: 5px;
padding: 5px;
width: 120px;
height: 120px;
display: flex;
align-items: center;
justify-content: center;
.enercoop {
    width: 100px;
}
.energiePartagee{
    height: 100px;
}
.isf{
    width: 100px;
}
.rte {
    width: 100px;
}
.ademe {
    height: 100px;
}
.rac {
    width: 100px;
}
.cler {
    width: 100px;
}
.negawatt {
    width: 100px;
}
.energiePartagee{
    height: 100px;
}
.isf{
    width: 100px;
}
`;
