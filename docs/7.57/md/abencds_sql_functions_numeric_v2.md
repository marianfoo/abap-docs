---
title: "CDS DDL - CDS View Entity, Numeric Functions"
description: |
  The following table shows the possible numeric SQL functions(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_glosry.htm 'Glossary Entry') in a CDS view entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm 'Glossary Entry'), plus
version: "7.57"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm"
abapFile: "abencds_sql_functions_numeric_v2.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "sql", "functions", "numeric"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, sql\_functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Numeric Functions, ABENCDS_SQL_FUNCTIONS_NUMERIC_V2, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Numeric Functions

The following table shows the possible numeric [SQL functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_glosry.htm "Glossary Entry") in a [CDS view entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), plus the requirements made on the arguments.

Function

Result

Valid Argument Types

Result Type

[ABS(arg)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

Absolute amount of arg

[INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [FLTP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Data type of arg

[CEIL(arg)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

Returns the first integer that is greater than or equal to the value of arg

[DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Data type of arg

[DIV(arg1, arg2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

The result of a division of arg1 by arg2 is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. Exception: arg2 has the value 0.

[INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).

Data type of the argument with the greatest value range

[DIVISION(arg1, arg2, dec)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

Division of arg1 by arg2. The result is rounded to dec decimal places.

arg1, arg2: [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)
dec: integer [numeric literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm) greater than or equal to 0. Length must be suitable so that the total of 31 valid places is not exceeded.

[DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) with dec decimal places. The length of the result must not be greater than 31.

[FLOOR(arg)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

Returns the largest integer number not greater than the value of arg. Counterpart to CEIL.

[DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Data type of arg

[MOD(arg1, arg2)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

Positive or negative integer remainder of the division of arg1 by arg2.

arg1: [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm),[INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)
arg2: [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

Data type of arg1

[ROUND(arg, pos)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)

Rounded value of arg. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

arg: [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT8](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DEC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [CURR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [QUAN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [DECFLOAT34](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)
pos: [Literal](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm), field of a data source or [input parameter](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm) of type [INT1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), [INT2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm), or [INT4](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm)

When arg has data type INT1, INT2, or INT4, then the result has data type INT4. For all other data types, the result has the same data type as arg.

The following can be specified as the arguments arg:

-   [Literals](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_literal_v2.htm) of a suitable type.
-   [Session variables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm) of a suitable type.
-   Suitable [fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_field_v2.htm) of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm) of the current CDS view entity.
-   [Path expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_path_expression_v2.htm) that identify a suitable field of a data source [data\_source](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_data_source_v2.htm).
-   [Input parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_v2.htm) from the parameter list [parameter\_list](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_list_v2.htm).
-   [Reuse expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_reusable_expression_v2.htm) using $projection
-   The following built-in functions and expressions (if they return a matching type):
    -   Other built-in [SQL functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_v2.htm)
    -   [Arithmetic expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_arithmetic_expression_v2.htm)
    -   [Aggregate expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_aggregate_functions_v2.htm)
    -   Type modifications using [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_cast_expression_v2.htm)
    -   [Case distinctions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_case_expression_v2.htm) using CASE

Hints

-   The SQL functions [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm), on the other hand, only produces positive results. See [Example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm).
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
      round(     dec3,  2      ) as r\_round1,
      round(     dec3, -2      ) as r\_round2
    }