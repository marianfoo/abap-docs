---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_view_annotations.htm"
abapFile: "abencds_proj_view_annotations.htm"
keywords: ["select", "update", "do", "if", "case", "try", "class", "data", "abencds", "proj", "view", "annotations"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Transactional Queries](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_transactional_query.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - proj_view_annot, ABENCDS_PROJ_VIEW_ANNOTATIONS, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - proj\_view\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_syntax.htm) as a view annotation in the definition of a CDS projection view in front of the statementDEFINE *\[*TRANSIENT*\]* VIEW ENTITY AS PROJECTION ON. The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #VIEW.

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

-   [AbapCatalog Annotations](#abencds-proj-view-annotations-1-------accesscontrol-annotations---@ITOC@@ABENCDS_PROJ_VIEW_ANNOTATIONS_2)
-   [Metadata Annotations](#abencds-proj-view-annotations-3-------objectmodel-annotations---@ITOC@@ABENCDS_PROJ_VIEW_ANNOTATIONS_4)

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

Hints

-   Projection views inherit the field and association annotations of the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry"). Header annotations are not inherited and must be specified anew, if required.
-   Alongside the view annotations shown here, the globally valid [entity annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_entity_annotations.htm) can also be specified for a CDS projection view.
-   Only a limited number of view annotations can be used in CDS projection views. The following groups of annotations are not possible and are therefore not listed below:
    -   Client handling is done implicitly in CDS projection views. The client is always set to #session\_variable\_filter. Therefore, client handling annotations cannot be explicitly set in CDS projection views.
    -   DataAging annotations are currently not supported for projection views.

AbapCatalog Annotations   

Technical settings of a CDS projection view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.dataMaintenance

Can be used to restrict data preview for a CDS projection view

#RESTRICTED:
Display allowed with restrictions
#DISPLAY\_ONLY:
Display only. Data preview is allowed
#NOT\_ALLOWED:
Display not allowed

#RESTRICTED

\-

AbapCatalog.extensibility.allowNewDatasources

Defines whether a [CDS view entity extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_extend_glosry.htm "Glossary Entry") is allowed to use new data sources. More precisely, if a CDS view entity extension specifies an association, this annotation defines whether the newly defined local association is allowed to be used in [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpath_expression_glosry.htm "Glossary Entry").

true:
New data sources in extensions allowed.
false:
New data sources in extensions not allowed.

false

true

AbapCatalog.extensibility.dataSources\[ \]

Allowlist of stable alias names of data sources and locally defined associations to be used in extensions.

'data\_source\_name':
Alias name of a data source or alias name of a locally defined or redefined association.

\-

\-

AbapCatalog.viewEnhancementCategory\[ \]

Specifies how the CDS projection view is extended using [CDS view extensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_extend_glosry.htm "Glossary Entry"). A comma-separated list of values can be specified in the square brackets of the [annotation array](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenannotation_array_glosry.htm "Glossary Entry").

#PROJECTION\_LIST:
Extensions of the SELECT list and additional CDS associations are allowed; extensions of CDS views whose SELECT lists contain [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm) or have a [UNION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_union_v1.htm) clause must be allowed using further values
#NONE:
No extensions allowed; cannot be specified together with other values

#PROJECTION\_LIST

#PROJECTION\_LIST

Hints

-   AbapCatalog.viewEnhancementCategory\[#NONE\] is mandatory for views that contain an element of data type LRAW or LCHR. The reason is that elements of data type LRAW or LCHR must always be in the last position in the SELECT list and therefore, no extensions are allowed.
-   The annotation AbapCatalog.dataMaintenance defines whether the CDS projection view can be displayed or maintained by certain tools such as Data Preview in [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_role_glosry.htm "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.
-   AbapCatalog.extensibility.dataSources:
    -   can only be specified if extensions are allowed. If @AbapCatalog.extensibility.extensible is set to false or @AbapCatalog.viewEnhancementCategory is set to #NONE, no data sources can be specified.
    -   can specify only such associations as data\_source\_name which have a maximum cardinality not greater than 1.
-   Most Abap.Catalog annotations supported in CDS views are not supported in CDS projection views, for the following reasons:
    -   AbapCatalog.buffering annotations are not possible, since [buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") does not work with another CDS view as data source.
    -   AbapCatalog.compiler.compareFilter is not required, since the optimization of joins is done automatically.
    -   AbapCatalog.preserveKey cannot be specified, since the key fields are inherited by the [projected entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry").
    -   AbapCatalog.sqlViewName is not required, since projection views do not have a corresponding SQL view in ABAP Dictionary.

AccessControl Annotations   

Defines [access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") for the CDS projection view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") when ABAP SQL is used to access the CDS view

#CHECK:
If ABAP SQL is used to access the view, [access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) is performed implicitly if a [CDS role](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_role_glosry.htm "Glossary Entry") is assigned to the view. If there is no role for the view, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control.htm) is performed. This produces a syntax check warning in the DCL source code of a role for the view.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensadl_glosry.htm "Glossary Entry")).

#CHECK

#CHECK

Hints

-   Value #NOT\_REQUIRED is recommended for CDS projection views that no [access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") is provided for when they are created, but which roles can be defined for later on.
-   The value #NOT\_ALLOWED disables implicit access control when the CDS projection view is accessed in ABAP SQL. The addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) can be used in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause to disable access control for views not annotated with this annotation. In the case of views too, the authorization check with the addition WITH PRIVILEGED ACCESS must be disabled in [updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry") in ABAP SQL statements. If not, a [runtime error](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs.
-   [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for client-independent access. This is why in ABAP SQL, the addition [USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client.htm) and the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_client_obsolete.htm) can only be used when accessing CDS entities where access control is disabled. It is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is only specified for CDS projection views that are subject to client-independent access.
-   The annotation AccessControl has further [framework-specific subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk.htm).

Metadata Annotations   

Defines the handling of metadata from the CDS projection view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.ignorePropagatedAnnotations

Defines whether [analysis of annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_analysis.htm) is possible using the annotation API CL\_DD\_DDL\_ANNOTATION\_SERVICE.

true:
Only direct and derived annotations of the current CDS entity are respected.
false:
Inherited annotations of CDS entities used are also respected.

false

true

ObjectModel Annotations   

Characterizes CDS projection views with respect to their performance-relevant attributes.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.usageType.dataClass

Specifies the data type of the CDS projection view.

A CDS projection view is assigned to one of the following data classes:
#TRANSACTIONAL:
The CDS projection view contains the data written or modified in high volume transactions or in background transactions.
#MASTER:
The CDS projection view contains the master data. The master data is read in high volume transactions or background transactions, but not written or modified.
#ORGANIZATIONAL:
The CDS projection view contains data that describes organizational structures and customer processes.
#CUSTOMIZING:
The CDS projection view data that describes customer customizing data.
#META:
The CDS projection view contains technical system configuration data or the structure of entities.
#MIXED:
The CDS projection view contains mixed class data.

#MIXED

#MIXED

ObjectModel.usageType.serviceQuality

The quality of the service with respect to the performance expected by the consumer of the CDS projection view.

A CDS projection view is assigned to one of the following quality categories:
#A:
Within the business logic, the CDS projection view can be used for high volume transactions or for background transactions.
#B:
Within the business logic, the CDS projection view can be used for transactions or for background transactions.
#C:
The CDS projection view can be used by the user interface to query individual objects in transactions.
#D:
The CDS projection view can be used for analytical queries.
#X:
The CDS projection view is designed for special application cases, such as data migration.
#P:
The CDS projection view is used to structure CDS hierarchies and is not used outside of the CDS hierarchy.

#X

#X

ObjectModel.usageType.sizeCategory

Specifies the size of the data record that must be scanned to return the result. This is usually the largest underlying table.

A CDS projection view is assigned to one of the following size categories:
#S:
The expected size of the data record that needs to be scanned is less than 1000.
#M:
The expected size of the data record that needs to be scanned is less than 100,000.
#L:
The expected size of the data record that needs to be scanned is less than 10,000,000.
#XL:
The expected size of the data record that needs to be scanned is less than 100,000,000.
#XXL:
The expected size of the data record that needs to be scanned is 100,000,000 or greater.

#S

#S

Hints

-   With the above subannotations of ObjectModel, it can be documented for a CDS projection view for which kind of application it is intended and which kind of data are to expected. This information is especially important in regards of performance that can be expected by the consumer of the function. For further details refer to the general rules for [view annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity_anno.htm).
-   In addition to the [ABAP annotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_abap.htm) shown here, the annotation ObjectModel has further [framework-specific subannotations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_annotations_frmwrk.htm).