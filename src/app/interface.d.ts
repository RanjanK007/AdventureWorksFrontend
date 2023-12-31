
type Year=number;
type Days=number;
export interface Sales{
    order_year:Year;
    time_to_ship:Days;
    total:number;
}

export interface Custom{
    order_date:Date;
    ship_date:Date;
    sales_order_id:number;
    contact_name:string;
    total:number;
}