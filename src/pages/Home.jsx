import { notificationMsg } from "../utils";
import {
  NotificationModal,
  Navbar,
  HeroSection,
  DiscountSection,
  Specialization,
  MedicalUtilities,
  PatientCare,
  Blog,
  ServiceSection,
} from "../components/composer";

const Home = () => {
  return (
    <>
      <NotificationModal msg={notificationMsg} />
      <Navbar bgColor="bg-teal-50" />
      <HeroSection />
      <DiscountSection />
      <Specialization />
      <MedicalUtilities />
      <PatientCare />
      <Blog />
      <ServiceSection />
    </>
  );
};

export default Home;
