  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - CDS Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - with draft, ABENBDL_WITH_DRAFT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

CDS BDL - with draft

Syntax

...
with draft;
...

Effect

The addition with draft enables [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") for a [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry"). It is added in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") as it draft-enables the entire business object. It is not possible to implement draft capabilities for individual entities within a business object.

RAP draft handling is in all scenarios completely managed by the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry"). The application developer is not responsible for how draft data is written to the [draft database table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry"). However, implementation exits exist that allow scenario-specific capabilities to be implemented.

In [projection BOs](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), draft handling can be reused from the [projected BO](javascript:call_link\('abenrap_projected_bo_glosry.htm'\) "Glossary Entry") using the syntax addition use draft. For details, see topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).

Unmanaged RAP BO

In [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), the following restrictions apply:

-   [Late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) is not supported.
-   Associations that use NOT in the binding condition cannot be draft-enabled.
-   The following [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") cannot be executed on [draft instances](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry"):
    -   [instance factory actions](javascript:call_link\('abenbdl_action.htm'\))
    -   direct [create operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) on child instances (there is no syntax error in BDL, but a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") occurs at runtime).

Dependencies

The addition with draft enables draft handling. There are several related syntax elements in the behavior definition:

-   [draft table](javascript:call_link\('abenbdl_draft_table.htm'\)):
    
    A [RAP draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry") is required for storing [draft instances](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry"). Defined using the keyword draft table DraftTableName. Mandatory for draft-enabled BOs.
    
-   [total etag](javascript:call_link\('abenbdl_etag.htm'\)):
    
    The total ETag is a designated field in a draft-enabled business object that indicates changes between the active and the draft version. Total ETag is mandatory for draft-enabled implementations.
    
-   [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)):
    
    The [draft actions](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Edit, Activate, Discard, Resume, and Prepare are available for draft business objects. They are implicitly available as soon as a business object is draft-enabled, but can be declared explicitly.
    
-   [draft-enabled associations](javascript:call_link\('abenbdl_association.htm'\)):
    
    A draft-enabled association retrieves active data if it is followed by an [active instance](javascript:call_link\('abenrap_active_instance_glosry.htm'\) "Glossary Entry") and draft data if is followed by a [draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry"). Mandatory for draft-enabled BOs.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic Draft.

Hints

If the draft action Edit is enabled implicitly, then it automatically comes with [instance feature control](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry") and an implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required. In the following examples, it is enabled explicitly without feature control, so that both implementation scenarios (managed and unmanaged) can be handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

Example - Managed

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

The program DEMO\_RAP\_MANAGED\_DRAFT accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") and the draft tables are emptied.

Example - Unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_DRAFT\_ROOT. It is draft-enabled and it has all mandatory syntax elements.

The draft is completely handled by the RAP framework; the ABAP behavior pool implements the business logic only for the active entity.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_draft\_ro unique;
strict(2);
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
  delete;
  association \_parent { with draft; }
  field ( readonly ) keyfield;
}

The program DEMO\_RAP\_UNMANAGED\_DRAFT accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the following steps:

-   It creates two new draft instances of the parent entity and two new draft instances of the child entity and displays the content of the draft tables.
-   Then it activates the draft entities. The content of the draft tables is written to the [persistent tables](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") and the draft tables are emptied.

Executable Example

-   [CDS BDL - draft actions Edit, Discard, Prepare](javascript:call_link\('abenbdl_draft_action2_abexa.htm'\))
-   [CDS BDL - draft action Activate](javascript:call_link\('abenbdl_draft_action1_abexa.htm'\))