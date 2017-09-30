import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadRepos } from '../actions/repoActions';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			repos: []
		}
	}

	componentWillMount() {
		this.props.loadRepos();
	}

	render() {
		const { repos } = this.props;
		return (
			<div>
				<h1> Repos is Live! </h1>
			</div>
		)
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    loadRepos: () => dispatch(loadRepos())
  };
}

const mapStateToProps = (state) => {
  return {
    repos: state.repos
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
