import { notificationMsg } from "../utils";
import {
  NotificationModal,
  Navbar,
  HeroSection,
  DiscountSection,
  Specialization,
} from "../components/composer";

const Home = () => {
  return (
    <>
      <NotificationModal msg={notificationMsg} />
      <Navbar bgColor="bg-teal-50" />
      <HeroSection />
      <DiscountSection />
      <Specialization />
    </>
  );
};

export default Home;
