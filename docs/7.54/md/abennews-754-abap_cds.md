  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

ABAP CDS in Release 7.54

[1\. Temporal hierarchies](#!ABAP_MODIFICATION_1@1@)
[
2\. Annotation for database hints](#!ABAP_MODIFICATION_2@2@)
[
3\. Annotations for releasing elements](#!ABAP_MODIFICATION_3@3@)
[
4\. CAST matrix revised](#!ABAP_MODIFICATION_4@4@)

Modification 1

Temporal Hierarchies

The new addition PERIOD of the statement [DEFINE HIERARCHY](javascript:call_link\('abencds_f1_define_hierarchy.htm'\)) can now be used to create [temporal hierarchies](javascript:call_link\('abentemporal_hierarchy_glosry.htm'\) "Glossary Entry") in which the hierarchy nodes are limited by time intervals.

Modification 2

Annotation for Database Hints

The [framework-specific annotation](javascript:call_link\('abencomponent_annotation_glosry.htm'\) "Glossary Entry") [@Consumption.dbHints](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) replaces the [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [@AbapCatalog.dbHints](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime environment.

Modification 3

Annotations for Releasing Elements

The new element annotations

-   [@API.element.releaseState](javascript:call_link\('abencds_f1_element_annotation.htm'\))
    
-   [@API.element.successor](javascript:call_link\('abencds_f1_element_annotation.htm'\))
    

can be used to override releases of the individual elements and successors can be specified for forbidden elements.

Modification 4

CAST Matrix Revised

The matrix of types that can be converted to each other using a [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\)) expression was revised In particular, the [new data types](javascript:call_link\('abennews-754-ddic.htm'\)) in ABAP Dictionary are respected. The new types DECFLOAT16 and DECFLOAT34 can also be specified after the addition [AS](javascript:call_link\('abencds_f1_avg_as.htm'\)) of the aggregate function AVG.