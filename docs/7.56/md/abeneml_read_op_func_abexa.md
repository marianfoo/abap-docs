  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [READ ENTITY, ENTITIES](javascript:call_link\('abapread_entity_entities.htm'\)) →  [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples.htm'\)) → 

ABAP EML - READ, Operation Executing Functions

This example demonstrates how a READ statement can be used to access a managed RAP BO and execute a function. In this case, a selected set of fields is read from a RAP BO entity by executing a function.

Data model

The CDS data model consists of the root entity DEMO\_SPFLI\_FLIGHTS and its child entity DEMO\_SFLIGHT. The root entity represents flight schedule data and the child entity represents flight details.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions: true
@EndUserText.label: 'spfli view'
define root view entity DEMO\_SPFLI\_Flights
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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_SPFLI\_FLIGHTS is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_spfli\_flights unique;
define behavior for DEMO\_SPFLI\_Flights
persistent table SPFLI
lock master
{
  create;
  update;
  delete;
  association \_Flights { create; }
  function FunctionResultEntity result \[0..\*\] entity DEMO\_SPFLI\_Flights;
}
define behavior for DEMO\_SFLIGHT alias SFLIGHT
persistent table SFLIGHT
lock dependent by \_spfli
{
  update;
  delete;
  field ( readonly ) CARRID;
  field ( readonly ) CONNID;
  mapping for SFLIGHT corresponding;
}

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SPFLI\_FLIGHTS. This global class implements the local handler class LHC\_DEMO\_SPFLI\_FLIGHTS. The actual implementation takes place in the CCIMP include. In the example, the FunctionResultEntity method comprises an ABAP EML read operation reading the values of a selected set of fields from the entity DEMO\_SPFLI\_FLIGHTS. The values should be read according to specific keys that are specified in the internal table following the EXECUTE FunctionResultEntity FROM statement in the report.

Source Code

REPORT demo\_rap\_eml\_read\_op\_func.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(  ).
    "Read operation executing a function
    READ ENTITIES OF demo\_spfli\_flights
     ENTITY demo\_spfli\_flights
      EXECUTE FunctionResultEntity
      FROM VALUE #( ( %tky-Carrid =  'AA'
                      %tky-Connid = 17 ) )
     RESULT DATA(result)
     FAILED DATA(failed)
     REPORTED DATA(reported).
    "Set up internal table to output
    "the result of the function execution
    TYPES: BEGIN OF result\_structure,
             carrid   TYPE s\_carr\_id,
             connid   TYPE s\_conn\_id,
             cityfrom TYPE s\_from\_cit,
             airpfrom TYPE s\_fromairp,
             cityto   TYPE s\_to\_city,
             airpto   TYPE s\_toairp,
           END OF result\_structure.
    TYPES result\_table\_type TYPE TABLE OF result\_structure.
    DATA result\_table TYPE result\_table\_type.
    LOOP AT result   ASSIGNING FIELD-SYMBOL(<result>).
      APPEND VALUE #( carrid = <result>-%param-carrid
                      connid =  <result>-%param-connid
                      cityfrom =  <result>-%param-cityfrom
                      airpfrom =  <result>-%param-airpfrom
                      cityto  =  <result>-%param-cityto
                      airpto =  <result>-%param-airpto
                    ) TO result\_table.
    ENDLOOP.
    out->next\_section(
      'Result of READ operation executing a function'
      )->write( result\_table
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program:

-   The READ statement executes the function FunctionResultEntity for those entity instances whose keys are specified in the internal table following the EXECUTE FunctionResultEntity FROM statement.
-   The outcome of the function execution is stored in the table result. In this case, the simple function FunctionResultEntity, as it is implemented in the behavior pool, itself just reads the values of a selected set of fields from the [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") specified in a READ statement and considering the keys that have been passed. The read result is then passed to the result table.
-   To display the result of the read operation, an internal table is set up and filled with the values returned by the read operation.