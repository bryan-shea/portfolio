import { HStack, IconButton } from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";
import { contactInfo } from "../../config";
import { useColors } from "../../contexts";
import { Tooltip } from "../ui/tooltip";

/**
 * Props for ContactButtons component
 */
export interface ContactButtonsProps {
  /** Size of the icon buttons */
  readonly size?: "xs" | "sm" | "md" | "lg";
  /** Spacing between buttons */
  readonly gap?: string | number;
  /** Additional styling variant */
  readonly variant?: "ghost" | "plain" | "outline";
}

/**
 * ContactButtons component providing accessible quick-access contact actions
 *
 * Renders icon buttons for email (copy), GitHub (open), and LinkedIn (open)
 * as an accessible alternative to the TypeBlock component.
 */
export const ContactButtons = ({
  size = "md",
  gap = "3",
  variant = "ghost",
}: ContactButtonsProps) => {
  const { colorScheme } = useColors();
  const [emailCopied, setEmailCopied] = useState(false);

  /**
   * Handle email copy using navigator.clipboard API
   */
  const handleEmailCopy = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); // Hide checkmark after 2 seconds
    } catch (err) {
      console.error("Failed to copy email:", err);
      // Fallback: create a temporary input and select it
      const textArea = document.createElement("textarea");
      textArea.value = contactInfo.email;
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999); // For mobile devices
      document.body.removeChild(textArea);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); // Hide checkmark after 2 seconds
    }
  };

  /**
   * Handle social link navigation
   */
  const handleSocialLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <HStack gap={gap} justify="flex-start">
      {/* Email Copy Button */}
      <Tooltip
        content={emailCopied ? "Email copied!" : "Copy email to clipboard"}
        showArrow
      >
        <IconButton
          aria-label="Copy email address to clipboard"
          size={size}
          variant={variant}
          colorPalette={emailCopied ? "green" : colorScheme.palette}
          onClick={handleEmailCopy}
          _hover={{
            color: emailCopied ? "green.fg" : `${colorScheme.palette}.fg`,
            transform: "translateY(-2px)",
            transition: "all 0.2s ease-in-out",
          }}
          _active={{
            transform: "translateY(0px)",
          }}
          transition="all 0.2s ease-in-out"
        >
          {emailCopied ? <FiCheck size="1.2em" /> : <MdEmail size="1.2em" />}
        </IconButton>
      </Tooltip>

      {/* GitHub Link Button */}
      <Tooltip content="View GitHub profile" showArrow>
        <IconButton
          aria-label="Open GitHub profile in new tab"
          size={size}
          variant={variant}
          colorPalette={colorScheme.palette}
          onClick={() => handleSocialLink(contactInfo.social.github)}
          _hover={{
            color: `${colorScheme.palette}.fg`,
            transform: "translateY(-2px)",
            transition: "all 0.2s ease-in-out",
          }}
          _active={{
            transform: "translateY(0px)",
          }}
          transition="all 0.2s ease-in-out"
        >
          <IoLogoGithub size="1.2em" />
        </IconButton>
      </Tooltip>

      {/* LinkedIn Link Button */}
      <Tooltip content="View LinkedIn profile" showArrow>
        <IconButton
          aria-label="Open LinkedIn profile in new tab"
          size={size}
          variant={variant}
          colorPalette={colorScheme.palette}
          onClick={() => handleSocialLink(contactInfo.social.linkedin)}
          _hover={{
            color: `${colorScheme.palette}.fg`,
            transform: "translateY(-2px)",
            transition: "all 0.2s ease-in-out",
          }}
          _active={{
            transform: "translateY(0px)",
          }}
          transition="all 0.2s ease-in-out"
        >
          <IoLogoLinkedin size="1.2em" />
        </IconButton>
      </Tooltip>
    </HStack>
  );
};
