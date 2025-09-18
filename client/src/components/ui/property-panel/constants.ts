/**
 * Theme configuration constants for property panel components
 * Separated to comply with React Fast Refresh requirements
 */

/**
 * Theme configuration interface
 */
export interface Theme {
  label: string;
  value: string;
  config: {
    fontFamily: string;
    fontColor: string;
    linkColor: string;
    backgroundColor: string;
    buttonColor: string;
    buttonTextColor: string;
  };
}

/**
 * Available theme configurations
 */
export const themes: Theme[] = [
  {
    label: "Pale",
    value: "pale",
    config: {
      fontFamily: "sans-serif",
      fontColor: "#212529",
      linkColor: "#4361EE",
      buttonColor: "#7209B7",
      buttonTextColor: "#FFFFFF",
      backgroundColor: "#F8F9FA",
    },
  },
  {
    label: "Soft",
    value: "soft",
    config: {
      fontFamily: "inter",
      fontColor: "#ADB5BD",
      linkColor: "#7209B7",
      buttonColor: "#F72585",
      buttonTextColor: "#FFFFFF",
      backgroundColor: "#F8F9FA",
    },
  },
  {
    label: "Bold",
    value: "bold",
    config: {
      fontFamily: "poppins",
      fontColor: "#4361EE",
      linkColor: "#F72585",
      backgroundColor: "#F8F9FA",
      buttonColor: "#3A0CA3",
      buttonTextColor: "#FFFFFF",
    },
  },
  {
    label: "Vivid",
    value: "vivid",
    config: {
      fontFamily: "montserrat",
      fontColor: "#F72585",
      linkColor: "#3A0CA3",
      backgroundColor: "#F8F9FA",
      buttonColor: "#4361EE",
      buttonTextColor: "#FFFFFF",
    },
  },
];
