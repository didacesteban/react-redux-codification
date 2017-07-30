import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {codifyText} from '../actions/index'


class InputTextToCodify extends Component {

  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  this.setState({value: event.target.value});
  }

 render() {
        return (
            <div>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
              <button onClick={() => this.props.codifyText(this.state.value)}>send</button>
              <hr/>
              <h2>{this.props.textCodified}</h2>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        textCodified: state.codifyActions
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({codifyText: codifyText}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(InputTextToCodify);
