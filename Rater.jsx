
import React from 'react';

class RaterComp extends React.Component {
              render(){
            //     var names=['Ember', 'BackboneJS', 'ReactJS', 'Jasmine'];
            //    return <div>Hello, { names } </div>


            return(<div>
               <ul className="rating">
                        <li style={{color: 'pink'}} className="filled">{'\u2605'}</li>
                        <li style={{color: 'pink'}} className="filled">{'\u2605'}</li>
                        <li style={{color: 'pink'}} className="filled">{'\u2605'}</li>
                        <li>{'\u2605'}</li>
                        <li>{'\u2605'}</li>
                </ul>
            </div>)
              }
}
export default RaterComp;