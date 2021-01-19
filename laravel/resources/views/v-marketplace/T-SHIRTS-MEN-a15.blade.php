@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain Men's Freedom Eagle Adult T-Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a15.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B00PHPYOTQ/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00PHPYOTQ&linkCode=as2&tag=pedrobrea-22&linkId=b50925624bdd436788b17fb5055426b7">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B00PHPYOTQ" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Preshrunk</h6>
              <h6>•     The Mountain uses only environmentally friendly inks and dyes to bring you a durable and comfortable top</h6>
              <h6>•     Created, developed, dyed, and printed in Marlborough, NH</h6>
              <h6>•     100% Oekotex Certified which guarantees shirts are free of chemicals harmful to your body</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>