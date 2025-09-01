  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) → 

CDS DDL - DDIC-Based View, cds\_cond, LIKE

Syntax

... lhs *\[*NOT*\]* LIKE rhs *\[*ESCAPE esc*\]*...

Addition:

[... ESCAPE esc](#!ABAP_ONE_ADD@1@)

Effect

Pattern comparison in a [condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The relational expression is true if the string in lhs matches (does not match) the pattern in rhs.

Rules for the operands lhs and rhs:

-   The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_operands_v1.htm).
-   The data types of the operands must be comparable as described in topic [CDS DDL - DDIC-based View, cds\_cond, Comparable Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_types_v1.htm). Only character-like data types can be used.
-   For rhs, only character-like [literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) without domain prefix are allowed.

Rules for the pattern in rhs:

-   '%' is a wildcard character that represents any character string (including an empty string)
-   '\_' stands for any character

Hints

-   Do not use patterns in rhs that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.
-   If lhs contains the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry"), then the comparison lhs LIKE '%' is not true. In ABAP SQL, this comparison is true (as described in topic [sql\_cond, LIKE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_like.htm)).

Addition   

... ESCAPE esc.

Effect

The addition ESCAPE can be used to define a single-character [escape character](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenescape_character_glosry.htm "Glossary Entry"). esc expects a character-like [literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) with the length 1 containing the escape character. In the pattern in rhs, the escape character in esc can be placed before a wildcard character or before the escape character itself. Then, the character directly following the escape character loses its special meaning.

If an escape character in rhs is not placed in front of one of the valid characters, a syntax error occurs.

The character # is recommended for the escape character esc.

Example

To search for the pattern '100%', the following expression can be used with # as the escape character.

... LIKE '100#%' ESCAPE '#' ...