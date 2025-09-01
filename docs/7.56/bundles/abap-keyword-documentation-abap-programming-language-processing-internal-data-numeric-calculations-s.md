# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Numeric Calculations / System Classes for Numbers

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abencl_abap_math.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_math.htm)
- [abenfloating_point_class.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfloating_point_class.htm)
- [abencl_abap_decfloat_doc.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_decfloat_doc.htm)
- [abenrandom_number_class.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrandom_number_class.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.493Z

---

### abencl_abap_math.htm

> **📖 Official SAP Documentation**: [abencl_abap_math.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_math.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) → 

System Classes for Numbers

-   [System Class CL\_ABAP\_MATH](javascript:call_link\('abenfloating_point_class.htm'\))
-   [System Class CL\_ABAP\_DECFLOAT](javascript:call_link\('abencl_abap_decfloat_doc.htm'\))
-   [Random Numbers](javascript:call_link\('abenrandom_number_class.htm'\))

Continue
[System Class CL\_ABAP\_MATH](javascript:call_link\('abenfloating_point_class.htm'\))
[System Class CL\_ABAP\_DECFLOAT](javascript:call_link\('abencl_abap_decfloat_doc.htm'\))
[Random Numbers](javascript:call_link\('abenrandom_number_class.htm'\))



**📖 Source**: [abencl_abap_math.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_math.htm)

### abenfloating_point_class.htm

> **📖 Official SAP Documentation**: [abenfloating_point_class.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfloating_point_class.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [System Classes for Numbers](javascript:call_link\('abencl_abap_math.htm'\)) → 

System Class CL\_ABAP\_MATH

-   [Constants for Minimum and Maximum Values](#abenfloating-point-class-1-------operations-with-floating-point-numbers---@ITOC@@ABENFLOATING_POINT_CLASS_2)
    -   [Rounding Binary Floating Point Numbers](#abenfloating-point-class-3-----------operations-with-decimal-floating-point-numbers---@ITOC@@ABENFLOATING_POINT_CLASS_4)

Constants for Minimum and Maximum Values

The class CL\_ABAP\_MATH contains constants with the limits of the value ranges [built-in numeric types](javascript:call_link\('abenbuiltin_types_numeric.htm'\)).

Example

Display of the minimum and maximum values of numeric types.

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

The method ROUND\_F\_TO\_15\_DECS rounds a [binary floating point number](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") to 15 places using commercial rounding.

Hint

Commercial rounding to 15 digits can also be achieved using the built-in function [round](javascript:call_link\('abendec_floating_point_functions.htm'\)), the result of which, however, has the decfloat34 type.

Example

The example shows how rounding errors in the output formatting of binary floating point numbers can be prevented by two-step rounding using the method ROUND\_F\_TO\_15\_DECS. Instead of the method call, the function call round( val = float dec = 15 ) can be used here.

DATA float TYPE f VALUE '1.005'.
cl\_demo\_output=>display(
  |{ float DECIMALS = 2 }\\n| &&
  |{ cl\_abap\_math=>round\_f\_to\_15\_decs( float ) DECIMALS = 2 }\\n| ).

Operations with Decimal Floating Point Numbers

-   The method GET\_SCALE returns the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").
-   The method GET\_NUMBER\_OF\_DIGITS returns the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").
-   The method NORMALIZE returns a normalized floating point number. This means that the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") of an input value are changed so that the mantissa has no trailing zeros.
-   The method GET\_SCALE\_NORMALIZED returns the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of a normalized [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). If the input value has decimal places, the return value is the number of decimal places without trailing zeros.
-   The method GET\_MAX\_DB\_VALUE returns the maximum value of a number of the type DF16\_DEC or DF34\_DEC on the database.
-   The method GET\_DB\_LENGTH\_DECS returns the length and number of decimal places of a number of the type DF16\_DEC or DF34\_DEC on the database.

Hint

The [rounding functions](javascript:call_link\('abenrounding_function_glosry.htm'\) "Glossary Entry") round and rescale can be used to round and rescale decimal floating point numbers.

Example

Display of the scaling and precision of a decimal floating point number.

DATA(decf) = CONV decfloat34( '1234.56789' ).
cl\_demo\_output=>display(
|value = { decf
}\\nscale = { cl\_abap\_math=>get\_scale( decf )
}\\nprecision = { cl\_abap\_math=>get\_number\_of\_digits( decf ) }| ).



**📖 Source**: [abenfloating_point_class.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfloating_point_class.htm)

### abencl_abap_decfloat_doc.htm

> **📖 Official SAP Documentation**: [abencl_abap_decfloat_doc.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_decfloat_doc.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [System Classes for Numbers](javascript:call_link\('abencl_abap_math.htm'\)) → 

System Class CL\_ABAP\_DECFLOAT

The system class CL\_ABAP\_DECFLOAT contains methods for handling [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").

-   The methods READ\_DECFLOAT34 and READ\_DECFLOAT16 convert strings to decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the roundings performed.
-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR convert currency amounts to decimal floating point numbers as specified by a currency key and vice versa.

Hint

The formatting option [CURRENCY](javascript:call_link\('abapwrite_to_options.htm'\)) of the [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and [WRITE](javascript:call_link\('abapwrite-.htm'\)) statements works like the method CONVERT\_DECFLOAT\_TO\_CURR.



**📖 Source**: [abencl_abap_decfloat_doc.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_decfloat_doc.htm)

### abenrandom_number_class.htm

> **📖 Official SAP Documentation**: [abenrandom_number_class.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrandom_number_class.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenrandom_number_class.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrandom_number_class.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [System Classes for Numbers](javascript:call_link\('abencl_abap_math.htm'\)) → 

Random Numbers

The class CL\_ABAP\_RANDOM calls the pseudo random number generator Mersenne Twister for different numeric types.

For the one-dimensional case, the following special classes generate random numbers for the different numeric types:

-   CL\_ABAP\_RANDOM\_INT for type i
-   CL\_ABAP\_RANDOM\_INT8 for type int8
-   CL\_ABAP\_RANDOM\_FLOAT for type f
-   CL\_ABAP\_RANDOM\_PACKED for type p
-   CL\_ABAP\_RANDOM\_PACKED\_DEC1 to CL\_ABAP\_RANDOM\_PACKED\_DEC14 for type p with 1 to 14 decimal places.
-   CL\_ABAP\_RANDOM\_DECFLOAT16 for type decfloat16
-   CL\_ABAP\_RANDOM\_DECFLOAT34 for type decfloat34

Example

Creation of a pseudo random number of the type i between 1 and 100, initialized by the system time.

DATA(r) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                      min  = 1
                                      max  = 100 ).
