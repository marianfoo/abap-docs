  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [RAP - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Body%2C%20Projection%20BDEF%2C%20ABENBDL_BODY_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

RAP - Entity Behavior Body, Projection BDEF

Syntax

... *{**\[*[field characteristics](javascript:call_link\('abenbdl_field_projection.htm'\))*\]*;
     *\[*[use](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*;
     *\[*[actions and functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\))*\]*;
     *\[*[augment](javascript:call_link\('abenbdl_augment_projection.htm'\))*\]*;
     *\[*[type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\))*\]*;*}*
...

Effect

In the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), elements of the projected BDEF can be reused and new elements can be added.

-   [Field characteristics](javascript:call_link\('abenbdl_field_projection.htm'\)):
    
    A projection BDEF automatically and implicitly inherits all field characteristics of its underlying projected BO. If no field characteristic is specified for a certain field in the base BDEF, a field characteristic for the field in question can be specified in the projection BDEF.
    
-   [use](javascript:call_link\('abenbdl_use_projection.htm'\)):
    
    [Reuse](javascript:call_link\('abenbdl_use_projection.htm'\)) of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"). All operations (standard operations, operations for associations, actions, [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), and draft actions) that are to be reused from the base BO must be explicitly specified using the keyword use. For details about reuse, see the topic [RAP BDL - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
    
-   [Actions and functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)) can be defined. An implementation in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.
-   [augment](javascript:call_link\('abenbdl_augment_projection.htm'\)):
    
    With the operation augmentation, it is possible to add data or modify incoming requests on the projection layer before data reaches the transactional buffer.
    
-   [Type mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)): a type mapping can be used to map [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") from the current data model to other data types that do not match the BDEF derived component pattern. This works for projection BDEFs in the same way as for managed and unmanaged BDEFs. For more information, see topic [RAP - Type Mapping](javascript:call_link\('abenbdl_type_mapping.htm'\)).

Continue
[RAP - Field Characteristics, Projection BDEF](javascript:call_link\('abenbdl_field_projection.htm'\))
[RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\))
[RAP - Actions and Functions, Projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\))
[RAP - augment, Projection BDEF](javascript:call_link\('abenbdl_augment_projection.htm'\))