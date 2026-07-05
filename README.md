Shine Space - Frontend

Shine Space is a modern property listing platform built to help users browse, search, and manage real estate listings with a clean, responsive interface.

🚀 Live Demo

https://shine-space-front-end.vercel.app/

🛠️ Tech Stack


Framework: Next.js
Language:  TypeScript
Styling: Tailwind CSS
State Management: [React Context]
API Communication: REST API (connects to Shine Space backend)
Deployment: Vercel


✨ Features


Property listing browse & search
[User authentication — if applicable]
Fully responsive UI (mobile, tablet, desktop)
Optimized API integration with the Shine Space backend


⚙️ Environment Variables

Create a .env.local file in the root directory with:

NEXT_PUBLIC_API_BASE_URL=https://shine-space-backend.vercel.app

🧑‍💻 Getting Started


Clone the repository


bashgit clone https://github.com/ZAHIDHOSEN/shine-space-frontend.git
cd shine-space-frontend


Install dependencies


bashnpm install


Set up environment variables (see above)
Run the development server


bashnpm run dev


Open http://localhost:3000 in your browser


🐛 Notable Engineering Challenge

During deployment on Vercel, the frontend faced connection timeout issues caused by a hardcoded localhost base URL in the API configuration. This was resolved by switching to environment-variable-based API URLs (NEXT_PUBLIC_API_BASE_URL), ensuring the frontend correctly communicates with the backend across different environments (local vs. production).

🔗 Related Repository


Backend: https://shine-space-backend.vercel.app/


👤 Author

Zahid Hosen


GitHub: github.com/ZAHIDHOSEN,
Portfolio: my-portfolio-lovat-beta-19.vercel.app
