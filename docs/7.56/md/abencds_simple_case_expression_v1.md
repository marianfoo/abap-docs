  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, case\_expr](javascript:call_link\('abencds_case_expression_v1.htm'\)) → 

CDS DDL - DDIC-based View, simple\_case\_expr

Syntax

... CASE operand
         WHEN operand1 THEN result1
        *\[*WHEN operand2 THEN result2*\]*
         ...
        *\[*ELSE resultn*\]*
    END ...

Effect

Simple [case distinction](javascript:call_link\('abencds_case_expression_v1.htm'\)) (simple case) in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The case distinction compares the values of operand operand with operands operand1, operand2, ... and produces the operand result as the result after the first THEN for which the comparison is true. If no matches are found, the result specified after ELSE is selected. If ELSE is not specified, the result is the [zero value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

-   The following can be specified for operand:
    -   [Fields](javascript:call_link\('abencds_field_v1.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view
    -   [Parameters](javascript:call_link\('abencds_parameter_v1.htm'\))
    -   [Session variables](javascript:call_link\('abencds_session_variable_v1.htm'\))
    -   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
    -   [Built-in functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))
-   The following can be specified for operand1, operand2, ... :
    -   [Literals](javascript:call_link\('abencds_literal_v1.htm'\)) without a domain prefix
    -   Fields of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view
    -   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
    -   [Built-in functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\))
    -   A further case distinction
-   The following can be specified for result1, result2, ...:
    -   [Literals](javascript:call_link\('abencds_literal_v1.htm'\)) without a domain prefix
    -   Fields of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view
    -   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identify a field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\))
    -   [Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v1.htm'\))
    -   [Casting expressions](javascript:call_link\('abencds_cast_expression_v1.htm'\))
    -   [Built-in functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))
    -   A further case distinction

The operand operand must be [comparable](javascript:call_link\('abencds_cond_expr_types_v1.htm'\)) with operand1, operand2, ... When the CDS view is activated, a result type is determined from the operands result1, result2, ... that covers their types. The operands must be compatible with each other.

The operands cannot have the [type](javascript:call_link\('abenddic_builtin_types.htm'\)) LCHR, LRAW, STRING, RAWSTRING, or GEOM\_EWKB.

Hints

-   The SQL standard specifies the result of a case distinction, but not the order in which the operands are evaluated. Potentially, the result may even be evaluated before the associated condition. This means that any expressions specified as operands must have no side effects and must not be dependent on each other.
-   On the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), operands are evaluated in parallel for reasons of optimization. The order in which the operands are evaluated is undefined. If an exception is raised when an operand is evaluated, the entire case distinction is canceled. In this case, it does not matter which conditions apply and the order in which they are listed. For this reason, it is advisable not to use any exceptions in expressions specified as operands. For more information, see the [HANA-specific SQL documentation](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

Example

Case distinction in a SELECT list.

case partner.bp\_role
    when '01' then 'customer'
    when '02' then 'supplier'
end as partner\_role