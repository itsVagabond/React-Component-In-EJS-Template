const React = require("react");

class HelloComponent extends React.Component {
    render() {
        return React.createElement('h1', null, 'Hello Aniket');
    }
};

module.exports = HelloComponent;