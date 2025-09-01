  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp08.htm) → 

ABAP CDS in Release 7.40, SP08

[1\. CDS annotations](#!ABAP_MODIFICATION_1@1@)
[2\. CDS views with parameters](#!ABAP_MODIFICATION_2@2@)
[3\. CDS view enhancements](#!ABAP_MODIFICATION_3@3@)
[4\. Expressions and functions](#!ABAP_MODIFICATION_4@4@)
[5\. Join type for CDS associations](#!ABAP_MODIFICATION_5@5@)
[6\. Path expressions with filter conditions in conditions](#!ABAP_MODIFICATION_6@6@)
[7\. Checking literals against fixed values of domains](#!ABAP_MODIFICATION_7@7@)

Modification 1

CDS Annotations

The following enhancements have been introduced for [CDS annotations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm):

-   Annotations in a [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_v1.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") can now be entered after an [element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_list_entry_v1.htm). Before the name of an annotation, @< must be written instead of @.

-   A new [syntax](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_annotations.htm) with square and curly brackets makes it possible to use value lists and annotation lists as value specification after the colon of an annotation specification.

-   The new [ABAP annotation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_annotation_glosry.htm "Glossary Entry") [AbapCatalog.compiler.compareFilter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_anno_v1.htm) can be used to specify whether, in cases when a CDS association is used more than once, the [filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_filter_v1.htm) are compared for the path expressions of a view. If the filter condition has identical semantics, the associated join expression is created only once in the variant of the view on the database.
    

Modification 2

CDS Views with Parameters

In the statement [DEFINE VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm), [input parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm) can now be defined for [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") that can be used in operand positions in the view.

When using a CDS view with parameters in a CDS view or in ABAP SQL, the input parameters must be given actual parameters; new additions are available for this in shape of parenthesized, comma-separated lists in the statements [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_parameters_v1.htm) of the DDL and [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) of ABAP SQL.

Modification 3

CDS View Enhancements

The new statement [EXTEND VIEW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_extend_view.htm) of the DDL of the ABAP CDS makes it possible to add new view fields to existing [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") - without making changes - by using [CDS view enhancements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_extend_glosry.htm "Glossary Entry").

Modification 4

Expressions and Functions

The following enhancements have been implemented:

-   Division with operator / is now supported in [arithmetic expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_arithmetic_expression_v1.htm).

-   The following new [built-in functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_v1.htm) have been added:

-   String functions CONCAT and REPLACE

-   Numeric functions ABS, DIV, DIVISION, FLOOR, MOD, and ROUND

-   The new [coalesce function](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_coalesce_expression_v1.htm) has been added.

-   In addition to [simple](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_simple_case_expression_v1.htm) case distinction, [complex](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_searched_case_expr_v1.htm) [case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_case_expression_v1.htm) (searched case) is now also available.

-   The special conversion functions [UNIT\_CONVERSION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v1.htm), [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v1.htm), and [DECIMAL\_SHIFT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conversion_functions_v1.htm) enable unit conversions and currency conversions.
    

Modification 5

Join Type for CDS Associations

The new attributes [INNER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_jointype_v1.htm) and [LEFT OUTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_jointype_v1.htm) for a [CDS association](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_glosry.htm "Glossary Entry") of a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) enable to declare explicitly in which join the CDS association is performed.

Modification 6

Path Expressions with Filter Conditions in Conditions

The new addition [1:](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expr_card_v1.htm) before a [filter condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_filter_v1.htm) of a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_path_expression_v1.htm) declares this condition as monovalent and enables the path expression to be used in a [WHERE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_where_clause_v1.htm) clause or [HAVING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_having_clause_v1.htm) clause.

Modification 7

Checking Literals Against Fixed Values of Domains

The new syntax [#domain.literal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_literal_v1.htm) enables literal values literal of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") to be checked against the [fixed values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfixed_value_glosry.htm "Glossary Entry") of a [domain](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendomain_glosry.htm "Glossary Entry").