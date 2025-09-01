  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20cds_cond%2C%20LIKE%2C%20ABENCDS_COND_EXPR_LIKE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

CDS DDL - DDIC-Based View, cds\_cond, LIKE

Syntax

... lhs *\[*NOT*\]* LIKE rhs *\[*ESCAPE esc*\]*...

Addition:

[... ESCAPE esc](#!ABAP_ONE_ADD@1@)

Effect

Pattern comparison in a [condition](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The relational expression is true if the string in lhs matches (does not match) the pattern in rhs.

Rules for the operands lhs and rhs:

-   The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)).
-   The data types of the operands must be comparable as described in topic [CDS DDL - DDIC-based View, cds\_cond, Comparable Types](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)). Only character-like data types can be used.
-   For rhs, only character-like [literals](javascript:call_link\('abencds_literal_v1.htm'\)) without domain prefix are allowed.

Rules for the pattern in rhs:

-   '%' is a wildcard character that represents any character string (including an empty string)
-   '\_' stands for any character

Hints

-   Do not use patterns in rhs that are closed by wildcard characters to search for trailing blanks. The semantics of searches of this type are dependent on the database system that is used and in general do not produce the required result.
-   If lhs contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), then the comparison lhs LIKE '%' is not true. In ABAP SQL, this comparison is true (as described in topic [sql\_cond, LIKE](javascript:call_link\('abenwhere_logexp_like.htm'\))).

Addition   

... ESCAPE esc.

Effect

The addition ESCAPE can be used to define a single-character [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry"). esc expects a character-like [literal](javascript:call_link\('abencds_literal_v1.htm'\)) with the length 1 containing the escape character. In the pattern in rhs, the escape character in esc can be placed before a wildcard character or before the escape character itself. Then, the character directly following the escape character loses its special meaning.

If an escape character in rhs is not placed in front of one of the valid characters, a syntax error occurs.

The character # is recommended for the escape character esc.

Example

To search for the pattern '100%', the following expression can be used with # as the escape character.

... LIKE '100#%' ESCAPE '#' ...