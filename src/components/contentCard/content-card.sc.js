
import styled from 'styled-components';

const ContentCard = styled.div`
  display: inline-block;
  width: 20%;
  height:40%;
  border: 1px solid black;
  margin-top: 10rem;
  position: absolute;
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  text-align: center;
  box-shadow: 0.5rem 0.5rem 2rem black;
`;

export default ContentCard;
