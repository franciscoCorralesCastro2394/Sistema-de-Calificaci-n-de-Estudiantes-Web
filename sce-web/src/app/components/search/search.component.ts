import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 private cursos:any[];
 private showedList:any[] = [];
  constructor(private dataService: DataService) { 
    this.cursos = dataService.getCoursesList();
    console.log(this.cursos);
  }

  ngOnInit() {
  }


  searchCourses = (term: string) => {
    if (!term) {
      this.showedList = [];
    } else { 
      term=term.toLowerCase();
      this.showedList = [];
      this.cursos.forEach(  (item) => { 
        if (item.nombre.toLowerCase().includes(term)) {
          this.showedList.push(item);
        }
      });
    }

  }


}
