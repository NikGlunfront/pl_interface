import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setIsContentHidden } from '../store/slices/pageSlice/pageSlice';

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname, state } = useLocation();
  const dispatch = useDispatch()

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setIsContentHidden(false))
  }, [pathname, state]);
}

export default ScrollToTop;