  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) → 

ABAP CDS - DEFINE VIEW, view\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_syntax.htm) as a view annotation in the definition of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") in front of the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm). The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #VIEW.

-   [AbapCatalog Annotations](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_1)

-   [AccessControl Annotations](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_2)

-   [ClientDependent Annotations (Obsolete)](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_3)

-   [ClientHandling Annotations](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_4)

-   [DataAging Annotations](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_5)

-   [Metadata Annotations](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_6)

-   [ObjectModel Annotations](#@@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_7)

The first column of the table displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value. INCLUDE ABENCDS\_GENERAL\_COMP\_ANNOT OBJECT DOKU ID SD

Note

Alongside the view annotations shown here, the globally valid [entity annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_annotations.htm) can also be specified for a view.

AbapCatalog Annotations

Technical settings of a CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AbapCatalog.buffering.status

Activates and deactivates [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_sap_puffer.htm) for the CDS view

#ACTIVE:
table buffering active
#SWITCHED\_OFF:
table buffering allowed but not active
#NOT\_ALLOWED:
table buffering not allowed

#SWITCHED\_OFF

#SWITCHED\_OFF

AbapCatalog.buffering.type

Buffering type in [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_sap_puffer.htm)

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

Number of key elements in [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_sap_puffer.htm) of generic areas

Number between 0 and k-1, where k is the number of key elements

0

0

AbapCatalog.compiler.compareFilter

Defines the evaluation of [filter conditions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_path_expression_attr.htm) in [path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_path_expression.htm) of the CDS view

true:
The filter conditions of CDS associations occurring more than once in path expressions are compared and, if they match, the associated join expression is created only once.
false:
For each CDS association with a filter condition, a separate join expression is created and evaluated.

false

true

AbapCatalog.dbHints\[ \].dbSystem

Obsolete: Database system for which a [database hint](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_hint_glosry.htm "Glossary Entry") is specified (evaluated using [SADL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensadl_glosry.htm "Glossary Entry")).
[Consumption.dbHintsCalculatedBy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm) should be used instead.

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

Obsolete: [Database hint](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_hint_glosry.htm "Glossary Entry") (evaluated using [SADL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensadl_glosry.htm "Glossary Entry")).
[Consumption.dbHints\[ \]](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm) should be used instead.

Platform-dependent database hint

\-

\-

AbapCatalog.preserveKey

Specifies the definition of the key fields in the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") of the CDS view.

true:
The key fields of the CDS database view are defined as dictated by the addition [KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm).
false:
The key fields of the CDS database view are determined as for database views in ABAP Dictionary, regardless of the addition [KEY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_entry.htm).

false

true

AbapCatalog.sqlViewName

Name of the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") of the CDS view

Character string with a maximum of 16 characters consisting of letters, numbers and underscores and that starts with a [namespace prefix](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenname_space_prefix_glosry.htm "Glossary Entry").

\-

\-

AbapCatalog.viewEnhancementCategory\[ \]

Specifies how the CDS view is extended using [CDS view enhancements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_extend_glosry.htm "Glossary Entry"). A comma-separated list of values can be specified in the square brackets of the [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry").

#PROJECTION\_LIST:
Extensions of the SELECT list and additional CDS associations are allowed; extensions of CDS views whose SELECT lists contain [aggregate expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm) or have a [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm) clause must be permitted using further values
#GROUP\_BY:
Aggregated or non-aggregated elements are allowed to be added to a SELECT list with [aggregated expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_aggregate_functions.htm) and the associated extensions of the of the [GROUP-BY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_group_by.htm) clause are also permitted; can only be specified together with #PROJECTION\_LIST
#UNION:
Extensions of the SELECT list of a CDS view with a [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_union.htm) clause are allowed; can only be specified together with #PROJECTION\_LIST
#NONE:
No extensions allowed; cannot be specified together with other values

#PROJECTION\_LIST

#PROJECTION\_LIST

Notes

-   Each definition of a CDS view must contain the ABAP annotation AbapCatalog.sqlViewName, which defines the name of the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") in ABAP Dictionary.

-   The name given to the database view can no longer be changed after the CDS view is transported into a follow-on system.

-   In the [annotation array](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenannotation_array_glosry.htm "Glossary Entry") AbapCatalog.viewEnhancementCategory\[ \], #GROUP\_BY and #UNION can only be specified together with the default value #PROJECTION\_LIST. The value #NONE excludes any other values.

-   Extensions of a view with aggregate expressions or with a UNION clause modify the cardinality of the results set. This means that these extensions must have special permission in the view to enable consumers of the view to handle any changes to cardinalities.

-   It is advisable to use the annotation AbapCatalog.compiler.compareFilter with the value true. ADT suggests this when a new CDS view is created.

-   The [framework-specific annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencomponent_annotation_glosry.htm "Glossary Entry") [@Consumption.dbHints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk_tables.htm) replaces the [ABAP annotation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencore_annotation_glosry.htm "Glossary Entry") [@AbapCatalog.dbHints](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap_tables.htm) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime environment.

Example

Activates [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") with single record buffering for the CDS view business\_partner.

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

For the CDS view business\_partner, activates [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") for a generic area and a key element.

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

Defines [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

AccessControl.authorizationCheck

Defines implicit [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") when ABAP SQL is used to access the CDS view

#CHECK:
If ABAP SQL is used to access the view, [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) is performed implicitly if a [CDS role](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry") is assigned to the view. If there is no role for the view, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_authorizations.htm) is performed. This produces a syntax check warning in the DCL source code of a role for the view.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensadl_glosry.htm "Glossary Entry")).

#CHECK

#CHECK

Notes

-   Value #NOT\_REQUIRED is recommended for CDS views that no [access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") is provided for when they are created, but which roles can be defined for later on.

-   The value #NOT\_ALLOWED switches implicit access control off when the CDS view is accessed in ABAP SQL. The addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) can be used in the [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause to switch access control off for views not annotated with this annotation. In the case of views too, the authorization check with the addition WITH PRIVILEGED ACCESS must be disabled in [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry") in ABAP SQL statements. If not, a [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs.

-   [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for cross-client access. This is why in ABAP SQL, the addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) and the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) can only be used when accessing CDS entities where access control is disabled. It is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is only specified for CDS views that are subject to cross-client access.

-   The annotation AccessControl has further [framework-specific subannotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm).

ClientDependent Annotations (Obsolete)

Defines [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm) for the CDS view (obsolete).

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientDependent

Defines [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_client_handling_obs.htm) when ABAP SQL is used to access the CDS view (obsolete).

true:
The CDS view is client-specific. The view fields of the CDS entity do not cover a client column, from the perspective of an ABAP program. When accessed using [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is applied.
false:
The CDS view is a cross-client view. No [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is applied.

\-

true

Notes

-   The obsolete annotation @ClientDependent is replaced by the annotations @ClientHandling.type and @ClientHandling.algorithm.

-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling are specified, the default values of the @ClientHandling annotations apply.

-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.

ClientHandling Annotations

Defines [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientHandling.type

Defines the [client dependency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) when ABAP SQL is used to access the CDS view.

#CLIENT\_DEPENDENT:
The CDS view is client-specific. When accessed using [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is applied.
#CLIENT\_INDEPENDENT:
The CDS view is a cross-client function. When accessed using [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), no [implicit client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_client_handling.htm) is applied.
#INHERITED:
The client dependency of the CDS view is determined by the data sources used. If a data source is client-specific, the CDS view is too.

#INHERITED

#INHERITED

ClientHandling.algorithm

Defines [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) when ABAP SQL is used to access the CDS view.

#NONE:
No implicit client handling takes place.
#AUTOMATED:
The joins of the CDS view are modified implicitly.
#SESSION\_VARIABLE:
The joins of the CDS view are modified implicitly and the session variable $session.client is used implicitly to improve performance.

#AUTOMATED

#AUTOMATED

Note

An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

DataAging Annotations

Defines [data aging](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_aging_glosry.htm "Glossary Entry") for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_aging_glosry.htm "Glossary Entry") is respected on a [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") when the CDS view is accessed using ABAP SQL.

true:
ABAP SQL reads all data
false:
ABAP SQL reads current data only

false

true

Example

When the CDS view sales\_order\_12 is accessed, all data is read on [SAP HANA databases](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry")and not just data flagged as "HOT" in the database table snwd\_so.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_2012'
@DataAging.noAgingRestriction:true
define view sales\_order\_2012 as
  select from snwd\_so
         { key snwd\_so.so\_id,
               snwd\_so.buyer\_guid as customer\_guid }
  where snwd\_so.created\_at >= 20120101000000.0
    and snwd\_so.created\_at < 20130101000000.0;

Metadata Annotations

Defines the handling of metadata from the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Metadata.ignorePropagatedAnnotations

Defines whether [analysis of annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_analysis.htm) is possible using the annotation API CL\_DD\_DDL\_ANNOTATION\_SERVICE.

true:
Only direct and derived annotations of the current CDS entity are respected.
false:
Inherited annotations of CDS entities used are also respected.

false

true

ObjectModel Annotations

...

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.usageType.dataClass

...

...:
...
...:
...

...

...

ObjectModel.usageType.serviceQuality

...

...:
...
...:
...

...

...

ObjectModel.usageType.sizeCategory

...

...:
...
...:
...

...

...

...

Notes

-   ...

-   In addition to the [ABAP annotations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_abap.htm) shown here, there are also [framework-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_frmwrk.htm) ObjectModel annotations.