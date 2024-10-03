import React from "react";
import "./style/index.css";

export default class States extends React.Component{
        constructor(props){
          super(props)
          this.state={num:0}
        }

        // creating functions after function block

       sub=()=>{this.setState({num:this.state.num-1})}
       add=()=>{this.setState({num:this.state.num+1})}
       reset=()=>{this.setState({num:0})}

        render(){
          return(<div id="mainDiv">
          
          <input type="submit" className="sub" onMouseOver={this.sub} onClick={this.sub} value="-"></input>
          <h1 id="h1" >{this.state.num}</h1>
          <input  type="submit" className="sub" onMouseOver={this.add} onClick={this.add} value="+"></input>
          
          <input type="submit" id="reset" onMouseOver={this.reset} onClick={this.reset} value="Reset" ></input>
          </div>


          )
        }
      }
