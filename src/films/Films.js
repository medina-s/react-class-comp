import React, { Component} from "react"

class Films extends Component {
    constructor(){
        super()
        this.state = { 
            loaded: false,
            results: []
        }
    }
    
    async componentDidMount(){
        let res = await fetch("https://ghibliapi.herokuapp.com/films")
        let json = await res.json()

        this.setState({
            loaded:true,
            results:json
        })
    }
    render(){
        return (
            <div>
                {!this.state.loaded
                ? "Loading" 
                : this.state.results.map((film)=> <li>{film.title}</li>)
                }
            </div>
        )
    }
}


export default Films