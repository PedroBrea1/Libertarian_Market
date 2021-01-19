@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain Unisex-Adults Lady Liberty Hanukkah</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a22.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07FPXXN8H/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07FPXXN8H&linkCode=as2&tag=pedrobrea-22&linkId=2d5be0163ce9e2483a7c40293e37b73e">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07FPXXN8H" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Make a statement and express yourself with art wear, wearable art of photo-realistic images and sophisticated color depth; medium weight, exceptionally soft; durable, preshrunk cotton, relaxed fit</h6>
              <h6>•     The Mountain uses only environmentally friendly inks and dyes to bring you a durable and comfortable top</h6>
              <h6>•     We are Pioneers of water based ink and have perfected it's use to create photo-realistic imagery that is not attainable by other screen printers</h6>
              <h6>•     A great green gift for any occasion, each shirt is made in an eco-friendlyustainable way using 100 percent us cotton, water-based inks and organic dyes in a social responsible way</h6>
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