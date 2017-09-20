import React from 'react';
import {StaggeredMotion,spring} from 'react-motion';
import styled from 'styled-components';

const colors=[
  '#01579B',
  '#03A9F4',
  '#039BE5',
  '#0277BD',
  '#01579B',
];
const Wrapper= styled.div`
      display:flex;
      width:100vw;
      min-height:100vh;
 `;
const Box = styled.div`
    flex-basis:${(props)=>props.width}%;
    background:${(props)=>props.bgColor};
    border-right:1px solid #fff;
      `;
const contentWrapper= styled.div`
    flex-basis: 100%;
    background:${(props)=>props.bgColor};
    `;
 class Entrance extends React.Component{
    render(){
      return(
        <StaggeredMotion defaultStyles={[
          {width:100},
          {width:100},
          {width:100},
          {width:100},
          ]}
          styles={(prevStyles)=>[
            {width: spring(0)},
            {width: spring(prevStyles[0].width)},
            {width: spring(prevStyles[1].width)},
            {width: spring(prevStyles[2].width)},
            ]}
          >
          {(styles)=>(
          <Wrapper>
            <Box  bgColor={colors[0]} width={styles[0].width}/>
            <Box  bgColor={colors[1]} width={styles[1].width}/>
            <Box  bgColor={colors[2]} width={styles[2].width}/>
            <Box  bgColor={colors[3]} width={styles[3].width}/>
            <contentWrapper bgColor={colors[4]}>
            <p>kjjflkjhglkhglkjhsabvbcxvlkjsh</p>
            </contentWrapper>
          </Wrapper>
        )}
        </StaggeredMotion>
      );
    }
  }
  export default Entrance;
