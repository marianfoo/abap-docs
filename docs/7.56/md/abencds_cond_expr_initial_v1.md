  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, cds\_cond](javascript:call_link\('abencds_conditional_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, cds\_cond, INITIAL

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