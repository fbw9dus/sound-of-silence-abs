// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/

import  {music}  from "./music"
// \/ All of your javascript should go here \/

console.log(music[0].kind)


for(var i=0;i<music.length;i++) {

    var time = music[i].trackTimeMillis
    var min = Math.floor((time/1000/60) << 0);
    var sec = Math.floor((time/1000) % 60);
        if(sec< 10){
            sec = "0" + sec      
        }


    let container = document.querySelector("#table")
    
    
    

    let content= `
    <tbody>
    <tr>
      <th scope="row">${1+i}</th>
      <td> <img src=${music[i].artworkUrl60} alt=""> ${music[i].trackName}</td>
      <td>${music[i].artistName}</td>
      <td>${music[i].collectionName}</td>
      <td>${min}:${sec}</td>
      <td>${music[i].trackPrice}$</td>
    </tr>

  </tbody>
    `
    container.insertAdjacentHTML("beforeend",content)
};
