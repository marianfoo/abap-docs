---
title: "SQL Functions for Numeric Values"
description: |
  The following table shows the numeric SQL functions supported by ABAP CDS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and Open SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm 'Glossary Entry'). The la
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_numeric.htm"
abapFile: "abensql_functions_numeric.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abensql", "functions", "numeric"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions.htm) → 

SQL Functions for Numeric Values

The following table shows the numeric SQL functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

Open SQL

ABS(arg)

Absolute amount of arg.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

CEIL(arg)

Smallest integer number not less than the value of arg.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

DIV(arg1, arg2)

Integer part of the division of arg1 by arg2 The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. Exception: arg2 has the value 0.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

DIVISION(arg1, arg2, dec)

Division of arg1 by arg2 The result is rounded to dec decimal places.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

FLOOR(arg)

Largest integer number not greater than the value of arg.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

MOD(arg1, arg2)

Positive or negative integer remainder of the division of arg1 by arg2.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

ROUND(arg, pos)

Rounded value of arg. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm)

Descriptions of the potential operands and data types can be found the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_sql_functions_numeric.htm) and [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_arith_func.htm).

Note

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm), on the other hand, only produces positive results.

Example

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarith_operators.htm).

expr1

expr2

DIV

MOD

7

3

2

1

\-7

3

\-2

\-1

7

\-3

\-2

1

\-7

\-3

2

\-1