<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\Manager;
use Illuminate\Contracts\Validation\Rule;

class ProductManagerValidationRule implements Rule
{
    public function passes($attribute, $value)
    {
        $manager = Manager::find($value);

        return $manager && $manager->role === 'ProductManager';
    }

    public function message()
    {
        return 'The selected manager must have a role of "Product Manager".';
    }
}
