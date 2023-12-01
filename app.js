const rparent = React.createElement(
    "div",
    {
        id: "parent"
    },
    [
        React.createElement(
            "h1",
            {
                id: "rh1"
            },
            "Namaste from React!"
        ),

        React.createElement(
            "div",
            {
                id: "child1"
            },
            
            [
                React.createElement(
                    "h1",
                    {},
                    "Namaste from h1 of child1"
                ),
    
                React.createElement(
                    "h2",
                    {},
                    "Namaste from h2 of child1"
                )
    
            ]
        ),

        React.createElement(
            "div",
            {
                id: "child2"
            },
            
            [
                React.createElement(
                    "h1",
                    {},
                    "Namaste from h1 of child2"
                ),
    
                React.createElement(
                    "h2",
                    {},
                    "Namaste from h2 of child2"
                )
    
            ]
        )
    ]
    
);

const reactdomroot = ReactDOM.createRoot(
    document.getElementById("reactroot")
);

reactdomroot.render(rparent);