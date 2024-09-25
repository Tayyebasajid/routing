const StudentList=({params,

}: {
    params: {studentdata: string};
}
)=>{
    return(
        <div>
            <h1 className="text-5xl flex items-center justify-center p-5 font-bold capitalize">details of student:{params.studentdata}</h1>
        </div>
    );
}
export default StudentList;