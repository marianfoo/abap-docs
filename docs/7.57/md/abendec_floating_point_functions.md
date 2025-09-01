  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numeric Functions (num\_func)](javascript:call_link\('abenmathematical_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: num_func - round, rescale, ABENDEC_FLOATING_POINT_FUNCTIONS, 757%0D%0A%0D%0AError:%0D
%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

num\_func - round, rescale

Syntax

... round*|*rescale( val = arg ...  ) ...

Effect

The [built-in](javascript:call_link\('abenbuilt_in_functions.htm'\)) rounding functions expect a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") as a main argument val and additional arguments that describe how this floating point number is handled. The type of the return value of a rounding function is always decfloat34. Within an arithmetic expression, the argument for the decimal floating point number can either be an arithmetic expression or a function. The other arguments must always be specified as numeric data objects.

-   [Rounding Function](#abendec-floating-point-functions-1-------rescaling-function---@ITOC@@ABENDEC_FLOATING_POINT_FUNCTIONS_2)

Hint

The class CL\_ABAP\_MATH includes the method NORMALIZE for normalizing a decimal floating point object. The mantissa does not have any closing zeros in a normalized floating point number.

Rounding Function   

The rounding function round can be implemented in [operand positions](javascript:call_link\('abenoperands_expressions.htm'\)) using the following syntax:

Syntax

... round( val = arg *{*dec = n*}**|**{*prec = n*}* *\[*mode = m*\]* ) ...

Effect

This function rounds a decimal floating point number specified as an argument for the parameter val. A data object specified for arg is converted to the data type decfloat34 before the function is executed, if necessary.

Either the parameter dec or the parameter prec must be given a value, and rounding must be to either a particular number of decimal places or to a [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry"):

-   If the parameter dec is given a value, the input value is rounded to the number of decimal places specified in n and returned. n expects data objects of the type i whose value must not be less than -6144. If a negative value is specified, the corresponding pre-decimal place is rounded.
-   If the parameter prec is given a value, the value entered is rounded to the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") specified in n and returned. n expects data objects of the type i whose value must be greater than 0.

A rounding can reduce [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") but cannot increase them. If dec is specified, the mantissa of the return value does not contain any zeros after the place where the rounding applies. If prec is specified, the input value is returned unchanged if the specified precision is greater than or equal to the input value.

The optional parameter mode determines the rounding type. For m it is only possible to specify values that exist as ROUND\_... constants in class CL\_ABAP\_MATH. The following table shows the possible rounding rules. If mode is not given a value, commercial rounding is used.

Constant

Rounding rule

ROUND\_HALF\_UP

The value is rounded down to the nearest rounded value. If the value falls exactly halfway between two rounded values, it is rounded away from zero (commercial rounding).

ROUND\_HALF\_DOWN

The value is rounded down to the nearest rounded value. If the value falls exactly halfway between two round values, it is rounded towards zero.

ROUND\_HALF\_EVEN

The value is rounded down to the nearest rounded value. If the value falls exactly halfway between two rounded values, it is rounded to the value whose last place is an even number.

ROUND\_UP

The value is always rounded away from zero or towards the greater absolute value.

ROUND\_DOWN

The value is always rounded from zero or towards the lesser absolute value.

ROUND\_CEILING

The value is always rounded in a positive direction or towards the greater value.

ROUND\_FLOOR

The value is always rounded in a positive direction or towards the greater value.

Example

The following tables show the results of commercial rounding of the decimal floating point number 1234.56789 (scaling 5, precision 9) with different values for dec and prec. The shown results shown are created by executing the program DEMO\_ROUND\_AND\_RESCALE.

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

[Rounding Function round](javascript:call_link\('abenround_function_abexa.htm'\))

Rescaling Function   

The rescaling function rescale can be implemented in [operand positions](javascript:call_link\('abenoperands_expressions.htm'\)) using the following syntax:

Syntax

... rescale( val = arg *{*dec = n*}**|**{*prec = n*}* *\[*mode = m*\]* ) ...

Effect

This function changes the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of a decimal floating point number specified as an argument for the parameter val. A data object specified for arg is converted to the data type decfloat34 before the function is executed, if necessary.

Either the parameter dec or the parameter prec must be given a value, where either the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") or the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") is set:

-   If the parameter dec is given a value, the input value is returned using the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") specified in n. n expects data objects of the type i, whose value must not be less than -6144. If the scaling would produce more than 34 places in the mantissa of the return value, a catchable exception is raised.
-   If the parameter prec is given a value, the value entered is returned with the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") specified in n and appropriate [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry"). n expects data objects of the type i, whose value must be greater than 0 and less than 34.

A rescaling can both reduce and increase [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry"). An increase adds zeros on the right.

The input value is rounded if required. The optional parameter mod can be used to specify the rounding rule, as described under the function round. The default is commercial rounding.

Examples

The following tables shows the results for rescaling of the decimal floating point number 1234.56789 (scaling 5, precision 9) with various values for dec and prec, if commercial rounding is used. The results shown are generated by executing the program DEMO\_ROUND\_AND\_RESCALE.

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