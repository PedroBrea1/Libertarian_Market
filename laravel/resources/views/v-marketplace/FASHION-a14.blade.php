@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain Eagles Freedom Flight Night Moon Adult T-Shirt</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a14.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B071FTYTCH/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B071FTYTCH&linkCode=as2&tag=pedrobrea-22&linkId=4b8d516f929d76ed1c4b8464bb09408c">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B071FTYTCH" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Officially Licensed The Mountain Product</h6>
              <h6>•     The Mountain Uses only Environmentally Friendly Water-Based Inks And Dyes.</h6>
              <h6>•     Superior Detailed Graphic Designs That Last</h6>
              <h6>•     America's Greenest T-shirt Company</h6>
              <h6>•     Listed In Men's Sizes</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>