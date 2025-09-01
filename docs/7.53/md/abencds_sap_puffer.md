  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - Views](javascript:call_link\('abenddic_cds_views.htm'\)) → 

ABAP CDS - Table Buffering of CDS Views

For a CDS view in ABAP CDS, the following [CDS annotations](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") can be used to specify how [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") works:

-   [@AbapCatalog.buffering.status](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) defines whether and how [table buffering](javascript:call_link\('abensap_puffering.htm'\)) is allowed.

-   [@AbapCatalog.buffering.type](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) determines the [buffering type](javascript:call_link\('abenbuffer_kind.htm'\)).

-   [@AbapCatalog.buffering.numberOfKeyFields](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) determines the number of key fields covered if [generic buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\)) is used.

Table buffering of CDS views is done for the [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") derived from the data definition of the CDS view, and the same prerequisites apply as for classic [database views](javascript:call_link\('abenddic_database_views.htm'\)). To meet these prerequisites, a CDS view can only be buffered if the following applies:

-   It cannot contain any views
    (database views or CDS views) and cannot contain [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") as [data sources](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   It cannot have any [input parameters](javascript:call_link\('abencds_f1_annotate_view_para_list.htm'\)).

-   A [client-specific view](javascript:call_link\('abencds_client_handling.htm'\)) can use $session.client as the only [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) and must use it directly. This also allows the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE to be specified to [determine client handling](javascript:call_link\('abencds_client_handling.htm'\)). A cross-client view must not use any session variables.

-   Key fields cannot contain [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

-   The required key fields must be listed directly in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)). Key fields that only occur as arguments of expressions cannot be evaluated.

Only the key fields of the CDS database view are respected in SAP buffering of [CDS database views](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). By default, these are not the key elements of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") defined using [KEY](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) (unless the value true is specified for the view annotation [AbapCatalog.preserveKey](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)).

Note

In [client-specific views](javascript:call_link\('abencds_client_handling.htm'\)), the client column must be explicitly included or added to the number in the specification for the annotation @AbapCatalog.buffering.numberOfKeyFields.

Example

Enables full buffering for a CDS view.

@AbapCatalog.sqlViewName: '...'
@AbapCatalog.Buffering.status: #ACTIVE
@AbapCatalog.Buffering.type: #FULL
  define view ...
   as select from ...
   { ... }