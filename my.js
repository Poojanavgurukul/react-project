// This is Hello Component
      function Upper(){
        return (
        <div className="main">
          <h1 className="heading">Todo Application</h1>
          <input type="text" placeholder="Add Todo!" className="list"></input>
          <button className="btn">Add Todo</button>
        </div>)
        ;
      }
      function Task(props){
        return (
            <li><input type="checkbox" /> {props.name} </li>
          )
      }

  // This is the App component which contains 3 Hello Component
      function App(){
        return (
          <div>
            <Upper/>
            <ul>
              <Task name="Learn Angular.js"/>
              <Task name="Learn Sails.js"/>
              <Task name="Be a JavaScript ninja!"/>
            </ul>
        </div>
        )
      }


      // Here we are rendering App component
      ReactDOM.render(
        <App/>,
        document.getElementById('root')
      );

       