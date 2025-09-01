  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [RAP - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) →  [RAP - Entity Behavior Body, Projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20use%2C%20Projection%20BDEF%2C%20ABENBDL_USE_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - use, Projection BDEF

Syntax

... use create *\[*( [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))*\[*, [precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*)*\]*
  *|* use update *\[*( [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))*\[*, [precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*)*\]*
  *|* use delete *\[*([precheck](javascript:call_link\('abenbdl_precheck.htm'\)))*\]*
  *|* use association \_Assoc { create *\[*( [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))*\[*, [precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*)*\]*;
                            *\[*[with draft](javascript:call_link\('abenbdl_association.htm'\));*\]*}
  *|* use action *\[*([precheck](javascript:call_link\('abenbdl_precheck.htm'\)))*\]* ActionName
               *\[*[RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\))*\]*
               *\[*result entity ProjResultEntity*\]*
               *\[*as ProjAction*\]*
               *\[*external 'ExtName'*\]*
               *\[*result external 'ExtResultName'*\]*
  *|* use function FunctionName
               *\[*[RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\))*\]*
               *\[*result entity ProjResultEntity*\]*
               *\[*as AliasName*\]*
               *\[*external ExtName*\]*
               *\[*result external ExtResultName*\]*
  *|* use draft
  *|* use etag
  *|* use event EventName *\[* [RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\))*\]* *\[*as AliasName*\]*
  *|* use side effects ...

Variants:

[1\. ... use create ...](#!ABAP_VARIANT_1@1@)
[2\. ... use update ...](#!ABAP_VARIANT_2@2@)
[3\. ... use delete ...](#!ABAP_VARIANT_3@3@)
[4\. ... use association ...](#!ABAP_VARIANT_4@4@)
[5\. ... use action ...](#!ABAP_VARIANT_5@5@)
[6\. ... use function ...](#!ABAP_VARIANT_6@6@)
[7\. ... use draft ...](#!ABAP_VARIANT_7@7@)
[8\. ... use etag ...](#!ABAP_VARIANT_8@8@)
[9\. ... use event ...](#!ABAP_VARIANT_9@9@)
[10\. ... use side effects ...](#!ABAP_VARIANT_10@10@)

Effect

The keyword use allows the reuse of [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"), [draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"), [RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry"), [RAP side effects](javascript:call_link\('abenrap_side_effects_glosry.htm'\) "Glossary Entry"), and [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") from the base BDEF in a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") or [interface BDEF](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry").

The following operations and characteristics can be reused:

-   [standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\))
-   [operations for associations](javascript:call_link\('abenbdl_association.htm'\))
-   [actions](javascript:call_link\('abenbdl_action.htm'\))
-   [functions](javascript:call_link\('abenbdl_function.htm'\))
-   [ETag](javascript:call_link\('abenbdl_etag.htm'\))
-   [draft handling](javascript:call_link\('abenbdl_with_draft.htm'\)), including [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\))
-   [events](javascript:call_link\('abenbdl_event.htm'\))
-   [side effects](javascript:call_link\('abenbdl_side_effects.htm'\))

Only such elements can be reused that were defined in the underlying behavior definition. The behavior is realized by mapping it to the underlying behavior; no implementation in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

On top of reusing behavior, there are two optional, new additions available for the reused behavior: precheck and augment. Both of them require an implementation in the ABAP behavior pool. They are available only in projection BDEFs, not in interface BDEFs. These additions are documented in their own topics, see

-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\))
-   [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))

For the operations and characteristics listed in this topic, no automatic inheritance takes place. They must be explicitly specified in the projection or interface BDEF. Otherwise, the respective feature is not available in the projection.

Example

The following example shows a projection BDEF that reuses standard operations and operations for associations from its underlying base BDEF. The base BDEF is DEMO\_SALES\_CDS\_BUPA\_2.

Note: This example does not fully meet the requirements of the [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

projection;
define behavior for DEMO\_RAP\_PROJECTION\_CRUD
{
  use create;
  use update;
  use delete;
  use association \_BuPa { create; }
}
define behavior for DEMO\_RAP\_PROJ\_CRUD\_CHILD
{
  use update;
  use delete;
  use association \_Address;
}

The ABAP class CL\_DEMO\_RAP\_PROJECTION\_CRUD uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). It creates, updates, and deletes BO instances.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section [Projection Behavior Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/75a43d0b332a45d2a90371290488a26a?version=sap_cross_product_abap)

Variant 1   

... use create ...

Effect

The [standard operation create](javascript:call_link\('abenbdl_standard_operations.htm'\)) can be reused in a projection or interface BDEF.

In a projection BDEF, the following additions can be added. Both of them require an implementation in an ABAP behavior pool.

-   [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))
-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\))

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 2   

... use update ...

Effect

The [standard operation update](javascript:call_link\('abenbdl_standard_operations.htm'\)) can be reused in a projection or interface BDEF.

In a projection BDEF, the following additions can be added. Both of them require an implementation in an ABAP behavior pool.

-   [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))
-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\))

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 3   

