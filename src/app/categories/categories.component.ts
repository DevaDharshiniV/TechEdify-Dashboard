
// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Category } from '../models/category';
// import { CategoriesService } from '../services/categories.service';

// @Component({
//   selector: 'app-categories',
//   templateUrl: './categories.component.html',
//   styleUrls: ['./categories.component.css']
// })
// export class CategoriesComponent implements OnInit {
//   categoryArray: Category[] = [];
//   formCategory: String = '';
//   formStatus: string = 'Add';
//   categoryId: string = '';

//   constructor(private categoryService: CategoriesService) {}
//   ngOnInit(): void {
//     this.categoryService.loadData().subscribe((val: any[]) => {
//       console.log(val);
//       this.categoryArray = val.map(c => ({ category: c.data.category }));
//       // this.categoryArray=val;
//     });
//   }


//   onSubmit(formData: NgForm) {
//     let categoryData: Category = {
//       category: formData.value.category,
//       // id: undefined
//     };
//     if(this.formStatus =='Add'){
//       this.categoryService.saveData(categoryData);
//       formData.reset();
//     }else if(this.formStatus=='Edit'){
//       this.categoryService.updateData(this.categoryId,categoryData);
//     }
//   }

//   onEdit(category: any,id: any){
//     // console.log(category);
//     this.formCategory=category;
//     this.formStatus = 'Edit';
//     this.categoryId = id;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../models/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categoryArray: Category[] = [];
  formCategory: String = '';
  formStatus: string = 'Add';
  categoryId: String = '';

  constructor(private categoryService: CategoriesService) {}
  ngOnInit(): void {
    this.categoryService.loadData().subscribe((val: any[]) => {
      console.log(val);
      this.categoryArray = val.map(c => ({ id: c.id,category: c.data.category }));
    });
  }

  onSubmit(formData: NgForm) {
    let categoryData: Category = {
      category: formData.value.category,
    };
    if (this.formStatus == 'Add') {
      this.categoryService.saveData(categoryData);
      formData.reset();
    } else if (this.formStatus == 'Edit' && this.categoryId) {
      console.log(this.categoryId);
      this.categoryService.updateData(this.categoryId, categoryData);
      formData.reset();
      this.formStatus = 'Add';
    }
  }

  onEdit(category: any, id: any) {
    this.formCategory = category;
    this.formStatus = 'Edit';
    this.categoryId = id;
  }
  onDelete(id:any){
    this.categoryService.deleteData(id);

  }
}



