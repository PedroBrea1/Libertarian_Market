@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Kerusso Hold Fast T-Shirt Freedom Flag City Green</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a12.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07T94MCGR/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07T94MCGR&linkCode=as2&tag=pedrobrea-22&linkId=b6fb6713d19f6fca45a5807f59d1c4ad">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07T94MCGR" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Classic fit</h6>
              <h6>•     100% preshrunk cotton</h6>
              <h6>•     Satisfaction Guaranteed</h6>
              <h6>•     Great Gift Idea</h6>
              <h6>•     All Kerusso products are shipped from USA</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>