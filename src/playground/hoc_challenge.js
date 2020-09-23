import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h3>This is the wrapped component</h3>
        <p>{props.info}</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => (
    (props) => (
        <div>
            <h2>This is the HOC</h2>            
            {props.isAuthenticated ? <WrappedComponent info={props.info}/>
             : 
                <p>please login to view the info</p>
              
             }
        </div>
    )
)
     
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="Hello you" />, document.getElementById('app'))