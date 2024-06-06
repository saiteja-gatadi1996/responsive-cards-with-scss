# React + Vite


1. npm i -D sass
2. npm install --save-dev @testing-library/react @testing-library/jest-dom
3. npm install --save-dev @babel/core @babel/preset-env @babel/preset-react babel-jest
4. npm install --save-dev jest-environment-jsdom
5. npm install --save-dev babel-plugin-istanbul


## Converting .jsx to .tsx
1. npm install --save-dev typescript @types/jest
2. 


## Structure:

vite-project/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── __tests__/
│   │   │   ├── Layout.test.tsx
│   │   │   ├── ShimmerUI.test.tsx
│   │   │   ├── Typography.test.tsx
│   │   │   └── YouTubeCard.test.tsx
│   │   ├── Layout.tsx
│   │   ├── ShimmerUI.tsx
│   │   ├── Typography.tsx
│   │   └── YouTubeCard.tsx
│   ├── utils/
│   │   ├── accessibility.ts
│   │   ├── accessibility.test.ts
│   ├── setupTests.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── main.tsx
│   ├── main.test.tsx
│   └── index.css
│
├── babel.config.js
├── tsconfig.json
├── package.json
└── README.md
