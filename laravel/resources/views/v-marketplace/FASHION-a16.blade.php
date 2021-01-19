@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">3dRose fl_44016_1 Garden Flag, 12 by 18-Inch, Statue of Liberty-Stylized with Texture and Grunge Elements, Patriotic USA Symbol</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a16.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B00BR6IFFI/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00BR6IFFI&linkCode=as2&tag=pedrobrea-22&linkId=0bc1bb7f8f2e2f6ffea4719ef170f0a3">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B00BR6IFFI" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Overall dimension (in inches): 12 x 18; image size (in inches): 10 x 10</h6>
              <h6>•     Made of 100% single-ply semi-opaque polyester</h6>
              <h6>•     Image is printed on one side, with a lighter image visible on the backside</h6>
              <h6>•     Suitable for hanging from a flag pole (8mm in diameter), on a wall, ceiling, banisters or doors</h6>
              <h6>•     Hanging hardware/pole not included</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>