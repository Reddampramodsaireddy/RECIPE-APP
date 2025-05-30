🍽️ Recipe App
A modern and responsive Recipe Search App built with React, powered by the Spoonacular API, and styled using HTML, CSS, and Bootstrap 5.

🔍 Features
🔎 Search Recipes by ingredients or keywords

📋 View Recipe Details – ingredients, instructions, and preparation time

💻 Responsive Design – works seamlessly across all devices

⚡ Fast & Dynamic UI – powered by React hooks and reusable components

🧾 Clean Layout – styled using Bootstrap 5

🧰 Tech Stack
React.js – UI development and state management

HTML5 & CSS3 – structure and styling

Bootstrap 5 – responsive layout and components

Spoonacular API – real-time recipe data

🚀 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/recipe-app.git
cd recipe-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up API Key
Sign up and get your API key from Spoonacular.

Create a .env file in the root directory and add your key:

env
Copy
Edit
REACT_APP_SPOONACULAR_API_KEY=your_api_key_here
⚠️ Note: Ensure .env is listed in .gitignore to protect your API key.

4. Run the App
bash
Copy
Edit
npm start
The app will be available at: http://localhost:3000

📁 Project Structure
bash
Copy
Edit
src/
│
├── components/        # Reusable UI components
├── App.js             # App entry point and routes
├── index.js           # React DOM render
└── styles/            # Custom CSS styles
