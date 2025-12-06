import s2 from '../../s1-main/App.module.css';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { Loader } from './Loader';
import { useAppDispatch } from './bll/hooks/useAppDispatch';
import { useAppSelector } from './bll/hooks/useAppSelector';
import { selectLoading } from './bll/loading-selector';
import { loadingAC } from './bll/loadingReducer';

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  // useSelector, useDispatch // пишет студент
  const isLoading = useAppSelector(selectLoading);
  const dispatch = useAppDispatch();

  const setLoading = () => {
    // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    // setTimeout
    dispatch(loadingAC(true));
    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 1500);
  };

  return (
    <div id={'hw10'}>
      <div className={s2.hwTitle}>Homework #10</div>

      <div className={s2.hw}>
        {isLoading ? (
          <div id={'hw10-loading'}>
            <Loader />
          </div>
        ) : (
          <SuperButton id={'hw10-button-start-loading'} onClick={setLoading}>
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
