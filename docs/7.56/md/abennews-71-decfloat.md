  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0, EhP2](javascript:call_link\('abennews-71.htm'\)) → 

Decimal Floating Point Numbers in Release 7.0, EhP2

Decimal floating point numbers with the types decfloat16 and decfloat34 have been introduced in ABAP to satisfy the demand for more precise processing of decimal numbers with a large range of values. The existing ABAP type p (packed number) represents a decimal number precisely and can be calculated precisely (apart from unavoidable commercial rounding), but the value range is often too small. The existing ABAP type f (binary floating point number) has a large value range, but cannot represent every decimal number precisely due to the internal binary representation.

Both of these requirements are satisfied by decimal floating point numbers. Unlike binary floating point numbers, decimal floating point numbers are represented internally with a decimal mantissa. Each decimal number can be represented precisely within the length of the mantissa (16 or 34) and it can be used for calculations in the same way as with type p. Unlike type p, the number of decimal places is not a property of the data type; an exponent of the value determines the decimal places instead. This means that decimal floating point numbers have the advantage of providing a very large range of values.

[1\. New Built-In ABAP Types decfloat16 and decfloat34](#!ABAP_MODIFICATION_1@1@)
[2\. New Built-In Types in ABAP Dictionary](#!ABAP_MODIFICATION_2@2@)
[3\. New Built-In Functions round and rescale](#!ABAP_MODIFICATION_3@3@)
[4\. Lossless Calculations](#!ABAP_MODIFICATION_4@4@)
[5\. Methods for Decimal Floating Point Numbers](#!ABAP_MODIFICATION_5@5@)
[6\. Formatting of Decimal Floating Point Numbers Using WRITE](#!ABAP_MODIFICATION_6@6@)

Modification 1   

New Built-In ABAP Types decfloat16 and decfloat34

From Release 7.0, EhP2, ABAP includes the new built-in [numeric](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") [ABAP types](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry") [decfloat16](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) and [decfloat34](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) for [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"). The corresponding data objects are eight bytes or 16 bytes long and the data objects are [aligned](javascript:call_link\('abenalignment_glosry.htm'\) "Glossary Entry") in their lengths. The [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") is determined by mantissas of the length -383 and +384 or -6143 and +6144. The new [generic ABAP type](javascript:call_link\('abengeneric_abap_type_glosry.htm'\) "Glossary Entry") [decfloat](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) covers both new types, decfloat16 and decfloat34.

The following changes have been caused by the new types:

-   New [conversion](javascript:call_link\('abenconversion_type_decfloat.htm'\)) and [comparison rules](javascript:call_link\('abenlogexp_rules_operands.htm'\)) have been introduced for the new types.
-   If a decimal floating point number appears in an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), the [calculation type](javascript:call_link\('abenarith_type.htm'\)) is decfloat34.
-   The [floating point functions](javascript:call_link\('abenfloating_point_function_glosry.htm'\) "Glossary Entry") exp, log, log10, and sqrt now no longer work just with arguments of type f; they now also work with arguments of type decfloat16 and decfloat34. The type of the argument determines the type of the return value. Decimal floating point numbers cannot be used as arguments for the remaining floating point functions at the moment.

Modification 2   

New Built-In Types in ABAP Dictionary

The following new types have been introduced in ABAP Dictionary for the new ABAP types decfloat16 and decfloat34:

-   [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) are used by database fields in which decimal floating point numbers, such as packed numbers with type DEC are stored. Database writes can cause roundings and overflows.
-   [DF16\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) are used by database fields in which decimal floating point numbers are stored in their internal representation.
-   [DF16\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_SCL](javascript:call_link\('abenddic_builtin_types.htm'\)) are used by database fields in which decimal floating point numbers are stored with their scaling. In this kind of field, the decimal floating point numbers are stored as in DF16\_RAW or DF34\_RAW. The scaling must be specified in a direct successor database field with type INT2. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads. These data types are now obsolete and their use is strongly discouraged.

Data elements with these types can be used to declare fields in database tables and in dynpros. An output style can be specified in a domain or directly in a structure component created with one of these types. For dynpro fields whose data type is not defined in ABAP Dictionary, the output style can be defined in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry").

Modification 3   

New Built-In Functions round and rescale

The new [rounding functions](javascript:call_link\('abenrounding_function_glosry.htm'\) "Glossary Entry") round and rescale enable decimal floating point numbers to be rounded or their [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") to be changed. New constants have been added to the class CL\_ABAP\_MATH. These constants can be used to specify the rounding rule.

Modification 4   

Lossless Calculations

The new addition EXACT of the statement [COMPUTE](javascript:call_link\('abapcompute.htm'\)) can be used to force a [lossless calculation](javascript:call_link\('abenlossless_calculation_glosry.htm'\) "Glossary Entry") for decimal floating point numbers, under certain prerequisites. No roundings are allowed in a lossless calculation; they raise the exception CX\_SY\_CONVERSION\_ROUNDING.

Modification 5   

Methods for Decimal Floating Point Numbers

Methods for operations with floating point numbers have been added to the class CL\_ABAP\_MATH.

-   The method GET\_SCALE gets the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").
-   The method GET\_NUMBER\_OF\_DIGITS gets the [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") of a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry").
-   The method NORMALIZE gets a normalized floating point number. This means that the [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry") and [precision](javascript:call_link\('abenprecision_glosry.htm'\) "Glossary Entry") of an input value are changed so that the mantissa has no trailing zeros.
-   The method GET\_MAX\_DB\_VALUE returns the maximum value of a number of the type DF16\_DEC or DF34\_DEC on the database (from EhP1).
-   The method GET\_DB\_LENGTH\_DECS returns the length and number of decimal places of a number of the type DF16\_DEC or DF34\_DEC on the database (from EhP1).

The new class CL\_ABAP\_DECFLOAT contains special methods for decimal floating point numbers.

-   The methods READ\_DECFLOAT34 and READ\_DECFLOAT16 convert character-like data objects to decimal floating point numbers and, unlike regular assignments, enable enhanced exception handling.

Modification 6   

Formatting of Decimal Floating Point Numbers Using WRITE

[Predefined formats](javascript:call_link\('abenwrite_formats.htm'\)) have been defined for the new types decfloat16 and decfloat34 for the statements [WRITE ... TO](javascript:call_link\('abapwrite_to.htm'\)) for formatted assignments and [WRITE](javascript:call_link\('abapwrite-.htm'\)) for list output. The predefined output lengths for list output are 24 and 46.

The new addition [STYLE](javascript:call_link\('abapwrite_to_options.htm'\)) has been added to the WRITE statements for the formatting of decimal floating point numbers with different formats.