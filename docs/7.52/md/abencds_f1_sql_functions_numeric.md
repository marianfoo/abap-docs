  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - sql\_functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) → 

ABAP CDS - Numeric Functions

The following table shows the possible numerical [SQL functions](javascript:call_link\('abencds_f1_sql_functions.htm'\)) in a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), plus the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Numeric Values](javascript:call_link\('abensql_functions_numeric.htm'\)).

Function

Valid Argument Types

Result Type

[ABS(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg

[CEIL(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)), [FLTP](javascript:call_link\('abenddic_builtin_types.htm'\))

[INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)) (if arg is of type INT8)

[DIV(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) without decimal places.

Data type arg1, where [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) are implemented after [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

[DIVISION(arg1, arg2, dec)](javascript:call_link\('abensql_functions_numeric.htm'\))

arg1, arg2: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))
dec: Integer [numeric literal](javascript:call_link\('abencds_f1_literal.htm'\)) greater than or equal to 0 and not greater than the maximum value of 6 and the length of arg2 plus the number of decimal places of arg1 plus 1

[DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with dec decimal places. The length of the result is the length of arg1 minus the decimal places in arg1 plus the decimal places in arg2 plus dec. This value must not be greater than 31.

[FLOOR(arg)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg for the integer types, else [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) without decimal places

[MOD(arg1, arg2)](javascript:call_link\('abensql_functions_numeric.htm'\))

[INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg1

[ROUND(arg, pos)](javascript:call_link\('abensql_functions_numeric.htm'\))

arg: [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT8](javascript:call_link\('abenddic_builtin_types.htm'\)), [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)), [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)), [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\))
pos: [Literal](javascript:call_link\('abencds_f1_literal.htm'\)), field of a data source or [input parameter](javascript:call_link\('abencds_f1_parameter.htm'\)) of type [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)), [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

Data type of arg, where [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) and [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)) are transformed to [INT4](javascript:call_link\('abenddic_builtin_types.htm'\))

The following can be specified as the arguments arg:

-   [Literals](javascript:call_link\('abencds_f1_literal.htm'\)) of a suitable type. The literal can be prefixed with the name of a domain.

-   Suitable [fields](javascript:call_link\('abencds_f1_field.htm'\)) of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)) of the current CDS view.

-   [Path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)) that identify a suitable field of a data source [data\_source](javascript:call_link\('abencds_f1_data_source.htm'\)).

-   [Input parameters](javascript:call_link\('abencds_f1_parameter.htm'\)) from the parameter list [parameter\_list](javascript:call_link\('abencds_f1_parameter_list.htm'\)).

-   The following predefined functions and expressions (if they return a matching type):

-   Other predefined [SQL functions](javascript:call_link\('abencds_f1_sql_functions.htm'\))

-   [Arithmetic expressions](javascript:call_link\('abencds_f1_arithmetic_expression.htm'\))

-   Type modifications using [CAST](javascript:call_link\('abencds_f1_cast_expression.htm'\))

Note

The SQL functions [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)) behave differently with respect to the signs than the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](javascript:call_link\('abenarith_operators.htm'\)), on the other hand, only produces positive results. See [Example](javascript:call_link\('abensql_functions_numeric.htm'\)).

Example

The following CDS view applies predefined numeric SQL functions in the SELECT list to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_CDS\_SQL\_FUNCTIONS\_NUM uses SELECT to access the view.

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