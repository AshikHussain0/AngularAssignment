import { Component } from '@angular/core';
import { SharedService } from '../../shared/shared-service.service';
import { ChartDto } from '../../shared/shared.model';
import { catchError, finalize, of, Subject, switchMap, takeUntil } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-supplier-performance',
  templateUrl: './supplier-performance.component.html',
  styleUrl: './supplier-performance.component.scss'
})
export class SupplierPerformanceComponent {
  leftChartData!: ChartDto | null;
  rightChartData!: ChartDto | null;
  leftChartDataColor!: string[];
  rightChartDataColor!: string[];
  private unsubscribe$ = new Subject<void>();
  loading: boolean = false;

  constructor(private sharedService: SharedService, private toastr: ToastrService) {
    this.leftChartDataColor = ['#f8cb00', '#736ac9', '#20c997'];
    this.rightChartDataColor = ['#f8b16b', '#e83e8c', '#17a2b8'];
    this.getChartData();
  }

  /**
  * Method to get both chart data
  */
  getChartData(): void {
    this.loading = true;
    this.sharedService.getLeftChartData().pipe(
      takeUntil(this.unsubscribe$),
      switchMap(leftData => {
        this.leftChartData = leftData;
        return this.sharedService.getRightChartData();
      }),
      catchError(error => {
        this.toastr.error('Something went wrong in left chart data');
        return of(null);
      })
    ).pipe(
      finalize(() => {
        this.loading = false;
      }),
    ).subscribe({
      next: rightData => {
        this.rightChartData = rightData;
      },
      error: err => {
        this.toastr.error('Something went wrong in right chart data');
      }
    });
  }


  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
