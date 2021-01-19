@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">'Statue of Liberty & New York' Canvas Wash Bag / Makeup Case (CS00006190)</div>

@include('v-marketplace.BAGS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/bags/BAG-a37.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07QN8MT48/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07QN8MT48&linkCode=as2&tag=pedrobrea-22&linkId=25407b94c789085c0799a9ddcc2e3bd8">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07QN8MT48" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Dimensions: 21cm x 11cm x 11cm</h6>
              <h6>•     100% brushed cotton canvas</h6>
              <h6>•     Zip closure</h6>
              <h6>•     Strong & durable</h6>
              <h6>•     Printed on one side</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>