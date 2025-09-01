  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20draft%20table%2C%20ABENBDL_DRAFT_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - draft table

Syntax

...
draft table DraftTableName *\[*[query DraftQueryView](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_view.htm)*\]*
...

Effect

A draft table is only relevant for draft-enabled RAP BOs and for these, it is mandatory. It specifies the [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry") used to store draft data. The [draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_table_glosry.htm "Glossary Entry") is derived from the corresponding CDS entity. Additionally, it contains some technical information the [RAP transactional engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry") needs to handle the draft. The technical information is added automatically with the draft admin include.

Draft table:

define table DraftTable {
  key client        : abap.clnt not null;
    ...
    "%admin"        : include sych\_bdl\_draft\_admin\_inc;}

The draft admin include is the predefined [DDIC include structure](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_include_structure.htm) SYCH\_BDL\_DRAFT\_ADMIN\_INC.

The optional addition [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_view.htm) can be used to specify a [draft query view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_query_view_glosry.htm "Glossary Entry"). A draft query view allows developers to define read access limitations for draft data based on the [data control language (DCL)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_dcl_glosry.htm "Glossary Entry"). This addition is optional. Only in the context of [RAP extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extensibility_glosry.htm "Glossary Entry") is it a mandatory prerequisite, if the BDEF in question is released with the [C0 contract for extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_glosry.htm "Glossary Entry"). For further details, see topic [RAP - query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_view.htm).

In a [projection business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), the draft table is automatically inherited and does not need to be explicitly defined. For details, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, topic [Draft Database Table](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/0c86bebb4c7f47aaa8eda6068176abd8?version=sap_cross_product_abap).

Hints

-   The draft database table can be generated automatically via a quick fix in the behavior definition, which is offered as soon as RAP draft handling is enabled for the business object.
-   When using [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) for a draft-enabled RAP BO, it is mandatory that the draft table has an additional key field DRAFTUUID of data type raw(16).
-   A draft table is a regular [DDIC database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry") and can be accessed as such. Access with [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") and [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") is technically possible, but not recommended. It is recommended that a draft table is accessed using the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry") only, for example, with [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry"), so that the draft metadata get updated automatically.
-   Access with [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") is not recommended either.

Example

The following example demonstrates why ABAP SQL is not suitable to access draft database tables.

It shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_DRAFT\_1. The BDEF is draft-enabled and it defines the persistent database table DEMO\_DBTAB\_ROOT and the draft database table DEMO\_DBTAB\_DRAFT.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
with draft;
define behavior for DEMO\_RAP\_MANAGED\_DRAFT\_1 alias ParentEntity
persistent table demo\_dbtab\_root
draft table demo\_dbtab\_draft
lock master
total etag Timestamp
etag master LastChangedAt
{
  create;
  update;
  delete;
  field (readonly:update) KeyFieldRoot;
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

The class CL\_DEMO\_RAP\_MANAGED\_DRAFT\_1 accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry"). It contains the same code block twice: first, it clears the draft database table using the ABAP SQL statement DELETE FROM. Then, it creates a new draft instance with the key value '3' using the EML statement MODIFY ENTITIES and commits this entity instance to the draft database table.

Code snippet - this code block is repeated twice:

DELETE FROM demo\_dbtab\_draft.
MODIFY ENTITIES OF demo\_rap\_managed\_draft\_1
      ENTITY ParentEntity
        CREATE FROM
        VALUE #( ( %is\_draft = if\_abap\_behv=>mk-on
        %control-KeyFieldRoot = if\_abap\_behv=>mk-on
        %data-KeyFieldRoot = 3 ) )
  REPORTED FINAL(create\_reported)
  FAILED FINAL(create\_failed)
  MAPPED FINAL(create\_mapped).
COMMIT ENTITIES.

The first time, this entry is written to the draft database table and displayed as screen output. The second time, however, the creation of the new draft instance fails and the draft database table remains empty. The reason is that the draft database table cannot be emptied using ABAP SQL. It contains metadata which cannot be deleted with ABAP SQL and therefore, the key is considered to be a duplicate, even though the draft database table was cleared.

![Figure](abdoc_draft_table.png)

This demonstrates why the draft database table should only be accessed using the RAP framework, in this case, using either the EML statement [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) or the [draft action Discard](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm) to clear all entries from the draft database table.

The class CL\_DEMO\_RAP\_MANAGED\_DRAFT\_2 demonstrates how to correctly clear a draft database table:

-   It creates a new draft instance with the key value '4' and discards it using the draft action Discard.
-   Then, it successfully creates the same instance again.
-   The instance is deleted again using the EML statement DELETE FROM and created once again.

Result: the creation of a new draft instance with the same key value works three times in a row, because Discard and DELETE FROM clear the entries of the draft table as well as the metadata.

![Figure](abdoc_draft_table.jpg)
Continue
[RAP - query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_view.htm)