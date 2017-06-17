import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/article'
import ArticleInput from './ArticleInput'

class EditArticleMain extends Component {
  constructor(props){
    super(props)
    this.props.actions.getArticleData(this.props.location.query.articleid)
  }

  render() {
    const { actions, article } = this.props

    if (Object.keys(this.props.article).length === 0) {
      return (<div></div>)
    }

    return (
      <div className='container'>
        <h2>記事更新</h2>
        <ArticleInput actions={actions} article={article} />
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
)(EditArticleMain)
