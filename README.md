# Flashcard CSV Generator

A web application that converts question and answer content into CSV files .


## 📝 Features

- Convert Q&A format text into properly formatted CSV files
- Simple, intuitive web interface
- Automatic formatting of CSV content with proper escaping
- Download generated CSV files with custom filenames
- Responsive design that works on desktop and mobile

## 🚀 Live Demo

Check out the live application [Website](https://csv-converter-delta.vercel.app/).

## 📋 Usage Instructions

1. Enter or paste your Q&A content in the following format:
   ```
   Question: What is Express.js?
   Answer: Express.js is a web application framework for Node.js.

   Question: What is Typescript?
   Answer: TypeScript is a programming lang.
   ```

2. Enter a filename for your CSV file (default: `flashcards.csv`)

3. Click "Generate & Download CSV" to create and download your file

4. Import the downloaded CSV into your flashcard application

## 🔧 Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/flashcard-csv-generator.git
   cd flashcard-csv-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the setup script (optional):
   ```bash
   node setup.js
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Access the application at http://localhost:3001

### Production Deployment

To run in production:

```bash
npm start
```

## 📁 Project Structure

```
├── public/
│   └── index.html       # Frontend application
├── server.js            # Express server and API endpoints
├── package.json         # Project metadata and dependencies
├── vercel.json          # Vercel deployment configuration
├── setup.js             # Setup helper script
└── .gitignore           # Git ignore file
```


## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Vercel


## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

