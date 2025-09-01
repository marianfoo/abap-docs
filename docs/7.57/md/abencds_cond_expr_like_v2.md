  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, cds\_cond](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, cds_cond, LIKE, ABENCDS_COND_EXPR_LIKE_V2, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, cds\_cond, LIKE

Syntax

... lhs *\[*NOT*\]* LIKE rhs *\[*ESCAPE esc*\]*...

Addition:

[... ESCAPE esc](#!ABAP_ONE_ADD@1@)

Effect

Pattern comparison in a [condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conditional_expression_v2.htm) in a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The relational expression is true if the string in lhs matches (does not match) the pattern in rhs.

Rules for the operands lhs and rhs:

-   The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - View Entity, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_operands_v2.htm).
-   The data types of the operands must be comparable as described in topic [CDS DDL - View Entity, cds\_cond, Comparable Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cond_expr_types_v2.htm). Only character-like data types can be used.
-   For rhs, only [character-like literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm) are allowed.

Rules for the pattern in rhs:

-   '%' is a wildcard character that represents any character string (including an empty string)
-   '\_' stands for any character

Hints

-   Do not use patterns in rhs that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.
-   If lhs contains the [null value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry"), then the comparison lhs LIKE '%' is not true. In ABAP SQL, this comparison is true (as described in topic [sql\_cond, LIKE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_like.htm)).

Addition   

... ESCAPE esc.

Effect

The addition ESCAPE can be used to define a single-character [escape character](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenescape_character_glosry.htm "Glossary Entry"). esc expects a [character-like literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm) with the length 1 containing the escape character. In the pattern in rhs, the escape character esc can be placed before a wildcard character or before the escape character itself. Then, the character directly following the escape character loses its special meaning.

If an escape character in rhs is not placed in front of one of the valid characters, a syntax error occurs.

The character # is recommended for the escape character esc.

Example

To search for the pattern '100%', the following expression can be used with # as the escape character.

... LIKE '100#%' ESCAPE '#' ...