@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Tactical Pro Supply American USA Freedom Patriotic Women's T-Shirt</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a13.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07H7W1LH1/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07H7W1LH1&linkCode=as2&tag=pedrobrea-22&linkId=c56a6c255d90be5ffd187386d5b3043a">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07H7W1LH1" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Premium Quality Heavyweight Shirt</h6>
              <h6>•     Professionally Printed</h6>
              <h6>•     Fits True to Size</h6>
              <h6>•     Machine Wash Cold</h6>
              <h6>•     100% Money Back Guarantee</h6>
            </div>
          </div>
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>