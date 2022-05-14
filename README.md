# Next.js + Redux + Ethers.js

The intent of this sample application is to  provide a demonstration of how to connect a wallet to a Next.js application.

It includes Redux via [Redux Toolkit](https://redux-toolkit.js.org/) while also leveraging Redux Persist to ensure that the user's connection status maintains across application sessions. Additionally, you will find that the app listens for the wallet account to change and appropriately reflects the update to the UI.

## Usage

To use this template to query any contracts, you will first need to modify a few things:

* Open `constants/index.tsx`
    * Populate `MAIN_NET_ADDRESS` or `TEST_NET_ADDRESS` with the appropriate contract address.
    * Populate `MAIN_NET_ABI` or `TEST_NET_ABI` with the appropriate contract ABI in order to allow for any contract queries to take place.
    * This will be used in `utils/connectWallet.tsx` on line 50 where `addressContract` is currently commented out.

## Running the application

* Ensure that you have run one of the following commands:
```bash
npm install
# or
yarn install
```

* To run the application, run one of the following commands:

```bash
npm run dev
# or
yarn dev
```

* Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Things to note
This repository includes the following plugins to streamline development should you choose to use it as a template:

* babel-plugin-module-resolver
    * This is utilized for keeping imports and file structure clean. I have a blog post that details this in more detail. You can read about it in the module resolver section [here](https://quinton.codes/my-guide-to-a-clean-react-project).
* redux-logger
    * This is used for tracking any updates to your store. You should ensure that this is removed from your middlewares in a production environment. I recommend using .env variables in order to accomplish this. If hosting with vercel, you can follow [this documentation](https://vercel.com/docs/concepts/projects/environment-variables) in order to utilize .env variables.
* styled-components
    * I'm a big fan of styled-components. I believe that it is the most "React" way to style your projects. It allows for you to [pass props](https://styled-components.com/docs/basics#passed-props) to your style/components which allow you to do things such as rendering conditional css. Styled Components also also allows you to [extend](https://styled-components.com/docs/basics#extending-styles) other components/styles or you can extend pre-built UI components from packages like Material UI while still adding your own flair. It also allows you to write your styles as if you were writing in [Sass](https://sass-lang.com/documentation/syntax).

I touch on most of these things in [my blog post](https://quinton.codes/my-guide-to-a-clean-react-project). I'd encourage you to give a read so you understand the file structure of my projects as well as the use of module-resolver.

## Contributing
Feel free to add to this repository things that you think are important. I'll happily review PRs and extend this further so others can begin developing Web3 apps.
