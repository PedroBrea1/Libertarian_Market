@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">'Statue of Liberty' Canvas Wash Bag / Makeup Case (CS00015530)</div>

@include('v-marketplace.BAGS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/bags/BAG-a33.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07K5D911N/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07K5D911N&linkCode=as2&tag=pedrobrea-22&linkId=91e78760b4d6ad6a9489b5d81b418ee4">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07K5D911N" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
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