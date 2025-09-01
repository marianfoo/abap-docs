---
title: "ABAP CDS - Table Buffering of CDS DDIC-Based Views"
description: |
  The following CDS annotations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm 'Glossary Entry') can define table buffering(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm 'Glossary Entry') for a CDS view linked wi
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_buffering.htm"
abapFile: "abencds_v1_buffering.htm"
keywords: ["select", "do", "if", "try", "data", "abencds", "buffering"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS - Table Buffering of CDS DDIC-Based Views, ABENCDS_V1_BUFFERING, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS - Table Buffering of CDS DDIC-Based Views

The following [CDS annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") can define [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") for a CDS view linked with a [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"):

-   [@AbapCatalog.buffering.status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) defines whether and how [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_puffering.htm) is allowed.
-   [@AbapCatalog.buffering.type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) determines the [buffering type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_type.htm).
-   [@AbapCatalog.buffering.numberOfKeyFields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) determines the number of key fields covered if [generic buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_generic_buffering.htm) is used.

Table buffering of CDS views is done for the associated [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") and the same prerequisites apply as for [DDIC database views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_views.htm) in ABAP Dictionary. To meet these prerequisites, a CDS view can only be buffered if the following applies:

-   It cannot contain any views
    
    (DDIC database views or CDS views) and no [CDS table functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry") as [data sources](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v1.htm).
    
-   It cannot have any [input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_v1.htm).
-   A [client-dependent view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm) can use $session.client as the only [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v1.htm) and must use it directly. This also allows the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE to be specified to [determine client handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm). A client-independent view must not use any session variables.
-   Key fields cannot contain [null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry").
-   The required key fields must be listed directly in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v1.htm). Key fields that only occur as arguments of expressions cannot be evaluated.
-   No database tables can be accessed where [data aging](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_aging_glosry.htm "Glossary Entry") is enabled.

Only the key fields of the CDS-managed DDIC view (obsolete) are respected in SAP buffering of [CDS-managed DDIC views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). By default, these are not the key elements of the [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") defined using [KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_entry_v1.htm) (unless the value true is specified for the view annotation [AbapCatalog.preserveKey](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm).

Hints

-   In [client-dependent views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_client_handling_v1.htm), the client column must be explicitly included or added to the number in the specification for the annotation @AbapCatalog.buffering.numberOfKeyFields.
-   For [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), table buffering is [defined](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_buffering.htm) directly for the CDS entity. A client column is not counted as a key field here.
-   In contrast to [table buffering of CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_buffering.htm), where the prerequisites are real restrictions for the view, for DDIC-based views that do not meet the prerequisites buffering is bypassed implicitly by ABAP SQL.

Example

Enables full buffering for a CDS view.

@AbapCatalog.sqlViewName: '...'
@AbapCatalog.Buffering.status: #ACTIVE
@AbapCatalog.Buffering.type: #FULL
  define view ...
   as select from ...
   { ... }