import{InMemoryDbService} from 'angular-in-memory-web-api' ;
import { ProduitElement } from 'src/app/models/produits.model';

  
export class ApiProduits implements InMemoryDbService{  
    createDb(): Record<string,ProduitElement[]>{
 const produits:ProduitElement[]=[
      {id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {id: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},

 ];
 return {produits}
    }
    // createDb(){  
  
    //     let BookDetails=[  
    //         {id:100, name:'chaman gautam', Author:'C#corner',category:'Software devcelopment'},  
    //         {id:101, name:'lucky gautam', Author:'Tpoint',category:'test'},  
    //         {id:102, name:'Lakshya gautam', Author:'Google',category:' devcelopment'},  
    //         {id:103, name:'ravi gautam', Author:'C#corner',category:'Software devcelopment'}  
             
    //     ];  
    //     return {  
    //         books:BookDetails  
    //     };  
    // }  
  
}  