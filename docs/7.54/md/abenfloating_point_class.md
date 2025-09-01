---
title: "Constants for Minimum and Maximum Values"
description: |
  The class CL_ABAP_MATH contains constants with the limits of the value ranges built-in numeric types(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm). Example Displays the minimum values and maximum values of numeric types. cl_demo_output=>display( i:
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfloating_point_class.htm"
abapFile: "abenfloating_point_class.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenfloating", "point"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_abap_math.htm) → 

System Class CL\_ABAP\_MATH

-   [Constants for Minimum and Maximum Values](#abenfloating-point-class-1--------operations-with-floating-point-numbers---@ITOC@@ABENFLOATING_POINT_CLASS_2)

-   [Rounding Binary Floating Point Numbers](#abenfloating-point-class-3--------operations-with-decimal-floating-point-numbers---@ITOC@@ABENFLOATING_POINT_CLASS_4)

Constants for Minimum and Maximum Values

The class CL\_ABAP\_MATH contains constants with the limits of the value ranges [built-in numeric types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm).

Example

Displays the minimum values and maximum values of numeric types.

cl\_demo\_output=>display(
  |i:          { cl\_abap\_math=>min\_int4 WIDTH = 20
          } to { cl\_abap\_math=>max\_int4 WIDTH = 20 } \\n| &&
  |int8:       { cl\_abap\_math=>min\_int8 WIDTH = 20
          } to { cl\_abap\_math=>max\_int8 WIDTH = 20 } \\n| &&
  |decfloat16: { cl\_abap\_math=>min\_decfloat16 STYLE = SCIENTIFIC
                                              WIDTH = 20
          } to { cl\_abap\_math=>max\_decfloat16 STYLE = SCIENTIFIC
                                              WIDTH = 20 } \\n| &&
  |decfloat34: { cl\_abap\_math=>min\_decfloat34 STYLE = SCIENTIFIC
                                              WIDTH = 20
          } to { cl\_abap\_math=>max\_decfloat34 STYLE = SCIENTIFIC
                                              WIDTH = 20 } \\n| ).

Operations with Floating Point Numbers

The class CL\_ABAP\_MATH contains methods for operations with floating point numbers.

Rounding Binary Floating Point Numbers

The method ROUND\_F\_TO\_15\_DECS rounds a [binary floating point number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbinfloat_glosry.htm "Glossary Entry") to 15 places using commercial rounding.

Note

Commercial rounding to 15 digits can also be done using the built-in function [round](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendec_floating_point_functions.htm), the result of which then has the decfloat34 type.

Example

The example shows how rounding errors in the output formatting of binary floating point numbers can be prevented by two-step rounding using the method ROUND\_F\_TO\_15\_DECS. Instead of the method call, the function call round( val = float dec = 15 ) can be used here.

DATA float TYPE f VALUE '1.005'.
cl\_demo\_output=>display(
  |{ float DECIMALS = 2 }\\n| &&
  |{ cl\_abap\_math=>round\_f\_to\_15\_decs( float ) DECIMALS = 2 }\\n| ).

Operations with Decimal Floating Point Numbers

-   The method GET\_SCALE gets the [scaling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscale_glosry.htm "Glossary Entry") of a [decimal floating point number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The method GET\_NUMBER\_OF\_DIGITS gets the [precision](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprecision_glosry.htm "Glossary Entry") of a [decimal floating point number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The method NORMALIZE gets a normalized floating point number. This means that the [scaling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscale_glosry.htm "Glossary Entry") and [precision](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprecision_glosry.htm "Glossary Entry") of an input value are changed so that the mantissa has no trailing zeroes.

-   The method GET\_SCALE\_NORMALIZED gets the [scaling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenscale_glosry.htm "Glossary Entry") of a normalized [decimal floating point number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendecfloat_glosry.htm "Glossary Entry"). If the input value has decimal places, the return value is the number of decimal places without trailing zeroes.

-   The method GET\_MAX\_DB\_VALUE gets the maximum value of a number of the type DF16\_DEC or DF34\_DEC on the database.

-   The method GET\_DB\_LENGTH\_DECS gets the length and number of decimal places of a number of the type DF16\_DEC or DF34\_DEC on the database.

Note

The [rounding functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrounding_function_glosry.htm "Glossary Entry") round and rescale can be used to round and rescale decimal floating point numbers.

Example

Displays the scaling and precision of a decimal floating point number.

DATA(decf) = CONV decfloat34( '1234.56789' ).
cl\_demo\_output=>display(
|value = { decf
}\\nscale = { cl\_abap\_math=>get\_scale( decf )
}\\nprecision = { cl\_abap\_math=>get\_number\_of\_digits( decf ) }| ).

This translation does not reflect the current version of the documentation.