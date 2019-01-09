// //  import React from 'react';
// //     import createReactClass from 'create-react-class';
// //     var AppComp = createReactClass({
// //         render: function() {
// //                             return React.createElement("h1", {}, "Hello World!!!");
// //                            }
// //    });
// //     export default  AppComp;

// import React from 'react';
// import Rater from './Rater.jsx';
// class AppComp extends React.Component {
//     constructor(){
//         super();
//       }
//               render(){
//             //     var names=['Ember', 'BackboneJS', 'ReactJS', 'Jasmine'];
//             //    return <div>Hello, { names } </div>


//             return(
//             // <div>
//             //     <img src="imgs/laptop.png"></img>
//             //     <h3 className="name">Gamia Laptop</h3>
//             //     <h4 className="price">Rs. 33000</h4>
//             //     <p className="description">An excellent choice for an awesome gaming</p>
//             //     <Rater/>
//             // </div>

//             <div>
//             <div className={"thumbnail"}>
//               <img src='imgs/Laptop.jpg' class="img img-rounded img-responsive"/>
//               <div class="caption" style="text-align:center">
//               <a href="/productDetails"><h3>Gamia Laptop</h3></a>
//                   <h4><span style="color:red">Rs. 33000</span></h4>
//                   <p>An excellent choice for an awesome gaming experience.</p>}
//                   <Rater />
//                   <span style="fontSize:9px">3/5</span>
//               </div>
//             </div>
//             </div>
//             )
           
//               }
// }
// export default AppComp;


import React from 'react';
  import Rater from './Rater.jsx';
  
  class Product extends React.Component{
  constructor(){
    super();
  }
  render(){
   var styleDiv = {
        color: "red"
   }
    return(
      <div>
        <div className={"thumbnail"}>
          <img src='imgs/laptop.png' className="img img-rounded img-responsive"/>
          <div className="caption" >
            <a href='/productDetails'><h3>Gamia Laptop</h3></a>
              <h4><span style={styleDiv}>Rs. 33000</span></h4>
              <p>An excellent choice for an awesome gaming experience.</p>}
              <Rater />
              <span >3/5</span>
          </div>
        </div>
      </div>
    )
  }
}
export default Product;