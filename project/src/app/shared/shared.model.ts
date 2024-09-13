export class ChartDto {
    absoluteChartData!: ChartData[];
    intensityChartData!: ChartData[];
}

export class ChartData {
    id!: number;
    name!: string;
    value!: number;
    percentageValue!: number;
}

export class BussinessLineDto {
    code!: string;
    id!: string;
    industryClusterMasterCode!: string;
    industryClusterMasterId!: string;
    industryClusterMasterName!: string;
    name!: string;
    updatedOn!: string;
    user!: string;
}