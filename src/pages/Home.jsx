import { notificationMsg } from "../utils";
import { NotificationModal, Navbar } from "../components/composer";

const Home = () => {
  return (
    <>
      <NotificationModal msg={notificationMsg} />
      <Navbar bgColor="bg-teal-50" />
    </>
  );
};

export default Home;
