# ABAP - Keyword Documentation / ABAP - Reference / Processing Internal Data / Numeric Calculations / System Classes for Numbers

Included pages: 3


### abencl_abap_math.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) → 

System Classes for Numbers

-   [System Class CL\_ABAP\_MATH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_class.htm)

-   [Random Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrandom_number_class.htm)

Continue
[System class CL\_ABAP\_MATH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfloating_point_class.htm)
[Random Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrandom_number_class.htm)


### abenfloating_point_class.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_math.htm) → 

System class CL\_ABAP\_MATH

-   [Constants for minimum and maximum values](#@@ITOC@@ABENFLOATING_POINT_CLASS_1)

-   [Operations with Floating Point Numbers](#@@ITOC@@ABENFLOATING_POINT_CLASS_2)

-   [Rounding Binary Floating Point Numbers](#@@ITOC@@ABENFLOATING_POINT_CLASS_3)

-   [Operations with Decimal Floating Point Numbers](#@@ITOC@@ABENFLOATING_POINT_CLASS_4)

Constants for minimum and maximum values

Class CL\_ABAP\_MATH contains constants with the limits of the value ranges [predefined numeric types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm).

Example

Display of minimum values and maximum values of numeric types.

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

The method ROUND\_F\_TO\_15\_DECS rounds a [binary floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbinfloat_glosry.htm "Glossary Entry") to 15 places using commercial rounding.

Note

Commercial rounding to 15 digits can also be achieved with the built-in function [round](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendec_floating_point_functions.htm), the result of which then has the decfloat34 type.

Example

The example shows how rounding errors in the output formatting of binary floating point numbers can be prevented by two-step rounding using the method ROUND\_F\_TO\_15\_DECS. Instead of the method call, the function call round( val = float dec = 15 ) can be used here.

DATA float TYPE f VALUE '1.005'.
cl\_demo\_output=>display(
  |{ float DECIMALS = 2 }\\n| &&
  |{ cl\_abap\_math=>round\_f\_to\_15\_decs( float ) DECIMALS = 2 }\\n| ).

Operations with Decimal Floating Point Numbers

-   The method GET\_SCALE gets the [scaling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscale_glosry.htm "Glossary Entry") of a [decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The method GET\_NUMBER\_OF\_DIGITS gets the [precision](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprecision_glosry.htm "Glossary Entry") of a [decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry").

-   The method NORMALIZE gets a normalized floating point number. This means that the [scaling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscale_glosry.htm "Glossary Entry") and [precision](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprecision_glosry.htm "Glossary Entry") of an input value are changed so that the mantissa has no trailing zeroes.

-   The method GET\_SCALE\_NORMALIZED gets the [scaling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscale_glosry.htm "Glossary Entry") of a normalized [decimal floating point number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecfloat_glosry.htm "Glossary Entry"). If the input value has decimal places, the return value is the number of decimal places without trailing zeroes.

-   The method GET\_MAX\_DB\_VALUE gets the maximum value of a number of the type DF16\_DEC or DF34\_DEC on the database.

-   The method GET\_DB\_LENGTH\_DECS gets the length and number of decimal places of a number of the type DF16\_DEC or DF34\_DEC on the database.

Note

The [rounding functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrounding_function_glosry.htm "Glossary Entry") round and rescale can be used to round and rescale decimal floating point numbers.

Example

Outputs the scaling and precision of a decimal floating point number.

DATA(decf) = CONV decfloat34( '1234.56789' ).
cl\_demo\_output=>display(
|value = { decf
}\\nscale = { cl\_abap\_math=>get\_scale( decf )
}\\nprecision = { cl\_abap\_math=>get\_number\_of\_digits( decf ) }| ).


### abenrandom_number_class.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_math.htm) → 

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

Creates a pseudo random number of the type i between 1 and 100 (initialized by the system time).

DATA(r) = cl\_abap\_random\_int=>create( seed = CONV i( sy-uzeit )
                                      min  = 1
                                      max = 100 ).
