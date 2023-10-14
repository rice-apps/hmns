# HMNS APP

### Developer Guide
Follow these steps to get started on developing:

### Prerequisites
Please install the latest NodeJS version. Downloads for Windows, Mac, and Linux can be found on the NodeJS website.

We also recommend developing with VSCode.

### Installation
To clone HMNS, create a new directory to store the code, and CD into the directory from your terminal. Enter the following command to clone the directory!

git clone `https://github.com/rice-apps/hmns.git`

To make sure you have all the necessary packages, perform the following commands after every pull:
```
cd hmns-app
cd client
npm install
cd ../server
npm install
```

To run the app and server respectively perform the following commands in your terminal (in separate windows)
```
npm start
npm start
```

# Contributing
In order to contribute to HMNS, you must make all of your edits on your own development branch. To do so, create a new branch from your command line:

`git checkout -b my-new-branch`
From here, all your changes should be pushed to this branch, and not master.

When you are done working on your feature, submit a pull request through GitHub, which must be approved by a Team Lead before it is merged with master.

Best Coding Practices
We want to keep our code as clean as possible, so it's important to follow these best development practices before submitting your PR!

- Don't leave commented-out code in your files.
- Make sure there are no warnings when React compiles after running npm start
- Make sure there are no warnings in the JavaScript development console
- Add comments to your files describing what each function does
- When creating a PR, make sure you describe what the PR does, and how a Team Lead should review and test it!
