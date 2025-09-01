---
title: "Other entity examples"
description: |
  Example CDS entity Agency The CDS view /DMO/I_Agency represents travel agency data, for example, the address and contact information. The relevant agency data is saved in the database table /DMO/AGENCY. The flight data scenario defines a 1:n cardinality between the entities Agency and Travel. @Abap
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbdl_example_data.htm"
abapFile: "abenbdl_example_data.htm"
keywords: ["select", "do", "try", "data", "abenbdl", "example"]
---

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