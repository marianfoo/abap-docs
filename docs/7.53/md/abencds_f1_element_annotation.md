  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) → 

ABAP CDS - element\_annot

Element annotations are [annotations](javascript:call_link\('abencds_annotations.htm'\)) for the following [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry") elements:

-   [Elements](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry")

-   [Elements](javascript:call_link\('abencds_f1_return_list_element.htm'\)) in an [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")

-   [Elements](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) in an [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry")

The elements of the SELECT list in a CDS view and the elements of a CDS table function define the components of the results set of database accesses using [SELECT](javascript:call_link\('abapselect.htm'\)) and of structured data types in ABAP. The annotations enrich these components with additional semantic properties. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified here using the value #ELEMENT.

The following tables show the possible [ABAP annotations](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_1)

-   [Environment Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_2)

-   [Semantics Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_3)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Note

For each element annotation that is not part of an [annotation arrays](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") you can specify the special value [null](javascript:call_link\('abencds_annotations_syntax_value.htm'\)) (without quotation marks). This means that the annotations are ignored in the [evaluation](javascript:call_link\('abencds_annotations_analysis.htm'\)) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.

EndUserText Annotations

Translatable texts of element.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

EndUserText.label

Translatable short text of the element

Character string with maximum 60 characters

\-

\-

EndUserText.quickInfo

Translatable tooltip of the element

String

\-

\-

Note

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations

Control of value transfer when using the element in a condition of ABAP SQL.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.sql.passValue

Specifies whether a placeholder ? or a literal values is passed to the database in a [ABAP SQL condition](javascript:call_link\('abenopen_sql_cond.htm'\)) when the element is compared with a host variable.

true:
The literal value of the host variable is passed.
false:
A placeholder ? is passed.

false

true

Semantics Annotations

Semantic properties of the element.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Semantics.amount.currencyCode

Element is defined as a [currency field](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") to which a currency key is assigned

Name of an element defined as a currency key

\-

\-

Semantics.currencyCode

Element is defined as a [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry")

\-

\-

\-

Semantics.quantity.unitOfMeasure

Element is defined as a [quantity field](javascript:call_link\('abenquantity_glosry.htm'\) "Glossary Entry") to which a unit of measurement key is assigned

Name of an element defined as a unit of measurement key

\-

\-

Semantics.unitOfMeasure

Element is defined as a [unit of measurement key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry")

\-

\-

\-

Notes

-   These semantics annotations are used to define the [currency fields](javascript:call_link\('abenddic_currency_field.htm'\)) and [quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\)) of CDS views and CDS table functions.

-   In addition to the [ABAP annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) shown here, there are also [framework-specific](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) semantics annotations.