... use delete ...

Effect

The [standard operation delete](javascript:call_link\('abenbdl_standard_operations.htm'\)) can be reused in a projection or interface BDEF.

In a projection BDEF, the following addition can be added. It requires an implementation in an ABAP behavior pool.

-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\))

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 4   

... use association ...

Effect

The transactional enabling of associations can be reused in a projection or interface BDEF.

If [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") is enabled in the projection or interface BDEF, associations must be draft enabled using the syntax addition with draft.

Example: use association \_assoc { create; with draft; }

For details on the [read-by-association](javascript:call_link\('abenrap_rba_operation_glosry.htm'\) "Glossary Entry") and [create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") as well as draft-enabling of associations, see topic [RAP - Operations for Associations](javascript:call_link\('abenbdl_association.htm'\)).

In projection BDEFs, the following additions can be added. Both of them require an implementation in an ABAP behavior pool.

-   [augment](javascript:call_link\('abenbdl_augment_projection.htm'\))
-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\))

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 5   

... use action ...

Effect

The syntax element use action can be used in a projection or interface BDEF to project [actions](javascript:call_link\('abenbdl_action.htm'\)), [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)), and [determine actions](javascript:call_link\('abenbdl_determine_action.htm'\)) from the underlying base BDEF. Only such actions, draft actions, and determine actions can be reused that are defined in the underlying behavior definition. If an [authorization concept](javascript:call_link\('abenbdl_authorization.htm'\)) or [feature control](javascript:call_link\('abenbdl_actions_fc.htm'\)) is specified for an action, this is automatically passed on to the projection/interface.

Additions:

