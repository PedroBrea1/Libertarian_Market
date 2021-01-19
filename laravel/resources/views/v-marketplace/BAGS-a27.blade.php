@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">America Liberty Statue and New York City Pattern Briefcase Laptop Bag Messenger Shoulder Work Bag Crossbody Handbag for Business Travelling</div>

@include('v-marketplace.BAGS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/bags/BAG-a27.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07KM1BCWM/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07KM1BCWM&linkCode=as2&tag=pedrobrea-22&linkId=a8b7518c10750af578f022eb70c3f9ad">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07KM1BCWM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Material: light-weight and water resistant neoprene.</h6>
              <h6>•     Printing: two-side printing, using the advanced Printing technology, vibrant color.</h6>
              <h6>•     Includes: double zipper, thick padding edge for protection, adjustable hidden shoulder strap.</h6>
              <h6>•     Fits: designed to fit any laptop, Macbook Pro Air, Ultrabook, Notebook with Display size.</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>