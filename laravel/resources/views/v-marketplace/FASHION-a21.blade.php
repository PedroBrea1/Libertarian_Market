@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Gorgeous goods Statue of Liberty Retro Washed Dyed Cotton Adjustable Baseball Cowboy Cap</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a21.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07N4Q6ZJB/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07N4Q6ZJB&linkCode=as2&tag=pedrobrea-22&linkId=8e41ac3cad14a3602fb67c46360c40c9">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07N4Q6ZJB" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     HIGH QUALITY: 100% cotton lightweight, breathable, and soft to the touch. A traditional look with an unstructured, low profile six-panel build with a curved brim.</h6>
              <h6>•     The adjustable strap is stretchy and has enough length. It can fit your head girth very well. You will not fill too tight or too loose. It can dry up very fast.</h6>
              <h6>•     Ideal for runners, golfers, tennis players, and any indoor or outdoor activities</h6>
              <h6>•     Height Fits Most.adjustable。Lightweight / Durable / Smooth, Comfortable All-day Wear.</h6>
              <h6>•     Portable,breathable,Ideal For Running, Golf, Tennis, Fishing, Hiking, Camping, Sailing, Daily Walks, Beach And More Outdoor Activities.</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>