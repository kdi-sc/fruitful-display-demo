const { execSync } = require('child_process');

// Using the specific repository URL
const repoUrl = 'https://github.com/kdi-sc/fruitful-display.git';

const commands = [
  'npm init -y',
  'npm install next react react-dom',
  'npm install -D tailwindcss postcss autoprefixer',
  'npx tailwindcss init -p',
  'git init',
  // Remove existing remote if it exists
  'git remote remove origin || true',
  // Add the new remote
  `git remote add origin ${repoUrl}`,
  'git add .',
  'git commit -m "Initial commit"',
  'git branch -M main',
  'git push -u origin main --force'
];

console.log('Setting up the project and pushing to GitHub...');

try {
  commands.forEach(command => {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit' });
  });
  console.log('Project successfully pushed to GitHub!');
} catch (error) {
  console.error('An error occurred:', error.message);
}