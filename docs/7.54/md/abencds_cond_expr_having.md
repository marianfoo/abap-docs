  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, HAVING

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [HAVING condition](javascript:call_link\('abencds_f1_having_clause.htm'\)) of a [CDS-View](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   The relational operator BETWEEN is not allowed.

-   The Boolean operator NOT is not allowed.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) or an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) for this kind of field can be specified for lhs.

-   An [element](javascript:call_link\('abencds_f1_select_list_entry.htm'\)) of the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)), an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with an optional domain prefix, or a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))). If lhs is an [aggregate expression](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)), a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) must be specified.

-   A field of a data source can be specified using a path expression [path\_expr](javascript:call_link\('abencds_f1_path_expression.htm'\)).element, as long as the CDS associations of the expression do not have any abstract target data sources and the expression is not polyvalent:

-   The cardinality of the contained [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") is "to 1".

-   The path expression only contains [filter conditions](javascript:call_link\('abencds_path_expression_attr.htm'\)) with addition 1:.

element can be used to specify an element of the target data source of the last CDS association of the path.

-   Other expressions and function calls are not allowed.