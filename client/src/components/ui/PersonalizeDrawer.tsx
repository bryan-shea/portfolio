import { useColors } from "../../contexts";
import { useBackgrounds } from "../../hooks";
import { type ColorScheme } from "../../config/colors.data";
import { type BackgroundType } from "../backgrounds";
import { DrawerWrapper } from "../../wrappers/DrawerWrapper";
import { PropertyPanelPro } from "./PropertyPanel";

/**
 * Props for PersonalizeDrawer component
 */
export interface PersonalizeDrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
}

/**
 * Personalize drawer component
 * Integrated drawer that combines DrawerWrapper and PropertyPanel01
 * Manages color and background personalization in a professional interface
 */
export const PersonalizeDrawer: React.FC<PersonalizeDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { colorScheme, setColorScheme } = useColors();
  const { currentBackground, setCurrentBackground } = useBackgrounds();

  /**
   * Handle color scheme changes from the property panel
   */
  const handleColorsChange = (newColors: ColorScheme) => {
    setColorScheme(newColors);
  };

  /**
   * Handle background changes from the property panel
   */
  const handleBackgroundChange = (background: BackgroundType) => {
    setCurrentBackground(background);
  };

  return (
    <DrawerWrapper
      isOpen={isOpen}
      onClose={onClose}
      placement="end"
      size="md"
      showCloseButton={true}
      contentProps={{
        maxH: "100vh",
      }}
    >
      <PropertyPanelPro
        currentColors={colorScheme}
        onColorsChange={handleColorsChange}
        currentBackground={currentBackground}
        onBackgroundChange={handleBackgroundChange}
      />
    </DrawerWrapper>
  );
};
