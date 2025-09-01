  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - Common DDL Elements](javascript:call_link\('abencds_ddl_common_elements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - element_annot, ABENCDS_F1_ELEMENT_ANNOTATION, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - element\_annot

Syntax

... @[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...
... @<[annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) ...

Effect

Specifies an [annotation](javascript:call_link\('abencds_annotation_glosry.htm'\) "Glossary Entry") [annotation](javascript:call_link\('abencds_annotations_syntax.htm'\)) as an element annotation for the following [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   [Elements](javascript:call_link\('abencds_select_list_entry_v2.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_proj_view_element.htm'\)) in the [element list](javascript:call_link\('abencds_proj_view_element_list.htm'\)) of a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_f1_return_list_element.htm'\)) in an [element list](javascript:call_link\('abencds_f1_return_list.htm'\)) of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_f1_hiera_element.htm'\)) in an [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)) of a [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_f1_custom_element.htm'\)) in an [element list](javascript:call_link\('abencds_f1_custom_element_list.htm'\)) of a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_f1_absent_list_element.htm'\)) in an [element list](javascript:call_link\('abencds_f1_absent_element_list.htm'\)) of an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry")
-   [Elements](javascript:call_link\('abencds_select_list_entry_v1.htm'\)) in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry")

The elements of the SELECT list or element list of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") define the components of the result set of database accesses using [SELECT](javascript:call_link\('abapselect.htm'\)) and of structured data types in ABAP. The annotations enrich these components with additional semantic properties. The annotation should be defined as a CDS object in a [CDS annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") and the annotation definition annotation [@Scope](javascript:call_link\('abencds_f1_define_anno_annos.htm'\)) should be specified using the value #ELEMENT.

Element annotations can be specified before and after the element:

-   In front of the element, the character @ must be placed before the name annotation of the annotation.
-   After the element, the characters @< must be placed before the name annotation of the annotation.
    
    This notation is possible for all CDS entities listed above, except for CDS view entities. For CDS view entities, all annotations, including element annotations, are possible only in front of the element they refer to.
    

