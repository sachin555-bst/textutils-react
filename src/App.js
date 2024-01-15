import "./App.css";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import About from "./component/About";
import React, { useState } from "react";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toogleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark mode";

      // setInterval(() => {
      //   document.title =" textutils is amazing";
      // }, 2000);

      // setInterval(() => {
      //   document.title =" install textutils now";
      // }, 1500);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      document.title = "TextUtils-light mode";
    }
  };

  {
    /* const toogleMode1 =()=>{
    if(mode==='light'){
      setmode('#0f7d25');
      document.body.style.backgroundColor = '#0f7d25';
      showAlert("Green mode has been enabled","success");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled","success");
    }
  } */
  }

  return (
    <>
      {/*<Navbar title ="TextUtils" aboutText="About TextUtils" /> */}
      {/*aboutText will be taken fromt the default props */}

      {/*<Form showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/> */}

  <Router> 
        <Navbar title="TextUtils" mode={mode} toggleMode={toogleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
  <Switch>
             <Route exact path="/about">
             <About/>
            </Route>
   <Route exact path="/"> 
              <Form
                showAlert={showAlert}
                heading="Enter the text to analyze "
                mode={mode} />
            </Route>
           </Switch>
        </div>
  </Router>
</>
  );
}

export default App;
