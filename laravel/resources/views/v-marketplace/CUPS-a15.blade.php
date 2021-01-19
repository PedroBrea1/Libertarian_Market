@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Tervis 1133024 Liberty University Emblem Tumbler, Set of 4, 16 oz, Clear</div>
@include('v-marketplace.CUPS-menu-ruta-product')


        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/cups/CUP-a15.jpg">
            </div>
            <a  class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B016YA5P6S/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B016YA5P6S&linkCode=as2&tag=pedrobrea-22&linkId=a9ca4736de254678369bfb46c335cc9a">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B016YA5P6S" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Keeps hot drinks hot and cold drinks cold</h6>
              <h6>•     Co-polyester BPA and Melamine free construction</h6>
              <h6>•     Microwave, freezer & dishwasher safe</h6>
              <h6>•     Unconditional Lifetime Guarantee</h6>
              <h6>•     Made in America</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>