import {
  Container,
  Link,
  Separator,
  SimpleGrid,
  Stack,
  Text,
  Avatar,
  Box,
} from "@chakra-ui/react";
import { Headshot } from "../../assets";
import {
  contactInfo,
  footerNavigationGroups,
  footerLegalLinks,
} from "../../config";

/**
 * Footer component with contact information and navigation links
 * Uses configuration from app.config and navigation.data for maintainable content
 */
export const Footer = () => (
  <Box
    bg={{
      _light: "white/90",
      _dark: "gray.900/90",
    }}
    maxW="9xl"
    mx="auto"
  >
    <Container as="footer" textStyle="sm">
      <Stack
        direction={{ base: "column", md: "row" }}
        gap={{ base: "8", md: "12" }}
        justify="space-between"
        py={{ base: "10", md: "12" }}
      >
        <Stack alignItems="start" gap="6">
          <Avatar.Root size="lg" variant="outline">
            <Avatar.Fallback name="Bryan Shea" />
            <Avatar.Image src={Headshot} />
          </Avatar.Root>
          <Stack gap="5">
            <Stack gap="1">
              <Text fontWeight="medium">Contact</Text>
              <Stack gap="0" color="fg.muted">
                <Link
                  href={`mailto:${contactInfo.email}`}
                  colorPalette="gray"
                  color="fg.muted"
                >
                  {contactInfo.email}
                </Link>
                <Text>{contactInfo.location}</Text>
              </Stack>
            </Stack>
            <Stack gap="1">
              <Text fontWeight="medium">Connect</Text>
              <Stack gap="0" color="fg.muted">
                <Link
                  href={contactInfo.social.github}
                  colorPalette="gray"
                  color="fg.muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
                <Link
                  href={contactInfo.social.linkedin}
                  colorPalette="gray"
                  color="fg.muted"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          gap="8"
          width={{ base: "full", md: "auto" }}
        >
          {footerNavigationGroups.slice(0, 2).map(group => (
            <Stack key={group.title} gap="4" minW={{ md: "40" }}>
              <Text fontWeight="medium">{group.title}</Text>
              <Stack gap="3" alignItems="start">
                {group.links.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color="fg.muted"
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Separator />
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        alignItems="start"
        justify="space-between"
        align="center"
        py="6"
        gap="8"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={{ base: "3", md: "6" }}
        >
          {footerLegalLinks.map(link => (
            <Link key={link.label} href={link.href} color="fg.muted">
              {link.label}
            </Link>
          ))}
        </Stack>
      </Stack>
    </Container>
  </Box>
);
