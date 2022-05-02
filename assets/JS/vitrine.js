$.getJSON('produtos.json', function(data) {
   $produtos = data.products;
   $vitrineMain = $('.vitrine-produtos')
   $.each($produtos, function( index ) {
      console.log($produtos[index])
      $vitrineMain.append(" <div class='produto'> <span>40% off</span> <button class='favoritar'></button> <img src='assets/images/produto-1.png' alt=" + $produtos[index].productName +"> <p>" + $produtos[index].productName +"</p><span class='old-price'>De R$ 96,69</span><span class='new-price'>R$" + $produtos[index].price +"</span> <span class='discount-price'>R$ 85,69</span> <span class='aviso'>Para assinantes</span> <button>Adicionar</button> </div>")
    })

    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
         dots:true,
         items: 4,
         
      });
    });



    
});