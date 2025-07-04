// src/index.ts
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("TypeScript User");

// Example of DOM manipulation
const appDiv = document.getElementById("app");
if (appDiv) {
  appDiv.innerHTML = "<h1>Welcome to your DAIDAI TypeScript Static Site!</h1>";
}
