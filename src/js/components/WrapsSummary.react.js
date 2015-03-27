var React = require('react');

var Bootstrap = require('react-bootstrap');
var Panel = Bootstrap.Panel;
var Table = Bootstrap.Table;

var WrapsSummary = React.createClass({
    render: function() {
        return (
            <Panel header='Summary' bsStyle='info'>
                <Table striped bordered condensed>
                    <thead>
                        <tr>
                            <th>Total wraps</th>
                            <th>Full wraps</th>
                            <th>Half wraps</th>
                            <th>Wire length</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.total}</td>
                            <td>{this.props.full}</td>
                            <td>{this.props.half}</td>
                            <td>{this.props.wireLength}mm</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        );
    }
});

module.exports = WrapsSummary;