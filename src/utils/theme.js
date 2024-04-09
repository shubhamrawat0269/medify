import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  tab: {
    fontWeight: "normal", // change the font weight
  },
  tabpanel: {
    fontFamily: "mono", // change the font family
  },
});

const sizes = {
  xl: definePartsStyle({
    // define the parts that will change for each size
    tab: {
      fontSize: "xl",
      py: "1",
      px: "10",
    },
    tabpanel: {
      py: "2",
      px: "4",
    },
  }),
};

// define which sizes, variants, and color schemes are applied by default
const defaultProps = {
  size: "xl",
  variant: "colorful",
  colorScheme: "green",
};

// define custom variants
const colorfulVariant = definePartsStyle((props) => {
  const { colorScheme: c } = props; // add colorScheme as a prop

  return {
    tab: {
      borderColor: "grey",
      _selected: {
        borderBottom: "2px solid",
        color: mode(`${c}.500`, `${c}.300`)(props),
        borderColor: "green",
      },
    },
    tablist: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tabpanel: {
      border: "2px solid",
      borderColor: "inherit",
      borderBottomRadius: "lg",
      borderTopRightRadius: "lg",
    },
  };
});

const variants = {
  colorful: colorfulVariant,
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps,
  variants,
});
