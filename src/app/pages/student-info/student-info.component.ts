import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/model/Student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent {

  studentId = 0;

  student: Student | undefined;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.studentId = parseInt(params['id']);

      this.studentService.getStudent(this.studentId).subscribe(s => this.student = s);
    });
  }
}
