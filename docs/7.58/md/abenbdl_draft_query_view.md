  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) →  [RAP - draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_table.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20query%2C%20ABENBDL_DRAFT_QUERY_VIEW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - query

Syntax

... query DraftQueryView

Effect

Defines a [draft query view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_query_view_glosry.htm "Glossary Entry") DraftQueryView for a [RAP draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_table_glosry.htm "Glossary Entry"). query is an optional addition that can be specified directly after the RAP draft table [draft table DraftTableName](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_table.htm). It is only mandatory in the context of [RAP extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extensibility_glosry.htm "Glossary Entry"), if the BDEF in question is released with the [C0 contract for extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry"). This is described in the topic [C0 Contract Rules for Providers of RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_provider_rules_bdef.htm).

The draft query view DraftQueryView must be a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") or a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") that specifies the RAP draft table as data source after FROM. It must contain all fields from the draft table including administrative fields. Otherwise, a syntax check warning occurs.

The benefit of a draft query view is that read access limitations to the draft data can be defined using [data control language (DCL)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry"). In general, DCL objects defined for a CDS view selecting from the active database table are not applied to draft data. With a draft query view, read access restrictions for draft data can be defined.

Availability

The syntax addition query is available in [draft-enabled RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry") of type managed or unmanaged.

In a [projection business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") and in an [interface BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), the draft query view is automatically inherited from the base BDEF (if specified there). All access restrictions to draft data are reused in the projection BO and interface BO. The syntax query is not available there. For details, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Draft Query Views](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/59365c9790e84014b03c4f042a7a18dd?version=sap_cross_product_abap).

Example

The following example shows a managed and draft-enabled RAP BO.

-   It is based on the CDS view entity DEMO\_RAP\_MANAGED\_DRAFT\_QUERY. This CDS view entity has read access restrictions defined in the DCL source DEMO\_RAP\_DRAFT\_QUERY.
-   It specifies the CDS view entity DEMO\_RAP\_DRAFT\_QUERY\_VIEW as draft query view. This draft query view has read access restrictions defined in the DCL source DEMO\_RAP\_DCL\_DRAFT.

Note: This example is intentionally kept short and simple and serves demonstration purposes only. The [RAP handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") are not implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") here.

managed implementation in class bp\_demo\_rap\_managed\_draft\_quer unique;
strict ( 2 );
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_QUERY alias RootEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft query DEMO\_RAP\_DRAFT\_QUERY\_VIEW
lock master
total etag Timestamp
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly : update ) KeyFieldRoot;
  draft action Activate optimized;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare;
  mapping for demo\_dbtab\_root
    {
      KeyFieldRoot  = key\_field;
      DataFieldRoot = data\_field;
      CharFieldRoot = char\_field;
      Timestamp     = crea\_date\_time;
      LastChangedAt = lchg\_date\_time;
    }
}

The class CL\_DEMO\_RAP\_DRAFT\_QUERY\_VIEW accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") and performs the following operations:

-   It creates four active entity instances using the EML statement [MODIFY ENTITIES CREATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).
-   It reads these active instances, first with the EML statement [READ ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm), and afterwards with ABAP SQL [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm). In the EML read, the DCL access condition is applied and the result set is filtered according to the access condition. Some data sets are filtered out. By contrast, the ABAP SQL SELECT displays all instances that were saved on the database.
-   It creates four draft instances using the EML statement MODIFY ENTITIES CREATE.
-   It reads these draft instances, first with the EML statement READ ENTITIES, and afterwards with ABAP SQL SELECT. In the EML read, the DCL access condition attached to the draft query view is applied and the result set is filtered according to the access condition. Some data sets are filtered out. By contrast, the ABAP SQL SELECT displays all instances that were saved in the RAP draft table.
-   Finally, the RAP draft table is cleared using the draft action [Discard](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm).

Executable Example

The example above is explained in detail in the executable example [RAP BDL - RAP BO with DCL Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_abexa.htm).

Continue
![Example](exa.gif "Example") [RAP - RAP BO with DCL Access Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_abexa.htm)