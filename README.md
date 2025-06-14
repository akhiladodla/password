## Password Generator
 A simple web-based password generator that creates secure, random passwords based on user-specified criteria. Built with HTML, CSS, and JavaScript, this project allows users to customize password length and character types (uppercase, lowercase, numbers, special characters).

 ## Features
 - **Customizable Passwords**: Users can specify:
   - Password length (4–50 characters).
   - Inclusion of uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special characters (!@#$%^&*()_+-=[]{}|;:,.<>?).
 - **Input Validation**: Ensures at least one character type is selected and the length is within the valid range.
 - **User-Friendly Interface**: Clean design with labeled input fields, a soft blue background, and a responsive layout.
 - **Interactive**: Generates passwords instantly when the "Generate Password" button is clicked.

 ## Project Structure
 The project files are located in the `password` folder:
 - `index.html`: The main HTML file containing the form and structure.
 - `styles.css`: CSS file for styling the page (soft blue background, centered white card).
 - `script.js`: JavaScript file for password generation logic.


 ## Deployment
 The project is deployed on Netlify and can be accessed at: [paasswordgenerate.netlify.app]

 ## Usage
 - Open the deployed site or run locally.
 - Enter a password length (e.g., 12).
 - Check/uncheck boxes to include uppercase, lowercase, numbers, or special characters.
 - Click "Generate Password" to display a random password.
 - Invalid inputs (e.g., length < 4 or > 50, no character types selected) will trigger alerts.

 ## Technologies Used
 - **HTML5**: For the page structure and form.
 - **CSS3**: For styling (responsive design, soft blue background).
 - **JavaScript**: For password generation and input validation.

 ## Future Improvements
 - Add a "Copy to Clipboard" button for the generated password.
 - Include a password strength indicator.
 - Allow customization of special characters.

