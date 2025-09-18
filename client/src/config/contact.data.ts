import { type CodeFile } from "../components/ui/code-block/data";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { LuTerminal } from "react-icons/lu";

/**
 * Interface for contact information
 */
export interface ContactInfo {
  readonly email: string;
  readonly phone?: string;
  readonly location: string;
  readonly social: {
    readonly github: string;
    readonly linkedin: string;
  };
}

/**
 * Interface for contact code block configuration
 */
export interface ContactCodeConfig {
  readonly contactInfo: ContactInfo;
  readonly codeFiles: readonly CodeFile[];
}

/**
 * Contact information data
 */
export const contactInfo: ContactInfo = {
  email: "bryanshea88@gmail.com",
  // phone: "Available upon request", // Phone number intentionally omitted for privacy
  location: "New York, NY, USA",
  social: {
    github: "https://github.com/bryan-shea",
    linkedin: "https://www.linkedin.com/in/bryan-shea-79882631b/",
  },
} as const;

/**
 * Contact information formatted as code blocks
 * Each tab represents a different way to contact or connect
 */
export const contactCodeFiles: readonly CodeFile[] = [
  {
    title: "Contact",
    value: "contact",
    icon: LuTerminal,
    code: `// Complete contact information
const contactDetails = {
	name: "Bryan Shea",
	email: "${contactInfo.email}",
	phone: "Available upon request",
	location: "${contactInfo.location}",
	availability: "Open to opportunities",
	responseTime: "Typically within 24 hours",
};

console.log("Let's build something amazing together!");`,
    language: "typescript",
  },
  {
    title: "GitHub",
    value: "github",
    icon: IoLogoGithub,
    code: `# Connect with me on GitHub
git clone ${contactInfo.social.github}
cd portfolio

# Check out my repositories
gh repo list bryan-shea --limit 20

# Follow me for updates
gh api -X PUT /user/following/bryan-shea`,
    language: "bash",
  },
  {
    title: "LinkedIn",
    value: "linkedin",
    icon: IoLogoLinkedin,
    code: `
linkedin_profile = {
		"url": "${contactInfo.social.linkedin}",
		"name": "Bryan Shea",
}

# Send connection request
def connect_linkedin(profile):
		return f"Visit {profile['url']} to connect!"

connect_linkedin(linkedin_profile)`,
    language: "python",
  },
] as const;

/**
 * Complete contact code configuration
 */
export const contactCodeConfig: ContactCodeConfig = {
  contactInfo,
  codeFiles: contactCodeFiles,
} as const;
