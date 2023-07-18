<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CustomAuthController;

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

Route::get('index', [CustomAuthController::class, 'dashboard']); 
Route::get('login', [CustomAuthController::class, 'index'])->name('login');
Route::post('custom-login', [CustomAuthController::class, 'customLogin'])->name('login.custom'); 
Route::get('register', [CustomAuthController::class, 'registration'])->name('register-user');
Route::post('custom-registration', [CustomAuthController::class, 'customRegistration'])->name('register.custom'); 
Route::get('signout', [CustomAuthController::class, 'signOut'])->name('signout');


Route::get('/', function () {
return view('login');
})->name('login');   
Route::get('/home', function () {
return view('index');
})->name('pagee');
Route::get('/index', function () {
    return view('index');
})->name('pagee');
Route::get('/activities', function () {
    return view('activities');
})->name('activities');
Route::get('/add-invoice', function () {
return view('add-invoice');
})->name('add-invoice');
Route::get('/bank-settings', function () {
return view('bank-settings');
})->name('bank-settings');
Route::get('/edit-invoice', function () {
return view('edit-invoice');
})->name('edit-invoice');
Route::get('/invoice-grid', function () {
return view('invoice-grid');
})->name('invoice-grid');
Route::get('/invoices-cancelled', function () {
return view('invoices-cancelled');
})->name('invoices-cancelled');
Route::get('/invoices-draft', function () {
return view('invoices-draft');
})->name('invoices-draft');
Route::get('/invoices-overdue', function () {
return view('invoices-overdue');
})->name('invoices-overdue');
Route::get('/invoices-paid', function () {
return view('invoices-paid');
})->name('invoices-paid');
Route::get('/invoices-recurring', function () {
return view('invoices-recurring');
})->name('invoices-recurring');
Route::get('/invoices-settings', function () {
return view('invoices-settings');
})->name('invoices-settings');
Route::get('/invoices', function () {
return view('invoices');
})->name('invoices');
Route::get('/payment-settings', function () {
return view('payment-settings');
})->name('payment-settings');
Route::get('/seo-settings', function () {
return view('seo-settings');
})->name('seo-settings');
Route::get('/social-settings', function () {
return view('social-settings');
})->name('social-settings');
Route::get('/localization', function () {
return view('localization');
})->name('localization');
Route::get('/others-settings', function () {
return view('others-settings');
})->name('others-settings');
Route::get('/social-links', function () {
return view('social-links');
})->name('social-links');
Route::get('/view-invoice', function () {
return view('view-invoice');
})->name('view-invoice');
Route::get('/emailsettings', function () {
return view('emailsettings');
})->name('emailsettings');
Route::get('/tax-settings', function () {
return view('tax-settings');
})->name('tax-settings');
Route::get('/blank-page', function () {
    return view('blank-page');
})->name('blank-page');
Route::get('/companies', function () {
    return view('companies');
})->name('companies');
Route::get('/components', function () {
    return view('components');
})->name('components');
Route::get('/contacts', function () {
    return view('contacts');
})->name('contacts');
Route::get('/data-tables', function () {
    return view('data-tables');
})->name('data-tables');
Route::get('/deals-kanban-view', function () {
    return view('deals-kanban-view');
})->name('deals-kanban-view');
Route::get('/deals', function () {
    return view('deals');
})->name('deals');
Route::get('/email', function () {
    return view('email');
})->name('email');
Route::get('/error-404', function () {
    return view('error-404');
})->name('error-404');
Route::get('/error-500', function () {
    return view('error-500');
})->name('error-500');
Route::get('/faq', function () {
    return view('faq');
})->name('faq');
Route::get('/form-basic-inputs', function () {
    return view('form-basic-inputs');
})->name('form-basic-inputs');
Route::get('/form-horizontal', function () {
    return view('form-horizontal');
})->name('form-horizontal');
Route::get('/form-input-groups', function () {
    return view('form-input-groups');
})->name('form-input-groups');
Route::get('/form-mask', function () {
    return view('form-mask');
})->name('form-mask');
Route::get('/form-validation', function () {
    return view('form-validation');
})->name('form-validation');
Route::get('/form-vertical', function () {
    return view('form-vertical');
})->name('form-vertical');
Route::get('/leads-dashboard', function () {
    return view('leads-dashboard');
})->name('leads-dashboard');
Route::get('/leads-kanban-view', function () {
    return view('leads-kanban-view');
})->name('leads-kanban-view');
Route::get('/leads', function () {
    return view('leads');
})->name('leads');
Route::get('/login', function () {
    return view('login');
})->name('login');
Route::get('/mail-view', function () {
    return view('mail-view');
})->name('mail-view');
Route::get('/privacy-policy', function () {
    return view('privacy-policy');
})->name('privacy-policy');
Route::get('/profile', function () {
    return view('profile');
})->name('profile');
Route::get('/projects-dashboard', function () {
    return view('projects-dashboard');
})->name('projects-dashboard');
Route::get('/projects-kanban-view', function () {
    return view('projects-kanban-view');
})->name('projects-kanban-view');
Route::get('/projects', function () {
    return view('projects');
})->name('projects');
Route::get('/register', function () {
    return view('register');
})->name('register');
Route::get('/reports', function () {
    return view('reports');
})->name('reports');
Route::get('/settings', function () {
    return view('settings');
})->name('settings');
Route::get('/tables-basic', function () {
    return view('tables-basic');
})->name('tables-basic');
Route::get('/tasks', function () {
    return view('tasks');
})->name('tasks');
Route::get('/terms', function () {
    return view('terms');
})->name('terms');