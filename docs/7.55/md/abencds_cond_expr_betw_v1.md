  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, BETWEEN

Syntax

... lhs BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2. The expression has the same meaning as the following join of two [comparisons](javascript:call_link\('abencds_cond_expr_comp_v1.htm'\)):

... lhs >= rhs1 AND lhs <= rhs2 ...

The corresponding context-dependent rules apply to the [operands](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) lhs, rhs1, and rhs2 as well as the same [conditions](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)) for the data types.