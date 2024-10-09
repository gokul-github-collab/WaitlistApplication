# Waitlist Application

This application allows potential customers to sign up for a waiting list for a new iPhone product, earn a unique referral link to invite friends, and move up the list as more friends join. When a customer reaches Position 1, they receive a coupon code via email to purchase the product.

**HOW IT WORKS:**

![Waitlist App Flow](./waitlist_flow.png)

## For Administrators

**Credentials:**

- **Email:** admin@email.com
- **Password:** 1234

**Administrator Functions:**

- **Create Products:** Administrators can create new products within the application.
- **Manage Products:** Administrators can view the list of customers registered for each product.
- **Edit and Delete Products:** Administrators can modify or remove existing products.

## For Customers

**Credentials:**

- **Email:** customer@example1.com
- **Password:** User@123

**Customer Functions:**

- **Register on the Website:** Customers can sign up and create an account.
- **Join Waitlist:** Customers can register to join the waitlist for each product.
- **View Position:** Registered customers can see their current waitlist position.

## Customer Notification

If a customer reaches Position 1 on the waitlist, they will receive an email at `gkmsd007@gmail.com` containing a coupon code.

## Built With

- **Django:** For the backend and REST API.
- **React:** For the frontend user interface.
- **Tailwind CSS:** For styling and responsive design.

## Prerequisites

- **Node.js and npm:** Ensure Node.js and npm are installed on your machine.
  - To install the latest version of npm, run:
    ```bash
    npm install npm@latest -g
    ```
- **Python:** Ensure Python is installed on your machine.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/gokul-github-collab/Waitlist-Application.git
   ```

2. **Frontend Setup:**

   - Navigate to the `frontend` directory:
     ```bash
     cd Waitlist-Application/frontend
     ```
   - Install the required npm packages:
     ```bash
     npm install
     ```

3. **Backend Setup:**

   - Navigate to the `backend` directory:
     ```bash
     cd ../backend
     ```
   - Create and activate a virtual environment:
     ```bash
     python -m venv venv
     source venv/bin/activate  # On Windows, use: venv\Scripts\activate
     ```
   - Install the required Python packages:
     ```bash
     pip install -r requirements.txt
     ```

4. **Run the Servers:**
   - In the `backend` directory, start the Django development server:
     ```bash
     python manage.py runserver
     ```
   - In the `frontend` directory, start the React development server:
     ```bash
     npm run dev
     ```

**Note:** Make sure to log in as an administrator or customer by navigating to `/login` in the URL after entering the home page.
