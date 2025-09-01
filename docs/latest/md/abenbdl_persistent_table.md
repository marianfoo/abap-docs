---
title: "RAP - persistent table"
description: |
  Syntax ... persistent table TableName ... Effect DDIC database table(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm 'Glossary Entry') a RAP BO(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm 'Glossary Entry') is
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_persistent_table.htm"
abapFile: "abenbdl_persistent_table.htm"
keywords: ["update", "delete", "do", "if", "case", "try", "data", "types", "abenbdl", "persistent", "table"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20persistent%20table%2C%20ABENBDL_PERSISTENT_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - persistent table

Syntax

...
persistent table TableName
...

Effect

[DDIC database table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_db_table_glosry.htm "Glossary Entry") a [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") is based on. The [data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_data_glosry.htm "Glossary Entry") on the [persistent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") is processed by [RAP BO operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry").

Available only in [managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") and in these, it is mandatory to specify a persistent table. An exception is raised when the option [unmanaged save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) is chosen. In case of an [unmanaged save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_add_save_glosry.htm "Glossary Entry"), a persistent table must not be defined.

In a [projection business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), the persistent table is automatically inherited.

Requirements:

-   If the [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") specifies an [ETag field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_etag.htm), the persistent table requires a field that is used to describe the state of the database table. This can be, for example, a time stamp field.
    
    If this field is annotated in CDS with the relevant annotation, such as @Semantics.systemDateTime.localInstanceLastChangedAt: true, then it is automatically updated by the [RAP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_framework_glosry.htm "Glossary Entry").
    
-   If the RAP BO is [draft-enabled](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) and has a [total ETag field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_etag.htm), the persistent table requires a field that is updated whenever the BO instance is changed. This must be a separate field from the ETag master field. The total ETag field is necessary on the [lock master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_locking.htm).
    
    If the total ETag field is a time stamp field and if it is annotated in the CDS data model with the annotation @Semantics.systemDateTime.lastChangedAt, then this field is updated automatically by the RAP framework.
    
-   If the primary key field is of type [raw(16)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) [(UUID)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuuid_glosry.htm "Glossary Entry"), then it can be filled by the RAP framework using (numbering:managed) [(early internal numbering)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_numbering.htm).
-   If you decide to use UUIDs as primary keys, the following rules apply:
    -   Every entity needs a field for the UUID key.
    -   Child entities must have a field for their parent's UUID. This is required to define associations for the composition relationship.
    -   Any child entity that has no parent-child relationship with the lock master entity must have a field with the lock master's UUID. This is important to define associations to the lock master entity, which is required for ETag handling.

Hints

-   If the field names of the persistent database table differ from the field names of the CDS views, then a [type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) is required in the entity behavior body. This can be the case for example, if the fields of the CDS data model have [alias names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry").
-   The RAP framework manages writing changes to the persistent database table, including [database LUWs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry"), [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm), and [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry").

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. It specifies persistent database tables for the parent and the child entity. Since the field names of the database tables have alias names in the CDS views, a [type mapping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_type_mapping.htm) is specified that maps the fields of the persistent database table to the field names of the CDS views.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root
persistent table demo\_dbtab\_root
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_ext { create; }
  field ( readonly:update ) KeyFieldRoot;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    DecFieldRoot = dec\_field;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child
persistent table demo\_dbtab\_child
lock dependent by \_parent
{
  update;
  delete;
  association \_parent { }
  field ( readonly:update ) KeyField, KeyFieldChild;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}