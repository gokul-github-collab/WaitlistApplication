# Waitlist Application

This application allows potential customers to sign up for a waiting list for a new iPhone product, earn a unique referral link to invite friends, and move up the list as more friends join. When a customer reaches Position 1, they receive a coupon code via email to purchase the product.

**HOW IT WORKS:**

![Waitlist App Flow](./wait_list_flow.png)

For Administrators
Credentials:

        Email: admin@gmail.com
        Password: 1234

    Administrator Functions:

        Create Products: Administrators have the ability to create new products within the application.
        Manage Products: Within each product, administrators can view the list of customers who have registered.
        Edit and Delete Products: Administrators can also modify or remove existing products as needed.

For Customers
Credentials:

        Email: customer@example1.com
        Password: User@123

    Customer Functions:

        Register on the Website: Customers can sign up and create an account on the website.
        Join Waitlist: For each product, customers can register to join the waitlist.
        View Position: If a customer is already registered, their current position in the waitlist will be displayed.

Customer Notification:
If a customer reaches Position 1 on the waitlist, they will receive an email at gkmsd007@gmail.com containing a coupon code.

Built With:
Django: For the backend and REST API.
React: For the frontend user interface.
Tailwind CSS: For styling and responsive design.

Prerequisites:
Node.js and npm: Ensure that Node.js and npm are installed on your machine.
To install the latest version of npm, run:

        npm install npm@latest -g

    Python: Ensure that Python is installed on your machine.
