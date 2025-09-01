  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.40 and its SPs](javascript:call_link\('abennews-740.htm'\)) →  [News for Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP CDS in Release 7.40, SP08, ABENNEWS-740_SP08-ABAP_CDS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP CDS in Release 7.40, SP08

[1\. CDS Annotations](#!ABAP_MODIFICATION_1@1@)
[2\. CDS Views with Parameters](#!ABAP_MODIFICATION_2@2@)
[3\. CDS View Extensions](#!ABAP_MODIFICATION_3@3@)
[4\. Expressions and Functions](#!ABAP_MODIFICATION_4@4@)
[5\. Join Type for CDS Associations](#!ABAP_MODIFICATION_5@5@)
[6\. Path Expressions with Filter Conditions in Conditions](#!ABAP_MODIFICATION_6@6@)
[7\. Checking Literals Against Fixed Values of Domains](#!ABAP_MODIFICATION_7@7@)

Modification 1   

CDS Annotations

The following enhancements have been introduced for [CDS annotations](javascript:call_link\('abencds_annotations.htm'\)):

-   Annotations in a [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can now be entered after an [element](javascript:call_link\('abencds_select_list_entry_v1.htm'\)). Before the name of an annotation, @< must be written instead of @.
-   A new [syntax](javascript:call_link\('abencds_annotations.htm'\)) with square and curly brackets makes it possible to use value lists and annotation lists as value specification after the colon of an annotation specification.
-   The new [ABAP annotation](javascript:call_link\('abenabap_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_view_anno_v1.htm'\)) can be used to specify whether, in cases when a CDS association is used more than once, the [filter conditions](javascript:call_link\('abencds_path_expression_filter_v1.htm'\)) are compared for the path expressions of a view. If the filter condition has identical semantics, the associated join expression is created only once in the variant of the view on the database.

Modification 2   

CDS Views with Parameters

In the statement [DEFINE VIEW](javascript:call_link\('abencds_define_view_v1.htm'\)), [input parameters](javascript:call_link\('abencds_parameter_list_v1.htm'\)) can now be defined for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") that can be used in operand positions in the view.

When using a CDS view with parameters in a CDS view or in ABAP SQL, the input parameters must be given actual parameters; new additions are available for this in shape of parenthesized, comma-separated lists in the statements [SELECT](javascript:call_link\('abencds_select_parameters_v1.htm'\)) of the DDL and [SELECT](javascript:call_link\('abapselect_data_source.htm'\)) of ABAP SQL.

Modification 3   

CDS View Extensions

The new statement [EXTEND VIEW](javascript:call_link\('abencds_extend_view.htm'\)) of the DDL of the ABAP CDS makes it possible to add new view fields to existing [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") - without making changes - by using [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry").

Modification 4   

Expressions and Functions

The following enhancements have been implemented:

-   Division with operator / is now supported in [arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\)).
-   The following new [built-in functions](javascript:call_link\('abencds_sql_functions_v1.htm'\)) have been added:
    -   String functions CONCAT and REPLACE
    -   Numeric functions ABS, DIV, DIVISION, FLOOR, MOD, and ROUND
-   The new [coalesce function](javascript:call_link\('abencds_coalesce_expression_v1.htm'\)) has been added.
-   In addition to [simple](javascript:call_link\('abencds_simple_case_expression_v1.htm'\)) case distinction, [complex](javascript:call_link\('abencds_searched_case_expr_v1.htm'\)) [case distinction](javascript:call_link\('abencds_case_expression_v1.htm'\)) (searched case) is now also available.
-   The special conversion functions [UNIT\_CONVERSION](javascript:call_link\('abencds_conversion_functions_v1.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_conversion_functions_v1.htm'\)), and [DECIMAL\_SHIFT](javascript:call_link\('abencds_conversion_functions_v1.htm'\)) enable unit conversions and currency conversions.

Modification 5   

Join Type for CDS Associations

The new attributes [INNER](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) and [LEFT OUTER](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) for a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) enable to declare explicitly in which join the CDS association is performed.

Modification 6   

Path Expressions with Filter Conditions in Conditions

The new addition [1:](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) before a [filter condition](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) of a [path expression](javascript:call_link\('abencds_path_expression_v1.htm'\)) declares this condition as unique and enables the path expression to be used in a [WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\)) clause or [HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\)) clause.

Modification 7   

Checking Literals Against Fixed Values of Domains

The new syntax [#domain.literal](javascript:call_link\('abencds_literal_v1.htm'\)) enables literal values literal of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") to be checked against the [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry").