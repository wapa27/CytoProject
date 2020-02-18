import React from 'react'
import CytoscapeComponent from 'react-cytoscapejs';

class Cytoscape extends React.Component {
    constructor(props){
      super(props);
    }
  
    render(){
      const elements = [
         { data: { id: 'one', label: 'Node 1' }, position: { x: 300, y: 300 } },
         { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 400 } },
         { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
      ];
  
      return (
        <div className = "CytoContainer">
            <CytoscapeComponent className = "CytoscapeGraph"
            stylesheet={[
                {
                selector: 'node',
                style: {
                    width: 30,
                    height: 20,
                    shape: 'square'
                }
                },
                {
                selector: 'edge',
                style: {
                    width: 5
                }
                }
            ]}  
            elements={elements} style={ { width: '500px', height: '500px' } }
            />
      </div>)
    }
  }
  
  export default Cytoscape;