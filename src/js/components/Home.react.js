var CoilSettings = require('./CoilSettings.react');
var Marty = require('marty');
var React = require('react');
var Store = require('../stores/Store');
var WrapsSummary = require('./WrapsSummary.react');

var Bootstrap = require('react-bootstrap');
var Col = Bootstrap.Col;
var Grid = Bootstrap.Grid;
var Navbar = Bootstrap.Navbar;
var Row = Bootstrap.Row;

var Home = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar brand='Recoil' />

                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <CoilSettings {...this.props['coil']} />
                        </Col>

                        <Col xs={12} md={6}>
                            <WrapsSummary {...this.props['wraps']} />
                        </Col>
                    </Row>
                </Grid>

                <footer>
                    <a href='https://github.com/sbrydon/recoil'>
                        View source on GitHub
                    </a>
                </footer>
            </div>
        );
    }
});

module.exports = Marty.createContainer(Home, {
    listenTo: Store,
    fetch: {
        coil: function() {
            return Store.getCoil();
        },
        wraps: function() {
            return Store.getWraps();
        }
    }
});