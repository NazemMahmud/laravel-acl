<?php

use Illuminate\Database\Seeder;
use App\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role           = new Role();
        $role->name     = 'User';
        $role->description  = 'Normal User';
        $role->save();

        $role           = new Role();
        $role->name     = 'Vendor';
        $role->description  = 'Normal Vendor';
        $role->save();

        $role           = new Role();
        $role->name     = 'Admin';
        $role->description  = 'Normal Admin';
        $role->save();
    }
}
