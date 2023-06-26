<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Manager;
use App\Models\User;
use Illuminate\Contracts\Validation\Rule;

class ProductManagerValidationRule implements Rule
{
    public function passes($attribute, $value)
    {
        $manager = Manager::find($value);
        $user = User::find($manager->user->id);
        return $user && $user->role === 'ProductManager';
    }

    public function message()
    {
        return 'The selected manager must have a role of "Product Manager".';
    }
}
