import React from 'react'
import axios from 'axios'

class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            persons: []
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/try-db`)
            .then(res => {
                const persons = res.data;
                //  console.log(persons);

                this.setState({ persons: persons })
            })
    }

    render() {
        console.log(this.state.persons);
        

        return (
            <>
                {/* <h1>{this.state.persons[0].sid}</h1> */}
                <h1>首頁</h1>
            </>
        )

    }
}

export default Home