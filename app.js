import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component
const Title = function() {
    return (
        <h1>Nihao from Title😍</h1>
    );
}


const user = {

    fname: "Kyle",

    lname: "Kulinski",

    getName: function() {

        return `${this.fname} ${this.lname}`;
    }
};

// React Functional Component
const HeadingComponent = () => (
    <div id="container">
        <Title></Title>
        {user.getName()}
        {Title()}
        <h1 className="heading">Hola from 
        React Functional Component🚀🚀🚀</h1>
    </div>
);

// React Element
const re1 = <span>ReactElement1</span>;
const heading = (<h1>
    <Title />
    {re1}
    Injected React Element👌
    {"Ichiban"}
    <HeadingComponent />
    </h1>);

const reactroot = ReactDOM.createRoot(
    document.getElementById("reactroot")
);

reactroot.render(heading);