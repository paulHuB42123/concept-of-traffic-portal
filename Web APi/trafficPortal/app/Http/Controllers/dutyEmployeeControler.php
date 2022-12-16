<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\DutyList;
use App\Models\EChalan;

class dutyEmployeeControler extends Controller
{
    //
    function loadDutyEmployeeView()
    {

        $id = session()->get('id');
        $employe = DutyList::where('employe_id','=',$id)->get(); 

        

        return view("Duty_Employee.DeDashboard")->with("employe",$employe);

    }
    public function loadDutyScheduleView()
    {
        //$id = session()->get('id');
        $employe = DutyList::all(); 
        return $employe;
    }
    public function index()
    {
        $adtee = date("Y-m-d");
        $employe = DutyList::where('date','=',$adtee)->get();
        $count = EmployeeDetails::where('status','=','running')->count();
        
     
        return view('tp_dashboard.tpDashboard')->with('employee', $employe)->with('count', $count);

    }

    function loadE_ChalanView()
    {
        $id = session()->get('id');
        $chalan = EChalan::where('employe_id','=',$id)->get(); 
        return view("Duty_Employee.DeEchalan")->with("chalan",$chalan);
    }
    // function loadE_ChalanView()
    // {
    //     $id = session()->get('id');
    //     $chalan = EChalan::where('employe_id','=',$id)->get(); 
    //     return view("Duty_Employee.DeEchalan")->with("chalan",$chalan);
    // }

    public function store(Request $request)
    {

        $validator = Validator::make(
            $request->all(),
            [
                'instructor_name' => 'required|min:4|max:20',
                'instructor_phonenum' => 'required',
                'course_time' => 'required',



            ]
        );
    }
   
   //
    // public function weekSchedule()
    // {
       
    // }
}
