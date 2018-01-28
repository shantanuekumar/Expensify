import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>hey </h1>
        <p>I'm there, {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    
    return (props) => (
    <div>
       { props.isAdmin && <p>this is private info! please do not share.</p>}
        <WrappedComponent {...props}/>
    </div>
);
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated?<WrappedComponent {...props} />:<p>this is private info</p> 
            }
        </div>
        
    );
};
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true}  info="let the party begin" />,document.getElementById('app') );
ReactDOM.render(<AuthInfo isAuthenticated={false}  info="let the party begin" />,document.getElementById('app') );
