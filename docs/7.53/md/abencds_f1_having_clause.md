  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CD- SELECT, clauses](javascript:call_link\('abencds_select_clauses.htm'\)) → 

ABAP CDS - SELECT, HAVING

Syntax

... HAVING [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) ...

Effect

Defines a HAVING condition for the results set of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") after a [GROUP BY clause](javascript:call_link\('abencds_f1_group_by.htm'\)) is evaluated. A HAVING condition can only be specified together with GROUP BY. Special [rules](javascript:call_link\('abencds_cond_expr_having.htm'\)) apply when specifying the condition.

Removes all rows from the results set that do not meet the condition [cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) specified after HAVING.

Note

[Aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) can be specified in the HAVING condition, which is not possible in the [WHERE condition](javascript:call_link\('abencds_f1_where_clause.htm'\)).

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