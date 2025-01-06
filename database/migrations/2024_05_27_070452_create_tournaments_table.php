<?php
  
  use Illuminate\Database\Migrations\Migration;
  use Illuminate\Database\Schema\Blueprint;
  use Illuminate\Support\Facades\Schema;
  
  return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
      Schema::create('tournaments', function (Blueprint $table) {
        $table->uuid('id')->primary();
        $table->string('name');
        $table->string('place');
        $table->date('date');
        $table->foreignUuid('athlete_id')->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
        $table->string('medal');
        $table->integer('point');
        $table->timestamps();
      });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
      Schema::dropIfExists('tournaments');
    }
  };
