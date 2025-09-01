  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - Common DDL Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddl_common_elements.htm) → 

CDS DDL - element\_annot

Element annotations are [annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) for the following [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   [Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v2.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v2_view_glosry.htm "Glossary Entry")

-   Elements in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_proj_view_element_list.htm) of a [CDS projection view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_projection_view_glosry.htm "Glossary Entry")

-   [Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_return_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry")

-   [Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_hiera_element_list.htm) of a [CDS hierarchy](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_hierarchy_glosry.htm "Glossary Entry")

-   [Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_list_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_absent_element_list.htm) of an [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry")

-   [Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_view_glosry.htm "Glossary Entry")

The elements of the SELECT list or element list of a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") define the components of the result set of database accesses using [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) and of structured data types in ABAP. The annotations enrich these components with additional semantic properties. The annotation should be defined as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation [@Scope](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_anno_annos.htm) should be specified using the value #ELEMENT.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [API Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_1)

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_2)

-   [Environment Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_3)

-   [Semantics Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_4)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Hint

For each element annotation that is not part of an [annotation array](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenannotation_array_glosry.htm "Glossary Entry") you can specify the special value [null](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_syntax_value.htm) without quotation marks. This means that the annotations are ignored in the [evaluation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_analysis.htm) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.

API Annotations

Defines the release of the element in the restricted [ABAP language versions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_version_glosry.htm "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

API.element.releaseState

In a CDS entity released using a [release contract](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrelease_contract_glosry.htm "Glossary Entry"), overrides the release of individual elements.

#DEPRECATED:
The element should no longer be used. If accessed, the element produces a syntax check warning in restricted [ABAP language versions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_version_glosry.htm "Glossary Entry").

\-

\-

API.element.successor

Name of a successor that replaces an element forbidden using @API.element.releaseState:#DEPRECATED.

Name of an element of the type [ElementRef](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_annotation_type.htm).

\-

\-

Hint

In the ABAP language versions [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") and [ABAP for Key Users](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry"), accessing an element forbidden using @API.element.releaseState:#DEPRECATED in an ABAP program or CDS entity produces a syntax check warning. An element proposed by @API.element.successor should be used instead.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Controls value passing when using the element in a condition of ABAP SQL.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.sql.passValue

Specifies whether a placeholder ? or a literal values is passed to the database in an [ABAP SQL condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasql_cond.htm) when the element is compared with a host variable.

true:
The literal value of the host variable is passed.
false:
A placeholder ? is passed.

false

true

Semantics Annotations

Semantic properties of the element. The following table contains an additional, sixth column which describes further, context-specific rules that apply only for certain CDS entities.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Context-specific rules

Semantics.amount.currencyCode

Element is defined as a [currency field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_field_glosry.htm "Glossary Entry") to which a currency key is assigned

Name of an element defined as a currency key

\-

\-

In a CDS view entity, mandatory for all elements of data type abap.curr. Optional in all other CDS entities.

Semantics.currencyCode

Element is defined as a [currency key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_key_glosry.htm "Glossary Entry")

true
false

\-

true

This annotation is not supported in CDS view entities.

Semantics.quantity.unitOfMeasure

Element is defined as a [quantity field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenquantity_glosry.htm "Glossary Entry") to which a unit of measurement key is assigned

Name of an element defined as a unit of measurement key

\-

\-

In a CDS view entity, mandatory for all elements of data type abap.quan. Optional in all other CDS entities.

Semantics.unitOfMeasure

Element is defined as a [unit of measurement key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunit_glosry.htm "Glossary Entry")

true
false

\-

true

This annotation is not supported in CDS view entities.

Hints

-   These semantics annotations are used to define the [currency fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_currency_field.htm) and [quantity fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_quantity_field.htm) of CDS views and CDS table functions.

-   In addition to the [ABAP annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_abap.htm) shown here, there are also [framework-specific](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations_frmwrk.htm) semantics annotations.