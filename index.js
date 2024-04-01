//created file using async and await which creates a file called example.txt and writes the message into it.

const fs = require("fs").promises;

const createFile = async () => {
  try {
    await fs.writeFile("example.txt", "This is an example file created using fs module and async/await.");
    console.log("File created successfully!");
  } catch (error) {
    console.error("Error creating file:", error);
  }
};

createFile();