The following tables show the possible [ABAP annotations](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") that can be specified and their meanings. The ABAP annotations are evaluated by the ABAP runtime framework for every CDS entity. Annotations with other identifiers are usually [framework-specific annotations](javascript:call_link\('abencds_annotations_frmwrk.htm'\)). These are not evaluated by the ABAP runtime framework but by other SAP frameworks instead.

-   [Aggregation Annotation](#abencds-f1-element-annotation-1-------api-annotations---@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_2)
-   [EndUserText Annotations](#abencds-f1-element-annotation-3-------environment-annotations---@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_4)
-   [Semantics Annotations](#abencds-f1-element-annotation-5-------objectmodel-annotation---@ITOC@@ABENCDS_F1_ELEMENT_ANNOTATION_6)

The first column of the table shows the (possibly structured) name annotation of an ABAP annotation and the second column shows its meaning. The third column shows the possible [annotation values](javascript:call_link\('abenannotation_value_glosry.htm'\) "Glossary Entry"). The fourth column shows the default value which is used if the annotation is not used at all. The fifth column shows the default value set implicitly for value in accordance with the [annotation definition](javascript:call_link\('abencds_anno_definition_glosry.htm'\) "Glossary Entry") if the annotation is specified without a value. If nothing is specified for the annotation value, the annotation should be specified without a value.

Hint

For each element annotation that is not part of an [annotation array](javascript:call_link\('abenannotation_array_glosry.htm'\) "Glossary Entry") the special value [null](javascript:call_link\('abencds_annotations_syntax_value.htm'\)) can be specified without quotation marks. This means that the annotations are ignored in the [evaluation](javascript:call_link\('abencds_annotations_analysis.htm'\)) with class CL\_DD\_DDL\_ANNOTATION\_SERVICE by default.

Aggregation Annotation   

Defines a field as [analytical measure](javascript:call_link\('abencds_measure_glosry.htm'\) "Glossary Entry") in an analytical data model.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Aggregation.default

Defines a field as analytical measure in a [CDS cube view](javascript:call_link\('abencds_analytical_cube_glosry.htm'\) "Glossary Entry") or in a [CDS analytical projection view](javascript:call_link\('abencds_analytical_pv_glosry.htm'\) "Glossary Entry").

#NONE:
Field is not an analytical measure.
#SUM:
The sum of all values in this column is returned as result.
#MIN:
The lowest value of all values in this column is returned as result.
#MAX:
The highest value of all values in this column is returned as result.
#AVG:
The average of all values is calculated.
#COUNT\_DISTINCT:
The number of rows is calculated.
#NOP:
Returns a value if all values are equal. Otherwise, it returns a special error value.
#FORMULA:
Indicates that the element is a formula. Mandatory for all fields that are newly defined and / or calculated in the element list of a CDS analytical projection view.

\-

\-

-   The annotation Aggregation.default replaces the obsolete annotation DefaultAggregation.
-   This annotation is evaluated by both [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") and analytic manager.

API Annotations   

Defines the release of the element in the restricted [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry").

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

API.element.releaseState

In a CDS entity released using a [release contract](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry"), overrides the release of individual elements.

#DEPRECATED:
The element should no longer be used. If accessed, the element produces a syntax check warning in restricted [ABAP language versions](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry").

\-

\-

API.element.successor

Name of a successor that replaces an element forbidden using @API.element.releaseState:#DEPRECATED.

Name of an element of the type [ElementRef](javascript:call_link\('abencds_f1_define_annotation_type.htm'\)).

\-

\-

Hint

In the ABAP language versions [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry") and [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry"), accessing an element forbidden using @API.element.releaseState:#DEPRECATED in an ABAP program or CDS entity produces a syntax check warning. An element proposed by @API.element.successor should be used instead.

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

ABAP annotations introduced using EndUserText are used to define translatable semantic texts for a [CDS object](javascript:call_link\('abencds_object_glosry.htm'\) "Glossary Entry"). The value of such an annotation is saved in special tables that have a language key and that are translatable. The value specified in the source code should consist of text in the original language of the CDS source code and it is translated into the required languages. The methods of the class CL\_DD\_DDL\_ANNOTATION\_SERVICE read these texts as specified by an input parameter for the language. If no language is passed to the input parameter, the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is used as the default. If no text is found for the language, the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used.

Environment Annotations   

Controls value passing when using the element in a condition of ABAP SQL.

Annotation

Meaning

Annotation Values

Default Value if Not Used

Default Value if Used Without Value

Environment.sql.passValue

Specifies whether a placeholder ? or a literal value is passed to the database in an [ABAP SQL condition](javascript:call_link\('abenasql_cond.htm'\)) when the element is compared with a host variable.

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

Element is defined as a [currency field](javascript:call_link\('abencurrency_field_glosry.htm'\) "Glossary Entry") to which a currency key is assigned

'elem\_name'
Name of an element defined as a currency key

\-

\-

In a CDS view entity, mandatory for all elements of data type abap.curr and possible for [CDS amount fields](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry") of other data types. Optional in all other CDS entities.

Semantics.currencyCode

Element is defined as a [currency key](javascript:call_link\('abencurrency_key_glosry.htm'\) "Glossary Entry")

true
false

\-

true

This annotation is not supported in CDS view entities.

Semantics.quantity.unitOfMeasure

Element is defined as a [CDS quantity field](javascript:call_link\('abenquantity_glosry.htm'\) "Glossary Entry") to which a unit of measurement key is assigned
In CDS view entities, this annotation can also be used to assign a [calculated unit](javascript:call_link\('abencds_calculated_unit_glosry.htm'\) "Glossary Entry") to a [CDS calculated quantity](javascript:call_link\('abencds_calculated_quantity_glosry.htm'\) "Glossary Entry")

'elem\_name'
Name of an element defined as a unit of measurement key or as calculated unit.

\-

\-

In a CDS view entity, mandatory for all elements of data type abap.quan and for all calculated quantities. Possible for [CDS quantity fields](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry") of other data types. Optional in all other CDS entities.

Semantics.unitOfMeasure

Element is defined as a [unit of measurement key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry")

true
false

\-

true

This annotation is not supported in CDS view entities.

Semantics.amount.currencyCode and Semantics.quantity.unitOfMeasure must point to elements in the same view which contain the currency or unit key. This rule applies to all CDS entities except for CDS DDIC-based views (obsolete). In CDS DDIC-based views, the currency or unit key can also be a field from one of the data sources.

If a CDS entity selects from a DDIC database table or from another CDS entity, these semantics annotations are propagated and they do not have to be defined again explicitly.

Exception: in CDS views with [set operators](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry"), the annotation [Metadata.ignorePropagatedAnnotations: true](javascript:call_link\('abencds_view_entity_anno.htm'\)) is mandatory, propagation is switched off and therefore, reference annotations must be redefined explicitly.

Hints

-   The API [CL\_DD\_DDL\_ANNOTATION\_SERVICE](javascript:call_link\('abencds_annotations_analysis.htm'\)) can derive the annotations Semantics.amount.currencyCode and Semantics.quantity.unitofMeasure from DDIC database tables only if the name of the referred currency key or unit key field isn't changed in a CDS view entity. If a CDS view entity selecting from a database table uses an alias name for a currency key or unit key field, then the annotation cannot be evaluated by this API.
-   These semantics annotations are used to define the [currency fields](javascript:call_link\('abenddic_currency_field.htm'\)) and [quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\)) of [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry"), [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry"), and [CDS custom entities](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").
-   In addition to the [ABAP annotations](javascript:call_link\('abencds_annotations_abap.htm'\)) shown here, there are also [framework-specific](javascript:call_link\('abencds_annotations_frmwrk.htm'\)) semantics annotations.
-   The annotations Semantics.currencyCode and Semantics.unitOfMeasure declare a field as currency key or unit key. In CDS DDIC-based views (obsolete), these currency/unit key fields are automatically and implicitly assigned to all currency/unit fields that have no other assignment. The assignment order is as follows:
    -   If there is a direct and local currency or unit key assignment, this assignment is considered.
    -   If there is no direct and local assignment, it is checked whether there is any inherited currency or unit key that can be derived from one of the data sources.
    -   If there is no inherited or derived currency or unit key, then the local currency or unit key field is assigned automatically and implicitly, even if it is not specified explicitly.

ObjectModel Annotation   

The following ObjectModel annotation can be used in [CDS projection views](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") to bind an ABAP class to a [CDS virtual element](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry").

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

Currently only supported in CDS projection views for [CDS virtual elements](javascript:call_link\('abencds_virtual_element_glosry.htm'\) "Glossary Entry").