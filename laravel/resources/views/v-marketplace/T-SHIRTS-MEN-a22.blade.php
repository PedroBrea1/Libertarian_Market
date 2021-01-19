@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Think Out Loud Apparel Think It's Not Illegal Yet Funny Freedom Sarcasm T-Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a22.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B00D8HBFHE/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00D8HBFHE&linkCode=as2&tag=pedrobrea-22&linkId=c866c4b33c5406dc7b7655a9217d5d95">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B00D8HBFHE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     100% combed Ring-Spun cotton 4.3 oz</h6>
              <h6>•     Extremely Soft Shirt</h6>
              <h6>•     Semi-Fitted cut</h6>
              <h6>•     Printed in USA</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>