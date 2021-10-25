import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../store/actions';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(appActions, dispatch);
};
