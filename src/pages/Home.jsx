import { notificationMsg } from "../utils";
import { NotificationModal, Navbar } from "../components/composer";

const Home = () => {
  return (
    <>
      <NotificationModal msg={notificationMsg} />
      <Navbar />
    </>
  );
};

export default Home;
