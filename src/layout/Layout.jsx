import { Outlet } from "react-router-dom";
import { Footer } from "../components/composer";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { tabsTheme } from "../utils/theme";

const theme = extendTheme({
  components: {
    Tabs: tabsTheme,
  },
});

const Layout = () => {
  return (
    <ChakraProvider theme={theme}>
      <Outlet />
      <Footer />
    </ChakraProvider>
  );
};

export default Layout;
