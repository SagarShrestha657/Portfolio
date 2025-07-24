# My Developer Portfolio

A personal portfolio to showcase my projects, skills, and experience as a software developer. This website is designed to be responsive, engaging, and provide a comprehensive overview of my technical capabilities.

## Features

*   **Responsive Design**: Optimized for seamless viewing across various devices (desktops, tablets, and mobile phones).
*   **Interactive Contact Form**: A functional contact form with client-side validation using Zod and React Hook Form, capable of sending emails.
*   **Dynamic Project Showcase**: Features a dedicated section to highlight my projects with details and links.
*   **Skill Display**: A section illustrating my technical skills.
*   **Animated Sections**: Engaging animations powered by Framer Motion to enhance user experience.
*   **Resume Download**: A direct download link for my resume in the Hero section.
*   **Google Maps Integration**: Direct link to Google Maps for location on the Contact section.

## Technologies Used

This project is built with a modern web development stack:

*   **React.js**: A JavaScript library for building user interfaces.
*   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
*   **Framer Motion**: A production-ready motion library for React.
*   **Zod**: A TypeScript-first schema declaration and validation library.
*   **React Hook Form**: A performant, flexible, and extensible forms library for React.
*   **Node.js**: A JavaScript runtime environment (for the email sending backend).
*   **Nodemailer**: A module for Node.js applications to allow easy email sending.
*   **Bun**: A fast, all-in-one JavaScript runtime.
*   **Vite**: A fast development build tool for modern web projects.

## Installation

Follow these steps to set up and run the project locally:

1.  **Clone the repository**:
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    ```

2.  **Navigate to the project directory**:
    ```bash
    cd portfolio
    ```

3.  **Install dependencies using Bun**:
    ```bash
    bun install
    ```

4.  **Start the development server**:
    ```bash
    bun run dev
    ```

## Environment Variables

To enable the contact form's email sending functionality, you need to set up a Gmail App Password.

1.  Create a `.env` file in the root directory of the project.
2.  Add your Gmail App Password to the `.env` file:
    ```
    GMAIL_APP_PASSWORD=your_gmail_app_password
    ```
    *   **Note**: You can learn how to generate a Gmail App Password here: [https://support.google.com/accounts/answer/185833?hl=en](https://support.google.com/accounts/answer/185833?hl=en)

## Usage

Once the development server is running, open your web browser and navigate to the address provided by Vite (usually `http://localhost:5173` or `http://localhost:8080`).

You can then explore the different sections of the portfolio, interact with the contact form, and view my projects and skills.

## Contact

Feel free to reach out to me through:

*   **Email**: shresthasagar657@gmail.com
*   **LinkedIn**: [Sagar Shrestha](https://linkedin.com/in/sagar-shrestha-6b7819311)
*   **GitHub**: [SagarShrestha657](https://github.com/SagarShrestha657)

## License

This project is licensed under the MIT License.
