  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v1.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, case_expr, ABENCDS_CASE_EXPRESSION_V1, 757%0D%0A%0D%0AErro
r:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, case\_expr

Syntax Forms

[Simple case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_case_expression_v1.htm)
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_searched_case_expr_v1.htm)
2\. ... CASE WHEN cds\_cond1 THEN result1
          *\[*WHEN cds\_cond2 THEN result2*\]*
          *\[*WHEN cds\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). Either a [simple case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_case_expression_v1.htm) (simple case) or a [complex case distinction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_searched_case_expr_v1.htm) (searched case).

Case distinctions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_list_v1.htm) and in operand positions of other expressions.

Continue
[CDS DDL - DDIC-Based View, simple\_case\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_simple_case_expression_v1.htm)
[CDS DDL - DDIC-Based View, searched\_case\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_searched_case_expr_v1.htm)