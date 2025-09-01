  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Predefined Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Predefined Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [General Dictionary Types](javascript:call_link\('abenddic_builtin_types_general.htm'\)) → 

Decimal Floating Point Numbers

In [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), a maximum of 16 or 34 places exactly are returned in the mantissa depending on the data type.

-   [Handling in ABAP Dictionary](#abenddic-decimal-floating-point-1--------handling-in-dynpros---output-length-and-output-style---@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_DECIMAL_FLOATING_POINT_3)

Handling in ABAP Dictionary

In ABAP Dictionary, the following data types are available for decimal floating numbers:

-   [DF16\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF16\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for 16-digit numbers.

-   [DF34\_DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DF34\_RAW](javascript:call_link\('abenddic_builtin_types.htm'\)) for 34-digit numbers.

These data types are a replacement for real decimal floating point types. Real decimal floating point types can be used without restrictions in the database as numeric data types in relevant expressions and functions, but are not yet supported by all database systems.

-   DF16\_DEC and DF34\_DEC
    In database fields of this type, decimal floating point numbers are stored as a packed number (format [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\))). The length and the number of decimal places must be specified when defining a data type in ABAP Dictionary. Calculations (SELECT with appropriate [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) or with the aggregate functions [SUM and AVG](javascript:call_link\('abapselect_aggregate.htm'\)), UPDATE with [SET +, and \-](javascript:call_link\('abapupdate_set_expression.htm'\))) can be performed on the database for this type. When there is a write to the database, the system implicitly rounds off to the number of decimal places and decimal overflows can occur. Database fields with these types can be edited in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry").

-   DF16\_RAW and DF34\_RAW
    In database fields of this type, decimal floating point numbers are stored as binary (in RAW format). The length is set to 16 or 34 places. Values can be sorted, compared, and used in indexes. For this type, no calculations can be performed on the database. This is an SAP-specific format, which means that the corresponding fields also cannot be edited in [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry"). The scaling is lost when writing to the database.

Notes

-   The actual built-in data type from ABAP Dictionary used for decimal point numbers depends on their purpose.

-   The types DF16\_DEC and DF34\_DEC can be used for calculations on the database, but their value ranges are smaller than those of real decimal floating point numbers.

-   The types DF16\_RAW and DF34\_RAW cover the whole value range, but are not recognized as numbers by the databases.

-   As in the [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in the types DF16\_DEC and DF34\_DEC should be odd.

-   In the [ABAP CDS](javascript:call_link\('abencds.htm'\)) it is not usually possible to execute expressions or functions for decimal floating point numbers.

-   As well as the types above, there are also the [obsolete](javascript:call_link\('abenddic_obsolete_types.htm'\)) built-in data types DF16\_SCL and DF34\_SCL for decimal floating point numbers with [scaling](javascript:call_link\('abenscale_glosry.htm'\) "Glossary Entry").

-   In database fields of this type, decimal floating point numbers are stored in the same way as DF16\_RAW or DF34\_RAW (length 16 or 34 places, and the same restrictions apply). The scaling must be specified in a direct successor database field with type INT2. When a decimal floating point number is written, this field is filled automatically with the scaling and the scaling is taken from it in reads.

-   It is strongly advised not to use the types DF16\_SCL and DF34\_SCL. Their functions are rarely needed and the additional column for scaling makes them too complicated and error-prone to use correctly.

Handling in Dynpros - Output Length and Output Style

The maximum output length that can be specified in a [domain](javascript:call_link\('abenddic_domains.htm'\)) for a 16-character decimal floating point number is 24. For a 34-character number, 46 is the maximum output length. These are also the default values.

In a domain, or directly in a structure component created using one of the types for decimal floating numbers (but not in data elements with directly specified technical attributes), one of the following output styles is always defined. The output style defines how a dynpro field defined with reference to this domain (or a corresponding ABAP field in the case of list output) is formatted:

-   Simple

Mathematical or scientific notation (depending on space)

-   Leading sign to the right

Commercial notation (canceled if not enough space, instead of implicit transformation to scientific notation)

-   Scale-preserving

Format with preservation of scaling, including trailing zeroes in the decimal places

-   Scientific

Scientific notation

-   Scientific with leading zero

Scientific notation with a 0 as an integer digit

-   Scale-preserving scientific

Scientific notation including trailing zeroes in the mantissa.

-   Technical

Scientific notation where the exponent is always an integer and a multiple of 3. The value range of the integer digits is between 1 and 999 (except if the source field has the value 0).

For dynpro fields whose data type is not defined in ABAP Dictionary, the output style can also be determined in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). In the case of formatting with the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)), the addition [STYLE](javascript:call_link\('abapwrite_ext_options.htm'\)) is available (as for the [string templates](javascript:call_link\('abapcompute_string_format_options.htm'\))).

Notes

-   If scientific notation is used, a limited number of displayed places in the mantissa is recommended. This can be specified using the built-in function [rescale](javascript:call_link\('abendec_floating_point_functions.htm'\)).

-   The "scale-preserving" style ensures that the scaling is restored in conversions from dynpro fields to ABAP, and not just the original value.

-   If vertically aligned decimal separators and exponents are needed on UIs, the scale-preserving scientific notation can be used.

Handling in ABAP Programs

The ABAP types that correspond to the 16 or 34 figure decimal floating numbers in ABAP Dictionary are decfloat16 and decfloat34, which are handled internally according to the IEEE-754-2008 standard, and are supported by all ABAP operations. In [arithmetic SQL expressions](javascript:call_link\('abensql_arith.htm'\)), decimal floating point numbers are not supported.

The addition [STYLE](javascript:call_link\('abapwrite_to_options.htm'\)) after [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)) and the formatting option [STYLE](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) are available for the formatting of decimal floating numbers in programs. These overwrite the output style defined in ABAP Dictionary.