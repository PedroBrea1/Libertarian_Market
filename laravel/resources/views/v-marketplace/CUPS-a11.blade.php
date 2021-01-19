@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">11oz (320ml) 'Statue of Liberty' Ceramic Mug / Cup (MG00004180)</div>
        
@include('v-marketplace.CUPS-menu-ruta-product')

        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/cups/CUP-a11.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07NYK5XM4/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07NYK5XM4&linkCode=as2&tag=pedrobrea-22&linkId=1ee031fe35943f4a821e935bc99e11c6">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07NYK5XM4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
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