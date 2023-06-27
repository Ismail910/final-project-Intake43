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
            $table->index('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('nationalID');
            $table->string('phone');
            $table->string('address');
            $table->string('country');
            $table->date('joinedDate');
            $table->date('endDate')->nullable();
            $table->string('profilePic')->nullable()->default('user.png');
            $table->enum('role', ['Admin', 'ProductManager', 'ProductOwner', 'Freelancer', 'Client', 'Employee'])->default('Client');
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
