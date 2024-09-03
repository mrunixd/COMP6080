import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>2048</h1>
        <table border="1">
          <tr>
            <td>
              <div className="cell"id="two">
                <p>2</p>
              </div>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table> 
      </div>
    </div>
  );
}

export default App;
