import { Image } from "@chakra-ui/react";
import { ModalWrapper } from "./ModalWrapper";

/**
 * Props for the CertificateModal component
 */
interface CertificateModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  /** Function to close the modal */
  onClose: () => void;
  /** Certificate image URL */
  imageUrl: string;
  /** Certificate title */
  title: string;
}

/**
 * CertificateModal - Specialized modal for displaying certificates
 *
 * Uses ModalWrapper to display certificate images in full size
 * with proper alt text and responsive sizing.
 */
export const CertificateModal = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}: CertificateModalProps) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="xl"
      showCloseButton={true}
    >
      <Image
        src={imageUrl}
        alt={`${title} certificate`}
        w="full"
        h="auto"
        maxH="70vh"
        objectFit="contain"
        borderRadius="md"
        border="1px solid"
        borderColor="border.subtle"
        bg="white"
        p="2"
      />
    </ModalWrapper>
  );
};

export type { CertificateModalProps };
