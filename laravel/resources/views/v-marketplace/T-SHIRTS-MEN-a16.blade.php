@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Tactical Pro Supply Beer Bacon Guns Freedom T Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a16.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07CYSTKLS/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07CYSTKLS&linkCode=as2&tag=pedrobrea-22&linkId=08a21bad92a37a5bb774999676be28e2">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07CYSTKLS" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Premium Quality Heavyweight Shirt</h6>
              <h6>•     Professionally Printed</h6>
              <h6>•     Fits True to Size</h6>
              <h6>•     Machine Wash Cold</h6>
              <h6>•     100% Money Back Guarantee</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>