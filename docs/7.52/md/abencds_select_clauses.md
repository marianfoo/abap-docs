  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) → 

ABAP CDS- SELECT, clauses

Syntax

... *\[*[WHERE cond\_expr](javascript:call_link\('abencds_f1_where_clause.htm'\))*\]*
    *\[*[GROUP BY field1, field2, ...](javascript:call_link\('abencds_f1_group_by.htm'\))*\]*
    *\[*[HAVING cond\_expr](javascript:call_link\('abencds_f1_having_clause.htm'\))*\]*
    *\[*[UNION *\[*ALL*\]* SELECT ...](javascript:call_link\('abencds_f1_union.htm'\))*\]* ...

Effect

The optional clauses of the [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") have the following semantics:

-   The [WHERE clause](javascript:call_link\('abencds_f1_where_clause.htm'\)) restricts the rows in the results set when the CDS view is accessed.

-   The [GROUP BY clause](javascript:call_link\('abencds_f1_group_by.htm'\)) groups rows in the results set when the CDS view is accessed. It is applied after rows are selected using the WHERE clause.

-   The [HAVING clause](javascript:call_link\('abencds_f1_having_clause.htm'\)) restricts the results set further after a GROUP BY clause. Here, [aggregate expressions](javascript:call_link\('abencds_f1_aggregate_functions.htm'\)) can be specified in the condition.

-   [UNION](javascript:call_link\('abencds_f1_union.htm'\)) can be used to create the union of the results sets from two SELECT statements.

Continue
[ABAP CDS - SELECT, WHERE](javascript:call_link\('abencds_f1_where_clause.htm'\))
[ABAP CDS - SELECT, GROUP BY](javascript:call_link\('abencds_f1_group_by.htm'\))
[ABAP CDS - SELECT, HAVING](javascript:call_link\('abencds_f1_having_clause.htm'\))
[ABAP CDS - SELECT, UNION](javascript:call_link\('abencds_f1_union.htm'\))