---
title: "ABAP EML - READ, Operation Executing Functions"
description: |
  This example demonstrates how a READ statement can be used to access a managed RAP BO and execute a function. In this case, a selected set of fields is read from a RAP BO entity by executing a function. Data model The CDS data model consists of the root entity DEMO_SPFLI_FLIGHTS and its child enti
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_read_op_func_abexa.htm"
abapFile: "abeneml_read_op_func_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "internal-table", "abeneml", "read", "func", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) →  [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_read_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20READ%2C%20Operation%20Executing%20Functions%2C%20ABENEML_READ_OP_FUNC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP EML - READ, Operation Executing Functions

This example demonstrates how a READ statement can be used to access a managed RAP BO and execute a function. In this case, a selected set of fields is read from a RAP BO entity by executing a function.

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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_SPFLI\_FLIGHTS is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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
  field ( readonly ) carrid, connid;
}
define behavior for DEMO\_SFLIGHT alias SFLIGHT
persistent table SFLIGHT
lock dependent by \_spfli
authorization dependent by \_spfli
{
  update;
  delete;
  field ( readonly ) carrid, connid, fldate;
  mapping for SFLIGHT corresponding;
  association \_spfli;
}

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SPFLI\_FLIGHTS. This global class implements the local handler class LHC\_DEMO\_SPFLI\_FLIGHTS. The actual implementation takes place in the CCIMP include. In the example, the FunctionResultEntity method comprises an ABAP EML read operation reading the values of a selected set of fields from the entity DEMO\_SPFLI\_FLIGHTS according to specific keys that are specified in the internal table following the ... EXECUTE FunctionResultEntity FROM ... statement in the report.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_read\_op\_func DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_read\_op\_func IMPLEMENTATION.
  METHOD main.
    "Read operation executing a function
    READ ENTITIES OF demo\_spfli\_flights
     ENTITY demo\_spfli\_flights
      EXECUTE FunctionResultEntity
      FROM VALUE #( ( %tky-Carrid = 'AA'
                      %tky-Connid = 17 )
                    ( %tky-Carrid = 'AZ'
                      %tky-Connid = 555 )
                       )
     RESULT FINAL(result)
     FAILED FINAL(failed)
     REPORTED FINAL(reported).
    out->next\_section(
      'Result of READ operation executing a function:'
      )->write( result ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   The READ statement executes the function FunctionResultEntity for those entity instances whose keys are specified in the internal table following the ... EXECUTE FunctionResultEntity FROM ... statement.
-   The outcome of the function execution is stored in the table result. In this case, the function FunctionResultEntity first reads a selected set of fields from [RAP BO instances](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry"). Then, a calculation is carried out if a selected field has a certain value (the distance of a flight connection is converted to kilometers if the distance is stored as miles). The read result is then passed to the result table.
-   To display the result of the read operation, an internal table is set up and filled with the values returned by the read operation.