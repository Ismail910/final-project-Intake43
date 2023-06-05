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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('salary', 10, 2)->default(0.0); //50 + 10 +30
            $table->string('address');
            $table->string('postion');
            $table->string('photo')->nullable()->default('book.png');
            $table->string('imageID')->nullable()->default('book.png');
            $table->integer('score')->default(0);
            $table->string('role')->default('trainee');
            $table->json('skills')->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('confirmPassword');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
