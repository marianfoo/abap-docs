  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20CDS%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-ABAP_CDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP CDS in ABAP Release 7.54

[1\. Temporal Hierarchies](#!ABAP_MODIFICATION_1@1@)
[2\. Annotation for Database Hints](#!ABAP_MODIFICATION_2@2@)
[3\. Annotations for Releasing Elements](#!ABAP_MODIFICATION_3@3@)
[4\. CDS Projection Views](#!ABAP_MODIFICATION_4@4@)
[5\. New Date Functions](#!ABAP_MODIFICATION_5@5@)
[6\. New Time Stamp Functions](#!ABAP_MODIFICATION_6@6@)
[7\. New Date/Time Conversion Functions](#!ABAP_MODIFICATION_7@7@)
[8\. Hierarchy Load Options](#!ABAP_MODIFICATION_8@8@)
[9\. CDS Custom Entities](#!ABAP_MODIFICATION_9@9@)
[10\. Handling of Annotation Values](#!ABAP_MODIFICATION_10@10@)
[11\. Root Nodes and Compositions](#!ABAP_MODIFICATION_11@11@)

Modification 1   

Temporal Hierarchies

The new addition PERIOD of the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) can now be used to create [temporal hierarchies](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry") in which the hierarchy nodes are limited by time intervals.

Modification 2   

Annotation for Database Hints

The [framework-specific annotation](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") [@Consumption.dbHints](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) replaces the [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") [@AbapCatalog.dbHints](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") and not by the ABAP runtime environment.

Modification 3   

Annotations for Releasing Elements

The new element annotations

-   [@API.element.releaseState](javascript:call_link\('abencds_f1_element_annotation.htm'\))
-   [@API.element.successor](javascript:call_link\('abencds_f1_element_annotation.htm'\))
-   can be used to override releases of the individual elements and successors can be specified for forbidden elements.

Modification 4   

CDS Projection Views

A [CDS projection view](javascript:call_link\('abencds_define_view_as_projection.htm'\)) is a direct projection of the underlying CDS view and exposes only a subset of elements of the projected entity. A CDS projection view is defined using DEFINE VIEW ENTITY AS PROJECTION ON in a CDS data definition.

Modification 5   

New Date Functions

ABAP CDS now supports the following new date functions:

-   [DATN\_DAYS\_BETWEEN](javascript:call_link\('abencds_date_functions_v1.htm'\))
-   [DATN\_ADD\_DAYS](javascript:call_link\('abencds_date_functions_v1.htm'\))
-   [DATN\_ADD\_MONTHS](javascript:call_link\('abencds_date_functions_v1.htm'\))

Modification 6   

New Time Stamp Functions

ABAP CDS now supports the following new time stamp functions:

-   [UTCL\_CURRENT](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))
-   [UTCL\_ADD\_SECONDS](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))
-   [UTCL\_SECONDS\_BETWEEN](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

Modification 7   

New Date/Time Conversion Functions

ABAP CDS now supports the following new [date/time conversion functions](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)):

-   [TSTMPL\_TO\_UTCL](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)) and [TSTMPL\_FROM\_UTCL](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))
-   [DATS\_TO\_DATN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)) and [DATS\_FROM\_DATN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))
-   [TIMS\_TO\_TIMN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\)) and [TIMS\_FROM\_TIMN](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

Modification 8   

Hierarchy Load Options

The [hierarchy generator](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) can now use the new addition LOAD BULK*|*INCREMENTAL*|*load\_option to specify the load policy for a generated hierarchy.

Modification 9   

CDS Custom Entities

A new type of [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is available: the [CDS custom entity](javascript:call_link\('abencds_custom_entities.htm'\)). CDS custom entities are used in the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") to implement ABAP queries in CDS.

Modification 10   

Handling of Annotation Values

A change in the handling of [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry") has been introduced with the following consequences:

-   Annotations that require an [enumeration symbol](javascript:call_link\('abencds_annotations_syntax_value.htm'\)) as annotation value no longer accept string values. They only accept enumeration symbols.
    
    Example: Until release 7.54, the following was accepted: @AccessControl.authorizationCheck: '#CHECK'. From release 7.54, this is no longer accepted. The quotation marks must be removed.
    
-   If # is the first or the only character of EndUserText.label or EndUserText.quickInfo, then it is not removed from the unescaped value any more.

These changes are slightly incompatible.

Modification 11   

Root Nodes and Compositions

The new addition ROOT is available for CDS entities to mark an entity as a [CDS root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"). In addition, [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") can be declared as COMPOSITION or TO PARENT. In this way, a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") can be modeled for use in the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").