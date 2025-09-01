  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) → 

ABAP CDS - element\_annot

Element annotations are [annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations.htm) for the following [CDS DDL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_ddl_glosry.htm "Glossary Entry") elements:

-   [Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry")

-   [Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_return_list_element.htm) in an [element list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_return_list.htm) of a [CDS table function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry")

Both the elements of a CDS table function and the elements of the SELECT list in a CDS view define the components of the results set of database accesses using [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect.htm) and of structured data types in ABAP. The annotations enrich these components with additional semantic properties. It is advisable to define the annotation as a CDS object in a [CDS annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") and the annotation definition annotation should be specified here as a [@Scope](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_anno_annos.htm) with the value #ELEMENT.

The following tables show the possible [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencore_annotation_glosry.htm "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime environment for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm). These are not evaluated by the ABAP runtime environment but by other SAP frameworks instead.

-   [EndUserText Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_1)

-   [Environment Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_2)

-   [Semantics Annotations](#@@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_3)

The first column displays the (possibly structured) name annotation of an ABAP annotation and the second column displays its meaning. The third column shows the possible [annotation values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_value_glosry.htm "Glossary Entry"). The fourth column shows the value set implicitly for the annotation value if the annotation is not used explicitly. The fifth column displays the default value set implicitly for value in accordance with the [annotation definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_anno_definition_glosry.htm "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Note

For each element annotation that is not part of an [annotation arrays](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenannotation_array_glosry.htm "Glossary Entry") you can specify the special value [null](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_syntax_value.htm) (without quotation marks). This means that the annotations are ignored in the [evaluation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_analysis.htm) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_object_glosry.htm "Glossary Entry"). The value of an annotation like this is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used.

Environment Annotations

Control of value transfer when using the element in a WHERE condition of the CDS view.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.sql.passValue

Not yet implemented

\-

\-

\-

Semantics Annotations

Semantic properties of the element.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Semantics.amount.currencyCode

Element is defined as a [currency field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_field_glosry.htm "Glossary Entry") to which a currency key is assigned

Name of an element defined as a currency key

\-

\-

Semantics.currencyCode

Element is defined as a [currency key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_key_glosry.htm "Glossary Entry")

\-

\-

\-

Semantics.quantity.unitOfMeasure

Element is defined as a [quantity field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenquantity_glosry.htm "Glossary Entry") to which a unit of measurement key is assigned

Name of an element defined as a unit of measurement key

\-

\-

Semantics.unitOfMeasure

Element is defined as a [unit of measurement key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_glosry.htm "Glossary Entry")

\-

\-

\-

Notes

-   These semantics annotations are used to define the [currency fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm) and [quantity fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm) of CDS views and CDS table functions.

-   In addition to the [ABAP annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_abap.htm) shown here, there are also [framework-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_annotations_frmwrk.htm) semanticsannotations.