---
title: "CDS BDL - with draft"
description: |
  Syntax ... with draft; ... Effect The addition with draft enables RAP draft handling(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm 'Glossary Entry') for a business object(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_object
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm"
abapFile: "abenbdl_with_draft.htm"
keywords: ["update", "delete", "do", "if", "try", "class", "data", "abenbdl", "with", "draft"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - CDS behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_bdef_header.htm) → 

CDS BDL - with draft

Syntax

...
with draft;
...

Effect

The addition with draft enables [RAP draft handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") for a [business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_object_glosry.htm "Glossary Entry"). It is added in the [behavior definition header](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef_header_glosry.htm "Glossary Entry") as it draft-enables the entire business object. It is not possible to implement draft capabilities for individual entities within a business object.

RAP draft handling is in all scenarios completely managed by the [RAP transactional engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry"). The application developer is not responsible for how draft data is written to the [draft database table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry"). However, implementation exits exist that allow scenario-specific capabilities to be implemented.

In [projection BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), draft handling can be reused from the [projected BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projected_bo_glosry.htm "Glossary Entry") using the syntax addition use draft. For details, see topic [CDS BDL - use, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_use_projection.htm).

Unmanaged RAP BO

In [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), the following restrictions apply:

-   [Late numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_late_numbering.htm) is not supported.
-   Associations that use NOT in the binding condition can't be draft-enabled.
-   The following [RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") can't be executed on [draft instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry"):
    -   [instance factory actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm)
    -   direct [create operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) on child instances (there's no syntax error in BDL, but a [short dump](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshort_dump_glosry.htm "Glossary Entry") occurs at runtime).

Dependencies

The addition with draft enables draft handling. There are several related syntax elements in the behavior definition:

-   [draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_table.htm):
    
    A [RAP draft table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_table_glosry.htm "Glossary Entry") is required for storing [draft instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry"). Defined using the keyword draft table DraftTableName. Mandatory for draft-enabled BOs.
    
-   [total etag](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_etag.htm):
    
    The total ETag is a designated field in a draft-enabled business object that indicates changes between the active and the draft version. Total ETag is mandatory for draft-enabled implementations.
    
-   [draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm):
    
    The [draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_draft_action_glosry.htm "Glossary Entry") Edit, Activate, Discard, Resume, and Prepare are available for draft business objects. They are implicitly available as soon as a business object is draft-enabled, but can be declared explicitly.
    
-   [draft-enabled associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm):
    
    A draft-enabled association retrieves active data if it is followed by an [active instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_active_instance_glosry.htm "Glossary Entry") and draft data if is followed by a [draft instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry"). Mandatory for draft-enabled BOs.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Draft.

Hints

If the draft action Edit is enabled implicitly, then it automatically comes with [instance feature control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_ins_feature_control_glosry.htm "Glossary Entry") and an implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required. In the following examples, it is enabled explicitly without feature control, so that both implementation scenarios (managed and unmanaged) can be handled by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry").

Example - managed

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_DRAFT\_ROOT. It is draft-enabled and it has all mandatory syntax elements.

The draft is completely handled by the RAP framework; no implementation in the ABAP behavior pool is required.

managed;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_ROOT alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  draft action Edit;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    Timestamp = crea\_date\_time;
    LastChangedAt = lchg\_date\_time;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_CHILD alias ChildEntity
persistent table demo\_dbtab\_child
draft table demo\_draft\_child
lock dependent by \_parent
etag dependent by \_parent
{
  update;
  delete;
  field ( readonly ) KeyField;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataFieldChild = data\_field;
  }
}

The program DEMO\_RAP\_MANAGED\_DRAFT accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") and the draft tables are emptied.

Example - unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. It is draft-enabled and it has all mandatory syntax elements.

The draft is completely handled by the RAP framework; the ABAP behavior pool implements the business logic only for the active entity.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;
strict;
with draft;
define behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT alias ParentEntity
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
authorization master ( global, instance )
{
  create;
  update;
  delete;
  draft action Activate;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare;
  association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_UNMANAGED\_DRAFT\_CHILD alias ChildEntity
draft table demo\_draft\_child
lock dependent by \_parent
etag dependent by \_parent
authorization dependent by \_parent
{
  update;
  association \_parent { create; with draft; }
  field ( readonly ) keyfield;
}

The program DEMO\_RAP\_UNMANAGED\_DRAFT accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") and the draft tables are emptied.

Executable Example

-   [CDS BDL - draft actions Edit, Discard, Prepare](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action2_abexa.htm)
-   [CDS BDL - draft action Activate](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action1_abexa.htm)