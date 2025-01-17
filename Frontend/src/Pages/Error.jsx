import { useRouteError } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation/MainNavigation.jsx';

import PageContent from '../Components/PageContent/PageContent.jsx';


export default function Error(){
    const error = useRouteError();
  
    let title = 'An error occurred!';
    let message = 'Something went wrong!';
  
    if (error.status === 500) {
      message = error.data.message;
    }
  
    if (error.status === 404) {
      title = 'Not found!';
      message = 'Could not find resource or page.';
    }
    return(
        <>
        <MainNavigation />
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent></>
    )
  }