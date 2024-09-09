import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from "../shared/layout-components/seo/seo";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the landing page
    router.replace('/components/landingpage/landingpage');
  }, [router]);

  return (
    <>
      <Seo title="Redirecting" />
      <div className="page main-signin-wrapper">
        <p>Redirecting to landing page...</p>
      </div>
    </>
  );
};

export default Home;
