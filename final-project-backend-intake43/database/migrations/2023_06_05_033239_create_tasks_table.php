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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->text('description')->nullable();
            $table->string('name');  // design dashboard
            $table->string('type'); //ui
            $table->date('startDate')->nullable();
            $table->date('endDate')->nullable();
            $table->string('status')->default('not_started');
            $table->decimal('priority',10,2)->default(1);
            $table->string('release')->default('1.0');
            $table->foreignId('product_manager')->nullable()->constrained('users');
            $table->foreignId('employee')->nullable()->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
