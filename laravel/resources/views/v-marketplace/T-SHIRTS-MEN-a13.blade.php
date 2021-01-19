@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">FEA Men's Sublime 40 Oz to Freedom Tie Dye T-Shirt</div>

@include('v-marketplace.T-SHIRTS-MEN-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/t-shirts-men/T-SHIRT-MEN-a13.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B00YGTBVWW/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B00YGTBVWW&linkCode=as2&tag=pedrobrea-22&linkId=8d8109ad63ba0a154ee7d002adf9fc29">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B00YGTBVWW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     Officially licensed Sublime apparel</h6>
              <h6>•     Short sleeve, adult t-shirt</h6>
              <h6>•     Crew neckline</h6>
            </div>
              
                       
          </div>
          
        </div>

            
@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>