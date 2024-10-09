# Chicks Gols Clone

## Project Description

This project is a clone of the website of the company **Chicks Gols**, designed to replicate its visual style. The application was developed using React and follows the component-based programming paradigm, promoting code reuse and modularity.

## Technologies Used

- **React**: The main library used to build the user interface.
- **React Bootstrap Icons**: A library used to incorporate icons into the application.

## Folder Structure

The project's folder structure is as follows:


/src
├── /components # Reusable components of the application
│ ├── Divider.js # Divider line
│ ├── Footer.js # Footer
│ ├── Navbar.js # Navigation bar
│ ├── Pagination.js # Pagination component
│ ├── ProductCard.js # Product card component
│ ├── ProductList.js # Card container
│ ├── Searchbar.js # Search and filters
│ └── Select.js # Selector component
│
├── /assets # Static files (images, fonts, etc.)
├── /styles # CSS files organized by modules
│ ├── layout.css # Layout styles (navbar, footer, etc.)
│ ├── components.css # Component styles
│ └── responsive.css # Media queries
│
├── App.js # Main component of the application
├── App.css # General styles
├── index.js # Entry point of the application
└── ... 
## Folder Descriptions

- **/components**: Contains all the reusable components of the application, each encapsulating its own logic and style.
- **/assets**: Stores static files such as images and fonts needed for the application.
- **/styles**: Contains all CSS files organized by modules, making style management easier.

## Best Practices

Several best practices were implemented in the development of this project:

- **Component-Based Programming**: Each component is designed to be autonomous and reusable, facilitating testing and code maintenance.
- **Separation of Concerns**: The file structure is organized to keep logic, style, and assets separate, improving code readability and maintainability.
- **Use of PropTypes**: PropTypes was employed to validate component properties, helping to prevent errors and improving documentation within the code.
- **Modular CSS**: Styles were organized into separate files for each module (components, layout, etc.), allowing for easier management and avoiding style conflicts.
- **Responsiveness**: Media queries and Flexbox were used to ensure the application is responsive and looks good on different devices.

## Installation

To install and run the project on your local machine, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your_username/ChicksGoldClonePage.git

Navigate to the project directory:

cd ./chicksgoldclonepage
Install the dependencies:

npm install
Start the project:

npm run dev
   
