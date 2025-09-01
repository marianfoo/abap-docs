  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) → 

ABAP CDS - Table Buffering of CDS DDIC-Based Views

The following [CDS annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotation_glosry.htm "Glossary Entry") can define [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffering_glosry.htm "Glossary Entry") for a CDS view associated with a [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"):

-   [@AbapCatalog.buffering.status](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) defines whether and how [table buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_puffering.htm) is allowed.

-   [@AbapCatalog.buffering.type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) determines the [buffering type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuffer_kind.htm).

-   [@AbapCatalog.buffering.numberOfKeyFields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) determines the number of key fields covered if [generic buffering](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuffer_generic_buffering.htm) is used.

Table buffering of CDS views is done for the associated [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") and the same prerequisites apply as for [DDIC database views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_views.htm) in ABAP Dictionary. To meet these prerequisites, a CDS view can only be buffered if the following applies:

-   It cannot contain any views
    (DDIC database views or CDS views) and no [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry") as [data sources](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_data_source_v1.htm).

-   It cannot have any [input parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_annotate_view_para_list.htm).

-   A [client-dependent view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm) can use $session.client as the only [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v1.htm) and must use it directly. This also allows the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE to be specified to [determine client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm). A client-independent view must not use any session variables.

-   Key fields cannot contain [null values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry").

-   The required key fields must be listed directly in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm). Key fields that only occur as arguments of expressions cannot be evaluated.

Only the key fields of the CDS-managed DDIC view are respected in SAP buffering of [CDS-managed DDIC views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). By default, these are not the key elements of the [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using [KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm) (unless the value true is specified for the view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm).

Hint

In [client-dependent views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_client_handling_v1.htm), the client column must be explicitly included or added to the number in the specification for the annotation @AbapCatalog.buffering.numberOfKeyFields.

Example

Enables full buffering for a CDS view.

@AbapCatalog.sqlViewName: '...'
@AbapCatalog.Buffering.status: #ACTIVE
@AbapCatalog.Buffering.type: #FULL
  define view ...
   as select from ...
   { ... }