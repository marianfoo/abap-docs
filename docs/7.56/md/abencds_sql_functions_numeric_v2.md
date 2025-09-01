  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Expressions](javascript:call_link\('abencds_expressions_v2.htm'\)) →  [CDS DDL - CDS View Entity, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) →  [CDS DDL - CDS View Entity, sql\_functions](javascript:call_link\('abencds_sql_functions_v2.htm'\)) → 

CDS DDL - CDS View Entity, Numeric Functions

The following table shows the possible numeric [SQL functions](javascript:call_link\('abensql_function_glosry.htm'\) "Glossary Entry") in a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"), plus the requirements made on the arguments.

Function

Result

Valid Argument Types

Result Type

[ABS(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

Absolute amount of arg

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg

[CEIL(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

Returns the first integer that is greater than or equal to the value of arg

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg

[DIV(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

The result of a division of arg1 by arg2 is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. Exception: arg2 has the value 0.

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) .

Data type of the argument with the greatest value range

[DIVISION(arg1, arg2, dec)](javascript:call_link\('abensql_functions_numeric.htm'\))

Division of arg1 by arg2. The result is rounded to dec decimal places.

arg1, arg2: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\))
dec: integer [numeric literal](javascript:call_link\('abencds_literal_v2.htm'\)) greater than or equal to 0. Length must be suitable so that the total of 31 valid places is not exceeded.

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with dec decimal places. The length of the result must not be greater than 31.

[FLOOR(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

Returns the largest integer number not greater than the value of arg. Counterpart to CEIL.

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg

[MOD(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

Positive or negative integer remainder of the division of arg1 by arg2.

arg1: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)),[INT8](javascript:call_link\('abenddic_builtin_types.htm'\))
arg2: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg1

[ROUND(arg, pos)](javascript:call_link\('abensql_functions_numeric.htm'\))

Rounded value of arg. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

arg: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT16](javascript:call_link\('abenddic_builtin_types.htm'\)), [DECFLOAT34](javascript:call_link\('abenddic_builtin_types.htm'\))
pos: [Literal](javascript:call_link\('abencds_literal_v2.htm'\)), field of a data source or [input parameter](javascript:call_link\('abencds_parameter_v2.htm'\)) of type [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), or [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

When arg has data type INT1, INT2, or INT4, then the result has data type INT4. For all other data types, the result has the same data type as arg.

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_literal_v2.htm'\)) of a suitable type.
-   [Session variables](javascript:call_link\('abencds_session_variable_v2.htm'\)) of a suitable type.
-   Suitable [fields](javascript:call_link\('abencds_field_v2.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)) of the current CDS view entity.
-   [Path expressions](javascript:call_link\('abencds_path_expression_v2.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_data_source_v2.htm'\)).
-   [Input parameters](javascript:call_link\('abencds_parameter_v2.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v2.htm'\)).
-   [Reuse expressions](javascript:call_link\('abencds_reusable_expression_v2.htm'\)) using $projection
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](javascript:call_link\('abencds_sql_functions_v2.htm'\))
    -   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v2.htm'\))
    -   [Aggregate expressions](javascript:call_link\('abencds_aggregate_functions_v2.htm'\))
    -   Type modifications using [CAST](javascript:call_link\('abencds_cast_expression_v2.htm'\))
    -   [Case distinctions](javascript:call_link\('abencds_case_expression_v2.htm'\)) using CASE

Hints

-   The SQL functions [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)) behave differently with respect to the signs than the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](javascript:call_link\('abenarith_operators.htm'\)), on the other hand, only produces positive results. See [Example](javascript:call_link\('abensql_functions_numeric.htm'\)).
-   Currently, CURR and QUAN cannot be used with minus sign.
    
    This syntax is not valid: ABS(-curr).
    

Example

The following CDS view entity applies built-in numeric SQL functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_NUM\_VE uses SELECT to access the view.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SQL\_FUNCTIONS\_NUM\_VE
  as select from
    demo\_expressions
    {
      abs(       num1          ) as r\_abs,
      ceil(      d34n1         ) as r\_ceil,      
      floor(     d34n2         ) as r\_floor,
      div(       num1, num2    ) as r\_div,
      mod(       num1, num2    ) as r\_mod,
      division(  dec2, dec3, 3 ) as r\_division,
      round(     dec3, 2       ) as r\_round
    }