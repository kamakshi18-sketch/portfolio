const fs = require('fs');

const files = [
    'skill-certificates.html',
    'quiz-certificates.html',
    'participation-certificates.html'
];

for (let file of files) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');
    
    // Update variables
    content = content.replace('--primary: #8b5cf6;', '--primary: #333333;');
    
    fs.writeFileSync(file, content);
}
