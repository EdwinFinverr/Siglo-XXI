@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                
                
                <div class="card-header">{{ __('Dashboard') }}</div>
                <div class="card col-sm-10 col-md-10 col-lg-6">
                    <div class="card-body">
                        <h5 class="card-title">Artistas</h5>
                        <p class="card-text">El total de artistas registrados es:  {{ $artists->count() }}</p>
                    </div>
                </div>
                <div class="card col-sm-10 col-md-10 col-lg-6">
                    <div class="card-body">
                        <h5 class="card-title">Categorias</h5>
                        <p class="card-text">El total de categorias registrados es: {{ $categories->count() }}</p>
                    </div>
                </div>
                <div class="card col-sm-10 col-md-10 col-lg-6">
                    <div class="card-body">
                        <h5 class="card-title">Albumes</h5>
                        <p class="card-text">El total de albumes registrados es: {{ $albums->count() }}</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
</div>
</div>
@endsection
