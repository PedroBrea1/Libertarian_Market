@extends('v-marketplace.plantilla-marketplace')

@section('content')

        <div class="titulo-detalle-producto">School Backpack Black American Design with Statue of Liberty Flag Bookbag Casual Travel Bag for Teen Boys Girls</div>

@include('v-marketplace.BAGS-menu-ruta-product')
        
        <div class="cuadroproducto">
          <div class="detalleproducto1">
            <div class="detalleimagenproducto1">
              <img src="../images/marketplace/bags/BAG-a21.jpg">
            </div>
            <a class="enlaceamazon" target="_blank" href="https://www.amazon.com.au/gp/product/B083TSQFHW/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=B083TSQFHW&linkCode=as2&tag=pedrobrea-22&linkId=eaf72dfe35929545c86da1db99da4692">Buy in Amazon!</a><img src="//ir-au.amazon-adsystem.com/e/ir?t=pedrobrea-22&l=am2&o=36&a=B083TSQFHW" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
            <div class="detalleproducto1text">
              <h6>•     One Size</h6>
              <h6>•     Material:High quality polyester/cotton,lightweight and easy to clean.</h6>
              <h6>•     Plenty capacity design,most of your daily or school necessities can be loaded.Reasonable compartments,makes your goods lay in the book bag systematically.</h6>
              <h6>•     Vivid 3D printing design,eye-catching and impressive;adjustable shoulder strap,durable and comfortable to carry,smooth double zippers.</h6>
              <h6>•     Fashion personalized backpack suitable for children bag to school,outdoor travel,etc.Nice gift for your kids,granddaughters, friends,classmates and others.</h6>
            </div>
              
                       
          </div>
          
        </div>

@endsection

<script type="text/javascript">
          $('.enlaceamazon').click(function(){
            $(this).css( "color", "white" );
          });
</script>