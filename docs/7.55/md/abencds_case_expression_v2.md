  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) → 

CDS DDL - CDS View Entity, case\_expr

Syntax Forms

[Simple case distinction](javascript:call_link\('abencds_simple_case_expression_v2.htm'\))
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](javascript:call_link\('abencds_searched_case_expr_v2.htm'\))
2\. ... CASE WHEN cds\_cond1 THEN result1
          *\[*WHEN cds\_cond2 THEN result2*\]*
          *\[*WHEN cds\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). Either a [simple case distinction](javascript:call_link\('abencds_simple_case_expression_v2.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abencds_searched_case_expr_v2.htm'\)) (searched case).

Case distinctions can be specified in the [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)) and in operand positions of other expressions.

Continue
[CDS DDL - CDS View Entity, simple\_case\_expr](javascript:call_link\('abencds_simple_case_expression_v2.htm'\))
[CDS DDL - CDS View Entity, searched\_case\_expr](javascript:call_link\('abencds_searched_case_expr_v2.htm'\))