  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, cds_cond, INITIAL, ABENCDS_COND_EXPR_INITIAL_V1, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, cds\_cond, INITIAL

Syntax

.... lhs IS *\[*NOT*\]* INITIAL ...

Effect

Determines the initial value. This expression is true if the value of lhs is (is not) the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") of its [built-in dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)).

The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, cds\_cond, Operands](javascript:call_link\('abencds_cond_expr_operands_v1.htm'\)).

lhs can have any data type except for CLNT, DECFLOAT16, DECFLOAT34, DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, LCHR, STRING, RAW, RAWSTRING, DATN, TIMN, UTCL, and GEOM\_EWKB.

Hints

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value, instead of comparing it with a type-compliant operand that contains the initial value.
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_null_v1.htm'\)).

Example

The following DDIC-based view reads all rows from the DDIC database table DEMO\_DDIC\_TYPES in which the column INT8 does not contain its initial value 0.

@AbapCatalog.sqlViewName: 'DEMOCDSISINI'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Is\_Initial
  as select from
    demo\_ddic\_types
    {
      \*
    }
    where
      int8 is not initial