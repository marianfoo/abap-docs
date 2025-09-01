---
title: "Syntax"
description: |
  ... @annotation(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ... ... @<annotation(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ... Effect Specifies an annotation(https://help.sap.com/doc/abapdocu_756_in
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_element_annotation.htm"
abapFile: "abencds_f1_element_annotation.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencds", "element", "annotation"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - Common DDL Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddl_common_elements.htm) → 

CDS DDL - element\_annot

Syntax

... @[annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ...
... @<[annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) ...

Effect

Specifies an [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotation_glosry.htm "Glossary Entry") [annotation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_syntax.htm) as an element annotation for the following [CDS entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   [Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v2.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v2_view_glosry.htm "Glossary Entry")
-   Elements in the [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_view_element_list.htm) of a [CDS projection view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry")
-   [Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_return_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry")
-   [Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_hiera_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_hiera_element_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")
-   [Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_custom_element_list.htm) of a [CDS custom entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry")
-   [Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_list_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")
-   [Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

The elements of the SELECT list or element list of a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") define the components of the result set of database accesses using [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) and of structured data types in ABAP. The annotations enrich these components with additional semantic properties. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_anno_annos.htm) should be specified using the value #ELEMENT.

Element annotations can be specified before and after the element:

-   In front of the element, the character @ must be placed before the name annotation of the annotation.
-   After the element, the characters @< must be placed before the name annotation of the annotation.
    
    This notation is possible for all CDS entities listed above, except for CDS view entities. For CDS view entities, all annotations, including element annotations, are possible only in front of the element they refer to.
    

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [API Annotations](#abencds-f1-element-annotation-1-------endusertext-annotations---@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_2)
-   [Environment Annotations](#abencds-f1-element-annotation-3-------semantics-annotations---@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_4)
-   [ObjectModel Annotation](#abencds-f1-element-annotation-5---the-first-column-of-the-table-shows-the--possibly-structured--name-annotation-of-an-abap-annotation-and-the-second-column-shows-its-meaning--the-third-column-shows-the-possible--annotation-values--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenannotation-value-glosry-htm--glossary-entry----the-fourth-column-shows-the-default-value-which-is-used-if-the-annotation-is-not-used-at-all--the-fifth-column-shows-the-default-value-set-implicitly-for-value-in-accordance-with-the--annotation-definition--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abencds-anno-definition-glosry-htm--glossary-entry---if-the-annotation-is-specified-without-a-value--if-nothing-is-specified-for-the-annotation-value--the-annotation-should-be-specified-without-a-value---hint--for-each-element-annotation-that-is-not-part-of-an--annotation-array--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenannotation-array-glosry-htm--glossary-entry---the-special-value--null--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abencds-annotations-syntax-value-htm--can-be-specified-without-quotation-marks--this-means-that-the-annotations-are-ignored-in-the--evaluation--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abencds-annotations-analysis-htm--with-class-cl--dd--ddl--annotation--service-by-default---api-annotations--defines-the-release-of-the-element-in-the-restricted--abap-language-versions--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenabap-version-glosry-htm--glossary-entry-----annotation--meaning--annotation-values--default-value-if-not-used--default-value-if-used-without-value--api-element-releasestate--in-a-cds-entity-released-using-a--release-contract--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenrelease-contract-glosry-htm--glossary-entry----overrides-the-release-of-individual-elements----deprecated--the-element-should-no-longer-be-used--if-accessed--the-element-produces-a-syntax-check-warning-in-restricted--abap-language-versions--https---help-sap-com-doc-abapdocu-756-index-htm-7-56-en-us-abenabap-version-glosry-htm--glossary-entry-------------api-element-successor--name-of-a-successor-that-replaces-an-element-forbidden-using-API.element.releaseState:#DEPRECATED.

Name of an element of the type [ElementRef](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_annotation_type.htm).

\-

\-

Hint

In the ABAP language versions [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") and [ABAP for Key Users](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry"), accessing an element forbidden using @API.element.releaseState:#DEPRECATED in an ABAP program or CDS entity produces a syntax check warning. An element proposed by @API.element.successor should be used instead.

EndUserText Annotations

Translatable texts of the element.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the element.

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the element.

String

\-

\-

Hint

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls value passing when using the element in a condition of ABAP SQL.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.sql.passValue

Specifies whether a placeholder ? or a literal value is passed to the database in an [ABAP SQL condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasql_cond.htm) when the element is compared with a host variable.

true:
The literal value of the host variable is passed.
false:
A placeholder ? is passed.

false

true

Semantics Annotations

Semantic properties of the element. The following table contains an additional sixth column which describes further context-specific rules that apply only to certain CDS entities.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Context-Specific Rules

Semantics.amount.currencyCode

Element is defined as a [currency field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencurrency_field_glosry.htm "Glossary Entry") to which a currency key is assigned

'elem\_name'
Name of an element defined as a currency key

\-

\-

In a CDS view entity, mandatory for all elements of data type abap.curr and possible for [CDS amount fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_amount_field_glosry.htm "Glossary Entry") of other data types. Optional in all other CDS entities.

Semantics.currencyCode

Element is defined as a [currency key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencurrency_key_glosry.htm "Glossary Entry")

true
false

\-

true

This annotation is not supported in CDS view entities.

Semantics.quantity.unitOfMeasure

Element is defined as a [CDS quantity field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenquantity_glosry.htm "Glossary Entry") to which a unit of measurement key or is assigned
In CDS view entities, this annotation can also be used to assign a [calculated unit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_calculated_unit_glosry.htm "Glossary Entry") to a [CDS calculated quantity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry")

'elem\_name'
Name of an element defined as a unit of measurement key or as calculated unit.

\-

\-

In a CDS view entity, mandatory for all elements of data type abap.quan and for all calculated quantities. Possible for [CDS quantity fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_quantity_glosry.htm "Glossary Entry") of other data types. Optional in all other CDS entities.

Semantics.unitOfMeasure

Element is defined as a [unit of measurement key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunit_glosry.htm "Glossary Entry")

true
false

\-

true

This annotation is not supported in CDS view entities.

Semantics.amount.currencyCode and Semantics.quantity.unitOfMeasure must point to elements in the same view which contain the currency or unit key. This rule applies to all CDS entities except of CDS DDIC-based views. In CDS DDIC-based views, the currency or unit key can also be a field from one of the data sources.

If a CDS entity selects from a DDIC database table or from another CDS entity, these semantics annotations are propagated and they don't have to be defined again explicitly.

Exception: in CDS views with [set operators](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_set_operators_glosry.htm "Glossary Entry"), the annotation [Metadata.ignorePropagatedAnnotations: true](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity_anno.htm) is mandatory, propagation is switched off and therefore, reference annotations must be redefined explicitly.

Hints

-   The API [CL\_DD\_DDL\_ANNOTATION\_SERVICE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_analysis.htm) can derive the annotations Semantics.amount.currencyCode and Semantics.quantity.unitofMeasure from DDIC database tables only if the name of the referred currency key or unit key field isn't changed in a CDS view entity. If a CDS view entity selecting from a database table uses an alias name for a currency key or unit key field, then the annotation can't be evaluated by this API.
-   These semantics annotations are used to define the [currency fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_currency_field.htm) and [quantity fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_quantity_field.htm) of [CDS views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry"), [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry"), [CDS abstract entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry"), and [CDS custom entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry").
-   In addition to the [ABAP annotations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_abap.htm) shown here, there are also [framework-specific](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_annotations_frmwrk.htm) semantics annotations.
-   The annotations Semantics.currencyCode and Semantics.unitOfMeasure declare a field as currency key or unit key. In CDS DDIC-based views, these currency/unit key fields are automatically and implicitly assigned to all currency/unit fields that have no other assignment. The assignment order is as follows:
    -   If there's a direct and local currency or unit key assignment, this assignment is considered.
    -   If there's no direct and local assignment, it is checked whether there's any inherited currency or unit key that can be derived from one of the data sources.
    -   If there's no inherited or derived currency or unit key, then the local currency or unit key field is assigned automatically and implicitly, even if it is not specified explicitly.

ObjectModel Annotation

The following ObjectModel annotation can be used in [CDS projection views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_projection_view_glosry.htm "Glossary Entry") to bind an ABAP class to a [CDS virtual element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_virtual_element_glosry.htm "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Context-Specific Rules

ObjectModel.virtualElementCalculatedBy

Binds an ABAP class to a virtual element in a CDS projection view.

'ABAP:class\_name'
The name of the ABAP class class\_name must be specified in single quotation marks and written in uppercase letters. It must be introduced by the string ABAP:.

\-

\-

Currently only supported in CDS projection views for [CDS virtual elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_virtual_element_glosry.htm "Glossary Entry").