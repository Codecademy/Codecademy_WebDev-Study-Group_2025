# How to Submit Your Work

Follow these steps to fork the repository and create a pull request for your submission:

## Step 1: Fork the Repository

1. Navigate to the repository on GitHub.
2. Click the **Fork** button in the top-right corner to create a copy of the repository under your GitHub account.

## Step 2: Clone the Forked Repository

1. On your forked repository page, click the **Code** button and copy the repository URL.
2. Open your terminal or Git Bash and run:

    ```bash
    git clone <repository-url>
    ```

    Replace `<repository-url>` with the URL you copied.

## Step 3: Create a New Branch

1. Navigate to the cloned repository:

    ```bash
    cd <repository-folder>
    ```

2. Create and switch to a new branch:

    ```bash
    git checkout -b your-branch-name
    ```

    Replace `your-branch-name` with a descriptive name for your changes.

## Step 4: Add Your Submission

1. Add your submission file(s) to the appropriate folder in the `mini_challenge/` folder.
2. Stage and commit your changes:

    ```bash
    git add .
    git commit -m "Add submission for [your name or description]"
    ```

## Step 5: Push Your Changes

1. Push your branch to your forked repository:

    ```bash
    git push origin your-branch-name
    ```

## Step 6: Create a Pull Request

1. Go to the original repository on GitHub.
2. Click the **Pull Requests** tab, then click **New Pull Request**.
3. Select **compare across forks**, choose your fork and branch, and create the pull request.
4. Add a title and description for your submission, then click **Create Pull Request**.

You're done! Wait for the repository maintainers to review and merge your submission.
