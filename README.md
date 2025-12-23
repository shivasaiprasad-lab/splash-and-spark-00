# Welcome to Inclusive Ltd Homepage source code

## Project info

**URL**: [Inclusive](https://inclusive.com.cn)

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL. Navigate to the project directory.
# Step 2: Install the necessary dependencies.
npm i

# Step 3: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## How to update environment?

On our Ubuntu server, node.js is installed by nvm.

```shell
# Note:
# to remove, delete, or uninstall nvm - just remove the `$NVM_DIR` folder
rm -rf ~/.nvm
```
The node.js version is 24, installed by nvm.

```shell
nvm install 24
```

Based on the new node.js, we have the new npm and also, the corresponding pm2 is also required.

```shell
# Step 1: Delete the existing process.
pm2 delete inclusive-global
# Step 2: Update pm2 to make sure it's suitable version.
npm install -g pm2@latest
pm2 update
# Step 3: Use script to start pm2 website process.
pm2 start /srv2/inclusive-global/ecosystem.config.cjs
# Step 4: Setup auto start for pm2.
pm2 save
```
## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
