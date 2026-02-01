const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'content/zh-CN/training/start.md');
const outputDir = path.join(__dirname, 'public/images/training');

if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
}

let content = fs.readFileSync(inputFile, 'utf8');
const regex = /!\[.*?\]\(data:image\/(png|jpeg|jpg|gif);base64,(.*?)\)/g;

let match;
let count = 0;
let replacements = [];

while ((match = regex.exec(content)) !== null) {
    count++;
    const ext = match[1] === 'jpeg' ? 'jpg' : match[1];
    const data = match[2];
    const filename = `image_${count}.${ext}`;
    const filePath = path.join(outputDir, filename);

    fs.writeFileSync(filePath, data, 'base64');
    console.log(`Saved ${filename}`);

    // Store the replacement to be made (we won't modify the file yet properly, 
    // but we can if we wanted to. However, we are going to overwrite the file later anyway)
}

console.log(`Extracted ${count} images.`);
