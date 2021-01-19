@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Ambesonne American Flag Tablecloth, Liberty Form Over States Flag Murky Lines Freedom Artwork, Rectangular Table Cover for Dining Room Kitchen Decor, 60" X 84", Night Blue</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a18.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B06VWMMLYW/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B06VWMMLYW&linkCode=as2&tag=pedrobrea-22&linkId=8881a17196e1abbde78b66ce3db11b38">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B06VWMMLYW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     60 INCHES WIDE x 84 INCHES LONG - Highly unique. Versatile. FUN.</h6>
              <h6>•     MACHINE WASHABLE - Cold cycle. Easy to clean. Durable enough for both indoor and outdoor use.</h6>
              <h6>•     MADE FROM - High quality 100% polyester woven silky satin fabric with hand-sewn finished edges</h6>
              <h6>•     CREATES - A wonderful and luxurious setting for your family and friends to enjoy together.</h6>
              <h6>•     PERFECT - For any occasion at home, party, hotel, restaurant, cafe, kitchen, dining room.</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>