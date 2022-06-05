import { Fragment} from 'react';
import classes from './Home.module.css';

import HeaderHome from './HeaderHome';
import HomeTypeRoom from './HomeTypeRoom';
import Warranty from './Warranty';
import City from './City';

const Home = (props) => {
    

    return (
        <Fragment>
        <HeaderHome />
        <HomeTypeRoom />
        <City />
        <Warranty />
        </Fragment>
    );
  };
  
  export default Home;