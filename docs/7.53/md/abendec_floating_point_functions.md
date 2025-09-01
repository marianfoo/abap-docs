---
title: "Syntax"
description: |
  ... roundrescale( val = arg ...  ) ... Effect The rounding functions expect a decimal floating point number(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm 'Glossary Entry') as a main argument val and additional arguments that describe how this floating point
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendec_floating_point_functions.htm"
abapFile: "abendec_floating_point_functions.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abendec", "floating", "point", "functions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencompute_expressions.htm) →  [Numeric Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmathematical_functions.htm) → 

round, rescale - Rounding Functions

Syntax

... round*|*rescale( val = arg ...  ) ...

Effect

The rounding functions expect a [decimal floating point number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry") as a main argument val and additional arguments that describe how this floating point number is handled. The type of the return value of a rounding function is always decfloat34. Within an arithmetic expression, the argument for the decimal floating point number can either be an arithmetic expression or a function. The other arguments must always be specified as numeric data objects.

-   [Rounding Function](#abendec-floating-point-functions-1--------rescaling-function---@ITOC@@ABENDEC_FLOATING_POINT_FUNCTIONS_2)

Note

The class CL\_ABAP\_MATH includes the method NORMALIZE for normalizing a decimal floating point object. The mantissa does not have any closing zeros in a normalized floating point number.

Rounding Function

The rounding function round can be implemented in [operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_expressions.htm) using the following syntax:

Syntax

... round( val = arg *{*dec = n*}**|**{*prec = n*}* *\[*mode = m*\]* ) ...

Effect

This function rounds a decimal floating point number declared as an argument for the parameter val. A data object specified for arg is converted to the data type decfloat34 before the function is executed, if necessary.

Either the parameter dec or the parameter prec must be given a value, and rounding must be to either a particular number of decimal places or [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry"):

-   If the parameter dec is given a value, the value entered is rounded to the number of decimal places specified in n and returned. n expects data objects of the type i. The value of these data objects cannot be less than -6144. If a negative value is given, the relevant whole number place is rounded.

-   If the parameter prec is given a value, the value entered is rounded to the [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry") specified in n and returned. n expects data objects of the type i. The value of these data objects must be greater than 0.

A rounding can reduce [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") and [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry") but cannot increase them. If dec is specified, the mantissa of the return code does not contain any zeroes after the place where the rounding applies. If prec is specified, the input value is returned without being changed, if the specified precision is greater than or equal to the input value.

The parameter mode (optional) can be used to set the rounding type. For m it is only possible to specify values that exist as ROUND\_... constants in class CL\_ABAP\_MATH. The following table shows the possible rounding rules. If mode is not given a value, commercial rounding is used.

Constant

Rounding rule

ROUND\_HALF\_UP

The value is rounded down to the next round figure. If the value falls precisely halfway between two rounded values, it is rounded up away from zero (commercial rounding).

ROUND\_HALF\_DOWN

The value is rounded down to the next round figure. If the value falls precisely halfway between two round values, it is rounded down towards zero.

ROUND\_HALF\_EVEN

The value is rounded down to the next round figure. If the value falls precisely halfway between two rounded values, it is rounded to the value which has an even number in the last place.

ROUND\_UP

The value is always rounded away from zero/to the larger absolute value.

ROUND\_DOWN

The value is always rounded to zero/to the smaller absolute value.

ROUND\_CEILING

The value is always rounded in a positive direction/to the larger value.

ROUND\_FLOOR

The value is always rounded in a positive direction/to the larger value.

Example

The following tables show the results of commercial rounding of the decimal floating point number 1234.56789 (scaling 5, precision 9) with various values for dec and prec. The displayed results are generated by executing the program DEMO\_ROUND\_AND\_RESCALE.

dec

Result

Scaling

Precision

\-5

0E+5

\-5

1

\-4

0E+4

\-4

1

\-3

1E+3

\-3

1

\-2

1.2E+3

\-2

2

\-1

1.23E+3

\-1

3

0

1235

0

4

1

1234.6

1

5

2

1234.57

2

6

3

1234.568

3

7

4

1234.5679

4

8

5

1234.56789

5

9

6

1234.56789

5

9

prec

Result

Scaling

Precision

1

1E+3

\-3

1

2

1.2E+3

\-2

2

3

1.23E+3

\-1

3

4

1235

0

4

5

1234.6

1

5

6

1234.57

2

6

7

1234.568

3

7

8

1234.5679

4

8

9

1234.56789

5

9

10

1234.56789

5

9

Executable Example

[Rounding Function round](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenround_function_abexa.htm)

Rescaling Function

The rescaling function rescale can be implemented in [operand positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoperands_expressions.htm) using the following syntax:

Syntax

... rescale( val = arg *{*dec = n*}**|**{*prec = n*}* *\[*mode = m*\]* ) ...

Effect

This function changes the [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") of a decimal floating point number declared as an argument for the parameter val. A data object specified for arg is converted to the data type decfloat34 before the function is executed, if necessary.

Either the parameter dec or the parameter prec must be given a value, where either the [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") or the [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry") is set:

-   If the parameter dec is given a value, the value entered is rounded using the [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") specified in n and returned. n expects data objects of the type i. The value of these data objects cannot be less than -6144. If the scaling produces more than 34 places in the mantissa of the return value, a handleable exception is raised.

-   If the parameter prec is given a value, the value entered is returned with the [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry") specified in n and appropriate [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") and returned. n expects data objects of the type i. The value of these data objects must be greater than 0 and less than 34.

A rescaling can both reduce and increase [scaling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscale_glosry.htm "Glossary Entry") and [precision](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprecision_glosry.htm "Glossary Entry"). An increase adds zeros on the right.

The input value is rounded if required. The optional parameter mod can be used to specify the rounding rule, as described under the function round. The default is commercial rounding.

Examples

The following tables show the results of rescaling of the decimal floating point number 1234.56789 (scaling 5, precision 9) with various values for dec and prec, if commercial rounding is used. The displayed results are generated by executing the program DEMO\_ROUND\_AND\_RESCALE.

dec

Result

Scaling

Precision

\-5

0E+5

\-5

1

\-4

0E+4

\-4

1

\-3

1E+3

\-3

1

\-2

1.2E+3

\-2

2

\-1

1.23E+3

\-1

3

0

1235

0

4

1

1234.6

1

5

2

1234.57

2

6

3

1234.568

3

7

4

1234.5679

4

8

5

1234.56789

5

9

6

1234.567890

6

10

7

1234.5678900

7

11

8

1234.56789000

8

12

prec

Result

Scaling

Precision

1

1E+3

\-3

1

2

1.2E+3

\-2

2

3

1.23E+3

\-1

3

4

1235

0

4

5

1234.6

1

5

6

1234.57

2

6

7

1234.568

3

7

8

1234.5679

4

8

9

1234.56789

5

9

10

1234.567890

6

10

11

1234.5678900

7

11

12

1234.56789000

8

12