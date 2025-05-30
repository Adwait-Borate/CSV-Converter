const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Flashcard CSV Generator...\n');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
    console.log('✅ Created public directory');
}

// Check if all required files exist
const requiredFiles = [
    'server.js',
    'package.json',
    'public/index.html'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
    if (!fs.existsSync(path.join(__dirname, file))) {
        console.log(`❌ Missing file: ${file}`);
        allFilesExist = false;
    } else {
        console.log(`✅ Found: ${file}`);
    }
});

if (allFilesExist) {
    console.log('\n🎉 All files are in place!');
    console.log('\nNext steps:');
    console.log('1. Run: npm install');
    console.log('2. Run: npm start');
    console.log('3. Open: http://localhost:3001');
} else {
    console.log('\n❌ Some files are missing. Please ensure all files are copied correctly.');
}

console.log('\n📋 File structure should be:');
console.log('├── server.js');
console.log('├── package.json');
console.log('├── setup.js');
console.log('└── public/');
console.log('    └── index.html');