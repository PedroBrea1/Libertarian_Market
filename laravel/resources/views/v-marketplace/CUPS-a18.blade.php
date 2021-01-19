@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">3dRose Americana Vintage Statue of Liberty - Two Tone Black Mug, 11oz (Mug_110269_4)</div>

@include('v-marketplace.CUPS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/cups/CUP-a18.jpg">
            </div>
            <a  class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B013KSPAJ4/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B013KSPAJ4&linkCode=as2&tag=pedrobrea-22&linkId=c60effe32afdd37a75648f255ce919aa">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B013KSPAJ4" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     White ceramic mug with black interior and handle</h6>
              <h6>•     Image printed on both sides</h6>
              <h6>•     Available in 11oz only</h6>
              <h6>•     Microwave safe, hand-wash to preserve image</h6>
              <h6>•     High gloss finish</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>