  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, cds\_cond](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_conditional_expression_v1.htm) → 

CDS DDL - DDIC-based View, cds\_cond, INITIAL

Syntax

.... lhs IS *\[*NOT*\]* INITIAL ...

Effect

Determines the initial value. This expression is true if the value of lhs is (is not) the [initial value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_value_glosry.htm "Glossary Entry") of its [built-in dictionary type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The operand lhs must stick to the context-dependent rules listed in topic [CDS DDL - DDIC-based View, cds\_cond, Operands](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_operands_v1.htm).

lhs can have any data type except of CLNT, DECFLOAT16, DECFLOAT34, DF16\_DEC, DF34\_DEC, DF16\_RAW, DF34\_RAW, LCHR, STRING, RAW, RAWSTRING, DATN, TIMN, UTCL, and GEOM\_EWKB.

Hints

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value, instead of comparing it with a type-compliant operand that contains the initial value.

-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_cond_expr_null_v1.htm).

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