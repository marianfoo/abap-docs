  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20case_expr%2C%20ABENCDS_CASE_EXPRESSION_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

CDS DDL - DDIC-Based View, case\_expr

Syntax Forms

[Simple Case Distinction](javascript:call_link\('abencds_simple_case_expression_v1.htm'\))

1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...

[Complex Case Distinction](javascript:call_link\('abencds_searched_case_expr_v1.htm'\))

2\. ... CASE WHEN cds\_cond1 THEN result1
          *\[*WHEN cds\_cond2 THEN result2*\]*
          *\[*WHEN cds\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). Either a [simple case distinction](javascript:call_link\('abencds_simple_case_expression_v1.htm'\)) (simple case) or a [complex case distinction](javascript:call_link\('abencds_searched_case_expr_v1.htm'\)) (searched case).

Case distinctions can be specified in the [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)) and in operand positions of other expressions.

Continue
[CDS DDL - DDIC-Based View, simple\_case\_expr](javascript:call_link\('abencds_simple_case_expression_v1.htm'\))
[CDS DDL - DDIC-Based View, searched\_case\_expr](javascript:call_link\('abencds_searched_case_expr_v1.htm'\))