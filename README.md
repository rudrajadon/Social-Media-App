# Social Buzz

A modern, full-stack social media application built with the Next.js App Router.



---
## Key Features

- **Authentication**: Secure sign-in and sign-up powered by Clerk.
- **Create Posts**: Share your thoughts with text and image uploads.
- **Interactive Feed**: Like and comment on posts in real-time.
- **User Profiles**: View user profiles, posts, and liked content.
- **Follow System**: Connect with other users and see suggestions.
- **Notifications**: Get notified about new likes, comments, and new followers.
- **Dark Mode**: A sleek, eye-friendly dark theme.

---
## Tech Stack

- **Framework**: Next.js (App Router)
- **Database**: PostgreSQL (with Prisma ORM)
- **Authentication**: Clerk
- **File Uploads**: UploadThing
- **Styling**: Tailwind CSS & Shadcn UI
- **Language**: TypeScript

---
## Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env` file in the root of your project and add the following variables:
    ```
    # From Clerk Dashboard
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=

    # From your database provider (e.g., Neon)
    DATABASE_URL=

    # From UploadThing Dashboard
    UPLOADTHING_SECRET=
    ```
4.  **Sync the database schema:**
    ```bash
    npx prisma db push
    ```
5.  **Run the development server:**
    ```bash
    npm run dev
    ```