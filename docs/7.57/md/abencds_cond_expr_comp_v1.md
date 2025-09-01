  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, cds_cond, Comparison Operators, ABENCDS_COND_EXPR_COMP_V1,
 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, cds\_cond, Comparison Operators

Syntax

... lhs operator rhs ...

Effect

Comparison operators can be used to specify a comparison in a [condition](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) in a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The following table shows relational expressions rel\_exp that are constructed with comparison operators:

rel\_expr

True if

lhs = rhs

Value of lhs is equal to the value of rhs

lhs <> rhs

Value of lhs is not equal to the value of rhs

lhs < rhs

Value of lhs is less than the value of rhs

lhs > rhs

Value of lhs is greater than the value of rhs

lhs <= rhs

Value of lhs is less than or equal to the value of rhs

lhs >= rhs

Value of lhs is greater than or equal to the value of rhs

-   Context-dependent rules apply when specifying the [operands](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)) lhs and rhs.
-   The tables of [comparable types](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)) show which data types can be compared with each other.

Continue
[CDS DDL - DDIC-Based View, cds\_cond, Comparable Types](javascript:call_link\('abencds_cond_expr_types_v1.htm'\))