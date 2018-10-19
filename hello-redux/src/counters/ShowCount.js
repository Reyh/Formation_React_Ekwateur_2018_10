import React from 'react';
import { connect } from 'react-redux';

function ShowCount({count = 0}) {
  return <div>Vous avez cliqué {count} fois</div>;
}

// const ShowCount = ({count = 0}) => <div>Vous avez cliqué {count} fois</div>;

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(ShowCount);