import React, { Component } from "react"
import "./test.css";
import styled from "styled-components"

class Test extends Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
        // this.add = this.add.bind(this)
    }
    render() {
        return <button>{this.state.num}</button>
    }
    componentDidMount() {
        this.setState({
            num: this.state.num + 1
        })
        console.log(this.state.num);
        this.setState({
            num: this.state.num + 1
        })
        console.log(this.state.num);
        // setTimeout(() => {
        //     this.setState({
        //         num: this.state.num + 1
        //     })
        //     console.log(this.state.num);
        //     this.setState({
        //         num: this.state.num + 1
        //     })
        //     console.log(this.state.num);
        // }, 0)
    }
}
export default Test