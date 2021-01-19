@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">MASSIKOA Landmark Architecture Freedom Statue of Liberty Double Print Tote Shoulder bag Womens Handbag PU Leather Purse</div>

@include('v-marketplace.BAGS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/bags/BAG-a34.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07B9WF7MN/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07B9WF7MN&linkCode=as2&tag=pedrobrea-22&linkId=2ca62b195ceb9db45c45dac8796d2074">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07B9WF7MN" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Approximate dimensions: 15.4"x11"x3.54"(L*H*W)</h6>
              <h6>•     High-grade PU leather material, high-grade polyester cloth fabric</h6>
              <h6>•     Single zipper closed design,double-sided printing</h6>
              <h6>•     A main capacity bag, interior have two storage pockets and a zipper. pocket, enough to put in ipad,wallet, cosmetic case, sunglasses and so on</h6>
              <h6>•     Occasion:Dating,Working Place,Shopping,Traveling,Business,Meeting etc</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>