  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_views.htm) → 

ABAP CDS - Table Buffering of CDS View Entities

\* Work in progress \*

The following [CDS annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") can define [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") for a CDS view entity:

-   @AbapCatalog.entityBuffer defines whether [table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_puffering.htm) is allowed.

Table buffering of CDS views is done for the associated [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") and the same prerequisites apply as for [DDIC database views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_views.htm) in ABAP Dictionary. To meet these prerequisites, a CDS view can only be buffered if the following applies:

-   It cannot contain any views
    
    (DDIC database views or CDS views) and no [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") as [data sources](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v1.htm).
    
-   It cannot have any [input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_annotate_view_para_list.htm).
-   A [client-dependent view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_client_handling_v1.htm) can use $session.client as the only [session variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm) and must use it directly. This also allows the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE to be specified to [determine client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_client_handling_v1.htm). A client-independent view must not use any session variables.
-   Key fields cannot contain [null values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry").
-   The required key fields must be listed directly in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm). Key fields that only occur as arguments of expressions cannot be evaluated.

Only the key fields of the CDS-managed DDIC view are respected in SAP buffering of [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). By default, these are not the key elements of the [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using [KEY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm) (unless the value true is specified for the view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_anno_v1.htm).

Hint

The annotations

-   [@AbapCatalog.buffering.status](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_anno_v1.htm), [@AbapCatalog.buffering.type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_anno_v1.htm), and [@AbapCatalog.buffering.numberOfKeyFields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_anno_v1.htm) are not supported in CDS view entities. They are only valid for CDS DDIC-based views.

In [client-dependent views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_client_handling_v1.htm), the client column must be explicitly included or added to the number in the specification for the annotation @AbapCatalog.buffering.numberOfKeyFields.

Example

Enables full buffering for a CDS view.

@AbapCatalog.sqlViewName: '...'
@AbapCatalog.Buffering.status: #ACTIVE
@AbapCatalog.Buffering.type: #FULL
  define view ...
   as select from ...
   { ... }