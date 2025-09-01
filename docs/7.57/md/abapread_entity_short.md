  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [READ ENTITY, ENTITIES](javascript:call_link\('abapread_entity_entities.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: READ ENTITY, Short Form, ABAPREAD_ENTITY_SHORT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

READ ENTITY, Short Form

Syntax

READ ENTITY *\[*[IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\))*|*[PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\))*\]* bdef [operations](javascript:call_link\('abapread_entity_entities_op.htm'\)) *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Additions:

[1\. ... IN LOCAL MODE ...](#!ABAP_ADDITION_1@1@)
[2\. ... PRIVILEGED ...](#!ABAP_ADDITION_2@2@)
[3\. ... response\_param.](#!ABAP_ADDITION_3@3@)

Effect

The short form of the READ statement is used for read operations ([operations](javascript:call_link\('abapread_entity_entities_op.htm'\))) from a single RAP BO entity only. The entity name (bdef) can be specified directly, that is, reading from a child entity can also be done directly and not via the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") of a RAP BO. In this case, bdef must be the full entity name and cannot be an alias name because the context of a RAP BO is unknown. It is possible to include all three read options in one operation per entity bdef: [read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry"), [read-by-association operation](javascript:call_link\('abenrap_rba_operation_glosry.htm'\) "Glossary Entry") and an operation executing a function, but only one of each kind within the same READ ENTITY statement.

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

The following source code section taken from DEMO\_RAP\_EML\_READ demonstrates an EML READ ENTITY statement.

READ ENTITY demo\_spfli\_flights
ALL FIELDS WITH VALUE #( ( %key-carrid = 'LH'
                           %key-connid = 2407 ) )
RESULT FINAL(read\_entity)
FAILED FINAL(read\_failed).
IF read\_failed-demo\_spfli\_flights IS NOT INITIAL.
  "...
  RETURN.
ENDIF.

Executable Example

-   The example [ABAP EML - READ, Variants](javascript:call_link\('abeneml_read_alternatives_abexa.htm'\)) demonstrates this READ variant with a simple managed RAP BO.
-   For more examples on READ operations in general, see [Examples for ABAP EML READ](javascript:call_link\('abapeml_read_examples_abexas.htm'\)).