@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">7.62 Design Second Amendment 'Freedom' Premium Men's T-Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a19.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B01NH34BZL/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B01NH34BZL&linkCode=as2&tag=pedrobrea-22&linkId=f05171dc6231095cdc2adf1101aaa37e">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B01NH34BZL" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Proudly designed and printed in USA, BEWARE CHEAP COUNTERFEITS</h6>
              <h6>•     Screen printed front and back</h6>
              <h6>•     Mid weight, 100% pre-shrunk cotton, athletic fit tagless tee</h6>
              <h6>•     Sizes: SM, MD, LG, XL, & 2X.</h6>
              <h6>•     Unrivaled, all-original, copyrighted artwork</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>