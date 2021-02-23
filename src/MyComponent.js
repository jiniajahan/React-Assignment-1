import React from 'react';

const MyComponent = (props) =>{
return (
    <div>
        <h1>{props.page.title}</h1>
        <p>{props.page.content}</p>
    </div>
)
}; 

export default MyComponent;