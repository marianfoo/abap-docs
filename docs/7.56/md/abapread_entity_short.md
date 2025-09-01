  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml.htm) →  [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities.htm) → 

READ ENTITY, Short Form

Syntax

READ ENTITY *\[*[IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm)*\]* *\[*[PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm)*\]* bdef [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm) *\[*[response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm)*\]*.

Additions:

[1\. ... IN LOCAL MODE](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The short form of the READ statement is used for read [operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapread_entity_entities_op.htm) from a single RAP BO entity only. The entity name (bdef) can be specified directly, that is, reading from a child entity can also be done directly and not via the [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") of a RAP BO. In this case, bdef must be the full entity name and cannot be an alias name because the context of a RAP BO is unknown. It is possible to include all three read options in one operation per entity bdef: [read operation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_read_operation_glosry.htm "Glossary Entry"), [read-by-association operation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") and an operation executing a function, but only one of each kind within the same READ ENTITY statement.

Addition 1   

... IN LOCAL MODE

Effect

The addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm) is used to exclude [feature controls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) and [authorization checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm). It can only be used within the RAP BO runtime implementation.

Addition 2   

... PRIVILEGED

Effect

The addition [PRIVILEGED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_privileged.htm) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_response.htm) represents the response parameters that can be specified.

Example

The following source code section taken from DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITY statement.

READ ENTITY demo\_spfli\_flights
ALL FIELDS WITH VALUE #( ( %key-carrid = 'LH'
                           %key-connid = 2407 ) )
RESULT DATA(read\_entity)
FAILED DATA(read\_failed).
IF read\_failed-demo\_spfli\_flights IS NOT INITIAL.
  "...
  RETURN.
ENDIF.

Executable Example

-   The example [ABAP EML - READ, Variants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_read_alternatives_abexa.htm) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapeml_read_examples.htm).