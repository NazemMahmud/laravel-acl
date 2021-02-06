<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

/**
 * Laravel sanctum cookie based auth: auth:api does not work/need ?
 */
Route::get('posts', 'PostsController@index');

Route::group(['middleware' => ['auth:api']], function() {
//    Route::get('posts', 'PostsController@index');
    Route::group(['prefix' => 'post'], function () {
        Route::post('add', 'PostsController@add');
        Route::get('edit/{id}', 'PostsController@edit');
        Route::post('update/{id}', 'PostsController@update');
        Route::delete('delete/{id}', 'PostsController@delete');
    });

});

