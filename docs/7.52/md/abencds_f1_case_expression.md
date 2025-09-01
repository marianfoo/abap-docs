  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) → 

ABAP CDS - case\_expr

Syntax Forms

[Simple case distinction](javascript:call_link\('abencds_f1_simple_case_expression.htm'\))
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](javascript:call_link\('abencds_f1_searched_case_expr.htm'\))
2\. ... CASE WHEN cond\_expr1 THEN result1
          *\[*WHEN cond\_expr2 THEN result2*\]*
          *\[*WHEN cond\_expr3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](javascript:call_link\('abencds_f1_select_statement.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"). Either a [simple case distinction](javascript:call_link\('abencds_f1_simple_case_expression.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abencds_f1_searched_case_expr.htm'\)) (searched case).

Case distinctions can be specified in the [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) and in operand positions of other expressions.

Continue
[ABAP CDS - simple\_case\_expr](javascript:call_link\('abencds_f1_simple_case_expression.htm'\))
[ABAP CDS - searched\_case\_expr](javascript:call_link\('abencds_f1_searched_case_expr.htm'\))