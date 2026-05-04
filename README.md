# CHCI Website User Manual

## 1. Introduction

### 1.1 Purpose of the System
The Center for Human-Computer Interaction (CHCI) Website is the official public-facing web platform for presenting the Center's identity, research priorities, services, affiliation guidelines, partner institutions, and contact channels. Its goal is to help visitors understand CHCI's work and provide a direct way to send inquiries.

### 1.2 Scope of the Manual
This manual covers the current features of the CHCI Website, including:

- Public site navigation
- Viewing institutional information and research areas
- Reviewing services and service request flow
- Reading membership and participation details
- Accessing project and partner information
- Sending inquiries through the contact form

This manual also notes current limitations. The present version is an official informational website and does not include user login, account registration, private user dashboards, or database-driven record management.

### 1.3 Intended Users
The website is designed for:

- Students
- Faculty members
- Researchers
- Partner institutions
- Government agencies
- Industry collaborators
- General public visitors
- CHCI administrators and maintainers

### 1.4 Definitions and Terminologies

- `CHCI`: Center for Human-Computer Interaction
- `CSU`: Caraga State University
- `CCIS`: College of Computing and Information Sciences
- `RaaS`: Research-as-a-Service
- `OVPRIE`: Office of the Vice President for Research, Innovation, and Extension
- `RDISO`: Research Development, Innovation, and Strategy Office
- `Primary Affiliate Member`: Core researcher aligned with a CHCI pillar
- `Secondary Affiliate Member`: Project-based collaborator or external partner
- `Student Researcher`: Student engaged in Center-related research under supervision
- `Contact Form`: Website form used to send inquiries to CHCI

## 2. System Overview

### 2.1 System Description
The CHCI Website is a single-page React and Vite web application. It organizes CHCI information into scrollable sections and allows visitors to browse the Center's profile, services, affiliation guidelines, project link, partner directory, and contact details from one interface.

### 2.2 Key Features

- Sticky navigation bar with section-based scrolling
- Home section with CHCI branding and institutional identity
- About section with overview, vision, mission, core values, and organization structure
- Research Priority Areas section
- Services and Extensions Portfolio section
- Membership and Participation section
- Projects section with external project access
- Partners section with outbound links
- Contact section with inquiry form and validation
- Responsive layout for desktop and mobile devices

### 2.3 System Requirements

Hardware requirements:

- Desktop or laptop computer, tablet, or smartphone
- At least 4 GB RAM recommended for desktop browsing

Software requirements:

- Modern web browser
- For local development or maintenance: Node.js and npm

Internet/browser requirements:

- Stable internet connection for deployed access
- Recommended browsers: Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari
- JavaScript must be enabled

### 2.4 System Architecture
The system uses a React frontend built with Vite. Public assets such as logos and images are served from the `public` directory. The contact form submits data to `/api/contact`, which validates the request and sends the message through the Gmail API using server-side environment variables.

## 3. Getting Started

### 3.1 Accessing the System
For end users, open the deployed CHCI Website URL provided by the administrator or institution.

For local access during development:

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Open the local URL shown in the terminal, typically `http://localhost:5173`.

### 3.2 Opening the Main Sections
After accessing the website, users may explore the content through the top navigation bar or by scrolling through the page sections in order.

### 3.3 Using the Navigation Menu

1. Click a menu item in the header.
2. The website will automatically scroll to the selected section.
3. On mobile devices, open the menu button first, then choose a section.

### 3.4 Opening External Links
Some sections provide links to external pages such as partner institutions and projects. Clicking these items opens the linked resource in a new browser tab.

## 4. Website Users and Access

### 4.1 Overview of Users
The current version supports public browsing and internal maintenance. It does not use account-based roles inside the website interface.

- `Public Visitor`: Can view all public sections and submit the contact form
- `System Maintainer/Admin`: Can update site content, assets, configuration, and contact form email settings through the codebase and deployment environment

### 4.2 Access Scope

- `Public Visitor` can:
  - Browse all website sections
  - View public CHCI information
  - Open partner and project links
  - Submit an inquiry using the contact form

- `Public Visitor` cannot:
  - Create accounts
  - Access any private portal
  - Edit website content through the interface

- `System Maintainer/Admin` can:
  - Modify text, images, and page sections in the source code
  - Configure contact form environment variables
  - Build and deploy the site

## 5. Website Interface Overview

### 5.1 Main Page Layout
There is no dashboard in the current release. The primary interface is a public single-page website composed of multiple scrollable sections.

### 5.2 Navigation Menu
The top navigation bar provides direct access to:

- Home
- About Us
- Research Areas
- Services
- Affiliation
- Projects
- Partners
- Contact Us

On large screens, the menu appears in the header. On small screens, it is available through a menu button.

### 5.3 Key Widgets and Indicators

- Active navigation highlighting based on scroll position
- Expandable `Know More` area in the About section
- Rights, Duties, and Termination tabs in the Affiliation section
- Toggle between `Flow Overview` and `Original Flowchart` in Services on large screens
- Contact form validation and submission status messages

## 6. Core Features and Functionalities

### 6.1 Home and Institutional Overview

Viewing the Home section:

1. Open the website.
2. The landing view displays the CHCI title and tagline.
3. Scroll down or use the navigation bar to continue.

Using the About section:

1. Open `About Us` from the navigation menu.
2. Read the Center overview.
3. Click `Know More` to display:
   - Vision
   - Mission
   - Core values
   - Organization structure

### 6.2 Research Areas

Viewing research priority areas:

1. Select `Research Areas` in the navigation menu.
2. Review the featured research pillars:
   - Multi-sensory Computing
   - Gaming Science
   - Multimedia Science
   - Cyber Intelligence Computing
   - Computing for Development

### 6.3 Services and Extensions

