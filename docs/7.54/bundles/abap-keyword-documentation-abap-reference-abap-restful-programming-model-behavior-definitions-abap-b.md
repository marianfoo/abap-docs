# ABAP Keyword Documentation / ABAP − Reference / ABAP RESTful Programming Model / Behavior Definitions / ABAP BDL - Example

Included pages: 4


### abenbdl_example.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) → 

ABAP BDL - Example

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings.

The underlying business object for managing flight trips can be given an alias, in this instance, Travel. The structure of the business object consists of a tree with the entities Travel, Booking, Agency, Customer, Carrier, Connection, Currency, and Status. The entities are joined by compositions and associations. Each entity of the tree structure is modeled as a CDS view:

-   The entity Travel is the top node in the business object structure and is used to manage general travel data. It is represented by the CDS view /DMO/I\_Travel.

-   The entity Booking is a child entity of Travel and is represented by the CDS view /DMO/I\_Booking. It is used to manage flight booking data, for example, the passenger, connection, price, and flight date.

-   The CDS views that represent entities other than those in this example are described in [Other entity examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example_data.htm).

The following example shows the behavior definition for the root entity Travel. In the example, the implementation type is set to unmanaged because the existing legacy business logic needs to be integrated into the new application for managing flight trips.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias travel
late numbering
lock master
etag LastChangedAt
{
  field (read only) Travel\_ID;
  field (mandatory) Agency\_ID, Customer\_ID, Begin\_Date, End\_Date;
  create;
  update;
  delete;
  action set\_status\_booked result \[1\] $self;
  association \_Booking { create; }
}

The transactional [behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbehavior_glosry.htm "Glossary Entry") of the business object travel is defined by the [standard operations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_standard_operations.htm) create, update, and delete as well as the [action](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_action.htm) set\_status\_booked. These operations are implemented in the association [behavior pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrpm_global_class.htm).

The end user can use the action set\_status\_booked to set the status of a trip to booked. The action set\_status\_booked is bound to an instance of the type travel, which in this case is also returned by the action. This means the cardinality equals \[1\] and $self is set as the type of the output parameter.

The association \_Booking specifies that new instances of the child entity Booking can be created for a specific instance of the entity Travel only.

Continue
[Root entities example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example_root_entity.htm)
[Child entity example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example_cds_entity.htm)
[Other entity examples](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example_data.htm)


### abenbdl_example_root_entity.htm

  

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


### abenbdl_example_cds_entity.htm

  

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


### abenbdl_example_data.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [ABAP RESTful Programming Model](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrestful_abap_programming.htm) →  [Behavior Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_behavior_definitions.htm) →  [ABAP BDL - Example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example.htm) → 

Other entity examples

Example

CDS entity Agency

The CDS view /DMO/I\_Agency represents travel agency data, for example, the address and contact information. The relevant agency data is saved in the database table /DMO/AGENCY. The flight data scenario defines a 1:n cardinality between the entities Agency and Travel.

@AbapCatalog.sqlViewName: 'ZDEMO\_AGENCY\_DB'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Agency - CDS Data Model'
define view /DMO/I\_Agency
  as select from /dmo/agency as Agency
  association \[0..1\] to I\_Country as \_Country on
    $projection.CountryCode = \_Country.Country
{
  key Agency.agency\_id        as AgencyID,
  @Semantics.text: true
  Agency.name                 as Name,
  Agency.street               as Street,
  Agency.postal\_code          as PostalCode,
  Agency.city                 as City,
  Agency.country\_code         as CountryCode,
  Agency.phone\_number         as PhoneNumber,
  Agency.email\_address        as EMailAddress,
  Agency.web\_address          as WebAddress,
  /\* Associations \*/
  \_Country
}

CDS entity Customer

The CDS view /DMO/I\_Customer represents the data model for managing passengers, for example, the name, address, and contact information. The relevant data is saved in the database table /DMO/CUSTOMER. The flight data scenario defines a 1:n cardinality between the entities Customer and Travel.

@AbapCatalog.sqlViewName: 'ZDEMO\_CUSTOM\_DB'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Customer - CDS Data Model'
define view /DMO/I\_Customer
  as select from /dmo/customer as Customer
  association \[0..1\] to I\_Country as \_Country on
    $projection.CountryCode = \_Country.Country
{
  key Customer.customer\_id    as CustomerID,
  Customer.first\_name         as FirstName,
  @Semantics.text: true
  Customer.last\_name          as LastName,
  Customer.title              as Title,
  Customer.street             as Street,
  Customer.postal\_code        as PostalCode,
  Customer.city               as City,
  Customer.country\_code       as CountryCode,
  Customer.phone\_number       as PhoneNumber,
  Customer.email\_address      as EMailAddress,
  /\* Associations \*/
  \_Country
}

CDS entity Carrier

The CDS view /DMO/I\_Carrier represents the data model for managing airline data, for example, the carrier ID and name. The relevant data is saved in the database table /DMO/CARRIER. The flight data scenario defines a 1:n cardinality between the entities Carrier and Connection.

@AbapCatalog.sqlViewName: 'ZDEMO\_CARRIER\_DB'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Carrier - CDS Data Model'
@Search.searchable: true
define view /DMO/I\_Carrier
   as select from /dmo/carrier      as Carrier
{
  key Carrier.carrier\_id            as CarrierID,
  @Semantics.text: true
  @Search.defaultSearchElement: true
  @Search.fuzzinessThreshold: 0.86
  Carrier.name                      as Name,
  @Semantics.currencyCode: true
  Carrier.currency\_code             as CurrencyCode
}

CDS entity Connection

The CDS view /DMO/I\_Connection represents the data model for managing flight connection data, for example, the departure airport and arrival airport. The relevant data is saved in the database table /DMO/CONNECTION. The flight data scenario defines a 1:n cardinality between the entities Connection and Carrier.

@AbapCatalog.sqlViewName: 'ZDEMO\_CONNECT\_DB'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@ObjectModel.dataCategory: #TEXT
@EndUserText.label: 'Connection - CDS Data Model'
define view /DMO/I\_Connection
  as select from /dmo/connection as Connection
{
  @ObjectModel.text.element: \['Description'\]
  key Connection.carrier\_id             as CarrierID,
  key Connection.connection\_id          as ConnectionID,
  airport\_from\_id                       as Departure,
  airport\_to\_id                         as DestinationAirport,
  departure\_time                        as DepartureTime,
  arrival\_time                          as ArrialTime,
  @Semantics.quantity.unitOfMeasure: 'DistanceUnit'
  distance                              as Distance,
  @Semantics.unitOfMeasure: true
  distance\_unit                         as DistanceUnit,
}

CDS entity Status

The CDS view /DMO/I\_Status\_Text represents the data model for managing the status of a trip, for example, new and booked.

@AbapCatalog.sqlViewName: 'ZEMO\_STATUS\_DB'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Status - CDS Data Model'
define view /DMO/I\_Status\_Text
  as select from dd07t as dd
{
  key cast ( substring( dd.domvalue\_l, 1, 1 )
             as /dmo/travel\_status ) as Status,
  @Semantics.language: true
  key dd.ddlanguage                  as language,
  @Semantics.text: true
  dd.ddtext                          as StatusText
}
where dd.domname  = '/DMO/STATUS'
  and dd.as4local = 'A'
