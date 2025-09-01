  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, path\_expr](javascript:call_link\('abencds_path_expression_v1.htm'\)) →  [CDS DDL - DDIC-Based View, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, path_expr, Cardinality, ABENCDS_PATH_EXPR_CARD_V1, 757%0D%
0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, path\_expr, Cardinality

Syntax

...  1*|*\*: ...

Effect

Specifies the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the current CDS association:

-   If the attribute 1: is specified, the current CDS association is declared as unique.
-   If the attribute \*: is specified, the current CDS association is declared as non-unique.

The addition 1: makes it possible to use filter conditions in path expressions, which are used in [WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\)) clauses or [HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\)) clauses. In a clause like this, it overwrites the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the [CDS association](javascript:call_link\('abencds_association_v1.htm'\)). (The variant of the path expression can, however, be affected differently on certain database systems.)

The addition 1: or \*: cannot be specified as the only addition in square brackets.

Hint

The addition 1: prevents a syntax error if a path specified with filter conditions or with a non-unique cardinality is used in a [WHERE](javascript:call_link\('abencds_where_clause_v1.htm'\)) clause or [HAVING](javascript:call_link\('abencds_having_clause_v1.htm'\)) clause. However, at runtime, there is no check to validate whether the condition achieves the required unique cardinality.