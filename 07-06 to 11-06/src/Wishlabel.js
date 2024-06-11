import React, {Component} from 'react'
export class Wishlabel extends Component{
    constructor(props){
        super(props);
        this.state={
            visitor:0
        }
        this.changeCount = this.changeCount.bind(this); 
    }
        changeCount(event){
            this.setState({
                visitor:this.state.vistor+1
            });
           
        }
        render(){
       return(
        <div>Wishlabel
            <label onMouseOver={this.changeCount}>
                Visitor's count:{this.state.visitor}
            </label>
        </div>
       )
        }
        }
    
