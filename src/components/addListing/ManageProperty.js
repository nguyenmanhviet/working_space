import { useState } from 'react';
import AddProperty from './AddProperty';
import AddRoom from './AddRoom';
import LandingPage from './LandPage';
import classes from './ManageProperty.module.css';

const ManageProperty = (props) => {
    const [index, setIndex] = useState(1);

    return (
      <div className={classes.container}>
        <div className={classes.nav}>
          <div className={index !== 1 ? classes.nav_item : classes.active}>
            <p onClick={() => setIndex(1)}> Add Property </p>
          </div>
          <div className={index !== 2 ? classes.nav_item : classes.active}>
            <p onClick={() => setIndex(2)}> Add Room In Property </p>
          </div>
          <div className={index !== 3 ? classes.nav_item : classes.active}>
            <p onClick={() => setIndex(3)}> Manage Your Property </p>
          </div>
        </div>
         {index === 1 && <AddProperty />}
        {index === 2 && <LandingPage />}
        {/* {index === 3 && <AccessAndSecurity />}  */}
      </div>
    );
}

export default ManageProperty;