-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\)): a precheck can newly be added in the projection layer. An implementation in an ABAP behavior pool is required.
-   [RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\)): The input or the output parameter of an action can be redefined in a projection or interface BDEF. For details, see [RAP - RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\)).
-   result entity: If the base BDEF specifies an [output parameter entity](javascript:call_link\('abenbdl_action_output_para.htm'\)) using the keyword result entity, the projection BDEF must specify the projection of the result entity with the syntax result entity ProjResultEntity. Otherwise, it may happen that the action is no longer exposed if the result entity is not included in the service.
-   as: an action can be given a new [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") in the projection layer using the keyword as.
-   external: a new alias name for external usage in OData can be provided in the projection layer. This external name can be much longer than the alias name in ABAP and needs to be used when defining the corresponding UI annotations.
-   result external: a new alias name for the result entity can be provided in the projection layer. This new name is exposed in the OData metadata.

Example

The following example shows a projection BDEF that reuses the two actions Approve\_Order and Reject\_Order from the underlying base BDEF. The underlying base BDEF is DEMO\_CDS\_PURCH\_DOC\_M.

For a detailed description of the definition and implementation of the base BO, see topic [RAP - Action](javascript:call_link\('abenbdl_action1_abexa.htm'\)).

projection;
strict(2);
define behavior for DEMO\_RAP\_PROJ\_ACTION
{
  use create;
  use update;
  use delete;
  use action Approve\_Order as Approve;
  use action Reject\_Order as Reject;
}

The ABAP class CL\_DEMO\_RAP\_PROJ\_ACTION uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access a RAP business object. It performs the action Reject on one entity instance.

Result: column Status of the respective instance is filled with R for Rejected.

![Figure](abdoc_rejected.jpg)

Example

An example for reusing draft actions is shown under Variant 7, use draft.

Variant 6   

... use function ...

Effect

The syntax element use function can be used in a projection or interface BDEF to reuse [functions](javascript:call_link\('abenbdl_function.htm'\)) from the underlying base BDEF. Only such functions can be reused that are defined in the underlying behavior definition.

Additions:

-   [RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\)): The input or the output parameter of a function can be redefined in a projection or interface BDEF. For details, see [RAP - RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\)).
-   result entity: If the base BDEF specifies an [output parameter entity](javascript:call_link\('abenbdl_action_output_para.htm'\)) using the keyword result entity, the projection BDEF must specify the projection of the result entity with the syntax result entity ProjResultEntity. Otherwise, it may happen that the function is no longer exposed if the result entity is not included in the service.
-   as: a function can be given a new [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") in the projection layer using the keyword as.
-   external: a new alias name for external usage in OData can be provided in the projection layer. This external name can be much longer than the alias name in ABAP and needs to be used when defining the corresponding UI annotations.
-   result external: a new alias name for the result entity can be provided in the projection layer. This new name is exposed in the OData metadata.

Example

The following example shows a projection BDEF that reuses the functions getDetails, calculateTotal, and calculateDiscount from the underlying base BDEF. The underlying base BDEF is DEMO\_RAP\_PROJ\_FUNCTION.

For a detailed description of the definition and implementation of the base BO, see topic [RAP - function](javascript:call_link\('abenbdl_function_abexa.htm'\)).

projection;
strict(2);
define behavior for DEMO\_RAP\_PROJ\_FUNCTION
{
  use create;
  use update;
  use delete;
  use function getDetails;
  use function calculateTotal;
  use function calculateDiscount;
}

The ABAP class CL\_DEMO\_RAP\_PROJ\_FUNCTION uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access a RAP business object. It executes all three functions and displays the content of their result structures. No [modify operations](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") are carried out, the functions merely deliver information in their result structure without changing database entries.

Result:

![Figure](abdoc_function.png)

Variant 7   

... use draft ...

Effect

[RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") can be reused with the syntax element use draft. As a prerequisite, the underlying RAP BO must be draft-enabled. The [draft tables](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry"), [draft query views](javascript:call_link\('abendraft_query_view_glosry.htm'\) "Glossary Entry") (if specified), and the total ETag field are implementation details that are automatically reused and do not have to be explicitly specified in projection BDEFs and interface BDEFs. For details on RAP draft handling, see topic [RAP BDL - with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).

In a projection BDEF, [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)) should be specified explicitly using the syntax element use action. They are reused implicitly, but it is recommended that they are written explicitly. If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is switched on, it is mandatory to explicitly specify all of the draft actions.

In an interface BDEF, draft actions must be specified explicitly using the syntax element use action, as soon as draft handling is reused.

Reused associations should be explicitly draft-enabled using the syntax element with draft.

Example: use association \_assoc { create; with draft; }

For further details on draft-enabled associations, see the topic [RAP BDL - operations for associations](javascript:call_link\('abenbdl_association.htm'\)).

Example

The following example shows a projection BDEF that is based on the unmanaged, draft-enabled BDEF DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. It reuses the RAP draft handling.

For a detailed description of the definition and implementation of the base BO, see the topic [RAP BDL - with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).

projection;
strict(2);
use draft;
define behavior for DEMO\_RAP\_PROJECTION\_DRAFT
{
  use create;
  use update;
  use delete;
  use association \_child { create; with draft; }
  use action Edit;
  use action Activate;
  use action Discard;
  use action Prepare;
  use action Resume;
}
define behavior for DEMO\_RAP\_PROJECTION\_DRAFT\_CHIL
{
  use update;
  use association \_parent { with draft; }
}

The implementation is automatically reused from the base BO.

The ABAP class CL\_DEMO\_RAP\_PROJECTION\_DRAFT accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities using the draft action Activate. The content of the draft tables is written to the [persistent tables](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") and the draft tables are emptied.

Variant 8   

... use etag ...

Effect

If the base BO specifies [master or dependent ETag fields for optimistic concurrency control](javascript:call_link\('abenbdl_etag.htm'\)), these fields can be reused. The keyword use etag must be specified for each entity in the projection or interface BDEF individually. If it is not specified explicitly in the projection or interface BDEF, the [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry") functionality is lost.

Hint

Even in projection BDEFs without the syntax use etag, the value of the ETag field is updated during each modify operation. However, the syntax use etag enables an optimistic lock phase in an OData service. During the optimistic lock phase, on each modify request, the value of the ETag field is checked and if an OData client detects any changes in the ETag value, no data changes are possible. Any attempt to save data fails.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section [Optimistic Concurrency Control](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/41d72e9f31964082a7e7189f832010c3?version=sap_cross_product_abap).

Variant 9   

... use event ...

Effect

[RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry") can be reused in an interface BDEF.

Caution: Reuse is possible in interface BDEFs only. It is not possible to reuse a business event in a projection BDEF.

Additions:

-   [RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\)): The output parameter of an event can be redefined in the interface BDEF. For details, see [RAP - RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\)).
-   The optional addition as can be used to assign an [alias name](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") to the business event in question.

Variant 10   

... use side effects ...

Effect

[RAP side effects](javascript:call_link\('abenrap_side_effects_glosry.htm'\) "Glossary Entry") can be reused in a projection BDEF and in an interface BDEF.

The syntax use side effects is specified in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") and all side effects from all RAP BO entities of the underlying RAP BO are reused. However, if side effects are defined for BO properties, such as fields or actions, that do not appear in the projection at all, these side effects are filtered out and do not have any effect in the projection.

Example

The following example shows an interface BDEF that reuses the side effects from its underlying base BDEF. The base BDEF is DEMO\_RAP\_SIDE\_EFFECTS.

interface;
use draft;
use side effects;
define behavior for DEMO\_RAP\_SIDE\_EFFECTS\_I alias Root
{
  use create;
  use update;
  use delete;
  use action MyActionFC;
  use action MyAction;
  use action someDetermineAction;
  use action Edit;
  use action Activate;
  use action Discard;
  use action Resume;
  use action Prepare;
}

Continue
[RAP - RedefinedParameter](javascript:call_link\('abenbdl_redefine_param.htm'\))