  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.40 and Its SPs](javascript:call_link\('abennews-740.htm'\)) →  [Changes in Release 7.40, SP08](javascript:call_link\('abennews-740_sp08.htm'\)) → 

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

The following enhancements have been introduced for [CDS annotations](javascript:call_link\('abencds_annotations.htm'\)):

-   Annotations in a [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") can now be entered after an [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)). Before the name of an annotation, @< must be written instead of @.
    
-   A new [syntax](javascript:call_link\('abencds_annotations.htm'\)) with square and curly brackets makes it possible to use value lists and annotation lists as value specification after the colon of an annotation specification.
    
-   The new [ABAP annotation](javascript:call_link\('abencore_annotation_glosry.htm'\) "Glossary Entry") [AbapCatalog.compiler.compareFilter](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) can be used to specify whether, in cases when a CDS association is used more than once, the [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) are compared for the path expressions of a view. If the filter condition has identical semantics, the associated join expression is created only once in the variant of the view on the database.
    

Modification 2

CDS Views with Parameters

In the statement [DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)), [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) can now be defined for [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") that can be used in operand positions in the view.

When using a CDS view with parameters in a CDS view or in ABAP SQL, the input parameters must be given actual parameters; new additions are available for this in shape of parenthesized, comma-separated lists in the statements [SELECT](javascript:call_link\('abencds_f1_select_parameters.htm'\)) of the DDL and [SELECT](javascript:call_link\('abapselect_data_source.htm'\)) of ABAP SQL.

Modification 3

CDS View Enhancements

The new statement [EXTEND VIEW](javascript:call_link\('abencds_f1_extend_view.htm'\)) of the DDL of the ABAP CDS makes it possible to add new view fields to existing [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") - without making changes - by using [CDS view enhancements](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry").

Modification 4

Expressions and Functions

The following enhancements have been implemented:

-   Division with operator / is now supported in [arithmetic expressions](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\)).
    
-   The following new [built-in functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) have been added:
    

-   String functions CONCAT and REPLACE

-   Numeric functions ABS, DIV, DIVISION, FLOOR, MOD, and ROUND

-   The new [coalesce function](javascript:call_link\('abencds_f1_coalesce_expression.htm'\)) has been added.
    
-   In addition to [simple](javascript:call_link\('abencds_f1_simple_case_expression.htm'\)) case distinction, [complex](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)) [case distinction](javascript:call_link\('abencds_f1_case_expression.htm'\)) (searched case) is now also available.
    
-   The special conversion functions [UNIT\_CONVERSION](javascript:call_link\('abencds_f1_conversion_functions.htm'\)), [CURRENCY\_CONVERSION](javascript:call_link\('abencds_f1_conversion_functions.htm'\)), and [DECIMAL\_SHIFT](javascript:call_link\('abencds_f1_conversion_functions.htm'\)) enable unit conversions and currency conversions.
    

Modification 5

Join Type for CDS Associations

The new attributes [INNER](javascript:call_link\('abencds_path_expression_attr.htm'\)) and [LEFT OUTER](javascript:call_link\('abencds_path_expression_attr.htm'\)) for a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) enable to declare explicitly in which join the CDS association is performed.

Modification 6

Path Expressions with Filter Conditions in Conditions

The new addition [1:](javascript:call_link\('abencds_path_expression_attr.htm'\)) before a [filter condition](javascript:call_link\('abencds_path_expression_attr.htm'\)) of a [path expression](javascript:call_link\('abencds_f1_path_expression.htm'\)) declares this condition as monovalent and enables the path expression to be used in a [WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\)) clause or [HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\)) clause.

Modification 7

Checking Literals Against Fixed Values of Domains

The new syntax [#domain.literal](javascript:call_link\('abencds_f1_literal.htm'\)) enables literal values literal of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") to be checked against the [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") of a [domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry").