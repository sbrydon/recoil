var React = require('react');

var Bootstrap = require('react-bootstrap');
var Input = Bootstrap.Input;
var Panel = Bootstrap.Panel;

var CoilSettings = React.createClass({
    handleChange: function() {
        this.props.onChange({
            coilNumber: this.refs.coilNumber.getValue(),
            wireDiameter: this.refs.wireDiameter.getValue(),
            innerDiameter: this.refs.innerDiameter.getValue(),
            targetResistance: this.refs.targetResistance.getValue()
        });
    },

    render: function() {
        return (
            <Panel header='Settings' bsStyle='primary'>
                <form>
                    <Input
                        ref='coilNumber'
                        type='select'
                        label='Type'
                        value={this.props.coilNumber}
                        onChange={this.handleChange}
                    >
                        <option value='1'>Single coil</option>
                        <option value='2'>Dual coil</option>
                        <option value='3'>Triple coil</option>
                        <option value='4'>Quadruple coil</option>
                    </Input>

                    <Input
                        ref='wireDiameter'
                        type='select'
                        label='Wire thickness'
                        addonBefore='AWG'
                        value={this.props.wireDiameter}
                        onChange={this.handleChange}
                    >
                        <option value='0.812'>20</option>
                        <option value='0.723'>21</option>
                        <option value='0.644'>22</option>
                        <option value='0.573'>23</option>
                        <option value='0.511'>24</option>
                        <option value='0.455'>25</option>
                        <option value='0.405'>26</option>
                        <option value='0.361'>27</option>
                        <option value='0.321'>28</option>
                        <option value='0.286'>29</option>
                        <option value='0.255'>30</option>
                        <option value='0.227'>31</option>
                        <option value='0.202'>32</option>
                    </Input>

                    <Input
                        ref='innerDiameter'
                        type='number'
                        label='Inner diameter'
                        addonAfter='mm'
                        min='0'
                        step='0.25'
                        value={this.props.innerDiameter}
                        onChange={this.handleChange}
                    />

                    <Input
                        ref='targetResistance'
                        type='number'
                        label='Target resistance'
                        addonAfter='Ω'
                        min='0'
                        step='0.1'
                        value={this.props.targetResistance}
                        onChange={this.handleChange}
                    />
                </form>
            </Panel>
        );
    }
});

module.exports = CoilSettings;