// class EntryDrawData {
//   constructor() {}

//   drawListMenu(desObjects, callBackFun) {
//     const lstContainerElement = document.querySelector('main article#listDestinationsMenu');
//     console.log(lstContainerElement);
//     const theImg = desObjects[0].image;
//     for (let desObj of desObjects) {
//       const newEle = document.createElement('div');
//       newEle.innerHTML = `<div id="distenationTem-${desObj.id}" class="destination-card">
//                                    <img src =${desObj.image}>
//                                    <h2>${desObj.name}</h2>
//                                 </div>
//                                 `;
//       newEle.addEventListener('click', () => {
//         callBackFun(desObj.id);
//       });
//       lstContainerElement.appendChild(newEle);
//     }
//   }
// }

// const entryDrawData = new EntryDrawData();
// export default entryDrawData;
