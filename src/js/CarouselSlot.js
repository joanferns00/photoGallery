import styled from 'styled-components';
const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  text-align: center;
  order: ${(props) =>  props.order};
`
export default CarouselSlot;