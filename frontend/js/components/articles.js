import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as Actions from '../actions/article'

class Articles extends Component{
  constructor(props){
    super(props)
  }


  componentDidMount(){
    this.props.actions.getArticles()
  }

  render() {
    const { articles } = this.props
    return (
      <div className='container'>
        <h2>articles</h2>
            <div className='col-md-4'>
            <table className='table table-striped table-hover'>
              <thead>
                <tr>
                  <th>
                    記事一覧
                  </th>
                </tr>
              </thead>
              <tbody>
              {
                articles.map(
                  a =>
                  <tr key={a.id}>
                    <td>
                      {a.title}<br />
                    </td>
                  </tr>
                )
              }
              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
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
)(Articles)
