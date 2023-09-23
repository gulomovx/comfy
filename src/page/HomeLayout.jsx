import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import Loading from "../components/Loading";
const HomeLayout = () => {
  const navigation = useNavigation();
  
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading/>
      ) : (
        <main className="align-elements">
          <Outlet />
        </main>
      )}
    </>
  );
};

export default HomeLayout;
