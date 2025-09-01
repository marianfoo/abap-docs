  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Body%2C%20ABENBDL_BODY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Entity Behavior Body

Syntax

... *{**\[*[field characteristics](javascript:call_link\('abenbdl_field_char.htm'\))*\]*
     *\[*[field numbering](javascript:call_link\('abenbdl_field_numbering.htm'\))*\]*
     *\[*[RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\))*\]*
     *\[*[validations](javascript:call_link\('abenbdl_validations.htm'\))*\]*
     *\[*[determinations](javascript:call_link\('abenbdl_determinations.htm'\))*\]*
     *\[*[type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\))*\]**}*
*|* *\[*[implementation grouping](javascript:call_link\('abenbdl_grouping.htm'\))*\]*
...

Effect

The [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") can consist of the following elements:

-   [Field characteristics](javascript:call_link\('abenbdl_field_char.htm'\)): additions for [fields](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") can be defined. For example, it can be defined that it is mandatory to enter a value into a field or that a field is read-only.
-   [Field numbering](javascript:call_link\('abenbdl_field_numbering.htm'\)): defines managed internal numbering for a key field.
-   [RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)): [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") implement the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry").
-   [Validations](javascript:call_link\('abenbdl_validations.htm'\)): [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") check the consistency of a RAP business object instance.
-   [Determinations](javascript:call_link\('abenbdl_determinations.htm'\)): [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") calculate or determine field values at runtime.
-   [Type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)): a type mapping is required if the field names from database tables differ from field names of the CDS data model.
-   [Implementation grouping](javascript:call_link\('abenbdl_in_class_unique.htm'\)): Makes it possible to divide the implementation-relevant parts of a business object's business logic into multiple groups for behavior implementation, each with its own [implementation class](javascript:call_link\('abenbdl_in_class_unique.htm'\)).

Continue
[RAP - field characteristics](javascript:call_link\('abenbdl_field_char.htm'\))
[RAP - field numbering](javascript:call_link\('abenbdl_field_numbering.htm'\))
[RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\))
[RAP - validation](javascript:call_link\('abenbdl_validations.htm'\))
[RAP - determination](javascript:call_link\('abenbdl_determinations.htm'\))
[RAP - Events](javascript:call_link\('abenbdl_event_overview.htm'\))
[RAP - side effects](javascript:call_link\('abenbdl_side_effects.htm'\))
[RAP - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\))
[RAP - Implementation Grouping](javascript:call_link\('abenbdl_grouping.htm'\))