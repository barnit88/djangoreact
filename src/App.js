import React , { Component } from 'react';

import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';

import { connect } from 'react-redux';

import 'antd/dist/antd.css';
import CustomLayout from './containers/Layout';

import * as action from './store/action/auth';
// import ArticleList from './containers/ArticleListView';

class App extends Component{

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div className = "App">

        <Router>
          <CustomLayout {...this.props}>
              <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated : state.token !== null
  }
}

const mapDispatchToProps  = dispatch => {
  return {
    onTryAutoSignup : () => dispatch(action.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
