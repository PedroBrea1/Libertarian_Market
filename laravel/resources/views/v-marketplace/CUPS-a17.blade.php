@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">4 All Times Statue of Liberty Coffee Mug (11 oz)</div>

@include('v-marketplace.CUPS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/cups/CUP-a17.jpg">
            </div>
            <a  class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07CH2L354/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07CH2L354&linkCode=as2&tag=pedrobrea-22&linkId=6582273ba29d05e7de65939980ba12e2">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07CH2L354" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Microwave safe. Dishwasher safe. Design printed on both sides.</h6>
              <h6>•     The Mug That Has It All - Whether you're looking for the perfect gift, premium quality drinkware, stunning designs or just something to enjoy your favorite beverage in, 4 All Times mugs have it all.</h6>
              <h6>•     Your Deserve The Best - Made from premium-quality, durable ceramic, 4 All Times mugs are built to last. All mugs are carefully bubble-wrapped for maximum protection during shipping, and will be there with you for years to come.</h6>
              <h6>•     Premium Designs - Hand applied and hand inspected in the USA, your designs are guaranteed to last. You will never find a 4 All Times mug with a cracked or faded design. Looking just as good as the day you got it, everyone will love and want to talk about your new mug.
</h6>
              <h6>•     100% SATISFACTION GUARANTEED We believe so strongly that you will love our premium mugs that we offer a 100% money back guarantee with every purchase. If for any reason you aren't satisfied with our products, we will refund your entire purchase with no questions asked.</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>