  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) →  [ABAP CDS - cond\_expr, Operands](javascript:call_link\('abencds_cond_expr_operands.htm'\)) → 

ABAP CDS - cond\_expr, ON, Association

Rules for conditions [cond\_exp](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in an [ON condition](javascript:call_link\('abencds_f1_association.htm'\)) of an [association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"):

-   All relational operators are allowed.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of one of the two data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the association can be specified for lhs.

-   A [field](javascript:call_link\('abencds_f1_field.htm'\)) of both data sources [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the association, a [literal](javascript:call_link\('abencds_f1_literal.htm'\)) with optional domain prefix, a [parameter](javascript:call_link\('abencds_f1_parameter.htm'\)), or a [session variable](javascript:call_link\('abencds_f1_session_variable.htm'\)) can be specified for rhs (with the exception of the operator [LIKE](javascript:call_link\('abencds_cond_expr_like.htm'\))).

-   A field of the source data source can also be specified by an alternative element name (defined using [AS](javascript:call_link\('abencds_f1_select_list_entry.htm'\))) of the current CDS view.

-   At least one comparison for equality between a field of the initial data source and a field of the target data source of the association must be performed.

-   No path expressions or other expressions or function calls can be specified.