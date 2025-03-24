<?php

namespace App\Http\Controllers\User;

use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\User\LoginRequest;
use App\Http\Requests\User\RegisterRequest;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function handleProviderCallback($provider)
    {
        $user = Socialite::driver($provider)->user();

        $user = User::where('email', $user->email)->first();

        if (!$user) {
            $user = User::create([
                'name' => $user->name,
                'email' => $user->email,
                'password' => Hash::make(Str::random(10)),
                'social_id' => $user->id,
                'social_type' => $provider,
            ]);
        }

        $token = $user->createToken($user->email . '-AuthToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
        ]);
    }

    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'side' => $request->side,
            'sector' => $request->sector,
            'position' => $request->position,
            'gender' => $request->gender,
            'type' => $request->type,
        ]);

        if ($request->hasFile('image')) {
            $user->addMediaFromRequest('image')->toMediaCollection();
        }

        $token = $user->createToken($user->email . '-AuthToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
        ]);
    }

    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid Credentials'
            ], 401);
        }

        $token = $user->createToken($user->email . '-AuthToken')->plainTextToken;

        return response()->json([
            'access_token' => $token,
        ]);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();

        return response()->json([
            "message" => "logged out"
        ]);
    }

    public function auth_check() {
        return response()->json([
            'status' => auth()->guard('sanctum')->check(),
        ]);
    }
}
