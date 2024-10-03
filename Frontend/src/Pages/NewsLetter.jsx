import NewsletterSignup from '../Components/NewsLetterSignup/NewsLetterSignup.jsx';
import PageContent from '../Components/PageContent/PageContent.jsx';

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}

export default function NewsletterPage(){
    return(
        <>
        <PageContent title="Join our awesome newsletter!">
          <NewsletterSignup />
        </PageContent></>
    )
  }

