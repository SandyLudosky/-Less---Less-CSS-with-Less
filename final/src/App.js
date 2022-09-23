import { useState } from "react";
import less from './less.png';
import './App.css';
import "./styles/styles.css"

const Section = ({ heading, description, link, children }) => {
   return(
    <section id={heading} className="text-left">
      <h2>{heading} 
          <a className="link" 
            href={link}
            target="_blank"
            rel="noopener noreferrer"> 🔗</a>
      </h2>
      <p className="lead">{description}</p>
      {children}
    </section>
   )
}

const Navigation = ({ docs }) => {
  const [active, updateActive] = useState(-1)
  const links = Object.values(docs).map(value => value.heading)
  return(
    <nav className="nav fixed-top">
      <a className={active === -1 ? "nav-link active" : "nav-link"}  href={`#header`} onClick={() => updateActive(-1)}>Home</a>

      {links.map((link, index) => {
        const className = index === active ? "nav-link active" : "nav-link"
        return <a className={className}  href={`#${link}`} onClick={() => updateActive(index)}>{link}</a>
      })}
    </nav>
  )
}
function App() {
  const docs = {
    variables:{
      heading: "Variables", 
      link: "https://lesscss.org/features/#variables-feature", 
      description: "Control commonly used values in a single location."
    }, 
    nesting:  { 
      heading: "Nesting", 
      link: "https://lesscss.org/#nesting", 
      description: "Less gives you the ability to use nesting instead of, or in combination with cascading."
    }, 
    operation:{ 
      heading: "Opération", 
      link: "https://lesscss.org/#operations", 
      description: "Arithmetical operations +, -, *, / can operate on any number, color or variable. If it is possible, mathematical operations take units into account and convert numbers before adding, subtracting or comparing them. The result has leftmost explicitly stated unit type. If the conversion is impossible or not meaningful, units are ignored. Example of impossible conversion: px to cm or rad to %."
    }, 
    extend: { 
      heading: "Extend", 
      link: "https://lesscss.org/features/#extend-feature", 
      description: "Extend is a Less pseudo-class which merges the selector it is put on with ones that match what it references."
    }, 
    mixin: { 
      heading: "Mixin", 
      link: "https://lesscss.org/features/#mixins-feature", 
      description: "'mix-in' properties from existing styles"
    }, 
    function: { 
      heading: "Built-in Functions", 
      link: "https://lesscss.org/functions/#functions-overview",
      description: "Built-in functions supported by Less"
    },
    condition: { 
      heading: "Condition", 
      link: "https://lesscss.org/functions/#logical-functions",
      description: "Evaluates to true or false \n You can 'store' a boolean test for later evaluation in a guard or if()"
    }
  }
    

  return (
    <>
    <Navigation docs={docs} />
    <div className="App">
      <header id="header" className="App-header" >
        <img src={less} className="App-logo mb-5" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Less </a>
      </header>
    </div>
    <div className="container mt-4">
        <Section {...docs.variables} />
        <Section {...docs.nesting} />
        <Section {...docs.operation} />
        <Section {...docs.extend} >
          <button className="button-midnight-blue mx-2">button</button>
          <button className="button-orange mx-2">button</button>
          <button className="button-amethyste mx-2">button</button>
          <button className="button-river mx-2">button</button>
        </Section>
        <Section {...docs.mixin}>
            <span class="badge badge-midnight-blue mx-2 ">badge</span>
            <span class="badge badge-orange mx-2">badge</span>
            <span class="badge badge-amethyste mx-2">badge</span>
            <span class="badge badge-river mx-2">badge</span>
        </Section>

        <Section {...docs.function}>
          <div class="alert alert-river" role="alert">
            Alert
          </div>
          <div class="alert alert-orange" role="alert">
            Alert
          </div>
          <div class="alert alert-midnight-blue" role="alert">
            Alert
          </div>
          <div class="alert alert-cloud" role="alert">
            Alert
          </div>
        </Section>
        <Section {...docs.condition} />

    </div>
    </>
  );
}

export default App;
