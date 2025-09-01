  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, cds\_cond](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) → 

CDS DDL - CDS View Entity, cds\_cond, BETWEEN

Syntax

... lhs *\[*NOT*\]* BETWEEN rhs1 AND rhs2 ...

Effect

Compares an interval in a [condition](javascript:call_link\('abencds_conditional_expression_v2.htm'\)) in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of lhs is between the values of rhs1 and rhs2. The expression has the same meaning as the following join of two [comparisons](javascript:call_link\('abencds_cond_expr_comp_v2.htm'\)): ... lhs >= rhs1 AND lhs <= rhs2 ...

The operands lhs, rhs1, and rhs2 must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v2.htm'\)). Moreover, the data types of the operands must be comparable as described in topic [CDS DDL - View Entity, cds\_cond, Comparable Types](javascript:call_link\('abencds_cond_expr_types_v2.htm'\)).