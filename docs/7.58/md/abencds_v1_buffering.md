  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_views.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20-%20Table%20Buffering%20of%20CDS%20DDIC-Based%20Views%2C%20ABENCDS_V1_BUFFERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

ABAP CDS - Table Buffering of CDS DDIC-Based Views

The following [CDS annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") can define [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") for a CDS view linked with a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"):

-   [@AbapCatalog.buffering.status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm) defines whether and how [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_puffering.htm) is allowed.
-   [@AbapCatalog.buffering.type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm) determines the [buffering type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm).
-   [@AbapCatalog.buffering.numberOfKeyFields](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm) determines the number of key fields covered if [generic buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_generic_buffering.htm) is used.

Table buffering of CDS views is done for the associated [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") and the same prerequisites apply as for [DDIC database views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_views.htm) in ABAP Dictionary. To meet these prerequisites, a CDS view can only be buffered if the following applies:

-   It cannot contain any views
    
    (DDIC database views or CDS views) and no [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") as [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v1.htm).
    
-   It cannot have any [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v1.htm).
-   A [client-dependent view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm) can use $session.client as the only [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v1.htm) and must use it directly. This also allows the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE to be specified to [determine client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm). A client-independent view must not use any session variables.
-   Key fields cannot contain [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry").
-   The required key fields must be listed directly in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_list_v1.htm). Key fields that only occur as arguments of expressions cannot be evaluated.
-   No database tables can be accessed where [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") is enabled.

Only the key fields of the CDS-managed DDIC view (obsolete) are respected in SAP buffering of [CDS-managed DDIC views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). Since ABAP release 7.58, the key fields of the CDS entity and the CDS-managed DDIC views (obsolete) are identical by default.

Hints

-   In [client-dependent views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_client_handling_v1.htm), the client column must be explicitly included or added to the number in the specification for the annotation @AbapCatalog.buffering.numberOfKeyFields.
-   For [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), table buffering is [defined](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_buffering.htm) directly for the CDS entity. A client column is not counted as a key field here.
-   In contrast to [table buffering of CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_buffering.htm), where the prerequisites are real restrictions for the view, for DDIC-based views that do not meet the prerequisites buffering is bypassed implicitly by ABAP SQL.

Example

Enables full buffering for a CDS view.

@AbapCatalog.sqlViewName: '...'
@AbapCatalog.Buffering.status: #ACTIVE
@AbapCatalog.Buffering.type: #FULL
  define view ...
   as select from ...
   { ... }