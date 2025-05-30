# Flashcard CSV Generator

A web application that converts question and answer content into CSV files suitable for importing into flashcard applications like Anki.


## 📝 Features

- Convert Q&A format text into properly formatted CSV files
- Simple, intuitive web interface
- Automatic formatting of CSV content with proper escaping
- Compatible with Anki and other flashcard applications
- Download generated CSV files with custom filenames
- Responsive design that works on desktop and mobile

## 🚀 Live Demo

Check out the live application [Website](https://csv-converter-delta.vercel.app/).

## 📋 Usage Instructions

1. Enter or paste your Q&A content in the following format:
   ```
   Question: What is Express.js?
   Answer: Express.js is a web application framework for Node.js.

   Question: What is Anki?
   Answer: Anki is a flashcard program that utilizes spaced repetition.
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

## 🌐 Deployment on Vercel

This application is configured for easy deployment on Vercel.

1. Fork or clone this repository to your GitHub account

2. Sign up for a [Vercel account](https://vercel.com) if you don't have one

3. Connect your GitHub account to Vercel

4. Import your repository in Vercel:
   - Click "Add New" → "Project"
   - Select your repository
   - Keep all default settings (the vercel.json file handles the configuration)
   - Click "Deploy"

5. Once deployed, Vercel will provide you with a URL to access your application

### Manual Deployment with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Navigate to your project directory and run:
   ```bash
   vercel
   ```

3. Follow the on-screen instructions to complete the deployment

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

## 📥 Importing into Anki

1. Open Anki on your computer
2. Click "Import File" (or press Ctrl+Shift+I)
3. Select your downloaded CSV file
4. In the import dialog:
   - Set "Fields separated by" to "Comma"
   - Ensure "First field is question" is checked
   - Choose the appropriate deck
5. Click "Import"

## 🛠️ Technology Stack

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, JavaScript
- **Deployment**: Vercel

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/flashcard-csv-generator/issues).
