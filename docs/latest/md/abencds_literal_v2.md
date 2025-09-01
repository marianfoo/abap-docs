  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](javascript:call_link\('abencds_operands_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20literal%2C%20ABENCDS_LITERAL_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CDS DDL - CDS View Entity, literal

[CDS literals](javascript:call_link\('abencds_literal_glosry.htm'\) "Glossary Entry") can be used in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry").

In CDS, there are two different kinds of literals:

-   [Typed literals](javascript:call_link\('abencds_typed_literal_v2.htm'\)) (cover most built-in types of the ABAP Dictionary)
-   [Untyped literals](javascript:call_link\('abencds_untyped_literal_v2.htm'\)) (character literals and numeric literals)

Rules for escaping in typed and untyped literals in ABAP CDS:

-   A single quote (') must be escaped
    -   with a single quote: '...''...'
    -   or with a backslash: '...\\'...'
-   A backslash (\\) must be escaped with a backslash: '...\\\\...'

Hints

-   The [literal operator](javascript:call_link\('abenliteral_operator_glosry.htm'\) "Glossary Entry") is not supported for CDS literals.
-   [Fixed domain values](javascript:call_link\('abencds_literal_v1.htm'\)) are not supported in [CDS view entities](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). However, if a CDS view entity selects data from another CDS entity with fixed domain values, then these elements with fixed domain values can be included in the current view entity.

Continue
[CDS DDL - CDS View Entity, Typed Literals](javascript:call_link\('abencds_typed_literal_v2.htm'\))
[CDS DDL - CDS View Entity, Untyped Literal](javascript:call_link\('abencds_untyped_literal_v2.htm'\))