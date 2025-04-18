<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Income>
 */
class IncomeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = [
            "works", "entertain", "rent", "selling", "gifts", "bonus"
        ];
        $payments = [
            "cash", "debit", "credit", "e-wallet", "coin", "gold"
        ];
        return [
            "name" => $this->faker->words(3, true),
            "category" => $this->faker->randomElement($categories),
            "payment" => $this->faker->randomElement($payments),
            "amount" => $this->faker->numberBetween(1000, 100000),
            "description" => $this->faker->words(20, true),
            "transaction_date" => $this->faker->dateTimeThisYear()
        ];
    }
}
