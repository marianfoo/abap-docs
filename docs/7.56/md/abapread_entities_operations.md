  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [READ ENTITY, ENTITIES](javascript:call_link\('abapread_entity_entities.htm'\)) → 

READ ENTITIES OPERATIONS, Dynamic Form

Syntax

READ ENTITIES *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*\]* OPERATIONS op\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... response\_param.](#!ABAP_ADDITION_2@2@)

Effect

The dynamic form of the READ statement enables the collecting of read operations for multiple RAP BOs in one READ ENTITIES OPERATIONS ... statement. There is no short form available for the dynamic version.

op\_tab must be a table of type ABP\_BEHV\_RETRIEVALS\_TAB. This table has specific components:

Component

Details

OP

It is a mandatory component and specifies the operation to be executed. It can be set with the defined constants, for example, OP-R-READ etc., of interface IF\_ABAP\_BEHV or just the predefined value for the operation in the interface, for example 'R' for a read operation (OP = 'R') or 'N' for a read-by-association operation (OP = 'N').

ENTITY\_NAME

It is a mandatory component and specifies the name of the RAP BO entity for which the operation is executed. The name must be provided using capital letters.

SUB\_NAME

Only relevant for specifying association names in case of read-by-association operations or for functions. In these contexts, the specification is mandatory.

INSTANCES

Mandatory component. It specifies a reference to an internal table holding the input keys. The table must be typed with the required BDEF derived type for the operation.

FULL

An optional flag specifying whether all target instances (and not just links) are retrieved in the context of read-by-association operations. It is of type c with length 1, i. e. full specified with abap\_true or 'X' respects all target instances.

RESULTS

It specifies a reference to an internal table with the required BDEF derived type for the read results.

LINKS

It specifies a reference to an internal table with the required BDEF derived type holding the key pairs of the source and target.

Addition 1   

... IN LOCAL MODE

Effect

The addition [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)) is used to exclude [feature controls](javascript:call_link\('abenbdl_actions_fc.htm'\)) and [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)). It can only be used within the RAP BO runtime implementation.

Addition 2   

... response\_param.

Effect

The addition [response\_param](javascript:call_link\('abapeml_response.htm'\)) represents the response parameters that can be specified. The specification is optional. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

Example

The following source code section taken from DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITIES
OPERATIONS statement.

DATA:
op\_tab TYPE ABP\_BEHV\_RETRIEVALS\_TAB,
read\_dyn  TYPE TABLE FOR READ IMPORT DEMO\_SPFLI\_FLIGHTS,
read\_dyn\_result TYPE TABLE FOR READ RESULT DEMO\_SPFLI\_FLIGHTS,
rba\_dyn TYPE TABLE FOR READ IMPORT DEMO\_SPFLI\_FLIGHTS\\\_Flights,
rba\_dyn\_result TYPE TABLE FOR READ RESULT DEMO\_SPFLI\_FLIGHTS\\\_Flights,
rba\_dyn\_link TYPE TABLE FOR READ LINK DEMO\_SPFLI\_FLIGHTS\\\_Flights.
    read\_dyn = value #(
      ( %key-Carrid = 'DL'
        %key-connid = 106
        %control = value #(
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
    rba\_dyn = value #(
     ( %key-Carrid = 'UA'
       %key-connid = 3516
       %control = value #( Fldate     = if\_abap\_behv=>mk-on
                           Price      = if\_abap\_behv=>mk-on
                           Currency   = if\_abap\_behv=>mk-on
                           Planetype  = if\_abap\_behv=>mk-on
                           Seatsmax   = if\_abap\_behv=>mk-on
                           Seatsocc   = if\_abap\_behv=>mk-on
                          ) ) ).
    op\_tab = value #(
       ( op = if\_abap\_behv=>op-r-read
         entity\_name = 'DEMO\_SPFLI\_FLIGHTS'
         instances   = ref #( read\_dyn )
         results     = ref #( read\_dyn\_result ) )
       ( op = if\_abap\_behv=>op-r-read\_ba
         entity\_name = 'DEMO\_SPFLI\_FLIGHTS'
         sub\_name    = '\_FLIGHTS'
         full        = 'X'
         instances   = ref #( rba\_dyn )
         results     = ref #( rba\_dyn\_result )
         links       = ref #( rba\_dyn\_link ) )
                  ).
    READ ENTITIES OPERATIONS op\_tab FAILED DATA(failed\_dyn).

Executable Example

-   The example [ABAP EML - READ, Variants](javascript:call_link\('abeneml_read_alternatives_abexa.htm'\)) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples.htm'\)).