---
title: "Syntax"
description: |
  ... CASE operand WHEN operand1 THEN result1 WHEN operand2 THEN result2 ... ELSE resultn  ELSE NULL END ... Effect Simple case distinction(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm) in a SELECT statement(https://help.sap.com
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_simple_case_expression_v2.htm"
abapFile: "abencds_simple_case_expression_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "simple", "expression"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, case\_expr](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20simple_case_expr%2C%20ABENCDS_SIMPLE_CASE_EXPRESSION_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

CDS DDL - CDS View Entity, simple\_case\_expr

Syntax

... CASE operand
         WHEN operand1 THEN result1
        *\[*WHEN operand2 THEN result2*\]*
         ...
        *\[**{*ELSE resultn *|* ELSE NULL*}**\]*
    END ...

Effect

Simple [case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_case_expression_v2.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The case distinction compares the values of operand operand with operands operand1, operand2, ... and returns the first operand specified after THEN for which the comparison is true as result.

If no matches are found, the result is determined by the ELSE branch:

-   ELSE resultn returns the value resultn.
-   ELSE NULL returns the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry").

If ELSE is not specified, the result is the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry")

-   For operand, operand1, operand2, and for result1, result2, the following operands can be specified:
    -   [Literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm)
    -   Fields of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm) of the current CDS view entity
    -   [Parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm)
    -   [Session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_arithmetic_expression_v2.htm)
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_aggregate_functions_v2.htm)
    -   A further case distinction
    -   [Cast expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cast_expression_v2.htm)
    -   [Built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm)
    -   [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm)
    -   [Path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm) that identify a field of a data source [data\_source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm)
    -   A [reuse expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm) using $projection.
    -   [CDS enumerated elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_enum_element_glosry.htm "Glossary Entry").

The operand operand must be [comparable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cond_expr_types_v2.htm) with operand1, operand2, ... When the CDS view entity is activated, a result type is determined from the operands result1, result2, .... The operands of the THEN and ELSE branches must be compatible with each other.

The operands can have any [built-in data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) except for LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Special rules apply to CDS enumerated elements in case expressions. They are described in the topic [CDS TDL - Using CDS Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_use_enum_type.htm).

Rules for Amounts and Quantities

The result data type of a case expression is determined by all THEN branches and the ELSE branch. If the result data type is a [CDS amount field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_amount_field_glosry.htm "Glossary Entry"), a [CDS quantity field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_quantity_glosry.htm "Glossary Entry"), or a [CDS calculated quantity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_calculated_quantity_glosry.htm "Glossary Entry"), a reference annotation must be assigned. The following table shows how the result data type is calculated if one or more of the operands result1, result2, ... are amount and/or quantity fields.

operand1/operand2

Amount

Quantity

Calculated Quantity

Number

Amount

amount

calculated quantity

calculated quantity

calculated quantity

Quantity

calculated quantity

quantity

calculated quantity

calculated quantity

Calculated Quantity

calculated quantity

calculated quantity

calculated quantity

calculated quantity

Number

calculated quantity

calculated quantity

calculated quantity

number

-   It is not mandatory that the operands and the result point to the same reference field.
-   The following rules apply to amount fields of data type CURR:
    -   fields of data type CURR are compatible only to other amount fields of data type CURR and only if they have exactly the same number of decimal places.
    -   To combine an amount field of data type CURR with a field of another data type, a conversion to data type DECFLOAT34 using the conversion function [CURR\_TO\_DECFLOAT\_AMOUNT](abencds_conv_func_unit_curr_v2.htm#!ABAP_VARIANT_4@4@) is required.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/b4b0eec1968f41a099c828a4a6c8ca0f).

Example

The example shows a CDS view entity with two case distinctions.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SIMPLE\_CASE
  with parameters
    p\_number : abap.dec(12,2)
  as select from demo\_employees
{
  key name,
      case name
        when 'Anna' then 'X'
        when 'Lisa' then 'Y'
        else '-'
      end as first\_name,
      case $parameters.p\_number
        when salary
        then utcl\_current()
        else null
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