  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm) → 

Root entities example

Example

The CDS view /DMO/I\_Travel represents the root node of the business object. The root node Travel is used to manage general flight booking data such as the trip ID, agency ID, customer number, start and end dates of a trip, booking fee, total price, currency, trip description, trip status, and date of last change.

The travel data is saved in the database table /DMO/TRAVEL.

@AbapCatalog.sqlViewName: 'ZDEMO\_TRAVEL\_DB'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Travel'
@Search.searchable: true
@ObjectModel.semanticKey: \['TravelID'\]
@ObjectModel.representativeKey: 'TravelID'
define root view /DMO/I\_Travel
  as select from /dmo/travel as Travel
  composition \[0..\*\] of /DMO/I\_Booking  as \_Booking
  association \[1..1\] to /DMO/I\_Agency       as \_Agency       on
     $projection.AgencyID = \_Agency.AgencyID
  association \[1..1\] to /DMO/I\_Customer     as \_Customer     on
     $projection.CustomerID = \_Customer.CustomerID
  association \[0..\*\] to I\_CurrencyText      as \_CurrencyText on
     $projection.Currency\_Code = \_CurrencyText.Currency
  association \[0..\*\] to /DMO/I\_Status\_Text  as \_StatusText   on
     $projection.Status = \_StatusText.Status
{
  @Search.defaultSearchElement: true
  @ObjectModel.readOnly: true
  key Travel.travel\_id             as Travel\_ID,
  @Search.defaultSearchElement: true
  @ObjectModel.text.association: '\_Agency'
  @Consumption.valueHelpDefinition: \[{
     entity: {name: '/DMO/I\_Agency', element: 'Agency\_ID' }}\]
  Travel.agency\_id                 as Agency\_ID,
  @Search.defaultSearchElement: true
  @Consumption.valueHelpDefinition: \[{
     entity: {name: '/DMO/I\_Customer', element: 'CustomerID' }}\]
  @ObjectModel.text.association: '\_Customer'
  Travel.customer\_id               as Customer\_ID,
  Travel.begin\_date                as Begin\_Date,
  Travel.end\_date                  as End\_Date,
  @Semantics.currencyCode: true
  @ObjectModel.text.association: '\_CurrencyText'
  @Consumption.valueHelpDefinition: \[{
    entity: {name: 'I\_CurrencyText', element: 'Currency' }}\]
  Travel.currency\_code             as Currency\_Code,
  @Semantics.amount.currencyCode: 'Currency\_Code'
  Travel.booking\_fee               as Booking\_Fee,
  @Semantics.amount.currencyCode: 'Currency\_Code'
  @ObjectModel.readOnly: true
  Travel.total\_price               as Total\_Price,
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.86
  Travel.description               as Description,
  @Consumption.valueHelpDefinition: \[{
     entity: {name: '/DMO/I\_Status\_Text', element: 'Status' }}\]
  @ObjectModel.text.association: '\_StatusText'
  @ObjectModel.readOnly: true
  @UI: { lineItem: \[ { position: 50, importance: #HIGH },
                     { type:       #FOR\_ACTION,
                       dataAction: 'set\_status\_booked',
                       label:      'Set Status to Booked' } \]
         ,identification: \[ { position: 80 } \]
         ,selectionField: \[ { position: 60 }\]
       }
  Travel.status                    as Status,
  Travel.lastchangedat             as LastChangedAt,
  /\* Associations \*/
  @Search.defaultSearchElement: true
  \_Booking,
  \_Agency,
  \_Customer,
  \_StatusText,
  \_CurrencyText
}