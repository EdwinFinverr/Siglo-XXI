@extends('layouts.app');
@section('content')
<div class="container">
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="flex flex-col">
                        <a href="{{route('artists.create')}}" class="btn btn-success btn-block">Crear
                            artista</a>
                        <div class="">
                            <div class="container">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="bg-gray-50">
                                            <tr>
                                                <th scope="col">
                                                    Nombre
                                                </th>
                                                <th scope="col">
                                                    Apellidos
                                                </th>
                                               <th scope="col">
                                                    Disquera
                                                </th>
                                                <th scope="col" class="relative px-6 py-3">
                                                    <span class="sr-only">Editar</span>
                                                </th>
                                                <th scope="col" class="relative px-6 py-3">
                                                    <span class="sr-only">Eliminar</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody class="bg-white divide-y divide-gray-200">
                                            @forelse ($artists as $artist)
                                            <tr>
                                                <td class="">
                                                    <div class="flex items-center">
                                                        <div class="ml-4">
                                                            <div class="text-sm font-medium text-gray-900">
                                                                {{$artist->name}}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="">
                                                    <div class="text-sm text-gray-900">{{$artist->last_name}}</div>
                                                </td>
                                                <td class="">
                                                    <div class="text-sm text-gray-900">{{$artist->disquera}}</div>
                                                </td>
                                                <td class=" text-right text-sm font-medium">
                                                    <a href="{{route('artists.edit', with($artist))}}"
                                                        class="text-indigo-600 hover:text-indigo-900">Editar</a>
                                                </td>
                                                <td class=" text-right text-sm font-medium">
                                                    <form method="POST" action="{{ route('artists.destroy',  with('artist')) }}">
                                                        @csrf
                                                        @method('DELETE')
                                                        <button type="submit"
                                                        class="btn btn-danger">Eliminar</a>
                                                    </form>
                                                </td>
                                            </tr>
                                            @empty

                                            @endforelse


                                            <!-- More items... -->
                                        </tbody>
                                    </table>
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
