"use client";

import { CodeBlock, IconButton, Tabs, useTabs } from "@chakra-ui/react";
import { useColorMode } from "../color-mode";
import { useColors } from "../../../contexts";
import { codeFiles, shikiAdapter, type CodeFile } from "./data";

/**
 * Props for TypeBlock component
 */
export interface TypeBlockProps {
  /** Array of code files to display in tabs */
  readonly codeFiles?: readonly CodeFile[];
  /** Title to display in the code block header */
  readonly title?: string;
  /** Default tab value to show on initial render */
  readonly defaultTab?: string;
  /** Maximum width of the code block - supports responsive object values */
  readonly maxWidth?:
    | string
    | { base?: string; sm?: string; md?: string; lg?: string; xl?: string };
  /** Fixed width of the code block - supports responsive object values */
  readonly width?:
    | string
    | { base?: string; sm?: string; md?: string; lg?: string; xl?: string };
  /** Size variant for the component */
  readonly size?: "sm" | "md" | "lg";
  /** Additional margin bottom */
  readonly marginBottom?: string;
  /** Additional margin top */
  readonly marginTop?: string;
}

/**
 * TypeBlock component for displaying code in a tabbed interface
 *
 * Renders contact information or other code snippets in a code block format
 * with syntax highlighting and copy functionality. Supports multiple tabs
 * for different programming languages or contact methods.
 *
 * @example
 * ```tsx
 * <TypeBlock
 *   codeFiles={contactCodeFiles}
 *   title="Contact Me"
 *   defaultTab="email"
 *   colorPalette="teal"
 * />
 * ```
 */
export const TypeBlock = ({
  codeFiles: providedCodeFiles = codeFiles,
  title = "Request",
  defaultTab,
  maxWidth = "4xl",
  width,
  size = "sm",
  marginBottom = "8",
  marginTop = "5",
}: TypeBlockProps) => {
  const { colorScheme } = useColors();
  const tabs = useTabs({
    defaultValue: defaultTab || providedCodeFiles[0]?.value || "javascript",
  });

  const activeTab =
    providedCodeFiles.find(file => file.value === tabs.value) ||
    providedCodeFiles[0];
  const otherTabs = providedCodeFiles.filter(file => file.value !== tabs.value);

  const { colorMode } = useColorMode();

  return (
    <CodeBlock.AdapterProvider value={shikiAdapter}>
      <Tabs.RootProvider value={tabs} size={size} variant="subtle">
        <CodeBlock.Root
          mb={marginBottom}
          mt={marginTop}
          size={size}
          mx="auto"
          maxW={maxWidth}
          w={width}
          code={activeTab.code}
          language={activeTab.language}
          borderRadius={{ base: "md", md: "lg" }}
          overflow="hidden"
          textAlign="left"
          meta={{
            colorScheme: colorMode,
          }}
        >
          <CodeBlock.Header
            py={{ base: "2", md: "1" }}
            px={{ base: "3", md: "4" }}
            borderBottomWidth="1px"
            borderColor="border.muted"
            bg="bg.surface"
          >
            <CodeBlock.Title
              fontFamily="mono"
              textTransform="uppercase"
              fontSize={{ base: "xs", md: "sm" }}
              color="fg.muted"
              fontWeight="semibold"
            >
              {title}
            </CodeBlock.Title>
            <Tabs.List
              border="0"
              gap={{ base: "1", md: "2" }}
              overflowX="auto"
              py="1"
            >
              {providedCodeFiles.map(file => (
                <Tabs.Trigger
                  colorPalette={colorScheme.palette}
                  key={file.value}
                  value={file.value}
                  textStyle="xs"
                  px={{ base: "2", md: "3" }}
                  py={{ base: "1", md: "2" }}
                  minW="max-content"
                  transition="all 0.3s ease-in-out"
                  _hover={{
                    color: `${colorScheme.palette}.fg`,
                    transition: "all 0.3s ease-in-out",
                  }}
                  _selected={{
                    bg: `${colorScheme.palette}.subtle`,
                    color: `${colorScheme.palette}.fg`,
                  }}
                >
                  {file.title}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <CodeBlock.CopyTrigger asChild>
              <IconButton
                variant="ghost"
                size="2xs"
                aria-label={`Copy ${title.toLowerCase()} code to clipboard`}
                border="none"
                _hover={{
                  color: `${colorScheme.palette}.fg`,
                  bg: "transparent",
                  border: "none",
                }}
              >
                <CodeBlock.CopyIndicator />
              </IconButton>
            </CodeBlock.CopyTrigger>
          </CodeBlock.Header>
          <CodeBlock.Content
            bg="bg.canvas"
            w="100%"
            minW={{ base: "full", md: "600px" }}
            maxW="full"
            position="relative"
          >
            {otherTabs.map(file => (
              <Tabs.Content key={file.value} value={file.value} />
            ))}
            <Tabs.Content
              pt="1"
              value={activeTab.value}
              overflow="auto"
              maxH={{ base: "400px", md: "400px", lg: "500px" }}
              w="100%"
              position="relative"
              p={{ base: 1, md: 0 }}
            >
              <CodeBlock.Code
                minW={{ base: "400px", md: "600px" }}
                w="max-content"
              >
                <CodeBlock.CodeText
                  whiteSpace="pre"
                  overflowX="auto"
                  fontSize={"md"}
                  lineHeight="relaxed"
                />
              </CodeBlock.Code>
            </Tabs.Content>
          </CodeBlock.Content>
        </CodeBlock.Root>
      </Tabs.RootProvider>
    </CodeBlock.AdapterProvider>
  );
};
