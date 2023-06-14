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
            $table->string('project_title');
            $table->string('project_type');
            $table->string('project_description');
            $table->date('project_start');
            $table->date('project_end');
            $table->enum('project_status',['notStarted','inProgress','complete'])->default('notStarted');
            $table->foreignId('ProductOwner_id')->constrained('managers')->cascadeOnDelete();
            $table->foreignId('ProductManager_id')->constrained('managers')->cascadeOnDelete();
            $table->foreignId('client_id')->constrained()->cascadeOnDelete();
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
