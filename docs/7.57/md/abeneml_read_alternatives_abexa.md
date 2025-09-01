---
title: "ABAP EML - READ, Variants"
description: |
  This example demonstrates the variants of the ABAP EML READ statement to read data from a simple managed RAP BO(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm 'Glossary Entry'): -   READ ENTITY bdef -   READ ENTITIES OF bdef -   READ ENTITIES OPERATIONS dynop Data
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_read_alternatives_abexa.htm"
abapFile: "abeneml_read_alternatives_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abeneml", "read", "alternatives", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm) →  [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_read_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - READ, Variants, ABENEML_READ_ALTERNATIVES_ABEXA, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - READ, Variants

This example demonstrates the variants of the ABAP EML READ statement to read data from a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry"):

-   READ ENTITY bdef
-   READ ENTITIES OF bdef
-   READ ENTITIES OPERATIONS dynop

Data model

The CDS data model consists of the root entity DEMO\_SPFLI\_FLIGHTS and its child entity DEMO\_SFLIGHT. The root entity represents flight schedule data and the child entity represents flight details.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions: true
@EndUserText.label: 'spfli view'
define root view entity DEMO\_SPFLI\_FLIGHTS
  as select from spfli
  composition \[0..\*\] of DEMO\_SFLIGHT as \_Flights
  {
    key spfli.carrid    as Carrid,
    key spfli.connid    as Connid,
        spfli.countryfr as Countryfr,
        spfli.cityfrom  as Cityfrom,
        spfli.airpfrom  as Airpfrom,
        spfli.countryto as Countryto,
        spfli.cityto    as Cityto,
        spfli.airpto    as Airpto,
        spfli.fltime    as Fltime,
        spfli.deptime   as Deptime,
        spfli.arrtime   as Arrtime,
        spfli.distance  as Distance,
        spfli.distid    as Distid,
        spfli.fltype    as Fltype,
        spfli.period    as Period,
        \_Flights
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_SFLIGHT
  as select from sflight
  association to parent DEMO\_SPFLI\_Flights as \_Spfli  
    on  $projection.Carrid = \_Spfli.Carrid
    and $projection.Connid = \_Spfli.Connid
  {
    key sflight.carrid     as Carrid,
    key sflight.connid     as Connid,
    key sflight.fldate     as Fldate,
        sflight.price      as Price,
        sflight.currency   as Currency,
        sflight.planetype  as Planetype,
        sflight.seatsmax   as Seatsmax,
        sflight.seatsocc   as Seatsocc,
        sflight.paymentsum as Paymentsum,
        sflight.seatsmax\_b as SeatsmaxB,
        sflight.seatsocc\_b as SeatsoccB,
        sflight.seatsmax\_f as SeatsmaxF,
        sflight.seatsocc\_f as SeatsoccF,
        \_Spfli
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_SPFLI\_FLIGHTS is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_spfli\_flights unique;
strict(2);
define behavior for DEMO\_SPFLI\_FLIGHTS
persistent table SPFLI
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_Flights { create; }
  function FunctionResultEntity result \[1\] $self;
}
define behavior for DEMO\_SFLIGHT alias SFLIGHT
persistent table SFLIGHT
lock dependent by \_spfli
authorization dependent by \_spfli
{
  update;
  delete;
  field ( readonly ) CARRID;
  field ( readonly ) CONNID;
  mapping for SFLIGHT corresponding;
  association \_spfli;
}

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SPFLI\_FLIGHTS. This global class implements the local handler class LHC\_DEMO\_SPFLI\_FLIGHTS. The actual implementation takes place in the CCIMP include. The details of the behavior implementation are not relevant for this example since no custom operations are used here.

Source Code   

REPORT demo\_rap\_eml\_read.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    "READ ENTITY bdef
    READ ENTITY demo\_spfli\_flights
    ALL FIELDS WITH VALUE #( ( %key-Carrid = 'AA'
                               %key-Connid = 17 ) )
     RESULT FINAL(read\_entity)
     FAILED FINAL(read\_failed).
    out->next\_section( 'READ ENTITY bdef' ).
    IF read\_failed-demo\_spfli\_flights IS NOT INITIAL.
      out->write( 'Read failed' ).
    ELSE.
      out->write( read\_entity ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "READ ENTITY bdef (read-by-association operation)
    READ ENTITY demo\_spfli\_flights
      BY \\\_Flights
      ALL FIELDS WITH VALUE #( ( %key-Carrid = 'LH'
                                 %key-Connid = 400 ) )
      RESULT FINAL(rba)
      FAILED FINAL(rba\_failed).
    out->next\_section(
    'READ ENTITY bdef (read-by-association operation)' ).
    SELECT \* FROM @rba AS flight\_tab
      INTO TABLE @FINAL(read\_entity\_by\_assoc) UP TO 3 ROWS.
    IF rba\_failed-demo\_spfli\_flights IS NOT INITIAL.
      out->write( 'Read failed' ).
    ELSE.
      out->write( read\_entity\_by\_assoc ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Get a flight date.
    SELECT fldate FROM sflight AS flight\_tab
    WHERE carrid = 'LH' AND connid = 402
    INTO TABLE @FINAL(fldate\_tab).
    "READ ENTITIES OF bdef
    READ ENTITIES OF demo\_spfli\_flights
      ENTITY demo\_spfli\_flights
        ALL FIELDS WITH VALUE #( ( %key-Carrid = 'LH'
                                   %key-connid = 401 ) )
        RESULT FINAL(read\_entities\_of)
      ENTITY sflight
        "All key fields must be specified.
        ALL FIELDS WITH
           VALUE #( ( %key-carrid = 'LH'
                      %key-connid = 402 fldate = fldate\_tab\[ 1 \]  ) )
        RESULT FINAL(read\_entities\_child)
      ENTITY demo\_spfli\_flights
        BY \\\_Flights
        ALL FIELDS WITH
            VALUE #( ( %key-Carrid = 'AA'
                       %key-connid = 17 ) )
        RESULT FINAL(rba2)
        FAILED FINAL(read\_entities\_failed).
    SELECT \* FROM @rba2 AS flight\_tab2
       INTO TABLE @FINAL(read\_entities\_by\_assoc) UP TO 3 ROWS.
    out->next\_section( 'READ ENTITIES OF bdef' ).
    IF read\_entities\_failed-demo\_spfli\_flights IS NOT INITIAL.
      out->write( 'Read failed' ).
    ELSE.
      out->write( read\_entities\_of
        )->write( read\_entities\_child
        )->write( read\_entities\_by\_assoc
        ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
"READ ENTITIES OPERATIONS op\_tab
DATA:
op\_tab          TYPE abp\_behv\_retrievals\_tab,
read\_dyn        TYPE TABLE FOR READ IMPORT demo\_spfli\_flights,
read\_dyn\_result TYPE TABLE FOR READ RESULT demo\_spfli\_flights,
rba\_dyn         TYPE TABLE FOR READ IMPORT demo\_spfli\_flights\\\_Flights,
rba\_dyn\_result  TYPE TABLE FOR READ RESULT demo\_spfli\_flights\\\_Flights,
rba\_dyn\_link    TYPE TABLE FOR READ LINK demo\_spfli\_flights\\\_Flights.
    read\_dyn = VALUE #(
      ( %key-Carrid = 'DL'
        %key-connid = 106
        %control = VALUE #(
           Airpfrom  = if\_abap\_behv=>mk-on
           Airpto    = if\_abap\_behv=>mk-on
           Arrtime   = if\_abap\_behv=>mk-on
           Cityfrom  = if\_abap\_behv=>mk-on
           Cityto    = if\_abap\_behv=>mk-on
           Countryfr = if\_abap\_behv=>mk-on
           Countryto = if\_abap\_behv=>mk-on
           Deptime   = if\_abap\_behv=>mk-on
           Fltime    = if\_abap\_behv=>mk-on
           Distance  = if\_abap\_behv=>mk-on
           Distid    = if\_abap\_behv=>mk-on
           Fltype    = if\_abap\_behv=>mk-on
           Period    = if\_abap\_behv=>mk-on
                          )
                          ) ).
    rba\_dyn = VALUE #(
     ( %key-Carrid = 'AZ'
       %key-connid = 555
       %control = VALUE #( Fldate     = if\_abap\_behv=>mk-on
                           Price      = if\_abap\_behv=>mk-on
                           Currency   = if\_abap\_behv=>mk-on
                           Planetype  = if\_abap\_behv=>mk-on
                           Seatsmax   = if\_abap\_behv=>mk-on
                           Seatsocc   = if\_abap\_behv=>mk-on
                          ) ) ).
    op\_tab = VALUE #(
       ( op = if\_abap\_behv=>op-r-read "op = 'R' also possible
         entity\_name = 'DEMO\_SPFLI\_FLIGHTS'
         instances   = REF #( read\_dyn )
         results = REF #( read\_dyn\_result ) )
       ( op = if\_abap\_behv=>op-r-read\_ba "op = 'N' also possible
         entity\_name = 'DEMO\_SPFLI\_FLIGHTS'
         sub\_name = '\_FLIGHTS'
         full = if\_abap\_behv=>mk-on
         instances   = REF #( rba\_dyn )
         results = REF #( rba\_dyn\_result )
         links = REF #( rba\_dyn\_link ) )
                  ).
    READ ENTITIES OPERATIONS op\_tab FAILED FINAL(failed\_dyn).
    SELECT \* FROM @rba\_dyn\_result AS flight\_tab3
      INTO TABLE @FINAL(read\_by\_assoc\_dyn) UP TO 3 ROWS.
    out->next\_section( 'READ ENTITIES OPERATIONS op\_tab' ).
    IF failed\_dyn IS NOT INITIAL.
      out->write( 'Read failed' ).
    ELSE.
      out->write( read\_dyn\_result
        )->write( read\_by\_assoc\_dyn ).
    ENDIF.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   READ ENTITY bdef
    
    Two read operations are executed with the statement READ ENTITY for single entities. The one for the root entity, the other for the child entity using a read-by-association operation. The mandatory results of the read operations are stored in an internal table which is declared inline. In doing so, the internal table gets the required [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry"). The RAP query engine reads the data from the respective database tables into a managed [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") in which the read operations take place using the ALL FIELDS WITH addition.
    
-   READ ENTITIES OF bdef
    
    Multiple operations are executed on multiple RAP BO entities. In this case, read operations on the root entity, the child entity directly (mentioning the alias name defined in the BDEF) as well as a read-by-association operation (here, it is the association to the child entity) are covered.
    
-   READ ENTITIES OPERATIONS dynop
    
    The example demonstrates a dynamic read operation on the root entity and a dynamic read-by-association operation on the child entity. For that purpose, an internal table with type ABP\_BEHV\_RETRIEVALS\_TAB must be defined. This table includes specific parameters that must be filled, among others, references to other internal tables holding components according to which the dynamic read operation should be carried out.