import React from 'react';
import './App.css';
import MainCalc from "./components/maincalc"
import Result from "./components/result"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name1: "",
      name2:"",
      error: false,
      result: "",
      loading: true,
      resultScreen:false
    }
    this.nameChange = this.nameChange.bind(this)
    this.submitHandler= this.submitHandler.bind(this)
  }
  nameChange(event) {
    if (event.target.id == 'name1') {
      this.setState({
        name1: event.target.value
      })
    }
    else {
      this.setState({
        name2: event.target.value
      })

    }
    
  }
  flames = {
    f :[0,6,12,18,24],
    l :[1,7,13,19],
    a :[2,8,14,20],
    m :[3,9,15,21], 
    e :[4,10,16,22],
    s :[5,11,17,23]
  }
  reload() {
    window.location.reload()
  }
  submitHandler(e) {
    e.preventDefault()
    if (
      !/\S/.test(this.state.name1) ||
      !/\S/.test(this.state.name2) ||
      !!/[^a-z]/i.test(this.state.name1) ||
      !!/[^a-z]/i.test(this.state.name2)
    )
    {
      this.setState({
        error: true
      })
    }
    else{
    let name1 = this.state.name1.toLowerCase()
    let name2 = this.state.name2.toLowerCase()
    function removeDuplicate(a, b) {
      let small =""
      let big =""
      if (a.length <= b.length) {
        small = a
        big = b
      }
      else {
        small = b
        big = a
      }
      small.split("").forEach(
        letter => {
          if (big.includes(letter)) {
            let ind = small.indexOf(letter)
            let ind2 = big.indexOf(letter)

            String.prototype.removeCharAt = function (i) {
              var tmp = this.split(''); // convert to an array
              tmp.splice(i, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
              return tmp.join(''); // reconstruct the string
            }
            small = small.removeCharAt(ind)
            big = big.removeCharAt(ind2)
          }

        }
      )
      return (big + small).length
    }
    let output = removeDuplicate(name1, name2)
    //loops through the flames object and returns one of the keys depending on the 
    //output above
    let prop = ""
    for (var property in this.flames) {
      if (this.flames.hasOwnProperty(property)) {
        if (this.flames[property].includes(output)) {
          prop = property.toString()
          this.setState({
            result: prop
          })
        }
      }
    }   
    
    this.setState({
      resultScreen: true
    })
    setTimeout(() => this.setState({
      loading: false
    }), 3000)}
  }
  render() {
    if (this.state.resultScreen) {
      return (
            <Result
              reload={this.reload}
              loading={this.state.loading}
              name1={this.state.name1}
              name2={this.state.name2}
              result={this.state.result}
            />
           
      );
      
    }
    return (
      <div className="App">
        <MainCalc
          error={this.state.error}
          nameChange={this.nameChange}
          values={this.state.values}
          submitHandler={this.submitHandler}
        />
        <p className="intro">
          Enter your name and the name of whoever you have in mind and figure
          out how compatible you are. Who knows, you both might be compatible
          enough to go all the way.
        </p>
        <p className="link">
          made with love by <a href="https://github.com/Chimdiya1">Chimdia</a>
        </p>
        
      </div>
    );

  }
  
}

export default App;
