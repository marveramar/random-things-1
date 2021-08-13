
import * as React from 'react';
import List from './list';
import { ApiCall } from '../services/Api';
import Header from './header';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allElements: [],
        }
    }
    componentDidMount() {
        ApiCall()
            .then(data => {
                console.log(data)
                this.setState({
                    allElements: data
                });
            })
    }
    render() {
        return (
            <div>
                <Header />
                <List elements={this.state.allElements} />
            </div>
        )
    }
}
export default App;