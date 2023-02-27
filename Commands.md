# Getting Started With Commands 
* create-react-app <_name_of_your_project>
* Ideal Command 
    - create-react-app myapp --scripts-version 1.1.5
    - The above commands simply gives you the ideal project structure 
* npm start     : This will start your project 
* npm build     : This will buidl your project 

* Package.json is the only file you should care of .
* [DIR] node_moudles directory holds the dependencies and build tools 
  and you shouldn't edit anything in this folder 
* We create the javascript UI componets by 
  - Creating any javascript class and inherit that class 
    with the Component class.
    ```js
        class App extends Component
        {
        }
        export default App;
    ```
  - This is class we, define the method callled render() which will
    display our react application. so it must return some html code  
    which can be rendered to the dom , and to the screen.


