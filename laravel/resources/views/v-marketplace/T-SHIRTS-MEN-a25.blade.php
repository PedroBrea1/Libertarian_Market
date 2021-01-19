@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Statue of Liberty I'm With Her Short Sleeve T-Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a25.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B01MRBR38J/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B01MRBR38J&linkCode=as2&tag=pedrobrea-22&linkId=60855d2512a6654c78fc874cdae42588">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B01MRBR38J" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Premium shirt is printed with pride in the USA</h6>
              <h6>•     Semi-fitted cut for a modern fit</h6>
              <h6>•     Printed with lightweight, fade resistant inks</h6>
              <h6>•     Super-soft, ring-spun cotton looks and feels great</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>