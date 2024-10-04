# backend-challenge-sample

Sample backend challenge template

## Setup steps

1. Install homebrew if not already installed:
   `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

2. Install node via nvm if not already installed: `brew install nvm`
3. Add the following lines to your shell profile file (e.g., ~/.bashrc,
   ~/.zshrc, or ~/.bash_profile):
   1. `export NVM_DIR=~/.nvm [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # This loads nvm bash_completion`
   2. Restart your terminal or run `source ~/.your_shell_profile`
4. Verify installation: `nvm --version`
5. Install node 20 version if not already installed: `nvm install 20`
6. Install yarn if not already installed: `npm install -g yarn`
7. Check node and yarn versions: `node --version` and `yarn --version`
8. Install depdendencies: `yarn`
9. Execute hello-world file: `yarn hello` in terminal. You should see a `'Hello, world!'` message printed.
10. Execute test: `yarn test`. You should see all tests passing.
