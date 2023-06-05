<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('description')->nullable();
            $table->string('name');  // school 
            $table->date('startDate')->nullable();
            $table->date('endDate')->nullable();
            $table->string('status')->default('not_started');
            $table->string('release')->default('1.0');
            $table->decimal('budget', 10, 2)->default(0.0);
            // $table->foreignId('client_id')->nullable()->constrained('clients');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
