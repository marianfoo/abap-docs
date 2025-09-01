  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-based View, sql\_functions](javascript:call_link\('abencds_sql_functions_v1.htm'\)) → 

CDS DDL - DDIC-based View, Numeric Functions

The following table shows the possible numeric [SQL functions](javascript:call_link\('abencds_sql_functions_v1.htm'\)) in a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), plus the requirements made on the arguments.

Function

Result

Valid Argument Types

Result Type

[ABS(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

Absolute amount of arg

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg

[CEIL(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

Rounded to the first integer that is greater than or equal to the value of arg

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) (if arg is of type INT8)

[DIV(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

The result of a division of arg1 by arg2 is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. Exception: arg2 has the value 0.

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) without decimal places.

Type of the argument with the greatest value range.

[DIVISION(arg1, arg2, dec)](javascript:call_link\('abensql_functions_numeric.htm'\))

Division of arg1 by arg2. The result is rounded to dec decimal places

arg1, arg2: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))
dec: integer [numeric literal](javascript:call_link\('abencds_literal_v1.htm'\)) greater than or equal to 0 and not greater than the maximum value of 6 and the length of arg2 plus the number of decimal places of arg1 plus 1

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with dec decimal places. The length of the result is the length of arg1 minus the decimal places in arg1 plus the decimal places in arg2 plus dec. This value must not be greater than 31.

[FLOOR(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

Largest integer number not greater than the value of arg

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg for the integer types, else [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) without decimal places

[MOD(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

Positive or negative integer remainder of the division of arg1 by arg2

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg1

[ROUND(arg, pos)](javascript:call_link\('abensql_functions_numeric.htm'\))

Rounded value of arg. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

arg: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))
pos: [Literal](javascript:call_link\('abencds_literal_v1.htm'\)), field of a data source or [input parameter](javascript:call_link\('abencds_parameter_v1.htm'\)) of type [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), or [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg. Exception: If arg is of data type INT1 or INT2, the result is converted to INT4.

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_literal_v1.htm'\)) of a suitable type. The literal can be prefixed with the name of a domain.

-   Suitable [fields](javascript:call_link\('abencds_field_v1.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)) of the current CDS view.

-   [Path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_data_source_v1.htm'\)).

-   [Input parameters](javascript:call_link\('abencds_parameter_v1.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_parameter_list_v1.htm'\)).

-   The following built-in functions and expressions (if they return a matching type):

-   Other built-in [SQL functions](javascript:call_link\('abencds_sql_functions_v1.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_arithmetic_expression_v1.htm'\))

-   Type modifications using [CAST](javascript:call_link\('abencds_cast_expression_v1.htm'\))

Hint

The SQL functions [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)) behave differently with respect to the signs than the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](javascript:call_link\('abenarith_operators.htm'\)), on the other hand, only produces positive results. See [Example](javascript:call_link\('abensql_functions_numeric.htm'\)).

Example

The following CDS view applies built-in numeric SQL functions in the SELECT list to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_NUM uses SELECT to access the view.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_NUMFUNC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_sql\_functions\_num
  as select from
    demo\_expressions
    {
      abs(       num1          ) as r\_abs,
      ceil(      fltp1         ) as r\_ceil,
      floor(     dec1          ) as r\_floor,
      div(       num1, num2    ) as r\_div,
      mod(       num1, num2    ) as r\_mod,
      division(  dec2, dec3, 3 ) as r\_division,
      round(     dec3, 2       ) as r\_round
    }