@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Black Ink Men's USAF - GUARDIANS OF FREEDOM</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a21.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B013HE3VEM/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B013HE3VEM&linkCode=as2&tag=pedrobrea-22&linkId=b07728b5cc850c804599858acc4391f5">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B013HE3VEM" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Front Left Chest Print</h6>
              <h6>•     Large Black Print</h6>
              <h6>•     100% Cotton</h6>
              <h6>•     Proudly Printed in the U.S.A</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>