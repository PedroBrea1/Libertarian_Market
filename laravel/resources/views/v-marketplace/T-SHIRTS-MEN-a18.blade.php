@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a18.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07G8RS8Z8/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07G8RS8Z8&linkCode=as2&tag=pedrobrea-22&linkId=a47e56f4cd1c16502903a40c5d2ffc01">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07G8RS8Z8" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Customize your look by choosing your own color and body style with Mountain. Each mymountain item is custom printed especially for you</h6>
              <h6>•     The Mountain uses only environmentally friendly inks and dyes to bring you a durable and comfortable top</h6>
              <h6>•     We are Pioneers of water based ink and have perfected it's use to create photo-realistic imagery that is not attainable by other screen printers</h6>
              <h6>•     A great green gift for any occasion, each shirt is made in an eco-friendly, sustainable way using 100 percent us cotton, water-based inks and organic dyes in a social responsible way</h6>
              <h6>•     The Mountain clothing feature unique, bold designs that feel as good as they look. Created, developed, dyed, and printed in marlborough, nh</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>