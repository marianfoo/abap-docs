  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, Operands

The following rules apply to the operands lhs and rhs in relational expressions of the SELECT statement in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"):

-   General Rules

-   [Character literals](javascript:call_link\('abencds_literal_v1.htm'\)) cannot be used in comparisons with numeric values.

-   [Numeric literals](javascript:call_link\('abencds_literal_v1.htm'\)) that represent a value outside the value range of [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) must be specified as floating point literals with a decimal point.

-   Special Context-Specific Rules:

-   [Rules](javascript:call_link\('abencds_cond_expr_where_v1.htm'\)) for use in a WHERE condition

-   [Rules](javascript:call_link\('abencds_cond_expr_having_v1.htm'\)) for use in a HAVING condition

-   [Rules](javascript:call_link\('abencds_joined_data_source_v1.htm'\)) for use in an ON condition of a join expression

-   [Rules](javascript:call_link\('abencds_cond_expr_on_assoc_v1.htm'\)) for use in an ON condition of a CDS association

-   [Rules](javascript:call_link\('abencds_cond_expr_filter_v1.htm'\)) for use in a filter condition of a path expression

-   [Rules](javascript:call_link\('abencds_cond_expr_case_v1.htm'\)) for use in a complex case distinction.

Hint

For [comparisons](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)), the tables of [comparable types](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)) show which data types can be compared with each other.