<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });
    }

    public function render($request, Throwable $e)
    {
        $response = parent::render($request, $e);

        if ($response->getStatusCode() === 419) {
            return redirect()->back()->withErrors($e->getMessage());
        }

        if (app()->isProduction() && in_array($response->getStatusCode(), [500, 503, 404, 403])) {
            $status = $response->getStatusCode();
            $error = trans("http-statuses.$status");

            return inertia('Error', compact('status', 'error'))
                ->toResponse($request)
                ->setStatusCode($response->getStatusCode());
        }

        return $response;
    }
}
