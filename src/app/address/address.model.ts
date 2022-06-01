export interface AddAddressModel {
  firstName: string;
  lastName: string;
  PhoneNumber: number;
  StateProvinceId: number;
  City: string;
  Address1: string;
  ZipPostalCode: number;
  Plaque: number;
  Unit: number;
}

export interface UserAddress {
  FirstName: string;
  LastName: string;
  Email: string;
  CompanyEnabled: boolean;
  CompanyRequired: boolean;
  Company: string;
  CountryEnabled: boolean;
  CountryId: number;
  CountryName: string;
  StateProvinceEnabled: boolean;
  StateProvinceId: number;
  StateProvinceName: string;
  AreaId: number;
  AreaName: string;
  CityId: number;
  CityEnabled: boolean;
  CityRequired: boolean;
  City: string;
  StreetAddressEnabled: boolean;
  StreetAddressRequired: boolean;
  Address1: string;
  StreetAddress2Enabled: boolean;
  StreetAddress2Required: boolean;
  Address2: string;
  ZipPostalCodeEnabled: boolean;
  ZipPostalCodeRequired: boolean;
  ZipPostalCode: number;
  PhoneEnabled: boolean;
  PhoneRequired: boolean;
  PhoneNumber: number;
  FaxEnabled: boolean;
  FaxRequired: boolean;
  FaxNumber: string;
  AvailableCountries: [];
  AvailableStates: [];
  FormattedCustomAddressAttributes: [];
  CustomAddressAttributes: [];
  Latitude: string;
  Longitude: string;
  Plaque: null;
  Unit: number;
  Id: number;
}
export interface CustomerOrderUser{

    OrderGuid:string,
    CustomOrderNumber:number,
    OrderTotal:number,
    IsReturnRequestAllowed:boolean,
    OrderStatusEnum:number,
    OrderStatus:string,
    PaymentStatus:string,
    ShippingStatus:string,
    CreatedOn:string,
    CreatedOnPersian:string,
    CanPay:boolean,
    ImagesUrl:[
string
    ],
    Id:number,
    CustomProperties:{
    }

}
