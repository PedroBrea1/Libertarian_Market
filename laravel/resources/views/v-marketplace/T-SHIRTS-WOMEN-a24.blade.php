@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Tipsy Elves Women's USA Hawaiian Shirt - Patriotic Button Up Shirt</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a24.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B084C27K98/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B084C27K98&linkCode=as2&tag=pedrobrea-22&linkId=f674f55da2ca87ac95936fba034ea60d">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B084C27K98" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Get 4th of July ready in a Tipsy Elves Hawaiin shirt!</h6>
              <h6>•     Fun, unique front-tie design</h6>
              <h6>•     Quality materials and construction for a comfy fit</h6>
              <h6>•     Ships FAST with Amazon Prime shipping!</h6>
              <h6>•     Click on our logo at the top of the page to check out our Tipsy Elves webstore for more products!</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>