  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) → 

CDS DDL - CDS View Entity, view\_entity\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a view entity annotation in the definition of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation must be defined as a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry") in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry"). Otherwise, a syntax error occurs. The annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified using the value #VIEW.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

-   [AbapCatalog Annotations](#abencds-view-entity-anno-1--------accesscontrol-annotations---@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_2)

-   [DataAging Annotations](#abencds-view-entity-anno-3--------metadata-annotations---@ITOC@@ABENCDS_VIEW_ENTITY_ANNO_4)

-   [ObjectModel Annotations](#abencds-view-entity-anno-5---the-following-tables-show-the-possible--abap-annotations--javascript-call-link---abenabap-annotation-glosry-htm-----glossary-entry---that-can-be-specified-and-their-meanings--the-abap-annotations-are-evaluated-by-the-abap-runtime-environment-for-every-cds-entity--annotations-with-other-identifiers-are-usually--framework-specific-annotations--javascript-call-link---abencds-annotations-frmwrk-htm------these-are-not-evaluated-by-the-abap-runtime-environment-but-by-other-sap-frameworks-instead---hints------alongside-the-view-annotations-shown-here--the-globally-valid--entity-annotations--javascript-call-link---abencds-f1-entity-annotations-htm-----can-also-be-specified-for-a--cds-view-entity--javascript-call-link---abencds-v2-view-glosry-htm-----glossary-entry---------client-handling-is-done-implicitly-and-automatically-for--cds-view-entities--javascript-call-link---abencds-v2-view-glosry-htm-----glossary-entry---by-filtering-the-client--session-variable--javascript-call-link---abensession-variable-glosry-htm-----glossary-entry-----session-client--javascript-call-link---abencds-session-variable-v2-htm------client-handling-annotations-are-not-required-and-not-allowed---abapcatalog-annotations--technical-settings-of-a-cds-view-entity---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--abapcatalog-datamaintenance--can-be-used-to-restrict-data-preview-for-a-cds-view-entity----restricted--display-allowed-with-restrictions--display--only--display-only--data-preview-is-allowed--not--allowed--display-not-allowed---restricted------abapcatalog-viewenhancementcategory-------specifies-how-the-view-entity-is-extended-using--cds-view-extensions--javascript-call-link---abencds-view-extend-glosry-htm-----glossary-entry----a-comma-separated-list-of-values-can-be-specified-in-the-square-brackets-of-the--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry------projection--list--extensions-of-the-select-list-and-additional-cds-associations-are-allowed--extensions-of-cds-views-whose-select-lists-contain--aggregate-expressions--javascript-call-link---abencds-aggregate-functions-v2-htm-----must-be-allowed-using-further-values--group--by--aggregated-or-non-aggregated-elements-are-allowed-to-be-added-to-a-select-list-with--aggregated-expressions--javascript-call-link---abencds-aggregate-functions-v2-htm-----and-the-associated-extensions-of-the-of-the--group-by--javascript-call-link---abencds-group-by-v2-htm-----clause-are-also-allowed--can-only-be-specified-together-with--projection--list--none--no-extensions-allowed--cannot-be-specified-together-with-other-values---projection--list---projection--list--hints------in-the--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---abapcatalog-viewenhancementcategory--------group--by-can-only-be-specified-together-with-the-default-value--projection--list--the-value--none-excludes-any-other-values-------extensions-of-a-view-with-aggregate-expressions-modify-the--cardinality--javascript-call-link---abencardinality-glosry-htm-----glossary-entry---of-the-result-set--this-means-that-these-extensions-must-have-special-permission-in-the-view-to-enable-consumers-of-the-view-to-handle-any-changes-to-cardinalities-------the-annotation-abapcatalog-datamaintenance-defines-whether-the-cds-view-entity-can-be-displayed-or-maintained-by-certain-tools-such-as-data-preview-in--abap-development-tools--adt---javascript-call-link---abenadt-glosry-htm-----glossary-entry----the-annotation-is-evaluated-by-these-tools--restrictions-imposed-by-that-annotation-are-user-independent-and-they-are-evaluated-before-accessing-the-data--additional-restrictions-imposed-by--cds-roles--javascript-call-link---abencds-role-glosry-htm-----glossary-entry---are-evaluated-during-the-actual-data-access--if-this-is-done-by-abap-sql-------the-following-abapcatalog-annotations-are-available-in-other-cds-entities--but-they-are-not-supported-in-cds-view-entities-------buffering-annotations-are-currently-not-supported-in-cds-view-entities--because-buffering-is-not-yet-possible-------the-annotation-AbapCatalog.compiler.compareFilter is not required and not allowed in CDS view entities, because the filter is implicitly and automatically compared.

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