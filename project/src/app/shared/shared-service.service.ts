import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { BussinessLineDto, ChartDto } from './shared.model';
import { ToasterService } from '@coreui/angular';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private httpService: HttpClient, private toasterService: ToasterService) { }

  /**
  * Method to make get left chart data
  * @returns ChartDto : chart data
  */
  getLeftChartData(): Observable<ChartDto> {
    return this.httpService.get<ChartDto>('https://mocki.io/v1/8eeb180c-f038-4569-99b8-b2fbd20df820');
  }

  /**
  * Method to make get right chart data
  * @returns ChartDto : chart data
  */
  getRightChartData(): Observable<ChartDto> {
    return this.httpService.get<ChartDto>('https://mocki.io/v1/113a0e9a-0d1a-4102-aea9-9f9608da8199');
  }

  /**
  * Method to make get business line data
  * @returns BussinessLineDto : business line data
  */
  getBusinessLineData(): Observable<BussinessLineDto[]> {
    return this.httpService.get<BussinessLineDto[]>('https://mocki.io/v1/ec7d76a8-6101-4235-89cc-1a9f6fa3cee6');
  }
}
