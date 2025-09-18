import {
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogCloseTrigger,
  DialogRoot,
  DialogBackdrop,
  DialogTitle,
  DialogPositioner,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

/**
 * Props for the ModalWrapper component
 */
interface ModalWrapperProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Title displayed in the modal header */
  title: string;
  /** Modal content */
  children: ReactNode;
  /** Size of the modal */
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "cover";
  /** Whether to show close button */
  showCloseButton?: boolean;
}

/**
 * Default configuration for modal
 */
const DEFAULT_CONFIG = {
  size: "lg" as const,
  showCloseButton: true,
};

/**
 * ModalWrapper - Reusable modal component using Chakra UI's Dialog
 *
 * Provides consistent modal styling and behavior across the application.
 * Built with accessibility and responsive design in mind.
 */
export const ModalWrapper = ({
  isOpen,
  onClose,
  title,
  children,
  size = DEFAULT_CONFIG.size,
  showCloseButton = DEFAULT_CONFIG.showCloseButton,
}: ModalWrapperProps) => {
  return (
    <DialogRoot
      open={isOpen}
      onOpenChange={({ open }) => !open && onClose()}
      size={size}
      placement="center"
      motionPreset="scale"
      skipAnimationOnMount={false}
      modal={true}
    >
      <Portal>
        <DialogBackdrop />
        <DialogPositioner>
          <DialogContent bgColor="bg.surface">
            <DialogHeader
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <DialogTitle fontSize="lg" fontWeight="semibold" color="fg">
                {title}
              </DialogTitle>
              {showCloseButton && (
                <DialogCloseTrigger asChild>
                  <CloseButton size="sm" variant="ghost" />
                </DialogCloseTrigger>
              )}
            </DialogHeader>
            <DialogBody>{children}</DialogBody>
          </DialogContent>
        </DialogPositioner>
      </Portal>
    </DialogRoot>
  );
};