Viewing service offerings:

1. Open the `Services` section.
2. Review the available service categories, including:
   - Specialized Training and Certification
   - Technical Consultancy
   - Research-as-a-Service
   - Internship and Immersion Program

Understanding the service request process:

1. Go to the `Process Flow for Availing the Services of CHCI`.
2. On desktop, use:
   - `Flow Overview` for a summary
   - `Original Flowchart` for the detailed step view
3. Follow the process from service inquiry to completion and feedback.

### 6.4 Membership and Participation

Viewing affiliation categories:

1. Open the `Affiliation` section.
2. Review the membership categories:
   - Primary Affiliate Members
   - Secondary Affiliate Members
   - Student Researchers

Reviewing policy details:

1. Use the tab controls to switch between:
   - Rights and Privileges
   - Duties and Responsibilities
   - Termination

### 6.5 Projects and Partners

Viewing projects:

1. Open the `Projects` section.
2. Click `Explore Projects` to open the linked CHCI project page in a new tab.

Viewing partners:

1. Open the `Partners` section.
2. Browse partner logos and names.
3. Click a partner item to open the official external site.

### 6.6 Contact and Inquiry Submission

Sending a message:

1. Open the `Contact Us` section.
2. Enter:
   - Full Name
   - Email
   - Subject
   - Message
3. Click `Send Message`.
4. Wait for the success or error message shown below the button.

Validation behavior:

- All fields are required
- Email must follow a valid email format
- Invalid or empty fields are highlighted with error messages

## 7. Reports and Analytics

### 7.1 Generating Reports
Not available for end users in the current version. The website does not provide a report generation module.

### 7.2 Exporting Data
Not available in the current version. No PDF, Excel, or downloadable reporting tools are implemented in the public interface.

### 7.3 Analytics Interpretation
Not applicable for public users. The website does not expose analytics dashboards or reporting views in the interface.

## 8. Notifications and Alerts

Types of notifications:

- Inline validation errors in the contact form
- Submission success message after a message is sent
- Submission failure message if the email service is unavailable or the request fails

How to respond to alerts:

- Correct any highlighted fields if validation errors appear
- Retry later if the form reports a service failure
- Use the listed contact details if the issue persists

## 9. Settings and Configuration

### 9.1 Visitor Settings
No profile or account settings are available because the website does not use user accounts.

### 9.2 System Settings
Administrative configuration is handled in the project files and deployment environment.

Important settings include:

- `VITE_CONTACT_API_URL`
- `GMAIL_CLIENT_ID`
- `GMAIL_CLIENT_SECRET`
- `GMAIL_REFRESH_TOKEN`
- `GMAIL_SENDER_EMAIL`
- `CONTACT_RECIPIENT_EMAIL`
- `CONTACT_SENDER_NAME`

### 9.3 Access Control Management
No in-app access control panel is available in the current release. Access control is limited to source code ownership, deployment permissions, and environment variable management.

## 10. Troubleshooting

Common issues and solutions:

- `The website does not load correctly`
  - Refresh the page
  - Check the internet connection
  - Try another modern browser

- `Navigation links do not scroll properly`
  - Reload the page and try again
  - Make sure JavaScript is enabled

- `Images or logos are missing`
  - Check whether static assets were deployed correctly
  - Verify asset paths in the codebase if maintaining locally

- `The contact form does not send`
  - Confirm all required fields are complete
  - Check that the email format is valid
  - Verify Gmail API environment variables if you are the system maintainer

- `Local contact API fails in development`
  - Confirm `.env` values are set
  - Check the terminal for API or Gmail errors

Error messages and meanings:

- `Full name is required.`
  - The full name field was left blank

- `Please enter a valid email address.`
  - The email field is empty or not in valid format

- `Subject is required.`
  - The subject field was left blank

- `Message is required.`
  - The message field was left blank

- `Email service is not configured.`
  - Required server-side environment variables are missing

- `We could not send your message right now. Please try again later.`
  - The contact request failed during delivery or server processing

## 11. FAQs

- `Do I need an account to use the website?`
  - No. The website is publicly accessible.

- `Can I apply for membership directly through the website?`
  - No direct application form is currently available. Review the affiliation section and contact CHCI for further guidance.

- `Can I submit service requests through the site?`
  - The website explains the process and provides contact access, but it does not yet include a full request management portal.

- `What happens after I submit the contact form?`
  - Your message is validated and then sent to the configured CHCI email inbox.

- `Can I export data or print reports from the website?`
  - No. Reporting and export features are not available in the current version.

## 12. Security and Data Privacy

Data protection practices:

- Contact form inputs are validated before processing
- Email content is sent through a server-side integration rather than exposing Gmail credentials in the browser
- Sensitive API credentials are stored through environment variables

User responsibilities:

- Provide accurate contact details
- Avoid submitting confidential, misleading, or harmful content through the form

Compliance note:

- The system should be maintained in line with applicable institutional privacy policies and the Philippine Data Privacy Act where relevant to collected personal data

## 13. Support and Contact Information

Helpdesk or inquiry details:

- Address: Caraga State University, Ampayon, Butuan City 8600
- Email: `leovinjozhsalarda@gmail.com`
- Phone: `+63 (085) 341-2246`

Support hours:

- Follow the official CHCI or CSU office schedule as communicated by the institution

## 14. Appendices

### A. Glossary of Terms
See Section 1.4 for key terminology used across the website.

### B. Sample Screenshots
Recommended screenshots for the final manual package:

- Home page
- About section expanded view
- Research Areas section
- Services process flow
- Affiliation tabs
- Contact form with success message

### C. Forms and Templates
The current version provides one built-in form:

- Contact/Inquiry Form

Additional service request forms, membership forms, or downloadable templates are not yet built into the website.
