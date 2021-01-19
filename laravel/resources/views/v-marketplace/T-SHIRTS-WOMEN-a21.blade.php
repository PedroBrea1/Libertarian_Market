@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">BODYZONE Women's Freedom Piece, Multi, One Size</div>

@include('v-marketplace.T-SHIRTS-WOMEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-women/T-SHIRT-WOMEN-a21.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B01GK3ZM2G/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B01GK3ZM2G&linkCode=as2&tag=pedrobrea-22&linkId=a6b1c203fe92a1dc5e8f14bcb7ca13c9">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B01GK3ZM2G" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     One size fits 90-160 lbs. 40-70kgs</h6>
              <h6>•     Perfect gift for your lover</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>