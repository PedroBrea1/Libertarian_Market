@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">Raindrops Embroidered Bib, Freedom, Liberty, Life, Love and Happiness, Red</div>

@include('v-marketplace.FASHION-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/fashion/FASHION-a19.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B00STTQUMG/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00STTQUMG&linkCode=as2&tag=pedrobrea-22&linkId=775cce9f91a306bd8ee3d14f9cffb6a2">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B00STTQUMG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Embroidered Freedom, Liberty, Life, Love and Happiness</h6>
              <h6>•     Trimmed with royal ric rac and red binding</h6>
              <h6>•     Unisex: for boys and girls</h6>
              <h6>•     Measures 9 inches across by 11 inches from top to bottom</h6>
              <h6>•     Machine Washable/Tumble Dry</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>