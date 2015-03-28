var React = require('react');
var PropTypes = React.PropTypes;

var Bootstrap = require('react-bootstrap');
var Col = Bootstrap.Col;
var Panel = Bootstrap.Panel;
var Row = Bootstrap.Row;
var Table = Bootstrap.Table;

var WrapsSummary = React.createClass({
    propTypes: {
        total: PropTypes.number.isRequired,
        full: PropTypes.number.isRequired,
        half: PropTypes.string.isRequired,
        wireLength: PropTypes.number.isRequired
    },

    render: function() {
        return (
            <Panel header='Summary' bsStyle='info'>
                <Row>
                    <Col xs={12}>
                        <Table condensed>
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
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <div className='help-block'>
                            This is just an estimate of the wraps required for the
                            target resistance - check every coil with an ohm meter
                        </div>
                    </Col>
                </Row>
            </Panel>
        );
    }
});

module.exports = WrapsSummary;