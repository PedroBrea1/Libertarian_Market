@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain Reflections of Freedom T-Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a14.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B01AZC5552/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B01AZC5552&linkCode=as2&tag=pedrobrea-22&linkId=2c980d32191553b5c6f5e482a884e9ce">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B01AZC5552" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Made of 100% Pre-shrunk Heavy Duty Cotton</h6>
              <h6>•     Officially licensed, authentic apparel from The Mountain</h6>
              <h6>•     Professionally designed and Fabricated, made to last</h6>
              <h6>•     Machine Wash Cold Tumble Dry Medium Do not Bleach</h6>
              <h6>•     Made in USA Assembled in Mexico/Honduras</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>