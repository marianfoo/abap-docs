  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, arith\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity arith_expr, Amounts and Quantities, ABENCDS_ARIT_EXP_CALC_V
2, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity arith\_expr, Amounts and Quantities

Syntax

... *\[*\-*\]*operand1 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand2 *\[*+*|*\-*|*\**|*/ *\[*\-*\]*operand3 ... *\]**\]* ...

Effect

Arithmetic expression in a [SELECT statement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") that operates with [CDS amount fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), [CDS quantity fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_quantity_glosry.htm "Glossary Entry"), and [calculated quantities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_calculated_quantity.htm). The possible operators are as follows:

Operator

Meaning

+

Adds the operands

\-

Subtracts the right operand from the left

\*

Multiplies the operands

/

Divides the left operand by the right

A minus sign (\-) before an operand multiplies the operand by -1. The operands must be CDS amount fields, CDS quantity fields, CDS calculated quantities, or numeric values of one of the following data types: INT1, INT2, INT4, INT8, DEC, DECFLOAT16, DECFLOAT34, FLTP, or QUAN. The operands can be specified as follows:

-   CDS amount fields and CDS quantity fields must be [fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the current CDS view entity.
-   CDS calculated quantities can be [fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the current CDS view entity or [reuse expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_reusable_expression_v2.htm) using $projection.
-   Numeric values can be specified as [literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), [fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the current CDS view entity, [parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm), [path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm), [built-in functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm), [casting expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm), [case distinctions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm), [aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm), other arithmetic expressions, or [reuse expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_reusable_expression_v2.htm) using $projection. The data type must be appropriate.

The subexpressions of an arithmetic expression can be placed in parentheses (...).

The following table shows how amount fields and quantity fields can be used with different operators and the type of the result:

operands / operators

/

\*

+, -

amount, amount

calculated quantity

calculated quantity

amount

quantity, quantity

calculated quantity

calculated quantity

quantity

calculated quantity, amount

calculated quantity

calculated quantity

amount

amount, quantity

calculated quantity

calculated quantity

\-

calculated quantity, number

calculated quantity

calculated quantity

\-

calculated quantity, quantity

calculated quantity

calculated quantity

quantity

calculated quantity, calculated quantity

calculated quantity

calculated quantity

calculated quantity

amount, number

amount

amount

\-

number, amount

calculated quantity

amount

\-

quantity, number

quantity

quantity

\-

number, quantity

calculated quantity

quantity

\-

Regarding the data types of the operands and of the result, the rules for arithmetic expressions apply, see topic [CDS View entity arith\_expr](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm). If the result is a calculated quantity, then the data type is always DECFLOAT34.

Note the following special conditions:

-   If the result of an arithmetic expression is a CDS amount field, CDS quantity field, or a calculated quantity, then it is mandatory to assign a currency key, unit key, or calculated unit using the respective Semantics annotation. If no reference is assigned, a syntax check error occurs. References are not inherited or derived from the operands of the arithmetic expression.
-   The following rules apply to CDS amount fields of data type CURR:
    -   In general, CDS amount fields of data type CURR cannot be used directly as operands of arithmetic expressions. They need to be converted to data type DECFLOAT34 first, using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm).
        
        There is only one exception to this rule: if all operands are of data type CURR and have exactly two decimal places, then they can be used in additions and subtractions (operators + and -).
        
-   A calculated quantity can be changed back to an amount or quantity field using the function [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm). Then, the required reference can be added using the required annotation, Semantics.amount.currencyCode or Semantics.quantity.unitofMeasure.
-   If one of the operands is of type FLTP, then it is a binary floating point expression, in which all operands must be of type FLTP.
-   When a division is performed with the operator /, the right operand cannot have the value 0.

Hints

-   The following conversion functions are available for CDS amount fields and CDS currency fields: [CURR\_TO\_DECFLOAT\_AMOUNT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm) and [GET\_NUMERIC\_VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm).
-   A calculated unit can be used as reference only once in a view. If a view contains several calculated quantity fields, each field needs a different calculated unit.

Example

SELECT list of a CDS view entity with amounts and quantities in arithmetic expressions:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, calc quan in arith\_expr'
define view entity DEMO\_CDS\_QUAN\_ARITH
  as select from DEMO\_CDS\_CALC\_QUANTITY\_BASE
{
  key Id,
      Cuky,
      @Semantics.quantity.unitOfMeasure: 'my\_calcUnit'
      CURR\_TO\_DECFLOAT\_AMOUNT(Curr102) / Quan10 as my\_calcQuan,
      concat( concat( Cuky , '/' ), Unit2 )     as my\_calcUnit,
      @Semantics.amount.currencyCode: 'Cuky'
      //both fields have cuky references
      Dec10 + D34n                              as AmountAddition,
      @Semantics.quantity.unitOfMeasure: 'calcUnit'
      $projection.my\_calcQuan \* 5               as newCalcQuan,
      concat( concat( Cuky , '/' ), Unit2 )     as calcUnit
}

-   For the calculation of the field my\_calcQuan, the currency field needs to be normalized using function CURR\_TO\_DECFLOAT\_AMOUNT.
-   my\_calcQuan is a calculated quantity of type DECFLOAT34 and it requires a calculated unit reference.
-   AmountAddition is a field that adds two amount fields. The result is an amount field again and a new currency key needs to be assigned.
-   newCalcQuan multiplies a calculated quantity with a number. A calculated unit reference is required. Each calculated unit can be used only once in a view and therefore, a new calculated unit is assigned.