  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-based View, SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-based View, Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_expressions_v1.htm) →  [CDS DDL - DDIC-Based View, Built-In Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_builtin_functions_v1.htm) →  [CDS DDL - DDIC-based View, sql\_functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_v1.htm) → 

CDS DDL - DDIC-based View, Numeric Functions

The following table shows the possible numeric [SQL functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_v1.htm) in a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), plus the requirements made on the arguments.

Function

Result

Valid Argument Types

Result Type

[ABS(arg)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

Absolute amount of arg

[INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

Data type of arg

[CEIL(arg)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

Rounded to the first integer that is greater than or equal to the value of arg

[INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

[INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) (if arg is of type INT8)

[DIV(arg1, arg2)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

The result of a division of arg1 by arg2 is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. Exception: arg2 has the value 0.

[INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) without decimal places.

Type of the argument with the greatest value range.

[DIVISION(arg1, arg2, dec)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

Division of arg1 by arg2. The result is rounded to dec decimal places

arg1, arg2: [INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)
dec: integer [numeric literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) greater than or equal to 0 and not greater than the maximum value of 6 and the length of arg2 plus the number of decimal places of arg1 plus 1

[DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with dec decimal places. The length of the result is the length of arg1 minus the decimal places in arg1 plus the decimal places in arg2 plus dec. This value must not be greater than 31.

[FLOOR(arg)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

Largest integer number not greater than the value of arg

[INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

Data type of arg for the integer types, else [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) without decimal places

[MOD(arg1, arg2)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

Positive or negative integer remainder of the division of arg1 by arg2

[INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

Data type of arg1

[ROUND(arg, pos)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm)

Rounded value of arg. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

arg: [INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)
pos: [Literal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm), field of a data source or [input parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v1.htm) of type [INT1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm), or [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm)

Data type of arg. Exception: If arg is of data type INT1 or INT2, the result is converted to INT4.

The following can be specified as the arguments arg:

-   [Literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_literal_v1.htm) of a suitable type. The literal can be prefixed with the name of a domain.
-   Suitable [fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_field_v1.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v1.htm) of the current CDS view.
-   [Path expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v1.htm) that identify a suitable field of a data source [data\_source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_data_source_v1.htm).
-   [Input parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v1.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_list_v1.htm).
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_sql_functions_v1.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v1.htm)
    -   Type modifications using [CAST](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cast_expression_v1.htm)

Hint

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarith_operators.htm), on the other hand, only produces positive results. See [Example](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_functions_numeric.htm).

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