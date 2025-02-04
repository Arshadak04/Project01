# 📌 Project Name

<!-- ![Project Screenshot](https://via.placeholder.com/800x400)   -->
*This FullStack Application Starting of a Restaurent.*

---

## 🚀 Features  
✅ Feature 1  
✅ Feature 2  
✅ Feature 3  

---

## 📦 Installation  

Chapter1

CDN Links :- So we started project with cdn links .
  - Takes all the react and react-dom code that we needed through it

Cross Origin Links

* Npm(Node Pakage Manager)
   - npm init
   get a pakage.json (Manages Dependies) -configuration for npm 

   * Bundlers
    -Parcel
    -Web Pack
    -wheet
 we are working with Parcel

inside a pakage.json two sign 
 -  ^2.18.1
 -  ~2.18.1 

 After Installing Parcel we got node module / package-lock.json (keep track the exact version)
 Node Module Folder - All the Code Which take from the npm 

npm (install the packages )
npx (Executing A Packages)
 CDN is not preferred the way so we install a react and react-dom


 Browser can not import and export so , we change the script type into the module

*Parcel 
  -Dev Build
  -Local server
  -HMR(HOT MODULE REPLACEMENT)
  -File Watching Algo
  -Cacheing Faster Build
  -Image Optimization
  -Minification
  -Bundling
  -Ca
  -Consistent Hashing
  -Code Spliting
  -Diffrential Bundling -support Older Version
  -Diagnostic
  -Tree Shaking
  -HTTPS
  -Error Handling
  -Different dev and prod bundlers

  When we run the Code Through Code two new folder created 
  - /.percel-cache
  -/dist

  both shouls also include in .gitignore

  Craeted A Script Through which we run a code , 
  we are Executing code through (npx parcel index.html)
  but we can create a script like:

  -"start" : "npx parcel index.html
  -"build" : "npx parcel build index.html (production ready app)

  After that we can Run Through the 
  npm run start 
  npm start (Only for this)
  npm run build

  -Creation of React
  ReactElement
  React Component

*JSX(Javascript XML)

(we can say (js+html)  its look like this but its not)

* React Component
- Functional Component (New After React16)
- Class Component (Older way)

*Functional Component
 - So this is Basically a Normal JS Function (Generally a Arrow Function)

 - Expoert 

 Two Typed
 Default Export 
 - (When we have only one Component in the Page/file)
  -export default Component_Name
 Nmaed Export
  -(When we have More than one Compoenet )
   - export Const Component="Abc

   Import is same we just have to write a ({} for the Named Import)

 Hooks - Nothing Just JS Functions
USESTATE
 
- When we want click button and change in DOM (Change in Data Automatically )
 so we use a UseState 

 const [variable,setvariable]=useState([data])




