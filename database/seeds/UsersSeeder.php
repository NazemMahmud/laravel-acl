<?php

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\User;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $role_user = Role::where('name', 'User')->first();
        $role_admin = Role::where('name', 'Admin')->first();

        $user           = new User();
        $user->name     = 'Simple user';
        $user->email    = 'simpleuser@gmail.com';
        $user->password = bcrypt('user123');
        $user->save();
        $user->roles()->attach($role_user);

        $admin           = new User();
        $admin->name     = 'Admin user';
        $admin->email    = 'simpleadmin@gmail.com';
        $admin->password = bcrypt('admin123');
        $admin->save();
        $admin->roles()->attach($role_admin);
    }
}
