  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, case\_expr](javascript:call_link\('abencds_case_expression_v2.htm'\)) → 

CDS DDL - CDS View Entity, simple\_case\_expr

Syntax

... CASE operand
         WHEN operand1 THEN result1
        *\[*WHEN operand2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simple [case distinction](javascript:call_link\('abencds_case_expression_v2.htm'\)) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The case distinction compares the values of operand operand with operands operand1, operand2, ... and returns the first operand specified after THEN for which the comparison is true as result. If no matches are found, the result specified after ELSE is returned. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

-   For operand, operand1, operand2, and for result1, result2, the following operands can be specified:
    -   [Literals](javascript:call_link\('abencds_literal_v2.htm'\))
    -   Fields of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS view entity
    -   [Parameters](javascript:call_link\('abencds_parameter_v2.htm'\))
    -   [Session variables](javascript:call_link\('abencds_session_variable_v2.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))
    -   [Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))
    -   A further case distinction
    -   [Cast expressions](javascript:call_link\('abencds_cast_expression_v2.htm'\))
    -   [Built-in functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\))
    -   [Path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\))
    -   A [reuse expression](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) using $projection

The operand operand must be [comparable](javascript:call_link\('abencds_cond_expr_types_v2.htm'\)) with operand1, operand2, ... When the CDS view entity is activated, a result type is determined from the operands result1, result2, .... The operands of the THEN and ELSE branches must be compatible with each other.

The operands can have any [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) except of LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Rules for amounts and quantities

The result data type of a case expression is determined by all THEN branches and the ELSE branch. If the result data type is a [CDS amount field](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry"), a [CDS quantity field](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry"), or a [CDS calculated quantity](javascript:call_link\('abencds_calculated_quantity_glosry.htm'\) "Glossary Entry"), a reference annotation must be assigned. The following table shows how the result data type is calculated if one or more of the operands result1, result2, ... are amount and/or quantity fields.

operand1/operand2

Amount

Quantity

Calculated Quantity

Number

Amount

Amount

Calculated Quantity

Calculated Quantity

Calculated Quantity

Quantity

Calculated Quantity

Quantity

Calculated Quantity

Calculated Quantity

Calculated Quantity

Calculated quantity

Calculated quantity

Calculated Quantity

Calculated Quantity

Number

Calculated Quantity

Calculated quantity

Calculated Quantity

Number

-   It is not mandatory that the operands and the result point to the same reference field.
-   The following rules apply to amount fields of data type CURR:
    -   fields of data type CURR are compatible only to other amount fields of data type CURR and only if they have exactly the same number of decimal places.
    -   To combine an amount field of data type CURR with a field of another data type, a conversion to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) is required.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

Example

The example shows a CDS view entity with two case distinctions.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SIMPLE\_CASE
  with parameters
    p\_number : abap.dec(12,2)
  as select from
    demo\_employees
    {
      key name,
          case name
          when 'Anna' then 'X'
          when 'Lisa' then 'Y'
          else '-'
          end as first\_name,
          case $parameters.p\_number
          when salary then utcl\_current()
          end as salary
    }

Example

The example shows a CDS view entity with two case distinctions using amount and quantity fields.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SIMPLE\_CASE\_1
  as select from DEMO\_CDS\_CALC\_QUANTITY\_BASE
{
  key Id,
      //amounts and calculated quantities are compatible,
      //result is a calculated quantity
      @Semantics.quantity.unitOfMeasure: 'Calcunit'
      case
      when Char1 = abap.char'A'
      then Dec10                //cuky reference -> amount field
      when Char1 = abap.char'B'
      then 100 / Dec10          //calculated quantity
      else 0
      end                                   as calcQuan,
      Cuky,
      concat( concat( Cuky , '/' ), Unit2 ) as calcUnit,
      //CURR requires conversion to DECFLOAT34
      @Semantics.amount.currencyCode : 'cuky'
      case when Char1 = abap.char'A'
      then CURR\_TO\_DECFLOAT\_AMOUNT( Curr102 )
      else Dec10                //cuky reference
      end                                   as CurrConv
}