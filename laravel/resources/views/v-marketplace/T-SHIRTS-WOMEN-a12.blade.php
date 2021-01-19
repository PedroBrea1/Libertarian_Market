@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Under Armour Women's Freedom Banner Short Sleeve T-Shirt</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a12.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B07PT8F45H/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B07PT8F45H&linkCode=as2&tag=pedrobrea-22&linkId=61c3fc2326e538562c52fbd0205a32b0">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B07PT8F45H" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Super soft, cotton blend fabric provides all day comfort</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>