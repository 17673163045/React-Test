import React from 'react';
import styled from "styled-components"
import Test from "@/components/Test"

class App extends React.Component {
  render() {
    return <AppElement > 
      <Test></Test>
    </AppElement>
  }
}
const AppElement = styled.div`
  height:100%;
  width:100%;
  display:flex;
  flex-direction:column;
`
export default App;