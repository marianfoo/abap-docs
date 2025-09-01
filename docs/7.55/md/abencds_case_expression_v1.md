  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) → 

CDS DDL - DDIC-based View, case\_expr

Syntax Forms

[Simple case distinction](javascript:call_link\('abencds_simple_case_expression_v1.htm'\))
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](javascript:call_link\('abencds_searched_case_expr_v1.htm'\))
2\. ... CASE WHEN cds\_cond1 THEN result1
          *\[*WHEN cds\_cond2 THEN result2*\]*
          *\[*WHEN cds\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). Either a [simple case distinction](javascript:call_link\('abencds_simple_case_expression_v1.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abencds_searched_case_expr_v1.htm'\)) (searched case).

Case distinctions can be specified in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) and in operand positions of other expressions.

Continue
[CDS DDL - DDIC-based View, simple\_case\_expr](javascript:call_link\('abencds_simple_case_expression_v1.htm'\))
[CDS DDL - DDIC-based View, searched\_case\_expr](javascript:call_link\('abencds_searched_case_expr_v1.htm'\))