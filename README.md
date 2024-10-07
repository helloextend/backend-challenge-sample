# backend-challenge-sample

Sample backend challenge template

## Setup steps

1. Install nvm:
   1. For MacOs:
      1. Install Homebrew if not already installed: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
      2. Install node via nvm intall not already installed: `brew install nvm`
      3. Add the following lines to your shell profile file (e.g., ~/.bashrc,
         ~/.zshrc, or ~/.bash_profile):
         1. `export NVM_DIR=~/.nvm [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion`
         2. Restart your terminal or run `source ~/.your_shell_profile`
   2. For windows:
      1. Follow instructions here: `https://github.com/coreybutler/nvm-windows#installation--upgrades`

2. Verify installation: `nvm --version`
3. Install node 20 version if not already installed: `nvm install 20`
4. Install yarn if not already installed: `npm install -g yarn`
5. Check node and yarn versions: `node --version` and `yarn --version`
6. Install depdendencies: `yarn`
7. Execute hello-world file: `yarn hello` in terminal. You should see a `'Hello, world!'` message printed.
8. Execute test: `yarn test`. You should see all tests passing.
