// import { Component } from '@angular/core';



// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'day_06';
//   titlebiding = [
//     {
//       id:1,
//       img:"data:image/jpeg;base64,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"
//     ,  name:"shiba",
//       title:"shibaaaaa"

//     },
//     {
//       id:2,
//       img:"data:image/jpeg;base64,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"
//    ,  name:"shiba1",
//       title:"shibaaa1"
//     },
//     {
//       id:3,
//       img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRisv-yQgXGrto6OxQxX62JyvyQGvRsQQ760g&usqp=CAU"
//       ,  name:"shiba2",
//       title:"shibaaa2"
      
//     }
//   ]
//   like(id:number){
//     console.log(`Click like ${id}`)
//   }
//   share(id:number){
//     console.log(`Share ${id}`)
//   }
// }
