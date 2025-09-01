  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20ENTITIES%20OPERATIONS%2C%20Dynamic%20Form%2C%20ABAPREAD_ENTITIES_OPERATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

READ ENTITIES OPERATIONS, Dynamic Form

Syntax

READ ENTITIES *\[* [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm)*|*[PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm)*\]* OPERATIONS op\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE  ...](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

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
Note: Currently, the behavior is as follows: If full is specified with abap\_true or 'X', all target instances are retrieved in any case. When specified otherwise, the instances might be retrieved or not.

RESULTS

It specifies a reference to an internal table with the required BDEF derived type for the read results.

LINKS

It specifies a reference to an internal table with the required BDEF derived type holding the key pairs of the source and target.

Addition 1   

... IN LOCAL MODE ...

Effect

The addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapin_local_mode.htm) is used to exclude [feature controls](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) and [authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm). It can only be used within the RAP BO runtime implementation.

Addition 2   

... PRIVILEGED ...

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) represents the response parameters that can be specified. The specification is optional. When used in the context of the dynamic form of the ABAP EML statement, the parameters must be internal tables typed with ABP\_BEHV\_RESPONSE\_TAB.

Example

The following source code section taken from CL\_DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITIES OPERATIONS statement.

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
    READ ENTITIES OPERATIONS op\_tab FAILED FINAL(failed\_dyn).

Executable Example

-   The example [ABAP EML - READ, Variants](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_read_alternatives_abexa.htm) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_read_examples_abexas.htm).