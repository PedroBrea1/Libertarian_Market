@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">The Mountain Men's Hero Collection Defending Liberty</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a12.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B01IC18COE/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B01IC18COE&linkCode=as2&tag=pedrobrea-22&linkId=b2b3270d90dbbc0313cddafa9e97cf27">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B01IC18COE" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
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