# The Wild Oasis - Hotel Management Software for Staff

The Wild Oasis is a comprehensive management tool designed for hotel staff to efficiently manage guest check-ins and check-outs, monitor room availability, and keep track of reservations. The app provides a powerful dashboard for statistical insights and features like user account management and customizable dark mode. The backend is handled through Supabase, ensuring secure data storage and retrieval.

## Table of contents
-**Features**

-**Screens and Functionalities**

-**Technologies Used**

-**Installation and Setup**

-**Usage**

-**Future improvements**

## Features

- **Dashboard with Real-Time Insights:** Displays day-wise statistics on total sales, room occupancy, and reservation status.
- **Room Availability Tracking:** A detailed view of room status (occupied or available) for efficient booking and allocation.
- **Reservation Management:** Access reservation details (unconfirmed, checked-in, checked-out) to manage guest check-ins and check-outs smoothly.
- **Detailed Customer and Payment View:** For each reservation, review customer details, payment amount, and whether additional services (like breakfast) are included.
- **Dark Mode:** Toggle between light and dark themes to match user preferences.
- **User Account and Role Management:** Manage staff roles, add new accounts for employees, and adjust current account settings.
- **Secure Backend Integration:** Powered by Supabase for secure, real-time data operations and authentication.

## Photos
![The Wild Oasis 1](https://github.com/user-attachments/assets/659dc0e5-87b4-4ebc-b117-8da259ed713b)
![The Wild Oasis 2](https://github.com/user-attachments/assets/5facc2cd-fa95-4442-89b4-50f0d502a3dc)
![The Wild Oasis 3](https://github.com/user-attachments/assets/ce05c8b4-3c67-486e-b477-834a69f85e94)
![The Wild Oasis 4](https://github.com/user-attachments/assets/7c1eb3a8-9cb6-4e9a-8d4f-c1c510abcff8)
![The Wild Oasis 5](https://github.com/user-attachments/assets/32a3c113-9dd1-4ce0-bca6-3e90dc107759)
![The Wild Oasis 6](https://github.com/user-attachments/assets/314fa86f-9a0d-4a88-ba76-91e06af1d9b4)
![The Wild Oasis 7](https://github.com/user-attachments/assets/b83d65fd-5855-40f8-b6d8-ac55a8c07980)
![The Wild Oasis 8](https://github.com/user-attachments/assets/6591e087-680c-4c70-8e8c-a54397d8566a)
![The Wild Oasis 9](https://github.com/user-attachments/assets/83e48806-3f46-494c-b498-a3fbe668b743)


## Screens and Functionalities

**1. Login Page**
- Allows authorized hotel staff to securely log in.

**2. Dashboard**
- Presents a statistical overview of the hotel’s operations, including metrics for:
  - Daily sales
  - Room occupancy
  - Current and past reservations
  - Filter options to adjust the date range for a customized view of the statistics.

**3. Room Management**
- Shows a list of all rooms, each with an availability status.
- Provides at-a-glance data on which rooms are occupied, allowing staff to easily manage room assignments.

**4. Reservation Overview**
- Tracks the status of each reservation (e.g., unconfirmed, checked-in, checked-out).
- Provides an interface to confirm reservations, check in guests, and complete check-out procedures.
- Each reservation detail page includes:
  - Guest information
  - Total payment amount
  - Extra services, such as breakfast, which require additional payment

**5. User Management**
- Add new staff accounts with specific roles.
- Adjust the account settings for current users, including password resets and role changes.

**6. Settings**
- Toggle dark mode to improve the user interface based on environmental lighting.


## Technologies used

**Frontend:**
- Vite for optimized development
- React and React Router for building single-page app navigation
- Styled-components for modular and scoped styling
- Recharts for interactive and visually engaging data displays

**Backend:**
- Supabase for real-time database management and authentication

**Additional Libraries:**
- React Query for handling server state management
- React Hook Form for efficient form management
- date-fns for date manipulation
- React Error Boundary for graceful error handling
- React Hot Toast for notification management


## Installation and Setup

**1. Clone the repository:**
git clone https://github.com/yordan-gergov01/The-Wild-Oasis.git
cd The-Wild-Oasis

**2. Install dependencies:** 
npm install

**3. Set up Supabase Backend:**
- Go to Supabase, create a new project, and configure your database.
- Retrieve your Supabase API_URL and API_KEY.
- Create a .env file in the root directory and add the following:
  - VITE_SUPABASE_URL=your_supabase_url
  - VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
 
**4. Start the development server:**
npm run dev


## Usage

**1. Logging In:**
- Use authorized staff credentials to log into the system.

**2. Navigating the Dashboard:**
- Select date ranges for customized insights into hotel performance and trends.

**3. Managing Cabins and Bookings:**
- Check the Room Management tab for real-time availability.
- Update reservation statuses as guests check in or out.

**4. Switching Modes:**
- Adjust settings to toggle dark mode for a more comfortable user experience in low-light environments.


## Future improvements

**Automated Notifications:**
- Implement an automated notification system to alert staff about upcoming check-ins, check-outs, or important events, either through SMS or email integration.

**Integration with Payment Gateways:**
- Allow for secure, direct payment processing within the app, supporting various payment methods for seamless check-out.

**On-the-Spot Booking:**
- Add functionality to allow staff to create bookings directly within the app, enabling efficient, real-time reservation management and accommodating last-minute guests.


## Best practices

**Component-Based Architecture:**
- The project is structured with reusable and modular components, adhering to the principles of component-based design in React. This approach ensures that each UI element is independently manageable, facilitating easy maintenance and scalability.

**Separation of Concerns:**
- Logic, styles, and UI presentation are separated across components. Business logic is encapsulated, reducing the risk of side effects and making the code more maintainable.

**State Management with React Query:**
- Leveraging React Query for efficient server state management enables optimal data-fetching strategies and provides caching, synchronization, and error handling, creating a smoother and more performant user experience.

**Error Handling and Boundary Management:**
- Implemented with React-Error-Boundary, errors in the UI are gracefully caught and displayed, maintaining application stability and providing informative feedback to users when issues arise.

**Form Handling with React-Hook-Form:**
- Forms are managed using React Hook Form, offering an intuitive, performant, and accessible way to handle input validations and submissions. This approach reduces re-renders and keeps the code clean and efficient.

**Consistent Styling with Styled Components:**
- Utilized styled-components for modular and scoped styling, which keeps the CSS closely tied to its respective components, improving code readability and preventing style conflicts.

**Contextual Theming (Dark Mode):**
- Implemented a dark mode feature to enhance usability in different lighting environments, improving user comfort and personalizing the experience.

**Date and Time Management with date-fns:**
- Utilized date-fns for reliable and flexible date management across the application, particularly helpful in managing check-in/check-out dates, booking history, and daily dashboard statistics.

**Secure Backend Integration with Supabase:**
- Used Supabase as the backend, with best practices for secure data handling, ensuring that user information, reservations, and account data are safely stored and accessible only to authorized personnel.

