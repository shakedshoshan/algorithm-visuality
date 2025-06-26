import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Array from './pages/Array'
import LinkedList from './pages/LinkedList'
import Stack from './pages/Stack'
import Queue from './pages/Queue'
import HashTable from './pages/HashTable'
import Header from './components/Header'
import Home from './pages/Home'
import Singleton from './pages/desine_patterns/Singleton'
import Factory from './pages/desine_patterns/Factory'
import AbstractFactory from './pages/desine_patterns/AbstractFactory'
import Builder from './pages/desine_patterns/Builder'
import Prototype from './pages/desine_patterns/Prototype'
import Adapter from './pages/desine_patterns/Adapter'
import Bridge from './pages/desine_patterns/Bridge'
import Composite from './pages/desine_patterns/Composite'
import Decorator from './pages/desine_patterns/Decorator'
import Facade from './pages/desine_patterns/Facade'
import Flyweight from './pages/desine_patterns/Flyweight'
import Proxy from './pages/desine_patterns/Proxy'
import Observer from './pages/desine_patterns/Observer'
import Strategy from './pages/desine_patterns/Strategy'
import Command from './pages/desine_patterns/Command'
import State from './pages/desine_patterns/State'
import TemplateMethod from './pages/desine_patterns/TemplateMethod'
import Memento from './pages/desine_patterns/Memento'
import Visitor from './pages/desine_patterns/Visitor'

    function App() {
      return (
        <Router>
          <div className='bg-slate-100 min-h-screen p-8 flex flex-col'>
            <Header />
            {/* <h1 className='text-4xl font-bold text-center m-10 text-indigo-700'>Welcome to the Algorithm Visualizer</h1> */}
            
            <Routes>
              <Route path="/" element={<Home />} />
              
              {/* Data Structures Routes */}
              <Route path="/array" element={<Array />} />
              <Route path="/linked-list" element={<LinkedList />} />
              <Route path="/stack" element={<Stack />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/hash-table" element={<HashTable />} />
              
              {/* Creational Design Patterns Routes */}
              <Route path="/singleton" element={<Singleton />} />
              <Route path="/factory" element={<Factory />} />
              <Route path="/abstract-factory" element={<AbstractFactory />} />
              <Route path="/builder" element={<Builder />} />
              <Route path="/prototype" element={<Prototype />} />
              
              {/* Structural Design Patterns Routes */}
              <Route path="/adapter" element={<Adapter />} />
              <Route path="/bridge" element={<Bridge />} />
              <Route path="/composite" element={<Composite />} />
              <Route path="/decorator" element={<Decorator />} />
              <Route path="/facade" element={<Facade />} />
              <Route path="/flyweight" element={<Flyweight />} />
              <Route path="/proxy" element={<Proxy />} />
              
              {/* Behavioral Design Patterns Routes */}
              <Route path="/observer" element={<Observer />} />
              <Route path="/strategy" element={<Strategy />} />
              <Route path="/command" element={<Command />} />
              <Route path="/state" element={<State />} />
              <Route path="/template-method" element={<TemplateMethod />} />
              <Route path="/memento" element={<Memento />} />
              <Route path="/visitor" element={<Visitor />} />

            </Routes>
          </div>
        </Router>
      )
    }
    
    export default App
