import { Outlet, useNavigation } from 'react-router-dom';

import MainNavigation from '../Components/MainNavigation/MainNavigation.jsx';


export default function Root(){
    return(
        <>
        <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
        </>
    )
  }