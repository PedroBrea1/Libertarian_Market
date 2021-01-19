@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Ultrabasic Women's Low-Cut Round Neck T-Shirt Liberty</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a23.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07SKJF5NH/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07SKJF5NH&linkCode=as2&tag=pedrobrea-22&linkId=14ea3d508c4348a6368a2093d7792a29">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07SKJF5NH" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     100% Ringspun cotton</h6>
              <h6>•     Machine washable</h6>
              <h6>•     Professionally printed super soft tees. Our t-shirts are printed using ecological solvent-free water based ink containing no dangerous materials.</h6>
              <h6>•     Soft, breathable fabric provides exceptional comfort and durability. Perfect Christmas gift idea, birthday present or just to treat yourself to a great graphic tee.</h6>
              <h6>•     100% Satisfaction Guarantee. Available in XS - 5XL for selected colors. Our tees are slim fit so order a larger shirt if you're between sizes. If you are unsatisfied with the fit, we will provide an immediate exchange.</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>