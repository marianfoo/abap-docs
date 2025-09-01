  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm) → 

Child entity example

Example

In the business object's structure, the CDS view /DMO/I\_Booking represents a child entity of the root entity Travel that can be used to create and edit flight bookings. The child entity Booking is used to manage the following flight booking data: trip ID, booking ID and date, customer number, airline, connection, and price of the flight. The booking data can only be created for a specific Travel instance.

The booking data is saved in the database table /DMO/BOOKING.

@AbapCatalog.sqlViewName: 'ZDEMO\_BOOKING\_DB'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Booking'
@Search.searchable: true
define view /DMO/I\_Booking
  as select from /dmo/booking as Booking
  association to parent /DMO/I\_Travel as \_Travel              on
    $projection.Travel\_ID = \_Travel.Travel\_ID
  association \[1..1\] to /DMO/I\_Customer     as \_Customer      on
    $projection.Customer\_ID = \_Customer.CustomerID
  association \[1..1\] to /DMO/I\_Carrier      as \_Carrier       on
    $projection.Carrier\_ID = \_Carrier.CarrierID
  association \[1..1\] to /DMO/I\_Connection   as \_Connection    on
    $projection.Carrier\_ID    = \_Connection.CarrierID         and
    $projection.Connection\_ID = \_Connection.ConnectionID
  association \[0..\*\] to I\_CurrencyText      as \_CurrencyText  on
    $projection.Currency\_Code = \_CurrencyText.Currency
{
  @ObjectModel.readOnly: true
  @Search.defaultSearchElement: true
  key travel\_id                 as Travel\_ID,
  @ObjectModel.readOnly: true
  @Search.defaultSearchElement: true
  key booking\_id                as Booking\_ID,
  booking\_date                  as Booking\_Date,
  @Consumption.valueHelpDefinition: \[{
    entity: {name: '/DMO/I\_Customer', element: 'CustomerID' }}\]
  @ObjectModel.text.association: '\_Customer'
  @Search.defaultSearchElement: true
  customer\_id                   as Customer\_ID,
  @Consumption.valueHelpDefinition: \[{
    entity: {name: '/DMO/I\_Carrier', element: 'CarrierID' }}\]
  @ObjectModel.text.association: '\_Carrier'
  @Search.defaultSearchElement: true
  carrier\_id                    as Carrier\_ID,
  @Consumption.valueHelpDefinition: \[{
    entity: {name: '/DMO/I\_Connection', element: 'ConnectionID' },
    additionalBinding: \[
      { localElement: 'Flight\_Date',   element: 'FlightDate'},
      { localElement: 'Carrier\_ID',    element: 'CarrierID'},
      { localElement: 'Flight\_Price',  element: 'Price' },
      { localElement: 'Currency\_Code', element: 'CurrencyCode' }\]}\]
  @ObjectModel.text.association: '\_Connection'
  connection\_id                 as Connection\_ID,
  @Consumption.valueHelpDefinition: \[{
    entity: {name: '/DMO/I\_Connection', element: 'FlightDate' },
    additionalBinding: \[
      { localElement: 'Connection\_ID', element: 'ConnectionID'},
      { localElement: 'Carrier\_ID',    element: 'CarrierID'},
      { localElement: 'Flight\_Price',  element: 'Price' },
      { localElement: 'Currency\_Code', element: 'CurrencyCode' }\]}\]
  flight\_date                   as Flight\_Date,
  @Semantics.amount.currencyCode: 'Currency\_Code'
  flight\_price                  as Flight\_Price,
  @Semantics.currencyCode: true
  @Consumption.valueHelpDefinition: \[{
    entity: {name: 'I\_CurrencyText', element: 'Currency' }}\]
  @ObjectModel.text.association: '\_CurrencyText'
  currency\_code                 as Currency\_Code,
  /\* Associations \*/
  \_Travel,
  \_Customer,
  \_Carrier,
  \_Connection,
  \_CurrencyText
}