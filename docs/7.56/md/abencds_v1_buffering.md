  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) → 

ABAP CDS - Table Buffering of CDS DDIC-Based Views

The following [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can define [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") for a CDS view linked with a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"):

-   [@AbapCatalog.buffering.status](javascript:call_link\('abencds_view_anno_v1.htm'\)) defines whether and how [table buffering](javascript:call_link\('abensap_puffering.htm'\)) is allowed.
-   [@AbapCatalog.buffering.type](javascript:call_link\('abencds_view_anno_v1.htm'\)) determines the [buffering type](javascript:call_link\('abenbuffer_type.htm'\)).
-   [@AbapCatalog.buffering.numberOfKeyFields](javascript:call_link\('abencds_view_anno_v1.htm'\)) determines the number of key fields covered if [generic buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\)) is used.

Table buffering of CDS views is done for the associated [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") and the same prerequisites apply as for [DDIC database views](javascript:call_link\('abenddic_database_views.htm'\)) in ABAP Dictionary. To meet these prerequisites, a CDS view can only be buffered if the following applies:

-   It cannot contain any views
    
    (DDIC database views or CDS views) and no [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as [data sources](javascript:call_link\('abencds_data_source_v1.htm'\)).
    
-   It cannot have any [input parameters](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)).
-   A [client-dependent view](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) can use $session.client as the only [session variable](javascript:call_link\('abencds_session_variable_v1.htm'\)) and must use it directly. This also allows the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE to be specified to [determine client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)). A client-independent view must not use any session variables.
-   Key fields cannot contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").
-   The required key fields must be listed directly in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)). Key fields that only occur as arguments of expressions cannot be evaluated.

Only the key fields of the CDS-managed DDIC view are respected in SAP buffering of [CDS-managed DDIC views](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry"). By default, these are not the key elements of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined using [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) (unless the value true is specified for the view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_view_anno_v1.htm'\)).

Hint

In [client-dependent views](javascript:call_link\('abencds_view_client_handling_v1.htm'\)), the client column must be explicitly included or added to the number in the specification for the annotation @AbapCatalog.buffering.numberOfKeyFields.

Example

Enables full buffering for a CDS view.

@AbapCatalog.sqlViewName: '...'
@AbapCatalog.Buffering.status: #ACTIVE
@AbapCatalog.Buffering.type: #FULL
  define view ...
   as select from ...
   { ... }