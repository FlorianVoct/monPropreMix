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
display: flex;
.panel {
    flex:1;
}
.grey {
    color: grey;
}
.rouge {
    color: ${COLORS.rougeActif};
}
.orange {
    color: ${COLORS.orangeActif};
}
.vert {
    color: ${COLORS.vertActif};
}
`;
export const Result = styled.span`
font-size: 3em;
font-weight: bold;

`;
export const Obj = styled.span`
font-size: 2em;
font-weight: bold;
color: grey;
`;
