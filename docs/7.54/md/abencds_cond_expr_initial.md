  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expressions.htm'\)) →  [ABAP CDS - cond\_expr](javascript:call_link\('abencds_f1_conditional_expression.htm'\)) → 

ABAP CDS - cond\_expr, INITIAL

Syntax

.... lhs IS *\[*NOT*\]* INITIAL ...

Effect

Determines the initial value. This expression is true if the value of lhs is (is not) the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") of its [built-in dictionary type](javascript:call_link\('abenddic_builtin_types.htm'\)). The same context-dependent [rules](javascript:call_link\('abencds_cond_expr_operands.htm'\)) apply to the operands lhs as to [comparisons](javascript:call_link\('abencds_cond_expr_comp.htm'\)) and only operands of the [comparable types](javascript:call_link\('abencds_cond_expr_types.htm'\)) can be specified. The operand also cannot have the type RAW.

Notes

-   The expression IS *\[*NOT*\]* INITIAL is suitable for checking the type-dependent initial value (regardless of its actual data type), instead of comparing it with a type-friendly operand that contains the initial value.
    
-   The expression IS *\[*NOT*\]* INITIAL must not be confused with the expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abencds_cond_expr_null.htm'\)).
    

Example

The following CDS view reads all rows from the database table DEMO\_DDIC\_TYPES in which the column INT8 does not contain its initial value 0.

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