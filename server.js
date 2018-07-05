const React = require("react"),
    myComponent = require("./HelloComponent"),
    app = require("express")(),
    ReactComponent = React.createElement(myComponent);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    const Markup = React.renderToString(ReactComponent);

    res.render('index', {
        Component: Markup
    })
});

app.listen(3000, () => {
    console.log("express server started...");
});