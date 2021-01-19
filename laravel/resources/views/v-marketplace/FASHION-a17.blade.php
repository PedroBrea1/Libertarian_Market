@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Lunarable Barbed Wire Shower Curtain, Be Free! Flying Butterflies Liberty Freedom Broken Fences Artwork, Cloth Fabric Bathroom Decor Set with Hooks, 75 Inches Long, Almond Green Dark Brown</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a17.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07HWW4H2D/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07HWW4H2D&linkCode=as2&tag=pedrobrea-22&linkId=6eff4977f3e96c42d92c92eccc34c391">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07HWW4H2D" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     75 INCHES LONG x 69 INCHES WIDE - High quality Turkish fabric, No liner needed, Includes free hooks</h6>
              <h6>•     MACHINE WASHABLE - Vibrant colors, Clear image, No fading, No dyes harming health of your family</h6>
              <h6>•     WATERPROOF - Mold, mildew and soap resistant, Non vinyl, Non PEVA, Environmentally friendly</h6>
              <h6>•     ADDS GREAT PERSPECTIVE - Bold graphics printed with state of the art digital printing technology</h6>
              <h6>•     DESIGNER ARTWORK - Not a common usual shower curtain you can find anywhere. Unique. Genuine. FUN.</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>