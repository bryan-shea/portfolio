import { type CodeFile } from "../components/ui/code-block/data";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
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
  location: "United States",
  social: {
    github: "https://github.com/bryan-shea",
    linkedin: "https://linkedin.com/in/bryanshea88",
  },
} as const;

/**
 * Contact information formatted as code blocks
 * Each tab represents a different way to contact or connect
 */
export const contactCodeFiles: readonly CodeFile[] = [
  {
    title: "Email",
    value: "email",
    icon: MdEmail,
    code: `// Send me an email
const contact = {
  email: "${contactInfo.email}",
  subject: "Let's connect!",
  message: "Hello Bryan, I'd like to discuss..."
};

// Or use mailto link
window.open(\`mailto:\${contact.email}?subject=\${contact.subject}\`);`,
    language: "javascript",
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
    code: `"""
Connect with me on LinkedIn for professional networking
"""

linkedin_profile = {
    "url": "${contactInfo.social.linkedin}",
    "name": "Bryan Shea",
    "title": "Full Stack Developer",
    "location": "${contactInfo.location}"
}

# Send connection request
def connect_linkedin(profile):
    return f"Visit {profile['url']} to connect!"

connect_linkedin(linkedin_profile)`,
    language: "python",
  },
  {
    title: "Contact",
    value: "contact",
    icon: LuTerminal,
    code: `// Complete contact information
const contactDetails = {
  name: "Bryan Shea",
  title: "Full Stack Developer",
  email: "${contactInfo.email}",
  ${contactInfo.phone ? `phone: "${contactInfo.phone}",` : '// phone: "Available upon request",'}
  location: "${contactInfo.location}",
  social: {
    github: "${contactInfo.social.github}",
    linkedin: "${contactInfo.social.linkedin}"
  },
  availability: "Open to opportunities",
  responseTime: "24-48 hours"
};

console.log("Let's build something amazing together!");`,
    language: "javascript",
  },
] as const;

/**
 * Complete contact code configuration
 */
export const contactCodeConfig: ContactCodeConfig = {
  contactInfo,
  codeFiles: contactCodeFiles,
} as const;
