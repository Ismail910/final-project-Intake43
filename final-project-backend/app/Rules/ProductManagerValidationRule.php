<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use App\Models\managers;
use Illuminate\Contracts\Validation\Rule;
class ProductManagerValidationRule implements Rule
{
    public function passes($attribute, $value)
    {
        $manager = managers::find($value);

        return $manager && $manager->role === 'Product Manager';
    }

    public function message()
    {
        return 'The selected manager must have a role of "Product Manager".';
    }
}
