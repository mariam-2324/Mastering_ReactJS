import { Component } from "react";


class Boundries extends Component{
    constructor(props){
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null }
    }
    //THIS IS REACT'S OWN METHOD TRIGGERS ON ITS OWN.
    static getDerivedStateFromError(error){
        return { hasError: true, error: error }
    }

    //THIS METHOD USED BY USER FOR LOGIN TO THE PAGES.
    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({ errorInfo });
    }

    resetErrorBoundary = () => {
        this.setState({ hasError: false, error: null, errorInfo: null });
    };

    render(){
        if(this.state.hasError){
            return (
                <div style={{border: '2px solid red', padding: '20px', margin: '20px' }}>
                    <h3>Oop! Something went wrong.</h3>
                    <p>{this.props.fallback}</p>
                    <p>Error: {this.state.error?.message || 'Unknown error'}</p>
                    
                    <button onClick={this.resetErrorBoundary}>Try Again</button>
                </div>
            );
        }
        return this.props.children;
    }
}
export default Boundries;