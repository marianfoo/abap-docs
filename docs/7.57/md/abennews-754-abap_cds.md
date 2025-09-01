  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.54, ABENNEWS-754-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.54

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

Modification 1   

Temporal Hierarchies

The new addition PERIOD of the statement [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) can now be used to create [temporal hierarchies](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentemporal_hierarchy_glosry.htm "Glossary Entry") in which the hierarchy nodes are limited by time intervals.

Modification 2   

Annotation for Database Hints

The [framework-specific annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") [@Consumption.dbHints](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk_tables.htm) replaces the [ABAP annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") [@AbapCatalog.dbHints](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_abap_tables.htm) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as [SADL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensadl_glosry.htm "Glossary Entry") and not by the ABAP runtime environment.

Modification 3   

Annotations for Releasing Elements

The new element annotations

-   [@API.element.releaseState](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)
-   [@API.element.successor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_element_annotation.htm)
-   can be used to override releases of the individual elements and successors can be specified for forbidden elements.

Modification 4   

CDS Projection Views

A [CDS projection view](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm) is a direct projection of the underlying CDS view and exposes only a subset of elements of the projected entity. A CDS projection view is defined using DEFINE VIEW ENTITY AS PROJECTION ON in a CDS data definition.

Modification 5   

New Date Functions

ABAP CDS now supports the following new date functions:

-   [DATN\_DAYS\_BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)
-   [DATN\_ADD\_DAYS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)
-   [DATN\_ADD\_MONTHS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

Modification 6   

New Time Stamp Functions

ABAP CDS now supports the following new time stamp functions:

-   [UTCL\_CURRENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)
-   [UTCL\_ADD\_SECONDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)
-   [UTCL\_SECONDS\_BETWEEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

Modification 7   

New Date/Time Conversion Functions

ABAP CDS now supports the following new [date/time conversion functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm):

-   [TSTMPL\_TO\_UTCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm) and [TSTMPL\_FROM\_UTCL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)
-   [DATS\_TO\_DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm) and [DATS\_FROM\_DATN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)
-   [TIMS\_TO\_TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm) and [TIMS\_FROM\_TIMN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

Modification 8   

Hierarchy Load Options

The [hierarchy generator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) [DEFINE HIERARCHY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_hierarchy.htm) can now use the new addition LOAD BULK*|*INCREMENTAL*|*load\_option to specify the load policy for a generated hierarchy.

Modification 9   

CDS Custom Entities

A new type of [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") is available: the [CDS custom entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_custom_entities.htm). CDS custom entities are used in the [RAP framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_framework_glosry.htm "Glossary Entry") to implement ABAP queries in CDS.

Modification 10   

Handling of Annotation Values

A change in the handling of [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry") has been introduced with the following consequences:

-   Annotations that require an [enumeration symbol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax_value.htm) as annotation value no longer accept string values. They only accept enumeration symbols.
    
    Example: Until release 7.54, the following was accepted: @AccessControl.authorizationCheck: '#CHECK'. From release 7.54, this is no longer accepted. The quotation marks must be removed.
    
-   If # is the first or the only character of EndUserText.label or EndUserText.quickInfo, then it is not removed from the unescaped value any more.

These changes are slightly incompatible.