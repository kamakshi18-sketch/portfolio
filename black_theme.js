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
    content = content.replace('--bg-main: #0f172a;', '--bg-main: #000000;');
    content = content.replace('--text-heading: #f8fafc;', '--text-heading: #ffffff;');
    content = content.replace('--text-body: #cbd5e1;', '--text-body: #a1a1aa;');
    
    fs.writeFileSync(file, content);
}
