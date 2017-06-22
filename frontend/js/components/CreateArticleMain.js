import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/article'
import ArticleInput from './ArticleInput'

class CreateArticleMain extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const { actions } = this.props
    return (
      <div className='container'>
        <h2>記事登録</h2>
        <ArticleInput actions={actions} article={{}} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateArticleMain)
