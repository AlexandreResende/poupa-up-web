
import styled from 'styled-components';

const ContentCard = styled.div`
  position: absolute;

  width: 20vw;
  height:40vh;
  
  text-align: center;

  margin-top: 15vh;
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};

  border: 1px solid black;
  box-shadow: 0.5rem 0.5rem 2rem black;
  display: inline-block;
`;

export default ContentCard;
