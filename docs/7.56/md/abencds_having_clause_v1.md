  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, clauses](javascript:call_link\('abencds_select_clauses_v1.htm'\)) → 

CDS DDL - DDIC-based View, SELECT, HAVING

Syntax

... HAVING [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) ...

Effect

Defines a HAVING condition for the result set of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") after a [GROUP BY clause](javascript:call_link\('abencds_group_by_v1.htm'\)) is evaluated. A HAVING condition can only be specified together with GROUP BY. For the operands, [general](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) and [special rules](javascript:call_link\('abencds_cond_expr_having_v1.htm'\)) apply when specifying the condition.

Removes all rows from the result set that do not meet the condition [cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) specified after HAVING.

Hint

[Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\)) can be specified in the HAVING condition, which is not possible in the [WHERE condition](javascript:call_link\('abencds_where_clause_v1.htm'\)).

Example

When accessed, the CDS view sales\_order returns the number of business partners for each business partner role in which the total gross amount in euros is greater than 100000.00.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    inner join
      snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key
  {  key bp\_role as role, //e.g. customer or supplier
     count(distinct buyer\_guid) as partners\_count,
     sum(snwd\_so.gross\_amount) as sum\_gross\_amount }
  where snwd\_so.currency\_code = 'EUR'
  group by bp\_role
  having sum(snwd\_so.gross\_amount) > 100000.00;

Continue
[CDS DDL - DDIC-based View, cds\_cond, HAVING](javascript:call_link\('abencds_cond_expr_having_v1.htm'\))