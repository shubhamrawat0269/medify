import { notificationMsg } from "../utils";
import {
  NotificationModal,
  Navbar,
  HeroSection,
  DiscountSection,
} from "../components/composer";

const Home = () => {
  return (
    <>
      <NotificationModal msg={notificationMsg} />
      <Navbar bgColor="bg-teal-50" />
      <HeroSection />
      <DiscountSection />
    </>
  );
};

export default Home;
