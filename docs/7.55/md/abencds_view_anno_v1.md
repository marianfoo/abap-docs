  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) → 

CDS DDL - DDIC-based View, view\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a view annotation in the definition of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #VIEW.

The first column of the table below shows the name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is set implicitly if the annotation is not used explicitly. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

-   [AbapCatalog Annotations](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_1)

-   [AccessControl Annotations](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_2)

-   [ClientDependent Annotations (Obsolete)](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_3)

-   [ClientHandling Annotations](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_4)

-   [DataAging Annotations](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_5)

-   [Metadata Annotations](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_6)

-   [ObjectModel Annotations](#@@ITOC@@ABENCDS_VIEW_ANNO_V1_7)

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

Hint

Alongside the view annotations shown here, the globally valid [entity annotations](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) can also be specified for a CDS view.

AbapCatalog Annotations

Technical settings of a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.buffering.status

Activates and deactivates [table buffering](javascript:call_link\('abencds_v1_buffering.htm'\)) for the CDS view

#ACTIVE:
table buffering active
#SWITCHED\_OFF:
table buffering allowed but not active
#NOT\_ALLOWED:
table buffering not allowed

#SWITCHED\_OFF

#SWITCHED\_OFF

AbapCatalog.buffering.type

Buffering type in [table buffering](javascript:call_link\('abencds_v1_buffering.htm'\))

#SINGLE:
Single records
#GENERIC:
Generic area
#FULL:
Full
#NONE:
None

#NONE

#NONE

AbapCatalog.buffering.numberOfKeyFields

Number of key elements in [table buffering](javascript:call_link\('abencds_v1_buffering.htm'\)) of generic areas

Number between 0 and k-1, where k is the number of key elements

0

0

AbapCatalog.dataMaintenance

Can be used to restrict data preview for a CDS view

#RESTRICTED:
Display allowed with restrictions
#DISPLAY\_ONLY:
Display only. Data preview is allowed
#NOT\_ALLOWED:
Display not allowed

#RESTRICTED

\-

AbapCatalog.compiler.compareFilter

Defines the evaluation of [filter conditions](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) in [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) of the CDS view

true:
The filter conditions of CDS associations occurring more than once in path expressions are compared and, if they match, the associated join expression is created only once.
false:
For each CDS association with a filter condition, a separate join expression is created and evaluated.

false

true

AbapCatalog.dbHints\[ \].dbSystem

Obsolete: Database system for which a [database hint](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry") is specified (evaluated using [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).
[Consumption.dbHintsCalculatedBy](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) should be used instead.

#ADA:
SAP MaxDB
#DB2:
IBM DB2
#DB4:
IBM DB2 for AS/400
#DB6:
IBM DB2 UDB
#INF:
Informix
#MSS:
Microsoft SQL Server
#ORA:
Oracle DB
#HDB:
SAP HANA database
#ASE:
Sybase ASE
#ALL:
all database systems

\-

\-

AbapCatalog.dbHints\[ \].hint

Obsolete: [Database hint](javascript:call_link\('abendatabase_hint_glosry.htm'\) "Glossary Entry") (evaluated using [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).
[Consumption.dbHints\[ \]](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) should be used instead.

Platform-dependent database hint

\-

\-

AbapCatalog.preserveKey

Specifies the definition of the key fields in the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of the CDS view.

true:
The key fields of the CDS-managed DDIC view are defined as determined by the addition [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)).
false:
The key fields of the CDS-managed DDIC view are determined as for DDIC database views in ABAP Dictionary, regardless of the addition [KEY](javascript:call_link\('abencds_select_list_entry_v1.htm'\)).

false

true

AbapCatalog.sqlViewName

Name of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of the CDS view

Character string with a maximum of 16 characters consisting of letters, numbers and underscores and that starts with a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry").

\-

\-

AbapCatalog.viewEnhancementCategory\[ \]

Specifies how the CDS view is extended using [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry"). A comma-separated list of values can be specified in the square brackets of the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry").

#PROJECTION\_LIST:
Extensions of the SELECT list and additional CDS associations are allowed; extensions of CDS views whose SELECT lists contain [aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) or have a [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clause must be allowed using further values
#GROUP\_BY:
Aggregated or non-aggregated elements are allowed to be added to a SELECT list with [aggregated expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) and the associated extensions of the of the [GROUP-BY](javascript:call_link\('abencds_group_by_v1.htm'\)) clause are also allowed; can only be specified together with #PROJECTION\_LIST
#UNION:
Extensions of the SELECT list of a CDS view with a [UNION](javascript:call_link\('abencds_union_v1.htm'\)) clause are allowed; can only be specified together with #PROJECTION\_LIST
#NONE:
No extensions allowed; cannot be specified together with other values

#PROJECTION\_LIST

#PROJECTION\_LIST

Hints

-   The ABAP annotation AbapCatalog.sqlViewName is mandatory. It defines the name of the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") in ABAP Dictionary.

-   The name given to the DDIC database view can no longer be changed after the CDS view is transported into a follow-on system.

-   In the [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") AbapCatalog.viewEnhancementCategory\[ \], #GROUP\_BY and #UNION can only be specified together with the default value #PROJECTION\_LIST. The value #NONE excludes any other values.

-   Extensions of a view with aggregate expressions or with a UNION clause modify the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the result set. This means that these extensions must have special permission in the view to enable consumers of the view to handle any changes to cardinalities.

-   It is advisable to use the annotation AbapCatalog.compiler.compareFilter with the value true. ADT suggests this when a new CDS view is created.

-   The annotation AbapCatalog.dataMaintenance defines whether the [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") can be displayed or maintained by certain tools such as Data Preview in [ABAP Development Tools (ADT)](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry"). The annotation is evaluated by these tools. Restrictions imposed by that annotation are user-independent and they are evaluated before accessing the data. Additional restrictions imposed by [CDS roles](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are evaluated during the actual data access, if this is done by ABAP SQL.

-   The [framework-specific annotation](javascript:call_link\('abenfrmwrk_annotation_glosry.htm'\) "Glossary Entry") [@Consumption.dbHints](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) replaces the [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") [@AbapCatalog.dbHints](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime environment.

Example

Activates [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") with single record buffering for the CDS view business\_partner.

@AbapCatalog.sqlViewName:      'BPA\_VW'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type:   #SINGLE
define view business\_partner as
  select from snwd\_bpa
         { key snwd\_bpa.bp\_id as id,
               snwd\_bpa.bp\_role as role,
               snwd\_bpa.company\_name,
               snwd\_bpa.phone\_number }

Example

For the CDS view business\_partner, activates [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") for a generic area and a key element.

@AbapCatalog.sqlViewName:                 'BPA\_VW'
@AbapCatalog.buffering.status:            #ACTIVE
@AbapCatalog.buffering.type:              #GENERIC
@AbapCatalog.buffering.numberOfKeyFields: 1
define view business\_partner as
  select from snwd\_bpa
        { key snwd\_bpa.bp\_id as id,
              snwd\_bpa.bp\_role as role,
              snwd\_bpa.company\_name,
              snwd\_bpa.phone\_number }

AccessControl Annotations

Defines [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") when ABAP SQL is used to access the CDS view

#CHECK:
If ABAP SQL is used to access the view, [access control](javascript:call_link\('abencds_access_control.htm'\)) is performed implicitly if a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is assigned to the view. If there is no role for the view, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](javascript:call_link\('abencds_access_control.htm'\)) is performed. This produces a syntax check warning in the DCL source code of a role for the view.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).

#CHECK

#CHECK

Hints

-   Value #NOT\_REQUIRED is recommended for CDS views that no [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is provided for when they are created, but which roles can be defined for later on.

-   The value #NOT\_ALLOWED disables implicit access control when the CDS view is accessed in ABAP SQL. The addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) can be used in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause to disable access control for views not annotated with this annotation. In the case of views too, the authorization check with the addition WITH PRIVILEGED ACCESS must be disabled in [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") in ABAP SQL statements. If not, a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs.

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for client-independent access. This is why in ABAP SQL, the addition [USING](javascript:call_link\('abapselect_client.htm'\)) and the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) can only be used when accessing CDS entities where access control is disabled. It is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is only specified for CDS views that are subject to client-independent access.

-   The annotation AccessControl has further [framework-specific subannotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).

ClientDependent Annotations (Obsolete)

Defines [client handling](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) for the CDS view (obsolete).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientDependent

Defines [client handling](javascript:call_link\('abencds_view_client_handling_obs.htm'\)) when ABAP SQL is used to access the CDS view (obsolete).

true:
The CDS view is client-dependent. The view fields of the CDS entity do not cover a client column, from the perspective of an ABAP program. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
false:
The CDS view is a client-independent view. No [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.

\-

true

Hints

-   The obsolete annotation @ClientDependent is replaced by the annotations @ClientHandling.type and @ClientHandling.algorithm.

-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling are specified, the default values of the @ClientHandling annotations apply.

-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.

ClientHandling Annotations

Defines [client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientHandling.type

Defines the [client dependency](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) when ABAP SQL is used to access the CDS view.

#CLIENT\_DEPENDENT:
The CDS view is client-dependent. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
#CLIENT\_INDEPENDENT:
The CDS view is a client-independent function. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), no [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
#INHERITED:
The client dependency of the CDS view is determined by the data sources used. If a data source is client-dependent, the CDS view is too.

#INHERITED

#INHERITED

ClientHandling.algorithm

Defines [client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) when ABAP SQL is used to access the CDS view.

#NONE:
No implicit client handling takes place.
#AUTOMATED:
The joins of the CDS view are modified implicitly.
#SESSION\_VARIABLE:
The joins of the CDS view are modified implicitly and the session variable $session.client is used implicitly to improve performance.

#AUTOMATED

#AUTOMATED

Hint

An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

DataAging Annotations

Defines [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is respected on a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") when the CDS view is accessed using ABAP SQL.

true:
ABAP SQL reads all data
false:
ABAP SQL reads current data only

false

true

Example

In the following CDS view, data aging is disabled for the database table DAAG\_SFLIGHT using the annotation@DataAging.noAgingRestriction:true.

@AbapCatalog.sqlViewName: 'DEMOCDSDAAGSFL'
@DataAging.noAgingRestriction:true
@EndUserText.label: 'hallo'
define view DEMO\_CDS\_DAAG\_SFLIGHT
  as select from daag\_sflight
{
  key carrid,
  key connid,
  key fldate,
      planetype
}

When this view is accessed using ABAP SQL, both old and current data is read.

SELECT \*
       FROM demo\_cds\_daag\_sflight
       WHERE fldate >= '20160101'
       INTO TABLE @DATA(result).

To avoid loading all partitions, a filter dependency rule can be defined as follows. Here, the assumption is made that the temperature column \_DATAAGING for old data has the same value as the column FLDATE.

DEFINE FILTER DEPENDENCY RULE demo\_daag\_sflight\_rule
  ON daag\_sflight
    IF { daag\_sflight.fldate >= $1 }
      THEN { daag\_sflight.\_dataaging >= $1 OR
             daag\_sflight.\_dataaging =  '00000000' }

The SAP HANA database then adds the following additional selection condition to the WHERE condition of the shown SELECT statement implicitly:

AND daag\_sflight~\_dataaging >= '20160101'
    OR  daag\_sflight~\_dataaging =  '00000000'

This does not modify the result set of the query.

Metadata Annotations

Defines the handling of metadata from the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.ignorePropagatedAnnotations

Defines whether [analysis of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) is possible using the annotation API CL\_DD\_DDL\_ANNOTATION\_SERVICE.

true:
Only direct and derived annotations of the current CDS entity are respected.
false:
Inherited annotations of CDS entities used are also respected.

false

true

ObjectModel Annotations

The following subannotations of ObjectModel characterize CDS views with respect to their performance-relevant properties.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.usageType.dataClass

Specifies the data category of the CDS view.

A CDS view can be assigned to one of the following data categories:
#TRANSACTIONAL:
The CDS view delivers data written or modified in high volume transactions or in background transactions.
#MASTER:
The CDS view delivers master data. The master data is read in high volume transactions or background transactions, but not written or modified.
#ORGANIZATIONAL:
The CDS view delivers data that describes organizational structures and customer processes.
#CUSTOMIZING:
The CDS view delivers data that describes customizing data.
#META:
The CDS view delivers technical system configuration data or the structure of entities.
#MIXED:
The CDS view delivers data of mixed data categories.

#MIXED

#MIXED

ObjectModel.usageType.serviceQuality

The quality of the service with respect to the performance that can be expected by the consumer of the CDS view.

A CDS view can be assigned to one of the following quality categories:
#A:
The CDS view can be used for high volume transactions or for background transactions.
#B:
The CDS view can be used for transactions or for background transactions.
#C:
The CDS view can be used to query individual objects in transactions.
#D:
The CDS view can be used for analytical queries.
#X:
The CDS view is designed for special application cases, such as data migration.
#P:
The CDS view is used to structure hierarchies of CDS entities and must not be used outside of such a hierarchy.

#X

#X

ObjectModel.usageType.sizeCategory

Specifies the size of the data volume that must be scanned to return the result. This usually corresponds to the largest underlying table.

A CDS view can be assigned to one of the following size categories:
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

-   A CDS view with the quality category A should access no more than three DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS view should be buffered too. The runtime for reading a single line with a fully specified key must be less than 1 ms for selecting fields from a field list or 2 ms for selecting all fields with \*.

-   A CDS view with the quality category B should access no more than five DDIC database tables, must not call any functions, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. If the underlying tables are buffered, the CDS view should be buffered too. The runtime for reading a single line with a fully specified key must be less than 2 ms for fields from a field list or 5 ms for selecting all fields with \*.

-   A CDS view with the quality category C should access no more than 15 DDIC database tables, must not aggregate a large number of table rows for direct access, and must not access DDIC database tables with mixed data categories. The runtime for reading a single line with a fully specified key must be less than 10 ms for fields from a field list or 20 ms for selecting all fields with \*.

-   A CDS view with the quality category D should access no more than 100 DDIC database tables. The performance should be checked and monitored with realistic data by a test framework.

-   A CDS view with the quality category X can access more than 100 database tables. The performance must be checked and monitored with realistic data by a test framework.

-   A CDS view with the quality category P is not intended for usage in business applications. Performance checks by a test framework are not required.

-   For all quality categories, the subannotations sizeCategory and dataClass should be specified. Only for quality category P, they do not need to be specified.

These rules can be checked in the [ABAP Test Cockpit (ATC)](javascript:call_link\('abenatc_glosry.htm'\) "Glossary Entry") by tests delivered by SAP.

-   Generally, a CDS view used in an application should not access more than 100 DDIC database tables and should have a quality category between A and D.

-   In addition to the [ABAP annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) shown here, the annotation ObjectModel has further [framework-specific subannotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)).