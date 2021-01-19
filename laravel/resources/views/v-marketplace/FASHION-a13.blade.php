@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain Eagle Freedom-L</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a13.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B01BTLI9JW/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B01BTLI9JW&linkCode=as2&tag=pedrobrea-22&linkId=19a8a6cfa86d4773c715096faca0b24c">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B01BTLI9JW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     100% preshrunk cotton</h6>
              <h6>•     We are pioneers of water based ink and have perfected it's use to create photo-realistic imagery that is Not attainable by other screen printers</h6>
              <h6>•     Created, developed, dyed, and printed in Marlborough, NH</h6>
              <h6>•     The Mountain uses only environmentally friendly water-based inks and dyes</h6>
              <h6>•     Oeko-tex 100 Certified which guarantees our shirts are free of chemicals harmful to your body</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>