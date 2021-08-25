import React, { Component} from "react"

class Films extends Component {
    constructor(props){
        super(props)
        console.log(this.props)
        this.state = { 
            loaded: false,
            results: [],
            people: [],
            fname:this.props.fname
        }
        console.log(this.state)
    }
    
    
    // This is the same goal as useEffect
    async componentDidMount(){
        let res = await fetch("https://ghibliapi.herokuapp.com/films")
        let json = await res.json()

        this.setState({
            loaded:true,
            results:json
        })
    }


    // After the results are set, if the people [] is empty, 
    // get all the people from each 
async componentDidUpdate(){
    // let res = await fetch("https://ghibliapi.herokuapp.com/films")
    // let json = await res.json()
    
    // const peopleFetch =()=>{
    //     let people = res.json.people
    //     if(!people === " "){
    //         fetch("https://ghibliapi.herokuapp.com/people")
    //     }
   
    // }
    // peopleFetch();
    let {people, results} = this.state
    let peopleUrls = []
    if (results && people.length == 0){
        for (let i=0; i < results.length; i++){
            for (let j=0; j < results[i].people.length; j++){
                console.log(results[i].people[j])
                peopleUrls.push(results[i].people[j])
            }
        }
        console.log(peopleUrls)
        console.log(results)
    }
}



    render(){
        let {favNumber} = this.props
        return (
            <div>
                {favNumber}
                {!this.state.loaded
                ? "Loading" 
                // Display films with a custom Film Class Comp
                : this.state.results.map((film)=> <li key={film.id}>{film.title}</li>)
                }

                {/*Display people names*/}
            </div>
        )
    }
}


export default Films