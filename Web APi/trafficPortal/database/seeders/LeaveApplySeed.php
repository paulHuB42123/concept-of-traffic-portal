<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LeaveApplySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('leave_applies')->insert([
            'employee_id'=>23442,
            'employee_name'=>'Samin',
            'leave'=>'19-03-2022',
            'return'=>'23-03-2022'
        ]);
        DB::table('leave_applies')->insert([
            'employee_id'=>72523,
            'employee_name'=>'Ifti',
            'leave'=>'12-03-2022',
            'return'=>'15-03-2022'
        ]);
        DB::table('leave_applies')->insert([
            'employee_id'=>78341,
            'employee_name'=>'Mugdho',
            'leave'=>'09-03-2022',
            'return'=>'11-03-2022'
        ]);
        DB::table('leave_applies')->insert([
            'employee_id'=>29342,
            'employee_name'=>'Shafi',
            'leave'=>'24-03-2022',
            'return'=>'26-03-2022'
        ]);
        
    }
}
