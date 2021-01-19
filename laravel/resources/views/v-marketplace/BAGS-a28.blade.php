@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">COOSUN Lady Liberty Round Crossbody Bag Shoulder Sling Bag Handbag Purse Satchel Shoulder Bag for Kids Women</div>

@include('v-marketplace.BAGS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/bags/BAG-a28.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07GF7S6BF/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07GF7S6BF&linkCode=as2&tag=pedrobrea-22&linkId=9ff332cfc5fc079bc851d85bd188d38c">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07GF7S6BF" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Material: Canvas and PU leather ; Soft, durable and lightweight</h6>
              <h6>•     *Width: 7 Inch *Height: 7 Inch *Depth: 1.8 Inch *Strap Drop: 22.5 Inch(Adjustable)</h6>
              <h6>•     Double zipper closure. One main compartment and one open slot pocket. It can hold cell phone, keys, makeups, etc.</h6>
              <h6>•     Inner has enough storage for women to carry cell phone lipstick cash, credit cards, perfume, jewelry and other small items for. Also suitable for children to carry small items such as small sweat towels.</h6>
              <h6>•     A lovely bag full of personality, so fresh and unique.Perfect for shopping, travel, outdoor,hiking,school and other daily use.</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>