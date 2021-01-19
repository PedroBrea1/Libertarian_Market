@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">11oz (320ml) 'Statue of Liberty' Ceramic Mug / Cup (MG00000317)</div>

@include('v-marketplace.CUPS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/cups/CUP-a12.jpg">
            </div>
            <a  class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07JDPMWHR/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07JDPMWHR&linkCode=as2&tag=pedrobrea-22&linkId=42d02aec4d8ae37cc789a82210220922">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07JDPMWHR" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     11oz (320ml) mug</h6>
              <h6>•     Ideal for a unique gift / kitchen accessory</h6>
              <h6>•     Features a design from one of our talented designers</h6>
              <h6>•     High quality print</h6>
              <h6>•     Microwave and dishwasher safe</h6>
            </div>
              
                       
          </div>
          
        </div>

      <!-- end section -->

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>