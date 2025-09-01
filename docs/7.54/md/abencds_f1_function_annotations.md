  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) → 

ABAP CDS - DEFINE TABLE FUNCTION, function\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) in the definition of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in front of the statement [DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) as a function notation. The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #TABLE\_FUNCTION.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [AccessControl Annotations](#abencds-f1-function-annotations-1--------clientdependent-annotations--obsolete----@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_2)

-   [ClientHandling Annotations](#abencds-f1-function-annotations-3--------dataaging-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_4)

-   [ObjectModel Annotations](#abencds-f1-function-annotations-5---the-first-column-of-the-table-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--javascript-call-link---abenannotation-value-glosry-htm-----glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--javascript-call-link---abencds-anno-definition-glosry-htm-----glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---note--alongside-the-function-annotations-shown-here--the-globally-valid--entity-annotations--javascript-call-link---abencds-f1-entity-annotations-htm-----can-also-be-specified-for-a-table-function---accesscontrol-annotations--defines--access-control--javascript-call-link---abencds-access-control-glosry-htm-----glossary-entry---for-the-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--accesscontrol-authorizationcheck--defines-implicit--access-control--javascript-call-link---abencds-access-control-glosry-htm-----glossary-entry---when-abap-sql-is-used-to-access-the-cds-table-function---check--if-abap-sql-is-used-to-access-the-table-function---access-control--javascript-call-link---abencds-authorizations-htm-----is-applied-implicitly-if-a--cds-role--javascript-call-link---abencds-role-glosry-htm-----glossary-entry---is-assigned-to-the-table-function--if-there-is-no-role-for-the-table-function--a-syntax-check-warning-occurs---not--required--like--check--but-there-is-no-syntax-check-warning---not--allowed--no--access-control--javascript-call-link---abencds-authorizations-htm-----is-performed--this-produces-a-syntax-check-warning-in-the-dcl-source-code-of-a-role-for-the-table-function---privileged--only--privileged-cds-association--evaluated-by--sadl--javascript-call-link---abensadl-glosry-htm-----glossary-entry-------check---check--notes------the-value--not--required-is-recommended-for-cds-table-functions-not-subject-to--access-control--javascript-call-link---abencds-access-control-glosry-htm-----glossary-entry---when-created--but-for-which-roles-can-be-defined-later-------the-value--not--allowed-switches-implicit-access-control-off-when-the-cds-table-function-is-accessed-in-abap-sql--the-addition--with-privileged-access--javascript-call-link---abapselect-data-source-htm-----can-be-used-in-the--from--javascript-call-link---abapfrom-clause-htm-----clause-to-switch-access-control-off-for-table-functions-not-annotated-with-this-annotation--------cds-access-control--javascript-call-link---abencds-access-control-glosry-htm-----glossary-entry---does-not-work-for-cross-client-access--this-is-why-in-abap-sql--the-addition--using--javascript-call-link---abapselect-client-htm-----and-the-obsolete-addition--client-specified--javascript-call-link---abapselect-client-obsolete-htm-----can-only-be-used-when-accessing-cds-entities-where-access-control-is-disabled--it-is-recommended-that-the-annotation-accesscontrol-authorizationcheck--not--allowed-is-only-specified-for-cds-table-functions-that-are-subject-to-cross-client-access-------the-annotation-accesscontrol-has-further--framework-specific-subannotations--javascript-call-link---abencds-annotations-frmwrk-htm-------clientdependent-annotations--obsolete---obsolete-control-of--client-handling--javascript-call-link---abencds-func-client-handling-obs-htm-----for-the-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--clientdependent--defines--client-handling--javascript-call-link---abencds-func-client-handling-obs-htm-----when-abap-sql-is-used-to-access-the-cds-table-function--obsolete----true--the-cds-table-function-is-client-specific--when-accessed-using--select--javascript-call-link---abapselect-htm-------implicit-client-handling--javascript-call-link---abenopen-sql-client-handling-htm-----is-applied--false--the-cds-table-function-is-a-cross-client-table-function--no--implicit-client-handling--javascript-call-link---abenopen-sql-client-handling-htm-----is-applied-------true--notes------the-obsolete-annotation-ClientDependent is replaced by the annotation @ClientHandling.type.

-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling.type are specified, the default values of the @ClientHandling annotation apply.

-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.type.

ClientHandling Annotations

Control of the [client handling](javascript:call_link\('abencds_func_client_handling.htm'\)) for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientHandling.type

Defines [client handling](javascript:call_link\('abencds_func_client_handling.htm'\)) when ABAP SQL is used to access the CDS table function.

#CLIENT\_DEPENDENT:
The CDS table function is client-specific. When accessed using [SELECT](javascript:call_link\('abapselect.htm'\)), [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.
#CLIENT\_INDEPENDENT:
The CDS table function is a cross-client function. No [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) is applied.

#CLIENT\_DEPENDENT

#CLIENT\_DEPENDENT

Notes

-   Any other annotations specified using the [main annotation](javascript:call_link\('abenmain_annotation_glosry.htm'\) "Glossary Entry") ClientHandling and any other values than those shown here cannot be specified in the definition of a CDS table function.

-   An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

DataAging Annotations

Defines [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](javascript:call_link\('abendata_aging_glosry.htm'\) "Glossary Entry") is respected on a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") when the CDS table function is accessed using ABAP SQL.

true:
ABAP SQL reads all data
false:
ABAP SQL reads current data only

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