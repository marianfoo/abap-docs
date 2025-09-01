  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [READ ENTITY, ENTITIES](javascript:call_link\('abapread_entity_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ ENTITIES, Long Form, ABAPREAD_ENTITIES_LONG, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

READ ENTITIES, Long Form

Syntax

READ ENTITIES OF bdef *\[* [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]*
         ENTITY bdef1 [operations](javascript:call_link\('abapread_entity_entities_op.htm'\))
        *\[*ENTITY bdef2 [operations](javascript:call_link\('abapread_entity_entities_op.htm'\))*\]*
        *\[*...*\]*
        *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... IN LOCAL MODE ...](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The long syntax form of the READ statement is used for collecting multiple read operations ([operations](javascript:call_link\('abapread_entity_entities_op.htm'\))) on multiple entities of a RAP BO. Yet, it can also be used to just read from a single entity of a RAP BO.

bdef must be a root entity followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the composition tree of the root entity bdef. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after READ ENTITIES OF bdef has the same syntax as the [short form](javascript:call_link\('abapread_entity_short.htm'\)). At least one entry (ENTITY bdef1 with the operation) must be specified. The same entity can be specified after ENTITY only once for a read operation. The root entity name can be used more than once but only in the context of [read-by-association operations](javascript:call_link\('abenrap_rba_operation_glosry.htm'\) "Glossary Entry") or executing actions, for example as follows:
READ ENTITIES OF bdef
   ENTITY bdef ...
   ENTITY bdef BY \\\_assoc1 ...
   ENTITY bdef BY \\\_assoc2 ...
...

The root entity name in the position of the first statement, READ ENTITIES OF bdef, must be the full entity name. bdef1, and so on, should be the entity alias names if provided in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). Using the full entity name will cause a warning. If the root entity is used in the list of operations, its alias name, if defined in the BDEF, should be used as well.

Addition 1   

... IN LOCAL MODE ...

Effect

The addition [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)) is used to exclude [feature controls](javascript:call_link\('abenbdl_actions_fc.htm'\)) and [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)). It can only be used within the RAP BO runtime implementation.

Addition 2   

... PRIVILEGED ...

Effect

The addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) is used for a privileged access to a RAP BO, i. e. the RAP BO runtime does not perform certain authorization checks. As a prerequisite, privileged must be specified in the BDEF.

Addition 3   

... response\_param.

Effect

The addition [response\_param](javascript:call_link\('abapeml_response.htm'\)) represents the response parameters that can be specified.

Example

The following source code section taken from DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITIES statement.

READ ENTITIES OF demo\_spfli\_flights
  ENTITY demo\_spfli\_flights
    ALL FIELDS WITH VALUE #( ( %key-Carrid = 'SQ'
                               %key-connid = 67 ) )
    RESULT FINAL(read\_entities\_of)
  ENTITY sflight
    ALL FIELDS WITH
       VALUE #( ( %key-Carrid = 'AA'
                  %key-connid = 17 Fldate = '20170125'  ) )
    RESULT FINAL(read\_entities\_child)
  ENTITY demo\_spfli\_flights
    BY \\\_Flights
    ALL FIELDS WITH
        VALUE #( ( %key-Carrid = 'AZ'
                   %key-connid = 791 ) )
    RESULT FINAL(rba2)
    FAILED FINAL(read\_entities\_failed).
IF read\_entities\_failed-demo\_spfli\_flights IS NOT INITIAL.
  ...
ENDIF.

Executable Example

-   The example [ABAP EML - READ, Variants](javascript:call_link\('abeneml_read_alternatives_abexa.htm'\)) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples_abexas.htm'\)).