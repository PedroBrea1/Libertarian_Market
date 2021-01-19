@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Flag & Anthem x Desert Son by Dierks Bentley - Women's Freedom Riser Short Sleeve T-Shirt - Slim-Fit Basic T-Shirt</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a15.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07CZQGS75/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07CZQGS75&linkCode=as2&tag=pedrobrea-22&linkId=370192079f96cdb609e4a8971f3ba80f">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07CZQGS75" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     SUPER SOFT: We have made this short sleeve women's t-shirt from the softest cotton, for true comfort.</h6>
              <h6>•     SLIM FIT: Our shirts are designed for the perfect women's fit.</h6>
              <h6>•     DESERT SON: Designed with Dierks Bentley, this vintage wash ladies' tee has a Riser Bird logo and vintage look.</h6>
              <h6>•     FLAG & ANTHEM: Our men's and women's clothing collections offer premium quality goods at affordable prices</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>