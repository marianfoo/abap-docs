  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr](javascript:call_link\('abencds_path_expression_v2.htm'\)) →  [CDS DDL - CDS View Entity, path\_expr, attributes](javascript:call_link\('abencds_path_expr_attr_v2.htm'\)) → 

CDS DDL - CDS View Entity, path\_expr, cardinality

Syntax

...  1*|*\*: ...

Effect

Specifies the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the current CDS association:

-   If the attribute 1: is specified, the current CDS association is declared as unique.

-   If the attribute \*: is specified, the current CDS association is declared as non-unique.

The addition 1: makes it possible to use filter conditions in path expressions, which are used in [WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\)) clauses or [HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\)) clauses. In a clause like this, it overwrites the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") of the [CDS association](javascript:call_link\('abencds_association_v2.htm'\)). Please be aware that the transformation into a join expression can vary depending on the database system used.

The addition 1: or \*: cannot be specified as the only addition in square brackets. It must always be combined with a [filter condition](javascript:call_link\('abencds_path_expression_filter_v2.htm'\)).

Hint

The addition 1: prevents a syntax error if a path specified with filter conditions or with a non-unique cardinality is used in a [WHERE](javascript:call_link\('abencds_where_clause_v2.htm'\)) clause or [HAVING](javascript:call_link\('abencds_having_clause_v2.htm'\)) clause. However, at runtime, there's no check to validate whether the condition achieves the required unique cardinality.