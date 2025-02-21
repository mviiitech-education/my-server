/\*\*

## How to Run Tests

-

1.  Ensure you have Node.js and npm installed on your machine.
2.  Navigate to the project directory:
3.  Install the project dependencies: `npm install`
4.  Run the tests using the following command: `npm run test`

## Setting Up Jenkins for CI/CD

-

1.  **Install Jenkins:**
    Download and install Jenkins from the [official website](https://www.jenkins.io/download/).
    Follow the installation instructions for your operating system.

2.  **Configure Jenkins:**
    Open Jenkins in your web browser (usually at `http://localhost:8080`).
    Install the necessary plugins (e.g., NodeJS, Git).

3.  **Create a New Jenkins Job:**
    Click on "New Item" and enter a name for your job.
    Select "Freestyle project" and click "OK".

-

4.  **Set Up Source Code Management:**
    Under "Source Code Management", select "Git".
    Enter the repository URL: `https://github.com/your-username/mviii-tech-education.git`
    Provide credentials if necessary.

-

5.  **Add Build Steps:**
    Under "Build", click "Add build step" and select "Execute shell".
    Enter the following commands to install dependencies and run tests:
    `sh
     npm install
     npm test
     `

-

6.  **Save and Build:**
    Click "Save" to save the job configuration.
    Click "Build Now" to run the job and verify that everything is set up correctly.

-

7.  **Set Up Build Triggers (Optional):**
    To automate the build process, you can set up triggers under the "Build Triggers" section.
    For example, you can enable "GitHub hook trigger for GITScm polling" to trigger builds on every push to the repository.

- By following these steps, you can set up Jenkins to automatically run your tests whenever changes are pushed to your repository.
  \*/
