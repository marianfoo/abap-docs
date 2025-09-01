  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) → 

ABAP CDS - DEFINE VIEW, view\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as a view annotation in the definition of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)). The character @ must be placed directly in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #VIEW.

-   [AbapCatalog Annotations](#abencds-f1-view-entity-annotations-1--------accesscontrol-annotations---@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_2)

-   [ClientDependent Annotations (Obsolete)](#abencds-f1-view-entity-annotations-3--------clienthandling-annotations---@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_4)

-   [DataAging Annotations](#abencds-f1-view-entity-annotations-5--------metadata-annotations---@ITOC@@ABENCDS_F1_VIEW_ENTITY_ANNOTATIONS_6)

-   [ObjectModel Annotations](#abencds-f1-view-entity-annotations-7---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value--include-abencds--general--comp--annot-object-doku-id-sd--note--alongside-the-view-annotations-shown-here--the-globally-valid--entity-annotations--javascript-call-link---abencds-f1-entity-annotations-htm-----can-also-be-specified-for-a-view---abapcatalog-annotations--technical-settings-of-a-cds-view---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--abapcatalog-buffering-status--activates-and-deactivates--table-buffering--javascript-call-link---abencds-sap-puffer-htm-----for-the-cds-view---active--table-buffering-active--switched--off--table-buffering-allowed-but-not-active--not--allowed--table-buffering-not-allowed---switched--off---switched--off--abapcatalog-buffering-type--buffering-type-in--table-buffering--javascript-call-link---abencds-sap-puffer-htm-------single--single-records--generic--generic-area--full--full--none--none---none---none--abapcatalog-buffering-numberofkeyfields--number-of-key-elements-in--table-buffering--javascript-call-link---abencds-sap-puffer-htm-----of-generic-areas--number-between-0-and-k-1--where-k-is-the-number-of-key-elements--0--0--abapcatalog-compiler-comparefilter--defines-the-evaluation-of--filter-conditions--javascript-call-link---abencds-path-expression-attr-htm-----in--path-expressions--javascript-call-link---abencds-f1-path-expression-htm-----of-the-cds-view--true--the-filter-conditions-of-cds-associations-occurring-more-than-once-in-path-expressions-are-compared-and--if-they-match--the-associated-join-expression-is-created-only-once--false--for-each-cds-association-with-a-filter-condition--a-separate-join-expression-is-created-and-evaluated---false--true--abapcatalog-dbhints------dbsystem--obsolete--database-system-for-which-a--database-hint--javascript-call-link---abendatabase-hint-glosry-htm-----glossary-entry---is-specified--evaluated-using--sadl--javascript-call-link---abensadl-glosry-htm-----glossary-entry------consumption-dbhintscalculatedby--javascript-call-link---abencds-annotations-frmwrk-htm-----should-be-used-instead----ada--sap-maxdb--db2--ibm-db2--db4--ibm-db2-for-as-400--db6--ibm-db2-udb--inf--informix--mss--microsoft-sql-server--ora--oracle-db--hdb--sap-hana-database--ase--sybase-ase--all--all-database-systems----------abapcatalog-dbhints------hint--obsolete---database-hint--javascript-call-link---abendatabase-hint-glosry-htm-----glossary-entry----evaluated-using--sadl--javascript-call-link---abensadl-glosry-htm-----glossary-entry------consumption-dbhints-------javascript-call-link---abencds-annotations-frmwrk-htm-----should-be-used-instead---platform-dependent-database-hint----------abapcatalog-preservekey--specifies-the-definition-of-the-key-fields-in-the--cds-database-view--javascript-call-link---abencds-database-view-glosry-htm-----glossary-entry---of-the-cds-view---true--the-key-fields-of-the-cds-database-view-are-defined-as-dictated-by-the-addition--key--javascript-call-link---abencds-f1-select-list-entry-htm------false--the-key-fields-of-the-cds-database-view-are-determined-as-for-database-views-in-abap-dictionary--regardless-of-the-addition--key--javascript-call-link---abencds-f1-select-list-entry-htm-------false--true--abapcatalog-sqlviewname--name-of-the--cds-database-view--javascript-call-link---abencds-database-view-glosry-htm-----glossary-entry---of-the-cds-view--character-string-with-a-maximum-of-16-characters-consisting-of-letters--numbers-and-underscores-and-that-starts-with-a--namespace-prefix--javascript-call-link---abenname-space-prefix-glosry-htm-----glossary-entry-------------abapcatalog-viewenhancementcategory-------specifies-how-the-cds-view-is-extended-using--cds-view-enhancements--javascript-call-link---abencds-view-extend-glosry-htm-----glossary-entry----a-comma-separated-list-of-values-can-be-specified-in-the-square-brackets-of-the--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry------projection--list--extensions-of-the-select-list-and-additional-cds-associations-are-allowed--extensions-of-cds-views-whose-select-lists-contain--aggregate-expressions--javascript-call-link---abencds-f1-aggregate-functions-htm-----or-have-a--union--javascript-call-link---abencds-f1-union-htm-----clause-must-be-permitted-using-further-values--group--by--aggregated-or-non-aggregated-elements-are-allowed-to-be-added-to-a-select-list-with--aggregated-expressions--javascript-call-link---abencds-f1-aggregate-functions-htm-----and-the-associated-extensions-of-the-of-the--group-by--javascript-call-link---abencds-f1-group-by-htm-----clause-are-also-permitted--can-only-be-specified-together-with--projection--list--union--extensions-of-the-select-list-of-a-cds-view-with-a--union--javascript-call-link---abencds-f1-union-htm-----clause-are-allowed--can-only-be-specified-together-with--projection--list--none--no-extensions-allowed--cannot-be-specified-together-with-other-values---projection--list---projection--list--notes------each-definition-of-a-cds-view-must-contain-the-abap-annotation-abapcatalog-sqlviewname--which-defines-the-name-of-the--cds-database-view--javascript-call-link---abencds-database-view-glosry-htm-----glossary-entry---in-abap-dictionary-------the-name-given-to-the-database-view-can-no-longer-be-changed-after-the-cds-view-is-transported-into-a-follow-on-system-------in-the--annotation-array--javascript-call-link---abenannotation-array-glosry-htm-----glossary-entry---abapcatalog-viewenhancementcategory--------group--by-and--union-can-only-be-specified-together-with-the-default-value--projection--list--the-value--none-excludes-any-other-values-------extensions-of-a-view-with-aggregate-expressions-or-with-a-union-clause-modify-the-cardinality-of-the-results-set--this-means-that-these-extensions-must-have-special-permission-in-the-view-to-enable-consumers-of-the-view-to-handle-any-changes-to-cardinalities-------it-is-advisable-to-use-the-annotation-abapcatalog-compiler-comparefilter-with-the-value-true--adt-suggests-this-when-a-new-cds-view-is-created-------the--framework-specific-annotation--javascript-call-link---abencomponent-annotation-glosry-htm-----glossary-entry----Consumption.dbHints](javascript:call_link\('abencds_annotations_frmwrk_tables.htm'\)) replaces the [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [@AbapCatalog.dbHints](javascript:call_link\('abencds_annotations_abap_tables.htm'\)) and makes it obsolete. The ABAP annotation is evaluated by frameworks such as SADL and not by the ABAP runtime environment.

Example

Activates [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") with single record buffering for the CDS view business\_partner.

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

For the CDS view business\_partner, activates [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") for a generic area and a key element.

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
If ABAP SQL is used to access the view, [access control](javascript:call_link\('abencds_authorizations.htm'\)) is performed implicitly if a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") is assigned to the view. If there is no role for the view, a syntax check warning occurs.
#NOT\_REQUIRED:
Like #CHECK, but there is no syntax check warning.
#NOT\_ALLOWED:
No [access control](javascript:call_link\('abencds_authorizations.htm'\)) is performed. This produces a syntax check warning in the DCL source code of a role for the view.
#PRIVILEGED\_ONLY:
Privileged CDS association (evaluated by [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry")).

#CHECK

#CHECK

Notes

-   Value #NOT\_REQUIRED is recommended for CDS views that no [access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is provided for when they are created, but which roles can be defined for later on.

-   The value #NOT\_ALLOWED switches implicit access control off when the CDS view is accessed in ABAP SQL. The addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) can be used in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause to switch access control off for views not annotated with this annotation. In the case of views too, the authorization check with the addition WITH PRIVILEGED ACCESS must be disabled in [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") in ABAP SQL statements. If not, a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") occurs.

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for cross-client access. This is why in ABAP SQL, the addition [USING](javascript:call_link\('abapselect_client.htm'\)) and the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) can only be used when accessing CDS entities where access control is disabled. It is recommended that the annotation AccessControl.authorizationCheck:#NOT\_ALLOWED is only specified for CDS views that are subject to cross-client access.

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
The CDS view is client-specific. The view fields of the CDS entity do not cover a client column, from the perspective of an ABAP program. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
false:
The CDS view is a cross-client view. No [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.

\-

true

Notes

-   The obsolete annotation @ClientDependent is replaced by the annotations @ClientHandling.type and @ClientHandling.algorithm.

-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling are specified, the default values of the @ClientHandling annotations apply.

-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.

ClientHandling Annotations

Defines [client handling](javascript:call_link\('abencds_client_handling.htm'\)) for the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientHandling.type

Defines the [client dependency](javascript:call_link\('abencds_client_handling.htm'\)) when ABAP SQL is used to access the CDS view.

#CLIENT\_DEPENDENT:
The CDS view is client-specific. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
#CLIENT\_INDEPENDENT:
The CDS view is a cross-client function. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), no [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
#INHERITED:
The client dependency of the CDS view is determined by the data sources used. If a data source is client-specific, the CDS view is too.

#INHERITED

#INHERITED

ClientHandling.algorithm

Defines [client handling](javascript:call_link\('abencds_client_handling.htm'\)) when ABAP SQL is used to access the CDS view.

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

When the CDS view sales\_order\_12 is accessed, all data is read on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry")and not just data flagged as "HOT" in the database table snwd\_so.

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

Defines whether [analysis of annotations](javascript:call_link\('abencds_annotations_analysis.htm'\)) is possible using the annotation API CL\_DD\_DDL\_ANNOTATION\_SERVICE.

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

-   In addition to the [ABAP annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) shown here, there are also [framework-specific](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) ObjectModel annotations.