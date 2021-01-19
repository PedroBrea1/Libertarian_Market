@extends('v-marketplace.plantilla-marketplace')

@section('content')
  
     <div class="titulo">Search results</div>

    @if($search)
        <h6>
          <div class="alert alert-primary" role="alert">
             The results for {{ $search }} are:            
          </div>
        </h6>
    @endif   

<div class="product-area section">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="product-info">
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="man" role="tabpanel">
              <div class="tab-single">
                <div class="row">
                @foreach($cups as $row)
                        
                          <div class="col-xl-3 col-lg-4 col-md-4 col-12">
                            <div class="single-product">
                              <div class="product-img">
                                <a href="product-details.html">
                                  <img class="default-img" src="{{ $row->image }}" alt="#">
                                  <img class="hover-img" src="{{ $row->image }}" alt="#">
                                </a>
                                <div class="button-head">                              
                                  <div class="product-action-2">
                                    <a href="{{ $row->link }}">Read more     <i class=" ti-eye"></i></a>
                                  </div>
                                </div>
                              </div>
                              <div class="product-content">
                                <h3><a href="product-details.html">{{ $row->title }}</a></h3>
                                
                              </div>
                            </div>
                          </div>
                        
                @endforeach
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>




 
@endsection
