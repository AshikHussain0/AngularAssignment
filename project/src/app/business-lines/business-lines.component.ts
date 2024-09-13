import { Component } from '@angular/core';
import { SharedService } from '../shared/shared-service.service';
import { ToastrService } from 'ngx-toastr';
import { BussinessLineDto } from '../shared/shared.model';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-business-lines',
  templateUrl: './business-lines.component.html',
  styleUrl: './business-lines.component.scss'
})
export class BusinessLinesComponent {
  businessLineData!: BussinessLineDto[];
  filteredData: BussinessLineDto[] = [];
  selectedFilters: { [key: string]: string[] } = {};
  modalVisible: boolean = false;
  activeHeader: string = '';
  selectedColumn: string = '';
  uniqueOptions: string[] = [];
  filteredUniqueValue: string[] = [];
  visible!: boolean;
  searchTerm!: string;
  loading: boolean = false;


  constructor(private sharedService: SharedService, private toastr: ToastrService) {
    this.searchTerm = '';
    this.visible = false;
  }

  ngOnInit(): void {
    this.getBusinessLineData();
  }

  /**
  * Method to get business line data
  */
  getBusinessLineData(): void {
    this.loading = true;
    this.sharedService.getBusinessLineData().pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe({
      next: res => {
        this.businessLineData = res;
        this.filteredData = this.businessLineData;
      },
      error: error => {
        this.toastr.error('Something went wrong');
      }
    })
  }

  /**
  * Method to get all the selected filters
  */
  toggleSelection(value: string, column: string): void {
    if (!this.selectedFilters[column]) {
      this.selectedFilters[column] = [];
    }
    const index = this.selectedFilters[column].indexOf(value);
    if (index > -1) {
      this.selectedFilters[column].splice(index, 1);
    } else {
      this.selectedFilters[column].push(value);
    }
  }

  /**
  * Method to get filtered data after selection
  */
  applyFilter(): void {
    this.filteredData = this.businessLineData.filter(item => {
      for (const column in this.selectedFilters) {
        const selectedValues = this.selectedFilters[column];
        const typedColumn = column as keyof BussinessLineDto;
        if (selectedValues.length > 0 && !selectedValues.includes(item[typedColumn])) {
          return false;
        }
      }
      return true;
    });
    this.toggleModal();
  }

  /**
  * Method to get unique option of selected header
  */
  getUniqueOptions(column: keyof BussinessLineDto, header: string): void {
    let unique = [...new Set(this.filteredData.map(item => item[column]))];
    // if (header === 'Updated On') {
    //   unique.forEach((element, index) => {
    //     unique[index] = this.formatDate(element);
    //   });
    //   unique = [...new Set(unique)];
    // }
    this.uniqueOptions = unique;
    this.filteredUniqueValue = this.uniqueOptions;
    this.selectedColumn = column;
    this.activeHeader = header;
    this.toggleModal();
  }

  /**
  * Method to filter the unique options based on the search term
  */
  filteredUniqueOption(): void {
    if (!this.searchTerm) {
      this.filteredUniqueValue = this.uniqueOptions;
    }
    this.filteredUniqueValue = this.uniqueOptions.filter(option => option.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  /**
  * Method to format the date
  */
  formatDate(dateStr: string): string {
    const cleanedDateStr = dateStr.split('.')[0];
    const dateObj = new Date(cleanedDateStr);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return dateObj.toLocaleDateString('en-US', options);
  }

  /**
  * Method to clear the filter
  */
  closeFilterModal(): void {
    this.modalVisible = false;
    this.activeHeader = '';
    this.searchTerm = '';
  }

  /**
  * Method to clear the selected values for the specified column
  */
  clearFilter(column: string): void {
    const typedColumn = column as keyof BussinessLineDto;
    delete this.selectedFilters[typedColumn];
    this.applyFilter();
  }

  /**
  * Method to toggle the modal's visibility
  */
  toggleModal(): void {
    this.modalVisible = !this.modalVisible;
  }

}
