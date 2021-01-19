@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Bath Towel,80X130Cm Tread On Me Liberty Or Death Bath Towels Super Absorbent Beach Bathroom Towels for Gym Beach SWM Spa</div>

@include('v-marketplace.TOWELS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/towels/TOWEL-a14.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B085DQK45Y/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B085DQK45Y&linkCode=as2&tag=pedrobrea-22&linkId=33097b74083b05d459c252b5e61404ce">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B085DQK45Y" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     SOFT TOUCH: Plush Velour Top and terry cloth bottom offers maximum softness and absorbency. Good for baby, boys, girls, women, men, teen, adult, young and old</h6>
              <h6>•     QUALITY: Made from 100% pure Turkish Cotton with the best quality and strong round circle loop terry cloth fabric and extra strength edges.</h6>
              <h6>•     LARGE SIZE & MULTI PURPOSE: 51" X 31" oversized to used as a body wrap or beach blanket. Perfect as a Beach Towel, Beach Blanket, Pool Towel, Spa Towel, Sauna Towel, Bath Towel or Bath Sheet.</h6>
              <h6>•     EASY CARE: Machine washable and long-lasting.</h6>
              <h6>•     DELIVERY:It will usually take 7-14 days to finish the delivery.</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>