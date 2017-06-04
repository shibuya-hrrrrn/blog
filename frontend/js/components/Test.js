import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Test extends Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className='container'>
        <h1>Test</h1>
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
)(Test)
