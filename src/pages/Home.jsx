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
  FAQ,
  Footer,
  ServiceSection,
  DownloadSection,
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
      <FAQ />
      <DownloadSection />
      <Footer />
    </>
  );
};

export default Home;
