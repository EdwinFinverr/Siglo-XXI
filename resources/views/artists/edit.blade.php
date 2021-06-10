@extends('layouts.app');
@section('content')
<div class="container">

    <div class="py-12">
        @if($errors->any())
    <div id="error-box">
        @foreach ($errors as $error)
        <div class="alert alert-danger">{{ $error }}</div>
        @endforeach
    </div>
    @endif
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="hidden sm:block" aria-hidden="true">
                        <div class="py-5">
                            <div class="border-t border-gray-200"></div>
                        </div>
                    </div>
                    <div class="mt-10 sm:mt-0">
                        <div class="md:grid md:grid-cols-3 md:gap-6">
                            <div class="md:col-span-1">
                                <div class="px-4 sm:px-0">
                                    <h3 class="text-lg font-medium leading-6 text-gray-900">Información del artista
                                    </h3>
                                    <p class="mt-1 text-sm text-gray-600">
                                        Introduce informacion del artista
                                    </p>
                                </div>
                            </div>
                            <div class="container">
                                <form action="{{route('artists.update',with($artist))}}" method="POST">
                                    @csrf
                                    @method('PUT')
                                    <div class="form-group row">
                                        <label for="name" class="col-sm-2 col-form-label">Nombre</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="name" id="name"
                                                value="{{ $artist->name }}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="last_name" class="col-sm-2 col-form-label">Apellidos</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="last_name" id="last_name"
                                                value="{{$artist->last_name }}">
                                        </div>
                                    </div>
                                    <div class="form-group row">
                                        <label for="disquera" class="col-sm-2 col-form-label">Disquera</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" name="disquera" id="disquera"
                                                value="{{ $artist->disquera }}">
                                        </div>
                                    </div>
                                     <button type="submit" class="btn btn-secondary">Actualizar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
