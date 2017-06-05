import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from '../actions/article'
import { Field, reduxForm } from 'redux-form'

class ArticleInput extends Component {

  constructor(props){
    super(props)
    this.doHandleSubmit = this.doHandleSubmit.bind(this)
  }

  doHandleSubmit(param){
    if (confirm("登録しますか")) {
      this.props.actions.addArticle(param)
    }
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
      <h2>ブロク作成</h2>
      <table className='table table-striped'>
          <tbody>
            <tr>
              <td className='col-md-3 input-group-addon'>
                タイトル
              </td>
              <td className='col-md-9'>
                <Field name="title" id="title" component="textarea" cols="125" rows="3" maxLength="255" />
              </td>
            </tr>
            <tr>
              <td className='col-md-3 input-group-addon'>
                記事
              </td>
              <td className='col-md-9'>
                <Field name="text" component="textarea" cols="125" rows="25" />
              </td>
            </tr>
          </tbody>
      </table>
      <button className='btn btn-primary btn-lg btn-block' onClick={handleSubmit(data => {
        this.doHandleSubmit(data)
      })}>
         登録
      </button>
      </div>
    )
  }
}

ArticleInput = reduxForm({
  form: 'articleInput',
  enableReinitialize: true
})(ArticleInput)

function mapStateToProps(state) {
  return {
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
)(ArticleInput)
