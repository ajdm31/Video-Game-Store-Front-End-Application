
# Video Game Store FrontEnd Mock Application 

Welcome to the Video Game Store FrontEnd Mock Application! This project features a responsive web application with design elements inspired by the classic video game "The Legend of Zelda". The application includes a navigation bar and search bar design, item display with cards, pagination, payment logos, and a footer. The layout is fully responsive, ensuring a seamless experience across devices of all sizes.


# Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Color Reference](#color-reference)
- [Tech Stack and File Structure](#tech-stack-and-file-structure)
- [Contributing](#contributing)

# Demo

Check out the live demo [here](https://66676f98b12c0a55ac56a81e--cheerful-rugelach-aec45c.netlify.app/).


# Features

- Responsive navigation bar with dropdown menus
- Animated hamburger menu for mobile devices
- Elegant Search bar 
- Dynamic item display with cards
- Payment logos section
- Footer with social media links and additional information


# Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
  git https://github.com/ajdm31/Video-Game-Store-Front-End-Application.git
```

2. cd into repository:

```bash
  cd Video-Game-Store-Front-End-Application
```
    
3. Install dependencies:

```bash
  npm install
```

4. Start the development server:

```bash
 npm start
```

The application should now be running on http://localhost:3000.
# Usage

Once the application is running, you can interact with various components:

- **Responsive:** Resize the browser window or open the site on a mobile device to see how it adapts gracefully to different screens.

- **Navigation Bar:** Experience different screen sizes and on a mobile device to see the hamburger menu. Clicking the Triforce icon will toggle the menu, displaying the navigation links and options.

- **Item Display:** Browse through the items and adjust quantities.

- **Animations:** Slide In/Out: Smooth animations enhance the user experience when toggling the hamburger menu.


# Color Reference

- Inspiration:
The design of this project draws heavily from "The Legend of Zelda" series, aiming to capture the essence of adventure, elegance, and courage that the game series is known for.

- Icons:
For this project, I’ve chosen to incorporate icons from “The Legend of Zelda.” These iconic symbols show a connection to the game series and adds a touch of Zelda magic to the design.

- Colors:
**Background:** The dark background provides a strong contrast, making the white text and icons pop.

**Highlight:** The sign-in button uses a vibrant green, reminiscent of the lush, green landscapes of Hyrule.


# Tech Stack and File Structure

**Client:** ReactJS, CSS

```
video-game-store-front-end-application/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Navbar.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   ├── SearchBar.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   ├── Card.css
│   │   ├── Pagination/
│   │   │   ├── Pagination.jsx
│   │   │   ├── Pagination.css
│   │   ├── Payments/
│   │   │   ├── Payments.jsx
│   │   │   ├── Payments.css
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   ├── index.css
├── items.js
├── package.json
├── README.md

```

- src/assets: Contains all the images and icons used in the project.
- src/components: Contains all the React components and their corresponding styles.
- src/App.jsx: The main application component.
- items.js: Contains the items data.




# Contributing

Contributions are welcome! Please follow these steps to contribute:

1) Fork the repository.
2) Create a new branch (git checkout -b feature-branch).
3) Make your changes and commit them (git commit -m 'Add new feature').
4) Push to the branch (git push origin feature-branch).
5) Create a new Pull Request.

