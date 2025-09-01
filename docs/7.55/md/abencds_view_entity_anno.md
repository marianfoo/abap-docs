  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) → 

CDS DDL - CDS View Entity, view\_entity\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a view entity annotation in the definition of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Otherwise, a syntax error occurs. The annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified using the value #VIEW.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

-   [AbapCatalog Annotations](#@@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_1)

-   [AccessControl Annotations](#@@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_2)

-   [DataAging Annotations](#@@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_3)

-   [Metadata Annotations](#@@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_4)

-   [ObjectModel Annotations](#@@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_5)

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

Hints

-   Alongside the view annotations shown here, the globally valid [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can also be specified for a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

-   Client handling is done implicitly and automatically for [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") by filtering the client [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v2.htm'\)). Client handling annotations are not required and not allowed.

AbapCatalog Annotations

Technical settings of a CDS view entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.dataMaintenance

Can be used to restrict data preview for a CDS view entity.

#RESTRICTED:
Display allowed with restrictions
#DISPLAY\_ONLY:
Display only. Data preview is allowed
#NOT\_ALLOWED:
Display not allowed

#RESTRICTED

\-

AbapCatalog.viewEnhancementCategory\[ \]

Specifies how the view entity is extended using [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry"). A comma-separated list of values can be specified in the square brackets of the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

#PROJECTION\_LIST:
Extensions of the SELECT list and additional CDS associations are allowed; extensions of CDS views whose SELECT lists contain [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) must be allowed using further values
#GROUP\_BY:
Aggregated or non-aggregated elements are allowed to be added to a SELECT list with [aggregated expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\)) and the associated extensions of the of the [GROUP-BY](javascript:call_link\('abencds_group_by_v2.htm'\)) clause are also allowed; can only be specified together with #PROJECTION\_LIST
#NONE:
No extensions allowed; cannot be specified together with other values

#PROJECTION\_LIST

#PROJECTION\_LIST

Hints

-   In the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") AbapCatalog.viewEnhancementCategory\[ \], #GROUP\_BY can only be specified together with the default value #PROJECTION\_LIST. The value #NONE excludes any other values.

-   Extensions of a view with aggregate expressions modify the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the result set. This means that these extensions must have special permission in the view to enable consumers of the view to handle any changes to cardinalities.

-   The annotation AbapCatalog.dataMaintenance defines whether the CDS view entity can be displayed or maintained by certain tools such as Data Preview in [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.

-   The following AbapCatalog annotations are available in other CDS entities, but they are not supported in CDS view entities:

-   Buffering annotations are currently not supported in CDS view entities, because buffering is not yet possible.

-   The annotation @AbapCatalog.compiler.compareFilter is not required and not allowed in CDS view entities, because the filter is implicitly and automatically compared.

-   The [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") [@AbapCatalog.dbHints](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) that was used in [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") is not supported. The [framework-specific annotation](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") [@Consumption.dbHints](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) is available instead.

-   The annotation @AbapCatalog.preserveKey is not required and not allowed in CDS view entities. It serves the definition of key fields of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") in [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). Since there is no CDS-managed DDIC view in CDS view entities, it is obsolete here.
    

AccessControl Annotations

Defines [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for the CDS view entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when ABAP SQL is used to access the CDS view entity

#CHECK:
If ABAP SQL is used to access the view, [access control](javascript:call_link\('abencds_access_control.htm'\)) is performed implicitly if a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is assigned to the view. If there is no role for the view, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](javascript:call_link\('abencds_access_control.htm'\)) is performed. If a role is assigned to this view in DCL source code, a syntax warning occurs.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).

#CHECK

#CHECK

Hints

-   The value #NOT\_REQUIRED is recommended for CDS view entities that don't require [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") in the beginning, but that might later on be enhanced with roles.

-   The value #NOT\_ALLOWED disables implicit access control when the CDS view entity is accessed in ABAP SQL. To disable access control for views not annotated with this annotation, the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) can be used in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause. In the case of views too, the authorization check with the addition WITH PRIVILEGED ACCESS must be disabled during [update sessions](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") in ABAP SQL statements. If not, a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs.

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for client-independent access. For view entities that are subject to client-independent access, it is recommended to use the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED

-   The annotation AccessControl has further [framework-specific subannotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).

DataAging Annotations

Defines [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") for the CDS view entity.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is respected on the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") when the view entity is accessed using ABAP SQL.

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

Defines whether [analysis of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) is possible using the annotation API CL\_DD\_DDL\_ANNOTATION\_SERVICE.

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

-   With the above subannotations of ObjectModel it can be documented for a view for which kind of application it is intended and which kind of data are to expected. This information is especially important in regards of performance that can be expected by the consumer of the view. For the quality categories annotated with ObjectModel.usageType.serviceQuality, the following rules apply:

-   A CDS view entity with the quality category A should access no more than three DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS view entity should be buffered too. The runtime for reading a single line with a fully specified key must be less than 1 ms for selecting fields from a field list or 2 ms for selecting all fields with \*.

-   A CDS view entity with the quality category B should access no more than five DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS view entity should be buffered too. The runtime for reading a single line with a fully specified key must be less than 2 ms for fields from a field list or 5 ms for selecting all fields with \*.

-   A CDS view entity with the quality category C should access no more than 15 DDIC database tables, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. The runtime for reading a single line with a fully specified key must be less than 10 ms for fields from a field list or 20 ms for selecting all fields with \*.

-   A CDS view entity with the quality category D should access no more than 100 DDIC database tables. The performance should be checked and monitored with realistic data by a test framework.

-   A CDS view entity with the quality category X can access more than 100 database tables. The performance must be checked and monitored with realistic data by a test framework.

-   A CDS view entity with the quality category P is not intended for usage in business applications. Performance checks by a test framework are not required.

-   For all quality categories, the subannotations sizeCategory and dataClass should be specified. Only for quality category P, they do not need to be specified.

These rules can be checked in the [ABAP Test Cockpit (ATC)](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry") by tests delivered by SAP.

-   Generally, a CDS view entity used in an application should not access more than 100 DDIC database tables and should have a quality category between A and D.

-   In addition to the [ABAP annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) shown here, the annotation ObjectModel has further [framework-specific subannotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).