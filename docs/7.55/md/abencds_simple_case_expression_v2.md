  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

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

The operand operand must be [comparable](javascript:call_link\('abencds_cond_expr_types_v2.htm'\)) with operand1, operand2, ... When the CDS view entity is activated, a result type is determined from the operands result1, result2, .... The operands must be compatible with each other.

The operands can have any [built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) except of LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

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