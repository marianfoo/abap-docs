---
title: "DDIC - SQL Functions for Numeric Values"
description: |
  The following table shows the numeric SQL functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm 'Glossary Entry').
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm"
abapFile: "abensql_functions_numeric.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions", "numeric"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions for Numeric Values, ABENSQL_FUNCTIONS_NUMERIC, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Functions for Numeric Values

The following table shows the numeric SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS DDIC-Based Views, ABAP CDS View Entities, and ABAP SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

Table Buffer

ABS

Absolute value of argument

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

CEIL

Rounded to the first integer that is greater than or equal to the value of an argument

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

DIV

Division of two arguments. The result is rounded to an integer.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

DIVISION

Division of two arguments. The result is rounded to specified decimal places.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

\-

FLOOR

Largest integer number not greater than the value of the argument.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

MOD

Positive or negative integer remainder of the division of two arguments.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

ROUND

Rounded value of an argument.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

\-

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm).

Hint

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm), on the other hand, only produces positive results.

Example

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm).

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