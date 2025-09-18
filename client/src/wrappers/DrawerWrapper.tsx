import {
  Drawer as ChakraDrawer,
  Portal,
  CloseButton,
  type BoxProps,
} from "@chakra-ui/react";
import { forwardRef, type ReactNode } from "react";

/**
 * Props for the DrawerWrapper component
 */
export interface DrawerWrapperProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Title for the drawer header */
  title?: string;
  /** Children to render in the drawer body */
  children: ReactNode;
  /** Drawer placement */
  placement?: "start" | "end" | "top" | "bottom";
  /** Drawer size */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full";
  /** Whether to show the close button in header */
  showCloseButton?: boolean;
  /** Whether to use a portal */
  portalled?: boolean;
  /** Custom header content */
  header?: ReactNode;
  /** Custom footer content */
  footer?: ReactNode;
  /** Additional props for drawer content */
  contentProps?: BoxProps;
  /** Whether to close on interact outside */
  closeOnInteractOutside?: boolean;
  /** Whether to close on escape key */
  closeOnEscape?: boolean;
}

/**
 * Reusable drawer wrapper component
 * Provides consistent drawer behavior and styling across the application
 */
export const DrawerWrapper = forwardRef<HTMLDivElement, DrawerWrapperProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      placement = "end",
      size = "md",
      showCloseButton = true,
      portalled = true,
      header,
      footer,
      contentProps,
      closeOnInteractOutside = true,
      closeOnEscape = true,
    },
    ref
  ) => {
    return (
      <ChakraDrawer.Root
        open={isOpen}
        onOpenChange={details => {
          if (!details.open) {
            onClose();
          }
        }}
        placement={placement}
        size={size}
        closeOnInteractOutside={closeOnInteractOutside}
        closeOnEscape={closeOnEscape}
      >
        {portalled && (
          <Portal>
            <ChakraDrawer.Backdrop />
            <ChakraDrawer.Positioner>
              <ChakraDrawer.Content ref={ref} {...contentProps}>
                {(header || title || showCloseButton) && (
                  <ChakraDrawer.Header>
                    {showCloseButton && (
                      <ChakraDrawer.CloseTrigger
                        asChild
                        position="absolute"
                        top="2"
                        right="2"
                      >
                        <CloseButton size="sm" />
                      </ChakraDrawer.CloseTrigger>
                    )}
                    {header ? (
                      header
                    ) : title ? (
                      <ChakraDrawer.Title>{title}</ChakraDrawer.Title>
                    ) : null}
                  </ChakraDrawer.Header>
                )}
                <ChakraDrawer.Body>{children}</ChakraDrawer.Body>
                {footer && <ChakraDrawer.Footer>{footer}</ChakraDrawer.Footer>}
              </ChakraDrawer.Content>
            </ChakraDrawer.Positioner>
          </Portal>
        )}
      </ChakraDrawer.Root>
    );
  }
);

DrawerWrapper.displayName = "DrawerWrapper";
