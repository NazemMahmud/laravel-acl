<?php

namespace App\Http\Middleware;

use Closure;

class CheckIsAdminOrSelf
{
    /**
     * To check this is an admin and the user him/herself
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $requestedUserId = $request->route()->parameter('id');
        if(
            Auth::user()->role === 2 ||
            Auth::user()->id == $requestedUserId
        ) {
            return $next($request);
        }
        else {
            return response()->json(['error' => 'Unauthorized'], 403);
        }
    }
}
