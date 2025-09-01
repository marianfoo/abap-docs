  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, LIKE

Syntax

... lhs LIKE rhs *\[*ESCAPE esc*\]*...

Effect

Pattern comparison in a [condition](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the string in lhs matches the pattern in rhs. The same [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to lhs as to [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)) and only operands of the [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) can be specified. Of these, only character-like data types can be used. Only character-like [literals](javascript:call_link\('abencds_f1_literal.htm'\)) without domain prefix are allowed for rhs.

The wildcard characters % for any strings and \_ for any character can be used in the pattern in rhs. The optional addition ESCAPE can be used to define an [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry"). esc expects a single-character character-like [literal](javascript:call_link\('abencds_f1_literal.htm'\)) without domain prefix. In the pattern in rhs, an escape character may only be placed before a wildcard character or before the escape character itself. In this case, these lose their special meaning.

Notes

-   The # character is recommended for the escape character esc.

-   Patterns in rhs closed by the wildcard characters % or \_ should not be used to find trailing blanks, since the result is determined by the database platform in question and may be unexpected.

-   Unlike the [LIKE condition](javascript:call_link\('abenwhere_logexp_like.htm'\)) in ABAP SQL, lhs LIKE '%' is not true if lhs contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").