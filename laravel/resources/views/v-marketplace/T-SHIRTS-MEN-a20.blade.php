@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Fantastic Tees Freedom Rights to Bear Arms Second Amendment Men's T Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a20.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B071LBQ7D1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B071LBQ7D1&linkCode=as2&tag=pedrobrea-22&linkId=4f1627bff49bbdb7a02fed4919336cd0">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B071LBQ7D1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     100% Cotton. Silk Screen.</h6>
              <h6>•     Fantastic Tees is the only authorized seller of this product. BUYER BEWARE: All other offers are cheap counterfeit versions.</h6>
              <h6>•     2nd Amendment Shirt. Rights to Bear Arms.</h6>
              <h6>•     Proudly printed and ship from our Facility in the USA.</h6>
              <h6>•     Copyrighted design by Fantastic Tees. Purchase only from Fantastic Tees to ensure you are getting a quality product.</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>