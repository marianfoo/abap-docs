---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity_anno.htm"
abapFile: "abencds_view_entity_anno.htm"
keywords: ["select", "update", "do", "if", "case", "try", "class", "data", "abencds", "view", "entity", "anno"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20view_entity_annot%2C%20ABENCDS_VIEW_ENTITY_ANNO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

CDS DDL - CDS View Entity, view\_entity\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_syntax.htm) as a view entity annotation in the definition of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in front of the statement [DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a [CDS object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_object_glosry.htm "Glossary Entry") in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry"). Otherwise, a syntax error occurs. The annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_define_anno_annos.htm) should be specified using the value #VIEW.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value.

-   [AbapCatalog Annotations](#abencds-view-entity-anno-1-------accesscontrol-annotations---@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_2)
-   [DataAging Annotations](#abencds-view-entity-anno-3-------metadata-annotations---@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_4)
-   [ObjectModel Annotations](#abencds-view-entity-anno-5---the-following-tables-show-the-possible--abap-annotations--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenabap-annotation-glosry-htm--glossary-entry---that-can-be-specified-and-their-meanings--the-abap-annotations-are-evaluated-by-the-abap-runtime-framework-for-every-cds-object--annotations-with-other-identifiers-are-usually--framework-specific-annotations--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-annotations-frmwrk-htm---these-are-not-evaluated-by-the-abap-runtime-framework-but-by-other-sap-frameworks-instead---hints------alongside-the-view-annotations-shown-here--the-globally-valid--entity-annotations--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-f1-entity-annotations-htm--can-also-be-specified-for-a--cds-view-entity--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-v2-view-glosry-htm--glossary-entry--------client-handling-is-done-implicitly-and-automatically-for--cds-view-entities--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-v2-view-glosry-htm--glossary-entry---by-filtering-the-client--session-variable--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abensession-variable-glosry-htm--glossary-entry-----session-client--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-session-variable-v2-htm---client-handling-annotations-are-not-required-and-not-allowed---abapcatalog-annotations-----technical-settings-of-a-cds-view-entity---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--abapcatalog-datamaintenance--can-be-used-to-restrict-data-preview-for-a-cds-view-entity----restricted--display-allowed-with-restrictions--display--only--display-only--data-preview-is-allowed--not--allowed--display-not-allowed---restricted------abapcatalog-entitybuffer-definitionallowed--can-be-used-to-enable-or-disable--table-buffering--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-v2-view-buffering-htm--for-a-cds-view-entity---true--table-buffering-allowed--false--table-buffering-not-allowed---false--true--abapcatalog-extensibility-allownewdatasources--defines-whether-a--cds-view-entity-extension--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-view-entity-extend-glosry-htm--glossary-entry---is-allowed-to-use-new-data-sources--more-precisely--if-a-cds-view-entity-extension-specifies-an-association--this-annotation-defines-whether-the-newly-defined-local-association-is-allowed-to-be-used-in--path-expressions--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenpath-expression-glosry-htm--glossary-entry-----true--new-data-sources-in-extensions-allowed--false--new-data-sources-in-extensions-not-allowed---false--true--abapcatalog-extensibility-datasources-------allowlist-of-stable-alias-names-of-data-sources-and-locally-defined-associations-to-be-used-in-extensions----data--source--name---alias-name-of-a-data-source-or-alias-name-of-a-locally-defined-or-redefined-association-----------abapcatalog-viewenhancementcategory-------specifies-how-the-view-entity-is-extended-using--cds-view-extensions--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-view-extend-glosry-htm--glossary-entry----a-comma-separated-list-of-values-can-be-specified-in-the-square-brackets-of-the--annotation-array--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenannotation-array-glosry-htm--glossary-entry------projection--list--extensions-of-the-select-list-and-additional-cds-associations-are-allowed--extensions-of-cds-views-whose-select-lists-contain--aggregate-expressions--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-aggregate-functions-v2-htm--or-which-contain-a--set-operator--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-set-operators-glosry-htm--glossary-entry---clause-are-not-allowed---group--by--can-only-be-specified-together-with--projection--list--allows-views-to-be-extended-that-have--aggregate-expressions--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-aggregate-functions-v2-htm--in-the-select-list--aggregated-or-non-aggregated-elements-can-be-added-to-the-select-list-by-the-extension--the-group-by-clause-must-be-extended-accordingly-using-the-addition-group-by---union--can-only-be-specified-together-with--projection--list--allows-views-to-be-extended-that-use-a-clause-with-a--set-operator--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-set-operators-glosry-htm--glossary-entry-----none--no-extensions-allowed--cannot-be-specified-together-with-other-values----projection--list---projection--list--hints------in-the--annotation-array--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenannotation-array-glosry-htm--glossary-entry---abapcatalog-viewenhancementcategory--------group--by-and--union-can-only-be-specified-together-with-the-default-value--projection--list--the-value--none-excludes-any-other-values------abapcatalog-viewenhancementcategory---none---is-mandatory-for-views-that-contain-an-element-of-data-type-lraw-or-lchr--the-reason-is-that-elements-of-data-type-lraw-or-lchr-must-always-be-in-the-last-position-in-the-select-list-and-therefore--no-extensions-are-allowed------extensions-of-a-view-with-aggregate-expressions-or-with-a-set-operator-clause---except--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-except-v2-htm----intersect--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-intersect-v2-htm---or--union--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-union-v2-htm---modify-the--cardinality--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencardinality-glosry-htm--glossary-entry---of-the-result-set--this-means-that-these-extensions-must-have-special-permission-in-the-view-to-enable-consumers-of-the-view-to-handle-any-changes-to-cardinalities------abapcatalog-viewenhancementcategory---union---allows-extensions-not-only-for-union-views--but-for-views-including-any-set-operator--also--except--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-except-v2-htm--and--intersect--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abencds-intersect-v2-htm----the-annotation-array-value--union-is-a-known-misnomer------abapcatalog-extensibility-allownewdatasources-must-be-set-to-false-in-cds-view-entities--the-value-true-is-only-allowed-in-cds-projection-views------abapcatalog-extensibility-datasources----------can-only-be-specified-if-extensions-are-allowed--if-AbapCatalog.extensibility.extensible is set to false or @AbapCatalog.viewEnhancementCategory is set to #NONE, no data sources can be specified.
    -   can specify only such associations as data\_source\_name which have a maximum [target cardinality](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentarget_cardinality_glosry.htm "Glossary Entry") not greater than 1.
    -   must not be set in union views.
-   The annotation AbapCatalog.dataMaintenance defines whether the CDS view entity can be displayed or maintained by certain tools such as Data Preview in [ABAP development tools for Eclipse (ADT)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.
-   The following AbapCatalog annotations are available in other CDS entities, but they are not supported in CDS view entities:
    -   Buffering annotations are currently not supported in CDS view entities, because buffering is not yet possible.
    -   The annotation @AbapCatalog.compiler.compareFilter is not required and not allowed in CDS view entities, because the filter is implicitly and automatically compared.
    -   The [ABAP annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_annotation_glosry.htm "Glossary Entry") [@AbapCatalog.dbHints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap_tables.htm) that was used in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") is not supported. The [framework-specific annotation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfrmwrk_annotation_glosry.htm "Glossary Entry") [@Consumption.dbHints](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk_tables.htm) is available instead.
    -   The annotation @AbapCatalog.preserveKey is not required and not allowed in CDS view entities. It serves the definition of key fields of the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") in [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). Since there is no CDS-managed DDIC view (obsolete) in CDS view entities, it is obsolete here.

AccessControl Annotations   

Defines [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") for the CDS view entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") when ABAP SQL is used to access the CDS view entity

#CHECK:
If ABAP SQL is used to access the view, [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) is performed implicitly if a [CDS role](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry") is assigned to the view. If there is no role for the view, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#MANDATORY:
It is mandatory to define a CDS role for the view entity. If no access control has been created, a runtime error occurs when ABAP SQL is used to access the CDS view entity.
#NOT\_ALLOWED:
No [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control.htm) is performed. If a role is assigned to this view in DCL source code, a syntax warning occurs.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensadl_glosry.htm "Glossary Entry")).

#NOT\_REQUIRED

#NOT\_REQUIRED

Hints

-   The value #NOT\_REQUIRED is recommended for CDS view entities that do not require [access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") in the beginning, but that might later on be enhanced with roles.
-   [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for client-independent access. For view entities that are subject to client-independent access, it is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is used
-   The annotation AccessControl has further [framework-specific subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk.htm).
-   The value #NOT\_ALLOWED disables implicit access control when the CDS view entity is accessed in ABAP SQL. To disable access control for views not annotated with this annotation, the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) can be used in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause. In the case of views too, the authorization check with the addition WITH PRIVILEGED ACCESS must be disabled during [update sessions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_glosry.htm "Glossary Entry") in ABAP SQL statements. If not, a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs.

DataAging Annotations   

Defines [data aging](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_aging_glosry.htm "Glossary Entry") for the CDS view entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_aging_glosry.htm "Glossary Entry") is respected on the [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") when the view entity is accessed using ABAP SQL.

true:
ABAP SQL reads all data
false:
ABAP SQL reads current data only

false

true

Metadata Annotations   

Defines the handling of metadata of the CDS view entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.ignorePropagatedAnnotations

Defines whether [analysis of annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_analysis.htm) is possible using the annotation API CL\_DD\_DDL\_ANNOTATION\_SERVICE.

true:
Only direct and derived annotations of the current CDS view entity are respected.
false:
Inherited annotations of CDS view entities used are also respected.

false

true

ObjectModel Annotations   

The following subannotations of ObjectModel characterize CDS view entities with respect to their performance-relevant properties.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.usageType.dataClass

Specifies the data category of the CDS view entity.

A CDS view entity can be assigned to one of the following data categories:
#TRANSACTIONAL:
The CDS view entity delivers data written or modified in high volume transactions or in background transactions.
#MASTER:
The CDS view entity delivers master data. The master data is read in high volume transactions or background transactions, but not written or modified.
#ORGANIZATIONAL:
The CDS view entity delivers data that describes organizational structures and customer processes.
#CUSTOMIZING:
The CDS view entity contains data that describes a customer's customizing data.
#META:
The CDS view entity delivers technical system configuration data or the structure of entities.
#MIXED:
The CDS view entity contains data of mixed data categories.

#MIXED

#MIXED

ObjectModel.usageType.serviceQuality

The quality of the service with respect to the performance that can be expected by the consumer of the CDS view entity.

A CDS view entity can be assigned to one of the following quality categories:
#A:
The CDS view entity can be used for high volume transactions or for background transactions.
#B:
The CDS view entity can be used for transactions or for background transactions.
#C:
The CDS view entity can be used to query individual objects in transactions.
#D:
The CDS view entity can be used for analytical queries.
#X:
The CDS view entity is designed for special application cases, such as data migration.
#P:
The CDS view entity is used to structure hierarchies of CDS entities and must not be used outside of such a hierarchy.

#X

#X

ObjectModel.usageType.sizeCategory

Specifies the size of the data volume that must be scanned to return the result. This usually corresponds to the largest underlying table.

A CDS view entity can be assigned to one of the following size categories:
#S:
The expected size of the data volume that needs to be scanned is less than 1000.
#M:
The expected size of the data volume that needs to be scanned is less than 100,000.
#L:
The expected size of the data volume that needs to be scanned is less than 10,000,000.
#XL:
The expected size of the data volume that needs to be scanned is less than 100,000,000.
#XXL:
The expected size of the data volume that needs to be scanned is 100,000,000 or greater.

#S

#S

Hints

-   Generally, a CDS view entity used in an application should not access more than 100 DDIC database tables and should have a quality category between A and D.
-   In addition to the [ABAP annotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_abap.htm) shown here, the annotation ObjectModel has further [framework-specific subannotations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_annotations_frmwrk.htm).
-   With the above subannotations of ObjectModel it can be documented for a view for which kind of application it is intended and which kind of data are to expected. This information is especially important in regards of performance that can be expected by the consumer of the view. For the quality categories annotated with ObjectModel.usageType.serviceQuality, the following rules apply:
    
    -   A CDS view entity with the quality category A should access no more than three DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS view entity should be buffered too. The runtime for reading a single line with a fully specified key must be less than 1 ms for selecting fields from a field list or 2 ms for selecting all fields with \*.
    -   A CDS view entity with the quality category B should access no more than five DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS view entity should be buffered too. The runtime for reading a single line with a fully specified key must be less than 2 ms for fields from a field list or 5 ms for selecting all fields with \*.
    -   A CDS view entity with the quality category C should access no more than 15 DDIC database tables, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. The runtime for reading a single line with a fully specified key must be less than 10 ms for fields from a field list or 20 ms for selecting all fields with \*.
    -   A CDS view entity with the quality category D should access no more than 100 DDIC database tables. The performance should be checked and monitored with realistic data by a test framework.
    -   A CDS view entity with the quality category X can access more than 100 database tables. The performance must be checked and monitored with realistic data by a test framework.
    -   A CDS view entity with the quality category P is not intended for usage in business applications. Performance checks by a test framework are not required.
    -   For all quality categories, the subannotations sizeCategory and dataClass should be specified. Only for quality category P, they do not need to be specified.
    
    These rules can be checked in the [ABAP Test Cockpit (ATC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenatc_glosry.htm "Glossary Entry") by tests delivered by SAP.