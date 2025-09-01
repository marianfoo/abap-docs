  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm) →  [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_read_examples.htm) → 

ABAP EML - READ, Field Specification Expressions

This example demonstrates read operations using diverse variants of field specification expressions so as to read from a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry").

The example covers read and read-by-association operations as well as a read operation executing a function. The following field specification alternatives are covered in the example:

-   FROM
-   FIELDS (...) WITH
-   ALL FIELDS WITH

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_SPFLI\_FLIGHTS is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

For the above CDS behavior definition, there is an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") available. The global class of the behavior pool is BP\_DEMO\_SPFLI\_FLIGHTS. This global class implements the local handler class LHC\_DEMO\_SPFLI\_FLIGHTS. The actual implementation takes place in the CCIMP include. In managed scenarios, the implementation for standard operations is carried out by the managed RAP BO provider. Hence, only the function FunctionResultEntity which is executed in a read operation in the example is relevant here. See the example [READ: Operation Executing Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_read_op_func_abexa.htm) that focuses on this very function execution for details.

Source Code

REPORT demo\_rap\_eml\_read\_op\_fields.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out               TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    "Read operation
    "FROM
    READ ENTITY demo\_spfli\_flights
    FROM VALUE #(
        ( %key-Carrid = 'AA'
          %key-Connid = 17
          %control = VALUE #( Airpfrom  = if\_abap\_behv=>mk-on
                              Airpto    = if\_abap\_behv=>mk-on
                              Cityfrom  = if\_abap\_behv=>mk-on
                              Cityto    = if\_abap\_behv=>mk-on
                              Countryfr = if\_abap\_behv=>mk-on
                              Countryto = if\_abap\_behv=>mk-on
                              Deptime   = if\_abap\_behv=>mk-off
                              Arrtime   = if\_abap\_behv=>mk-off
                              Distance  = if\_abap\_behv=>mk-off
                              Fltime    = if\_abap\_behv=>mk-on
                            ) ) )
      RESULT DATA(read\_from)
      FAILED DATA(failed\_from).
    out->next\_section( \`Read: FROM\` ).
    IF failed\_from-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_from-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_from>).
        out->write( <failed\_from>-%fail ).
      ENDLOOP.
    ELSE.
      out->write( read\_from ).
    ENDIF.
    "FIELDS (...) WITH
    READ ENTITY demo\_spfli\_flights
     FIELDS ( Carrid Connid Airpfrom Airpto
              Cityfrom Cityto
               )
       WITH VALUE #( ( %key-Carrid = 'LH'
                       %key-Connid = 400 ) )
      RESULT DATA(read\_fields\_with)
      FAILED DATA(failed\_fields\_with).
    out->next\_section( \`Read: FIELDS (...) WITH\` ).
    IF failed\_fields\_with-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_fields\_with-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_fields\_with>).
        out->write( <failed\_fields\_with>-%fail ).
      ENDLOOP.
    ELSE.
      out->write( read\_fields\_with ).
    ENDIF.
    "ALL FIELDS WITH
    READ ENTITY demo\_spfli\_flights
    ALL FIELDS WITH VALUE #( ( %key-Carrid = 'LH'
                               %key-Connid = 401  ) )
     RESULT DATA(read\_all\_fields\_with)
     FAILED DATA(failed\_all\_fields\_with).
    out->next\_section( \`READ: ALL FIELDS WITH\` ).
    IF failed\_all\_fields\_with-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_all\_fields\_with-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_all\_fields\_with>).
        out->write( <failed\_all\_fields\_with>-%fail ).
      ENDLOOP.
    ELSE.
      out->write( read\_all\_fields\_with ).
    ENDIF.
    "Read-by-association operation
    "FROM
    READ ENTITY demo\_spfli\_flights
    BY \\\_Flights
    FROM VALUE #( ( %key-Carrid = 'AA'
                    %key-Connid = 17
                    %control = VALUE #( seatsocc = if\_abap\_behv=>mk-on )
                  ) )
     RESULT DATA(rba\_from)
     FAILED DATA(failed\_rba\_from).
    out->next\_section( \`Read by association: FROM\` ).
    IF failed\_rba\_from-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_rba\_from-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_rba\_from>).
        out->write( <failed\_rba\_from>-%fail ).
      ENDLOOP.
    ELSE.
      SELECT \* FROM @rba\_from AS rba\_from
        INTO TABLE @DATA(rba\_from\_selected) UP TO 3 ROWS.
      out->write( rba\_from\_selected ).
    ENDIF.
    "FIELDS (...) WITH
    READ ENTITY demo\_spfli\_flights
    BY \\\_Flights
    FIELDS ( Carrid Connid Currency Price Planetype )
     WITH VALUE #( ( %key-Carrid = 'AA'
                     %key-Connid = 17 ) )
     RESULT DATA(rba\_fields\_with)
     FAILED DATA(failed\_rba\_fields\_with).
    out->next\_section( \`Read by association: FIELDS (...) WITH\` ).
    IF failed\_rba\_fields\_with-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_rba\_fields\_with-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_rba\_fields\_with>).
        out->write( <failed\_rba\_fields\_with>-%fail ).
      ENDLOOP.
    ELSE.
      SELECT \* FROM @rba\_fields\_with AS rba\_fields\_with
        INTO TABLE @DATA(rba\_fields\_with\_selected) UP TO 3 ROWS.
      out->write( rba\_fields\_with\_selected ).
    ENDIF.
    "ALL FIELDS WITH
    READ ENTITY demo\_spfli\_flights
    BY \\\_Flights
    ALL FIELDS WITH VALUE #( ( %key-Carrid = 'LH'
                               %key-Connid = 401 ) )
     RESULT DATA(rba\_all\_fields\_with)
     FAILED DATA(failed\_rba\_all\_fields\_with).
    out->next\_section( \`Read by association: ALL FIELDS WITH\` ).
    IF failed\_rba\_all\_fields\_with-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_rba\_all\_fields\_with-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_rba\_all\_fields\_with>).
        out->write( <failed\_rba\_all\_fields\_with>-%fail ).
      ENDLOOP.
    ELSE.
       SELECT \* FROM @rba\_all\_fields\_with AS rba\_all\_fields\_with
         INTO TABLE @DATA(rba\_all\_fields\_with\_selected) UP TO 3 ROWS.
      out->write( rba\_all\_fields\_with\_selected ).
    ENDIF.
    "Read operation executing a function
    "FROM
    READ ENTITY demo\_spfli\_flights
         EXECUTE FunctionResultEntity
         FROM VALUE #( ( %tky-Carrid =  'AA'
                         %tky-Connid = 17 ) )
        RESULT DATA(execute\_from)
        FAILED DATA(failed\_execute\_from).
    "Set up internal table to output
    "the result of the function execution.
    TYPES: BEGIN OF result\_structure,
             carrid   TYPE s\_carr\_id,
             connid   TYPE s\_conn\_id,
             cityfrom TYPE s\_from\_cit,
             airpfrom TYPE s\_fromairp,
             cityto   TYPE s\_to\_city,
             airpto   TYPE s\_toairp,
           END OF result\_structure.
    TYPES result\_table\_type TYPE TABLE OF result\_structure.
    DATA execute\_from\_result TYPE result\_table\_type.
    LOOP AT execute\_from   ASSIGNING FIELD-SYMBOL(<execute\_from>).
      APPEND VALUE #( carrid = <execute\_from>-%param-carrid
                      connid =  <execute\_from>-%param-connid
                      cityfrom =  <execute\_from>-%param-cityfrom
                      airpfrom =  <execute\_from>-%param-airpfrom
                      cityto  =  <execute\_from>-%param-cityto
                      airpto =  <execute\_from>-%param-airpto
                    ) TO execute\_from\_result.
    ENDLOOP.
    out->next\_section( \`Read operation executing a function\` ).
    IF failed\_execute\_from-demo\_spfli\_flights IS NOT INITIAL.
      LOOP AT failed\_execute\_from-DEMO\_SPFLI\_Flights
        ASSIGNING FIELD-SYMBOL(<failed\_execute\_from>).
        out->write( <failed\_execute\_from>-%fail ).
      ENDLOOP.
    ELSE.
      out->write( execute\_from\_result ).
    ENDIF.
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

Using the short syntax form READ ENTITY, several separate read and read-by-association operations are carried out in the example showcasing the diverse variants of field specification that are possible to specify input parameters for the read operation in an internal table. In this case, the internal table is always declared inline using the [value operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm). The table gets the required [BDEF derived type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") automatically. Depending on the operation and key words (FROM, for example), the internal tables require specific components.

The RAP query engine reads the data from the respective database tables into a managed [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") in which the read operations take place using the respective additions. Each result of the individual read operations is output. For the sake of completeness, an example for the read operation executing a function is covered here as well. Refer to the separate example [READ: Operation Executing Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_read_op_func_abexa.htm) for the details.