---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm 'Glossary Entry') annotation(https://help.sap.com/doc/abapdocu_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_function_annotations.htm"
abapFile: "abencds_f1_function_annotations.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "abencds", "function", "annotations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_functions.htm) →  [CDS DDL - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_table_function.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20TABLE%20FUNCTION%2C%20function_annot%2C%20ABENCDS_F1_FUNCTION_ANNOTATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - DEFINE TABLE FUNCTION, function\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_syntax.htm) in the definition of a [CDS table function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") in front of the statement [DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_table_function.htm) as a function notation. The character @ must be placed in front of the name annotation of the annotation. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_anno_annos.htm) should be specified here using the value #TABLE\_FUNCTION.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS object. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [AbapCatalog Annotations](#abencds-f1-function-annotations-1-------accesscontrol-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_2)
-   [ClientHandling Annotations](#abencds-f1-function-annotations-3-------dataaging-annotations---@ITOC@@ABENCDS_F1_FUNCTION_ANNOTATIONS_4)
-   [ObjectModel Annotations](#abencds-f1-function-annotations-5---the-first-column-of-the-table-shows-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-shows-its-meaning--the-third-column-shows-the-possible--annotation-values--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenannotation-value-glosry-htm--glossary-entry----the-fourth-column-shows-the-default-value-which-is-used-if-the-annotation-is-not-used-at-all--the-fifth-column-shows-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-anno-definition-glosry-htm--glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---hint--alongside-the-function-annotations-shown-here--the-globally-valid--entity-annotations--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-f1-entity-annotations-htm--can-also-be-specified-for-a-table-function---abapcatalog-annotations-----technical-settings-of-a-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--abapcatalog-datamaintenance--can-be-used-to-restrict-data-preview-for-a-cds-table-function---restricted--display-allowed-with-restrictions--display--only--display-only--data-preview-is-allowed--not--allowed--display-not-allowed---restricted------hint--the-annotation-abapcatalog-datamaintenance-defines-whether-the-cds-table-function-can-be-displayed-or-maintained-by-certain-tools-such-as-data-preview-in--abap-development-tools-for-eclipse--adt---https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenadt-glosry-htm--glossary-entry----the-annotation-is-evaluated-by-these-tools--restrictions-imposed-by-that-annotation-are-user-independent-and-they-are-evaluated-before-accessing-the-data--additional-restrictions-imposed-by--cds-roles--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-role-glosry-htm--glossary-entry---are-evaluated-during-the-actual-data-access--if-this-is-done-by-abap-sql---accesscontrol-annotations-----defines--access-control--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-access-control-glosry-htm--glossary-entry---for-the-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--accesscontrol-authorizationcheck--defines-implicit--access-control--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-access-control-glosry-htm--glossary-entry---when-abap-sql-is-used-to-access-the-cds-table-function---check--if-abap-sql-is-used-to-access-the-table-function---access-control--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-access-control-htm--is-applied-implicitly-if-a--cds-role--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-role-glosry-htm--glossary-entry---is-assigned-to-the-table-function--if-there-is-no-role-for-the-table-function--a-syntax-check-warning-occurs---not--required--like--check--but-there-is-no-syntax-check-warning---mandatory--it-is-mandatory-to-define-a-cds-role-for-the-table-function--if-no-access-control-has-been-created--a-runtime-error-occurs-when-abap-sql-is-used-to-access-the-table-function---not--allowed--no--access-control--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-access-control-htm--is-performed--this-produces-a-syntax-check-warning-in-the-dcl-source-code-of-a-role-for-the-table-function---privileged--only--privileged-cds-association--evaluated-by--sadl--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abensadl-glosry-htm--glossary-entry-------not--required---not--required--hints------the-value--not--required-is-recommended-for-cds-table-functions-not-subject-to--access-control--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-access-control-glosry-htm--glossary-entry---when-created--but-for-which-roles-can-be-defined-later------the-value--not--allowed-disables-implicit-access-control-when-the-cds-table-function-is-accessed-in-abap-sql--the-addition--with-privileged-access--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapselect-data-source-htm--can-be-used-in-the--from--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapfrom-clause-htm--clause-to-disable-access-control-for-table-functions-not-annotated-with-this-annotation------the-annotation-accesscontrol-has-further--framework-specific-subannotations--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-annotations-frmwrk-htm--------cds-access-control--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-access-control-glosry-htm--glossary-entry---does-not-work-for-client-independent-access--this-is-why-in-abap-sql--the-addition--using--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapselect-client-htm--and-the-obsolete-addition--client-specified--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapselect-client-obsolete-htm--can-only-be-used-when-accessing-cds-entities-where-access-control-is-disabled--it-is-recommended-that-the-annotation-accesscontrol-authorizationcheck--not--allowed-is-only-specified-for-cds-table-functions-that-are-subject-to-client-independent-access---clienthandling-annotations-----control-of-the--client-handling--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-func-client-handling-htm--for-the-cds-table-function---annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--clienthandling-type--defines--client-handling--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abencds-func-client-handling-htm--when-abap-sql-is-used-to-access-the-cds-table-function----client--dependent--the-cds-table-function-is-client-dependent--when-accessed-using--select--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abapselect-htm----implicit-client-handling--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenabap-sql-client-handling-htm--is-applied---client--independent--the-cds-table-function-is-a-client-independent-function--no--implicit-client-handling--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenabap-sql-client-handling-htm--is-applied----client--dependent---client--dependent--hints------any-other-annotations-specified-using-the--main-annotation--https---help-sap-com-doc-abapdocu-758-index-htm-7-58-en-us-abenmain-annotation-glosry-htm--glossary-entry---clienthandling-and-any-other-values-than-those-shown-here-cannot-be-specified-in-the-definition-of-a-cds-table-function------an-annotation-ClientHandling cannot be specified together with the obsolete annotation @ClientDependent.

DataAging Annotations   

Defines [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") for the CDS table function.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

DataAging.noAgingRestriction

Defines how [data aging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_aging_glosry.htm "Glossary Entry") is respected on a [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") when the CDS table function is accessed using ABAP SQL.

true:
ABAP SQL reads all data
false:
ABAP SQL reads current data only

false

true

ObjectModel Annotations   

The following subannotations of ObjectModel characterize CDS table functions with respect to the data they deliver.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

ObjectModel.usageType.dataClass

Specifies the data category of the CDS table function.

A CDS table function can be assigned to one of the following data categories:
#TRANSACTIONAL:
The CDS table function delivers data written or modified in high volume transactions or in background transactions.
#MASTER:
The CDS table function delivers master data. The master data is read in high volume transactions or background transactions, but not written or modified.
#ORGANIZATIONAL:
The CDS table function delivers data that describes organizational structures and customer processes.
#CUSTOMIZING:
The CDS table function delivers data that describes customizing data.
#META:
The CDS table function delivers technical system configuration data or the structure of entities.
#MIXED:
The CDS table function delivers data of mixed data categories.

#MIXED

#MIXED

ObjectModel.usageType.serviceQuality

The quality of the service with respect to the performance that can be expected by the consumer of the CDS table function.

A CDS table function can be assigned to one of the following quality categories:
#A:
The CDS table function can be used for high volume transactions or for background transactions.
#B:
The CDS table function can be used for transactions or for background transactions.
#C:
The CDS table function can be used to query individual objects in transactions.
#D:
The CDS table function can be used for analytical queries.
#X:
The CDS table function is designed for special application cases, such as data migration.
#P:
The CDS table function is used to structure hierarchies of CDS entities and must not be used outside of such a hierarchy.

#X

#X

ObjectModel.usageType.sizeCategory

Specifies the size of the data volume that must be scanned to return the result.

A CDS table function can be assigned to one of the following size categories:
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

-   The above subannotations of ObjectModel can be used to document for which kind of application a table function is intended and which kind of data is expected. This information is especially important in regards of performance that can be expected by the consumer of the function. In contrast to the corresponding [annotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity_anno.htm) for DEFINE VIEW ENTITY, however, no detailed rules for specifying values can be given for CDS table functions. It is up to the developer of a function to assess how it is annotated in regard of its performance-relevant properties.
-   The annotation ObjectModel has further [framework-specific subannotations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_annotations_frmwrk.htm).