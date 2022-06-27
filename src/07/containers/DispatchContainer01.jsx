import { connect } from 'react-redux';
import ActionComponent from '../ActionComponent01';

import { setAge } from '../actions/collectionActions';

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setAge: (id, age) => dispatch(setAge(id, age)),
//   };
// };

// const mapDispatchToProps = {
//   setAge: setAge,
// };

const mapDispatchToProps = {
  setAge,
};

export default connect(null, mapDispatchToProps)(ActionComponent);
