<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('layouts.app');
});

// Route to handle page reload in Vue except for api routes
Route::get('/{any?}', function (){
    return view('layouts.app');
})->where('any', '^(?!api\/)[\/\w\.-]*');
//Route::get('/{any}', function (){
//    return view('layouts.app');
//})->where('any', '.*');

//Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/role', 'HomeController@roles')->name('roles');

Route::group(['middleware' => 'role:admin'], function() {
    Route::get('/admin', 'AdminController@index')->name('admin');

});