<?php
  
  namespace Database\Factories;
  
  use App\Models\Evaluation;
  use Illuminate\Database\Eloquent\Factories\Factory;
  
  /**
   * @extends Factory<Evaluation>
   */
  class EvaluationFactory extends Factory
  {
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
      return [
        'value' => $this->faker->numberBetween(1, 5),
      ];
    }
  }
