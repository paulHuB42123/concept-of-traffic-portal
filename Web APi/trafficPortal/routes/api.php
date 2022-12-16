<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\loginController;
use App\Http\Controllers\aidashboard;
use App\Http\Controllers\tpdashboard;
use App\Http\Controllers\dutyEmployeeControler;



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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/login', [loginController::class,'login']);
Route::post('/logout',[loginController::class,'logout']);
Route::post('/registetion',[loginController::class,'registetion']);
Route::get('/employee',[tpdashboard::class,'em_list']);

Route::get('/ai',[aidashboard::class, 'index']);
Route::get('/ai/demploye/{id}',[aidashboard::class, 'dutyEmployeProfile']);
Route::get('/approveforce',[aidashboard::class, 'Force']);
Route::get('/approveleave',[aidashboard::class, 'Leave']);

Route::get('/de',[dutyEmployeeControler::class, 'loadDutyScheduleView']);


