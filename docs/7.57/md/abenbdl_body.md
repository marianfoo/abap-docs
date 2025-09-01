  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Body, ABENBDL_BODY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Body

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
[CDS BDL - field characteristics](javascript:call_link\('abenbdl_field_char.htm'\))
[CDS BDL - field numbering](javascript:call_link\('abenbdl_field_numbering.htm'\))
[CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\))
[CDS BDL - validation](javascript:call_link\('abenbdl_validations.htm'\))
[CDS BDL - determination](javascript:call_link\('abenbdl_determinations.htm'\))
[CDS BDL - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\))
[CDS BDL - Implementation Grouping](javascript:call_link\('abenbdl_grouping.htm'\))