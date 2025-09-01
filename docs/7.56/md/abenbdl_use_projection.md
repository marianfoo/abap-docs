---
title: "CDS BDL - use, projection BDEF"
description: |
  Syntax ... use create ( augment(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm), precheck(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm))  use update ( augment(https://help.sap.com/doc/abapdocu_
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm"
abapFile: "abenbdl_use_projection.htm"
keywords: ["update", "delete", "do", "if", "try", "data", "abenbdl", "use", "projection"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [CDS BDL - CDS projection behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_projection_bo.htm) →  [CDS BDL - entity behavior definition, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_projection.htm) →  [CDS BDL - entity behavior body, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body_projection.htm) → 

CDS BDL - use, projection BDEF

Syntax

... use create *\[*( [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)*\[*, [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*)*\]*
  *|* use update *\[*( [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)*\[*, [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*)*\]*
  *|* use delete *\[*([precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm))*\]*
  *|* use association \_Assoc { create *\[*( [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)*\[*, [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)*\]*)*\]*;
                            *\[*[with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm);*\]*}
  *|* use action *\[*([precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm))*\]* ActionName
               *\[*result entity ProjResultEntity*\]*
               *\[*as ProjAction*\]*
               *\[*external 'ExtName'*\]*
               *\[*result external 'ExtResultName'*\]*
  *|* use function FunctionName
               *\[*result entity ProjResultEntity*\]*
               *\[*as AliasName*\]*
               *\[*external ExtName*\]*
               *\[*result external ExtResultName*\]*
  *|* use draft
  *|* use etag ...

Variants:

[1\. ... use create ...](#!ABAP_VARIANT_1@1@)
[2\. ... use update ...](#!ABAP_VARIANT_2@2@)
[3\. ... use delete ...](#!ABAP_VARIANT_3@3@)
[4\. ... use association ...](#!ABAP_VARIANT_4@4@)
[5\. ... use action ...](#!ABAP_VARIANT_5@5@)
[6\. ... use function ...](#!ABAP_VARIANT_6@6@)
[7\. ... use draft ...](#!ABAP_VARIANT_7@7@)
[8\. ... use etag ...](#!ABAP_VARIANT_8@8@)

Effect

The keyword use allows the reuse of [entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry"), [draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry"), and [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") from the base BDEF in the [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

The following operations and characteristics can be reused:

-   [standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm)
-   [operations for associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm)
-   [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm)
-   [functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm)
-   [ETag](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm)
-   [draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm), including [draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm)

Only such elements can be reused that were defined in the underlying behavior definition. The behavior is realized by mapping it to the underlying behavior; no implementation in an [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.

On top of reusing behavior, there are two optional, new additions available for the reused behavior: precheck and augment. Both of them require an implementation in the ABAP behavior pool. These additions are documented in their own topics, see

-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)
-   [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)

For the operations and characteristics listed in this topic, no automatic inheritance takes place. They must be explicitly specified in the projection BDEF. Otherwise, the respective feature is not available in the projection.

Example

The following example shows a projection BDEF that reuses standard operations and operations for associations from its underlying base BDEF. The base BDEF is DEMO\_SALES\_CDS\_BUPA\_2.

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

The ABAP program DEMO\_RAP\_PROJECTION\_CRUD uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access a [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry"). It creates, updates, and deletes BO instances.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Projection Behavior Definition

Variant 1   

... use create ...

Effect

The [standard operation create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) can be reused in a projection BDEF.

The following additions can be added. Both of them require an implementation in an ABAP behavior pool.

-   [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)
-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 2   

... use update ...

Effect

The [standard operation update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) can be reused in a projection BDEF.

The following additions can be added. Both of them require an implementation in an ABAP behavior pool.

-   [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)
-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 3   

... use delete ...

Effect

The [standard operation delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) can be reused in a projection BDEF.

The following addition can be added. It requires an implementation in an ABAP behavior pool.

-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 4   

... use association ...

Effect

The transactional enabling of associations can be reused in a projection BDEF.

If [RAP draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") is enabled in the projection BDEF, associations must be draft enabled using the syntax addition with draft.

Example: use association \_assoc { create; with draft; }

For details on the [read-by-association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") and [create-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") as well as draft-enabling of associations, see topic [CDS BDL - operations for associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm).

The following additions can be added. Both of them require an implementation in an ABAP behavior pool.

-   [augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm)
-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm)

Example: see above, projection BDEF DEMO\_RAP\_PROJECTION\_CRUD.

Variant 5   

... use action ...

Effect

The syntax element use action can be used in a projection BDEF to project [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm), [draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm), and [determine actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm) from the underlying base BDEF. Only such actions, draft actions, and determine actions can be reused that are defined in the underlying behavior definition. If an [authorization concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm) or [feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) is specified for an action, this is automatically passed on to the projection.

Additions:

-   [precheck](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_precheck.htm): a precheck can newly be added in the projection layer. An implementation in an ABAP behavior pool is required.
-   result entity: If the base BDEF specifies an [output parameter entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_output_para.htm) using the keyword result entity, the projection BDEF must specify the projection of the result entity with the syntax result entity ProjResultEntity. Otherwise, it may happen that the action is no longer exposed if the result entity is not included in the service.
-   as: an action can be given a new [alias name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry") in the projection layer using the keyword as.
-   external: a new alias name for external usage in OData can be provided in the projection layer. This external name can be much longer than the alias name in ABAP and needs to be used when defining the corresponding UI annotations.
-   result external: a new alias name for the result entity can be provided in the projection layer. This new name is exposed in the OData metadata.

Example

The following example shows a projection BDEF that reuses the two actions Approve\_Order and Reject\_Order from the underlying base BDEF. The underlying base BDEF is DEMO\_CDS\_PURCH\_DOC\_M.

For a detailed description of the definition and implementation of the base BO, see topic [CDS BDL - action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action1_abexa.htm).

projection;
strict;
define behavior for DEMO\_RAP\_PROJ\_ACTION
{
  use create;
  use update;
  use delete;
  use action Approve\_Order as Approve;
  use action Reject\_Order as Reject;
}

The ABAP program DEMO\_RAP\_PROJ\_ACTION uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access a RAP business object. It performs the action Reject on one entity instance.

Result: column Status of the respective instance is filled with R for Rejected.

![Figure](bdoc_rejected.jpg)

Example

An example for reusing draft actions is shown under Variant 7, use draft.

Variant 6   

... use function ...

Effect

The syntax element use function can be used in a projection BDEF to reuse [functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function.htm) from the underlying base BDEF. Only such functions can be reused that are defined in the underlying behavior definition.

Additions:

-   result entity: If the base BDEF specifies an [output parameter entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_output_para.htm) using the keyword result entity, the projection BDEF must specify the projection of the result entity with the syntax result entity ProjResultEntity. Otherwise, it may happen that the function is no longer exposed if the result entity is not included in the service.
-   as: a function can be given a new [alias name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalias_glosry.htm "Glossary Entry") in the projection layer using the keyword as.
-   external: a new alias name for external usage in OData can be provided in the projection layer. This external name can be much longer than the alias name in ABAP and needs to be used when defining the corresponding UI annotations.
-   result external: a new alias name for the result entity can be provided in the projection layer. This new name is exposed in the OData metadata.

Example

The following example shows a projection BDEF that reuses the functions getDetails, calculateTotal, and calculateDiscount from the underlying base BDEF. The underlying base BDEF is DEMO\_RAP\_PROJ\_FUNCTION.

For a detailed description of the definition and implementation of the base BO, see topic [CDS BDL - function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_function_abexa.htm).

projection;
strict;
define behavior for DEMO\_RAP\_PROJ\_FUNCTION //alias <alias\_name>
{
  use create;
  use update;
  use delete;
  use function getDetails;
  use function calculateTotal;
  use function calculateDiscount;
}

The ABAP program DEMO\_RAP\_PROJ\_FUNCTION uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access a RAP business object. It executes all three functions and displays the content of their result structures. No [modify operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") are carried out, the functions merely deliver information in their result structure without changing database entries.

Result:

![Figure](bdoc_function.png)

Variant 7   

... use draft ...

Effect

[RAP draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") can be reused with the syntax element use draft. As a prerequisite, the underlying RAP BO must be draft-enabled. The [draft tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry") and the total ETag field are implementation details that are automatically reused and do not have to be explicitly specified. For details on RAP draft handling, see topic [CDS BDL - with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm).

[Draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm) should be specified explicitly in a projection BDEF using the syntax element use action. They are reused implicitly, but it is recommended that they are written explicitly. If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is switched on, it is mandatory to explicitly specify all of the draft actions.

Reused associations should be explicitly draft-enabled in a projection BDEF using the syntax element with draft.

Example: use association \_assoc { create; with draft; }

For further details on draft-enabled associations, see the topic [CDS BDL - operations for associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm).

Example

The following example shows a projection BDEF that is based on the unmanaged, draft-enabled BDEF DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. It reuses the RAP draft handling.

For a detailed description of the definition and implementation of the base BO, see the topic [CDS BDL - with draft](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm).

projection;
strict;
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

The ABAP program DEMO\_RAP\_PROJECTION\_DRAFT accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities using the draft action Activate. The content of the draft tables is written to the [persistent tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") and the draft tables are emptied.

Variant 8   

... use etag ...

Effect

If the base BO specifies [master or dependent ETag fields for optimistic concurrency control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm), these fields can be reused. The keyword use etag must be specified for each entity in the projection BDEF individually. If it is not specified explicitly in the projection BDEF, the [optimistic concurrency control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenoptimistic_conc_control_glosry.htm "Glossary Entry") functionality is lost.

Hint

Even in projection BDEFs without the syntax use etag, the value of the ETag field is updated during each modify operation. However, the syntax use etag enables an optimistic lock phase in an OData service. During the optimistic lock phase, on each modify request, the value of the ETag field is checked and if an OData client detects any changes in the ETag value, no data changes are possible. Any attempt to save data fails.

Further Information

Development guide for the ABAP RESTful Application Programming Model, section Optimistic Concurrency Control.