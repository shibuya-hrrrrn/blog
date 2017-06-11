import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js'

class Navi extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount(){
  }

  render() {
    return (
      <div>
      navi
      <br />
      <Link to="/test">test</Link>
      <br />
      <div style={{ marginTop: '5em' }}>{this.props.children}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navi)
