  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [ABAP EML - Common EML Statements and Operands](javascript:call_link\('abapcommon_eml_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - fields_tab, ABAPEML_FIELDS_TAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

ABAP EML - fields\_tab

Internal table that is typed with the required [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") (TYPE TABLE FOR ...) containing specific components for the communication between a [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") and [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). The components are determined by the context in which the internal table is used, i. e. the use and number of the components of the internal table to be specified, for example, for a delete or create operation differ. See the details of the type ([TYPE TABLE FOR](javascript:call_link\('abaptype_table_for.htm'\))) and components ([Components of Derived Types](javascript:call_link\('abapderived_types_comp.htm'\))) in the respective documentation.

The internal table can be constructed in an operand position using [constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry"), for example with the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") (VALUE) and other [constructor operators](javascript:call_link\('abenconstructor_expressions.htm'\)) to fill the internal table with instances as input parameters after the respective keyword (for example, FROM).

Hints

-   If a field of a parent or child entity is marked as readonly in the [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), it cannot be changed and assigned a new value with any of the [modify operations](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry"). A modification can only be done using the addition IN LOCAL MODE. See more details in the documentation for [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)).

Example

The following code example shows an internal table that is explicitly declared with a BDEF derived type. It is then used in a MODIFY statement (assuming that create\_root contains values). This is also true for the second example. Yet, the internal table following the statement CREATE SET FIELDS WITH is declared inline using the value operator.

...
DATA create\_root TYPE TABLE FOR CREATE demo\_managed\_root.
MODIFY ENTITY demo\_managed\_root
    CREATE SET FIELDS WITH create\_root.
...
MODIFY ENTITY demo\_managed\_root
    CREATE SET FIELDS WITH VALUE
      #( ( %cid = 'cid1' key\_field = '1' data\_field1\_root = 'aaa'
           data\_field2\_root = 'bbb')
         ( %cid = 'cid2' key\_field = '2' data\_field1\_root = 'ccc'
           data\_field2\_root = 'ddd')
       ).
...