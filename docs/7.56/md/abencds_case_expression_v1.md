  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v1.htm) → 

CDS DDL - DDIC-Based View, case\_expr

Syntax Forms

[Simple case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_case_expression_v1.htm)
1\. ... CASE operand
           WHEN operand1 THEN result1
          *\[*WHEN operand2 THEN result2*\]*
           ...
          *\[*ELSE resultn*\]*
      END ...
[Complex case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v1.htm)
2\. ... CASE WHEN cds\_cond1 THEN result1
          *\[*WHEN cds\_cond2 THEN result2*\]*
          *\[*WHEN cds\_cond3 THEN result3*\]*
            ...
          *\[*ELSE resultn*\]*
      END ...

Effect

Case distinction in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). Either a [simple case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_case_expression_v1.htm) (simple case) or a [complex case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v1.htm) (searched case).

Case distinctions can be specified in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm) and in operand positions of other expressions.

Continue
[CDS DDL - DDIC-based View, simple\_case\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_case_expression_v1.htm)
[CDS DDL - DDIC-based View, searched\_case\_expr](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_searched_case_expr_v1.htm)