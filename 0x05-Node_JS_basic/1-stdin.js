console.log('Welcome to Holberton School, What is your name?');
process.stdin.on('data', (input) => {
  const name = String(input).trim();
  console.log(`Your name is: ${name}`);

  if (!process.stdin.isTTY) {
    console.log('This important software is now closing!');
  }
  process.exit();
});
