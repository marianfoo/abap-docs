---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_function_annotations.htm"
abapFile: "abencds_f1_function_annotations.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abencds", "function", "annotations"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm) → 

ABAP CDS - DEFINE TABLE FUNCTION, function\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax.htm) in the definition of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") in front of the statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_table_function.htm) as a function notation. The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation of the annotation definition, [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm), should be specified here using the value #TABLE\_FUNCTION.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [AccessControl Annotations](#abencds-f1-function-annotations-1--------clientdependent-annotations--obsolete----@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_2)

-   [ClientHandling Annotations](#abencds-f1-function-annotations-3--------dataaging-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_4)

-   [EndUserText Annotations](#abencds-f1-function-annotations-5---the-first-column-displays-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-displays-its-meaning--the-third-column-shows-the-possible--annotation-values--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenannotation-value-glosry-htm--glossary-entry----the-fourth-column-shows-the-value-set-implicitly-for-the-annotation-value-if-the-annotation-is-not-used-explicitly--the-fifth-column-displays-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-anno-definition-glosry-htm--glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---accesscontrol-annotations--defines--access-control--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-access-control-glosry-htm--glossary-entry---for-the-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--accesscontrol-authorizationcheck--defines-implicit--access-control--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-access-control-glosry-htm--glossary-entry---when-open-sql-is-used-to-access-the-cds-table-function---check--if-open-sql-is-used-to-access-the-table-function--access-control-is-applied-implicitly-if-a--cds-role--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-role-glosry-htm--glossary-entry---is-assigned-to-the-table-function--if-there-is-no-role-for-the-table-function--a-syntax-check-warning-occurs---not--required--like--check--but-there-is-no-syntax-check-warning---not--allowed--no--access-control--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-authorizations-htm--is-performed--this-produces-a-syntax-check-warning-in-the-dcl-source-code-of-a-role-for-the-table-function---privileged--only--privileged-association--evaluated-by--sadl--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abensadl-glosry-htm--glossary-entry-------check---check--notes------the-value--not--required-is-recommended-for-cds-table-functions-not-subject-to--access-control--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-access-control-glosry-htm--glossary-entry---when-created--but-for-which-roles-can-be-defined-later-------the-value--not--allowed-switches-implicit-access-control-off-when-the-cds-table-function-is-accessed-in-open-sql--the-addition--with-privileged-access--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapselect-data-source-htm--can-be-used-in-the--from--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapfrom-clause-htm--clause-to-switch-access-control-off-for-table-functions-not-annotated-with-this-annotation--------cds-access-control--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-access-control-glosry-htm--glossary-entry---does-not-work-for-cross-client-access--this-is-why-in-open-sql-the-additions--using-client--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapselect-client-htm--and--client-specified--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapselect-client-htm--can-only-be-used-when-accessing-cds-entities-where-no-access-control-takes-place--it-is-recommended-that-the-annotation-accesscontrol-authorizationcheck--not--allowed-is-only-specified-for-cds-table-functions-that-are-subject-to-cross-client-access-------the-annotation-accesscontrol-has-further--framework-specific-subannotations--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-annotations-frmwrk-htm----clientdependent-annotations--obsolete---obsolete-control-of--client-handling--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-func-client-handling-obs-htm--for-the-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--clientdependent--defines--client-handling--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-func-client-handling-obs-htm--when-open-sql-is-used-to-access-the-cds-table-function--obsolete----true--the-cds-table-function-is-client-specific--when-accessed-using--select--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapselect-htm---automatic-client-handling-is-performed--false--the-cds-table-function-is-a-cross-client-table-function--no-automatic-client-handling-is-performed-------true--notes------the-obsolete-annotation-ClientDependent is replaced by the annotation @ClientHandling.type.

-   The obsolete annotation @ClientDependent does not have a default value if it is not used. If neither of the annotations @ClientDependent or @ClientHandling.type are specified, the default values of the @ClientHandling annotation apply.

-   The obsolete annotation @ClientDependent cannot be specified together with the annotation @ClientHandling.type.

ClientHandling Annotations

Control of the [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm) for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ClientHandling.type

Defines [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_func_client_handling.htm) when Open SQL is used to access the CDS table function.

#CLIENT\_DEPENDENT:
The CDS table function is client-specific. When accessed using [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm), automatic client handling is performed.
#CLIENT\_INDEPENDENT:
The CDS table function is a cross-client function. No automatic client handling is performed.

#CLIENT\_DEPENDENT

#CLIENT\_DEPENDENT

Notes

-   Any other annotations specified using the [main annotation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmain_annotation_glosry.htm "Glossary Entry") ClientHandling and any other values than those shown here cannot be specified in the definition of a CDS table function.

-   An annotation @ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

DataAging Annotations

Control of the handling of [obsolete data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_data_aging.htm) for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines the handling of [obsolete data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_data_aging.htm) on a [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry") when Open SQL is used to access the CDS table function

true:
Open SQL reads all data
false:
Open SQL reads current data only

false

true

EndUserText Annotations

Translatable texts of the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the CDS table function

Character string with maximum 60 characters

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.