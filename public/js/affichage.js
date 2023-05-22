

const createNav1 = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `


      

       </div>
       <div class="fixed-navbar-default">
       <div class="logoSpace">
         <h1 class="admin" style="text-decoration: underline;">Admin Dashboard</h1>    
         
         
          <a class="btn-home-default" style="font-weight: bold;" href="/client"><span class="glyphicon glyphicon-plus" ></span> Add Client </a>
          <a class="btn-home-default"  style="font-weight: bold;" href="/adresse"><span class="glyphicon glyphicon-plus" ></span> Add Adresse</a>
          <a class="btn-home-default"style="font-weight: bold;" href="/commande"><span class="glyphicon glyphicon-plus" ></span> Add Commande</a>
          <a class="btn-home-default"  style="font-weight: bold;" href="/produit"><span class="glyphicon glyphicon-plus" ></span> Add Produit </a>
          <a class="btn-home-default" style="font-weight: bold;"  href="/categorie"><span class="glyphicon glyphicon-plus" ></span>Add Categorie</a>
     </div>
     
      
     
     
     
        
    `;
}

createNav1();


