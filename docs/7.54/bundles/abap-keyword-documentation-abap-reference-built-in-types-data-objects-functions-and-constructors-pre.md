# ABAP Keyword Documentation / ABAP − Reference / Built-In Types, Data Objects, Functions, and Constructors / Predefined Data Types

Included pages: 10



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenbuilt_in_types.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm)
- [abenbuilt_in_types_complete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm)
- [abenbuiltin_types_numeric.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)
- [abentype_p_value_range_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_p_value_range_abexa.htm)
- [abenbuiltin_types_character.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm)
- [abenbuiltin_types_byte.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm)
- [abenbuiltin_types_date_time.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm)
- [abenbuilt_in_types_generic.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm)

**Bundle Contains**: 8 documentation pages
**Version**: ABAP 7.54
**Generated**: 2025-09-01T11:25:45.934Z

---

### abenbuilt_in_types.htm

> **📖 Official SAP Documentation**: [abenbuilt_in_types.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) → 

Predefined Data Types

The following [predefined data types](javascript:call_link\('abenpredefined_data_type_glosry.htm'\) "Glossary Entry") are used in ABAP programs:

-   [Predefined ABAP types](javascript:call_link\('abenbuilt_in_types_complete.htm'\))

-   [Generic ABAP types](javascript:call_link\('abenbuilt_in_types_generic.htm'\))

[ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") has its own set of [predefined types](javascript:call_link\('abenddic_builtin_types.htm'\)), which are used to define global data types but which cannot be addressed directly in ABAP programs.

Continue
[Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\))
[Generic ABAP Types](javascript:call_link\('abenbuilt_in_types_generic.htm'\))



**📖 Source**: [abenbuilt_in_types.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm)

### abenbuilt_in_types_complete.htm

> **📖 Official SAP Documentation**: [abenbuilt_in_types_complete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

Built-In ABAP Types

The following types are predefined in every ABAP program:

-   [Built-in numeric types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

-   [Built-in character-like types](javascript:call_link\('abenbuiltin_types_character.htm'\))

-   [Built-in byte-like types](javascript:call_link\('abenbuiltin_types_byte.htm'\))

-   [Built-in date types and time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

All built-in ABAP types from these tables are elementary and are included in the generic type [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Apart from the types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), the built-in ABAP types can also be used to define separate [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") and [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry").

Besides the built-in ABAP types, there is a global predefined data type cursor, which currently has the same meaning as the built-in ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). This is required when declaring a cursor variable for [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") [handling](javascript:call_link\('abapopen_cursor.htm'\)).

Notes

-   If a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") is not specified when creating a data object with one of the built-in ABAP types, the start value is set to the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") specified for the relevant type.

-   The built-in data types [string](javascript:call_link\('abenbuiltin_types_character.htm'\)) and [xstring](javascript:call_link\('abenbuiltin_types_byte.htm'\)) describe data objects of variable length ([dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry")). While the length of data objects in all other elementary data types is determined for its whole lifetime, the length of text strings and byte strings varies according to their content (the maximum size of a string is determined by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\)))).
    

Continue
[Predefined Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))
[Predefined Character-Like Types](javascript:call_link\('abenbuiltin_types_character.htm'\))
[Predefined Byte-Like Types](javascript:call_link\('abenbuiltin_types_byte.htm'\))
[Built-In Date Types, Time Types, and Time Stamp Types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))



**📖 Source**: [abenbuilt_in_types_complete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm)

### abenbuiltin_types_numeric.htm

> **📖 Official SAP Documentation**: [abenbuiltin_types_numeric.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Predefined Numeric Types

The data objects of the numeric data types are used to handle number values.

Properties

Type

Length

Standard Length

Name

b

1 byte

 

1-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry") (internal)

s

2 byte

 

2-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry") (internal)

i

4 byte

 

4-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

int8

8 byte

 

8-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

p

1 to 16 bytes

8 byte

[Packed number](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")

decfloat16

8 byte

 

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with 16 places

decfloat34

16 byte

 

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with 34 places

f

8 byte

 

[Binary floating point number](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") with 17 places

Value Ranges and Initial Values

Type

Value Range

Initial Value

b

0 to 255

0

s

\-32,768 to +32,767

0

i

\-2,147,483,648 to +2,147,483,647

0

int8

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

0

p

The valid length for packed numbers is between 1 and 16 bytes. Two places are packed into one byte, where the last byte only contains one place and the sign (the number of places or digits is calculated from 2 \* len1). After the decimal separator, up to 14 [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") are permitted (as long as the number of decimal places does not exceed the number of places). Depending on the field length len and the number of decimal places dec, the following applies to the value range: (-10^(2len-1) +1) / (10^(+dec)) to (+10^(2len-1) -1) /(10^(+dec)) in increments of 10^(-dec). Any intermediate values are rounded (decimal). Invalid content produces undefined behavior.

0

decfloat16

Decimal floating point numbers of this type are represented internally with 16 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E385(1E-16 - 1) and -1E-383 for the negative range, 0 and +1E-383 to 1E385(1 - 1E-16) for the positive range. Values lying between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 16-digit decimal number can be represented precisely with a decimal floating point number of this type

0

decfloat34

Decimal floating point numbers of this type are represented internally with 34 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E6145(1E-34 - 1) and -1E-6143 for the negative range, 0 and +1E-6143 and 1E6145(1 - 1E-34) for the positive range. Values lying between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 34-digit decimal number can be represented precisely using a decimal floating point number like this.

0

f

Binary floating point numbers are represented internally in accordance with the IEEE-754 standard (double precision). In ABAP, 17 places are represented (one integer digit and 16 decimal places). Valid values are numbers between -1.7976931348623157E+308 and -2.2250738585072014E-308 for the negative range and between +2.2250738585072014E-308 and +1.7976931348623157E+308 for the positive range, plus 0. Both validity intervals are extended in the direction of zero using subnormal numbers in accordance with the IEEE-754 standard.

0

Programming Guideline

[Select the numeric type](javascript:call_link\('abenselect_numeric_type_guidl.htm'\) "Guideline")

Notes

-   The numeric data objects are used to handle numeric values and [numeric calculations](javascript:call_link\('abencompute_expressions.htm'\)). Here, the data type f for binary floating point numbers is replaced largely by the types decfloat16 and decfloat34 for decimal floating point numbers.

-   The types b and s are internal types and cannot be specified either statically or dynamically in ABAP statements. Self-defined data types and data objects in ABAP programs have the data types b or s if they were defined with reference to data elements in ABAP Dictionary that have the [external data types](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) or [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The system class [CL\_ABAP\_MATH](javascript:call_link\('abenfloating_point_class.htm'\)) contains constants for the minimum and maximum values of most numeric types. The methods GET\_MIN\_VALUE and GET\_MAX\_VALUE in the class CL\_ABAP\_EXCEPTIONAL\_VALUES can also be used.

-   The system class CL\_ABAP\_ELEMDESCR in [RTTS](javascript:call_link\('abenrtti.htm'\)) contains constants TYPE\_P\_MAX\_LENGTH and TYPE\_P\_MAX\_DECIMALS for the maximum length and the maximum number of decimal places p.

-   Since the decimal places in a floating point number of type f are represented internally as dual fractions, there is not an exact equivalent for every number that can be represented in the decimal system. This can produce rounding errors in conversions and intermediate results of calculations. These errors can be avoided by using a two-step rounding procedure (see [Example](javascript:call_link\('abenfloating_point_class.htm'\))).

-   The type p, for which a length interval is specified in the second column in the first table, is [generic](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), which means that the length is not part of the type description. Also, both the [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") and the length are undefined. The entry in the Standard Length column specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the relevant statement.

-   The data type p is used to implement [fixed point numbers](javascript:call_link\('abenfixed_point_number_glosry.htm'\) "Glossary Entry"). The number of decimal places in a packed number with the type p is a type attribute defined using the addition [DECIMALS](javascript:call_link\('abaptypes_simple.htm'\)) and is not saved together with the number. Technically, the number value is determined by dividing the saved sequence of digits in the packed number by 10 to the power of the number of decimal places (10^(+dec)). In the definition of a packed number, the number of decimal places cannot be greater than the number of places calculated from 2 \*  len - 1. Otherwise, the decimal separator is outside the sequence of digits and not all decimal places can be given values. For example, if a packed number with length 1 and two decimal places has a value range of \-0.09 to +0.09 in increments of 0.01, there is no possible value for which the first decimal place is filled, for example 0.14.

-   A number with the data type p that has more decimal places than places can raise exceptions when converted to external formats such as data types of the database in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") or in serializations to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry").

-   The [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary mapped to the data type p cannot have more decimal places than places. In ABAP, declarations like this that are known statically produce a syntax check warning.

-   For data objects of data type p, the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic must be set so that the decimal separator is respected. Otherwise, in all operations, the content is handled as if there is no decimal separator. The sequence of digits in the variables of type p is interpreted as an integer value. Exceptions are:

-   Representation on screens

-   Formatting with [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\))

-   [Assignments](javascript:call_link\('abenconversion_type_p.htm'\)) to character-like objects with the types c and string

-   See also [Numeric Data Types](javascript:call_link\('abennumber_types.htm'\)).

Example

Declares variables with built-in numeric ABAP types for a numeric calculation.

DATA: num1   TYPE i,
      num2   TYPE i,
      result TYPE decfloat34.
...
result = num1 / num2.

Executable Example

[Value Ranges of Packed Numbers](javascript:call_link\('abentype_p_value_range_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Value Ranges of Packed Numbers](javascript:call_link\('abentype_p_value_range_abexa.htm'\))



**📖 Source**: [abenbuiltin_types_numeric.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)

### abentype_p_value_range_abexa.htm

> **📖 Official SAP Documentation**: [abentype_p_value_range_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_p_value_range_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) →  [Predefined Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) → 

Value Ranges of Packed Numbers

This example demonstrates the value ranges of packed numbers with different lengths and decimal places.

Source Code

REPORT demo\_type\_p\_value\_range.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:length   TYPE i VALUE 2,
         decimals TYPE i VALUE 2.
    cl\_demo\_input=>add\_field( EXPORTING text  = \`Length\`
                              CHANGING  field = length ).
    cl\_demo\_input=>request(   EXPORTING text  = \`Decimals\`
                              CHANGING  field = decimals ).
    DATA dref TYPE REF TO data.
    FIELD-SYMBOLS <pack> TYPE p.
    TRY.
        IF decimals > 2 \* length - 1.
          RAISE EXCEPTION TYPE cx\_sy\_create\_data\_error.
        ENDIF.
        CREATE DATA dref TYPE p LENGTH length DECIMALS decimals.
        ASSIGN dref->\* TO <pack>.
      CATCH cx\_sy\_create\_data\_error.
        cl\_demo\_output=>display( 'Wrong input values ...' ).
        LEAVE PROGRAM.
    ENDTRY.
    DATA(lower)
      = cl\_abap\_exceptional\_values=>get\_min\_value( <pack> ).
    IF lower IS NOT INITIAL.
      ASSIGN lower->\* TO FIELD-SYMBOL(<lower>).
      cl\_demo\_output=>write\_data( <lower> ).
    ENDIF.
    ASSERT <lower> =  CONV decfloat34(
     ( ipow( base = -10 exp = 2 \* length - 1 ) + 1 ) /
       ipow( base  = 10 exp = decimals ) ).
    DATA(upper)
       = cl\_abap\_exceptional\_values=>get\_max\_value( <pack> ).
    IF upper IS NOT INITIAL.
      ASSIGN upper->\* TO FIELD-SYMBOL(<upper>).
      cl\_demo\_output=>write\_data( <upper> ).
    ENDIF.
    ASSERT <upper> = CONV decfloat34(
     ( ipow( base = +10 exp = 2 \* length - 1 ) - 1 ) /
       ipow( base  = 10 exp = decimals ) ).
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The value range of a packed number with the length length and decimals decimal places is one of the following (in accordance with the formula in this [table](javascript:call_link\('abenbuiltin_types_numeric.htm'\))):

( -10^(2xlength-1) +1 ) / ( 10^decimals )

to

( +10^(2xlength-1) -1 ) / ( 10^decimals )

The program creates a packed number with a length and decimal places that can be entered from outside. The minimum and maximum values of the number are determined using methods from the system class CL\_ABAP\_EXCEPTIONAL\_VALUES and compared with self-calculated values.



**📖 Source**: [abentype_p_value_range_abexa.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_p_value_range_abexa.htm)

### abenbuiltin_types_numeric.htm

> **📖 Official SAP Documentation**: [abenbuiltin_types_numeric.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Predefined Numeric Types

The data objects of the numeric data types are used to handle number values.

Properties

Type

Length

Standard Length

Name

b

1 byte

 

1-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry") (internal)

s

2 byte

 

2-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry") (internal)

i

4 byte

 

4-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

int8

8 byte

 

8-byte [integer](javascript:call_link\('abeninteger_glosry.htm'\) "Glossary Entry")

p

1 to 16 bytes

8 byte

[Packed number](javascript:call_link\('abenpacked_number_glosry.htm'\) "Glossary Entry")

decfloat16

8 byte

 

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with 16 places

decfloat34

16 byte

 

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with 34 places

f

8 byte

 

[Binary floating point number](javascript:call_link\('abenbinfloat_glosry.htm'\) "Glossary Entry") with 17 places

Value Ranges and Initial Values

Type

Value Range

Initial Value

b

0 to 255

0

s

\-32,768 to +32,767

0

i

\-2,147,483,648 to +2,147,483,647

0

int8

\-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807

0

p

The valid length for packed numbers is between 1 and 16 bytes. Two places are packed into one byte, where the last byte only contains one place and the sign (the number of places or digits is calculated from 2 \* len1). After the decimal separator, up to 14 [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") are permitted (as long as the number of decimal places does not exceed the number of places). Depending on the field length len and the number of decimal places dec, the following applies to the value range: (-10^(2len-1) +1) / (10^(+dec)) to (+10^(2len-1) -1) /(10^(+dec)) in increments of 10^(-dec). Any intermediate values are rounded (decimal). Invalid content produces undefined behavior.

0

decfloat16

Decimal floating point numbers of this type are represented internally with 16 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E385(1E-16 - 1) and -1E-383 for the negative range, 0 and +1E-383 to 1E385(1 - 1E-16) for the positive range. Values lying between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 16-digit decimal number can be represented precisely with a decimal floating point number of this type

0

decfloat34

Decimal floating point numbers of this type are represented internally with 34 places in accordance with the IEEE-754-2008 standard. Valid values are numbers between 1E6145(1E-34 - 1) and -1E-6143 for the negative range, 0 and +1E-6143 and 1E6145(1 - 1E-34) for the positive range. Values lying between the ranges form the subnormal range and are rounded. Outside of the subnormal range, each 34-digit decimal number can be represented precisely using a decimal floating point number like this.

0

f

Binary floating point numbers are represented internally in accordance with the IEEE-754 standard (double precision). In ABAP, 17 places are represented (one integer digit and 16 decimal places). Valid values are numbers between -1.7976931348623157E+308 and -2.2250738585072014E-308 for the negative range and between +2.2250738585072014E-308 and +1.7976931348623157E+308 for the positive range, plus 0. Both validity intervals are extended in the direction of zero using subnormal numbers in accordance with the IEEE-754 standard.

0

Programming Guideline

[Select the numeric type](javascript:call_link\('abenselect_numeric_type_guidl.htm'\) "Guideline")

Notes

-   The numeric data objects are used to handle numeric values and [numeric calculations](javascript:call_link\('abencompute_expressions.htm'\)). Here, the data type f for binary floating point numbers is replaced largely by the types decfloat16 and decfloat34 for decimal floating point numbers.

-   The types b and s are internal types and cannot be specified either statically or dynamically in ABAP statements. Self-defined data types and data objects in ABAP programs have the data types b or s if they were defined with reference to data elements in ABAP Dictionary that have the [external data types](javascript:call_link\('abenexternal_data_type_glosry.htm'\) "Glossary Entry") [INT1](javascript:call_link\('abenddic_builtin_types.htm'\)) or [INT2](javascript:call_link\('abenddic_builtin_types.htm'\)).

-   The system class [CL\_ABAP\_MATH](javascript:call_link\('abenfloating_point_class.htm'\)) contains constants for the minimum and maximum values of most numeric types. The methods GET\_MIN\_VALUE and GET\_MAX\_VALUE in the class CL\_ABAP\_EXCEPTIONAL\_VALUES can also be used.

-   The system class CL\_ABAP\_ELEMDESCR in [RTTS](javascript:call_link\('abenrtti.htm'\)) contains constants TYPE\_P\_MAX\_LENGTH and TYPE\_P\_MAX\_DECIMALS for the maximum length and the maximum number of decimal places p.

-   Since the decimal places in a floating point number of type f are represented internally as dual fractions, there is not an exact equivalent for every number that can be represented in the decimal system. This can produce rounding errors in conversions and intermediate results of calculations. These errors can be avoided by using a two-step rounding procedure (see [Example](javascript:call_link\('abenfloating_point_class.htm'\))).

-   The type p, for which a length interval is specified in the second column in the first table, is [generic](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), which means that the length is not part of the type description. Also, both the [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry") and the length are undefined. The entry in the Standard Length column specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the relevant statement.

-   The data type p is used to implement [fixed point numbers](javascript:call_link\('abenfixed_point_number_glosry.htm'\) "Glossary Entry"). The number of decimal places in a packed number with the type p is a type attribute defined using the addition [DECIMALS](javascript:call_link\('abaptypes_simple.htm'\)) and is not saved together with the number. Technically, the number value is determined by dividing the saved sequence of digits in the packed number by 10 to the power of the number of decimal places (10^(+dec)). In the definition of a packed number, the number of decimal places cannot be greater than the number of places calculated from 2 \*  len - 1. Otherwise, the decimal separator is outside the sequence of digits and not all decimal places can be given values. For example, if a packed number with length 1 and two decimal places has a value range of \-0.09 to +0.09 in increments of 0.01, there is no possible value for which the first decimal place is filled, for example 0.14.

-   A number with the data type p that has more decimal places than places can raise exceptions when converted to external formats such as data types of the database in [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") or in serializations to [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry").

-   The [built-in types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary mapped to the data type p cannot have more decimal places than places. In ABAP, declarations like this that are known statically produce a syntax check warning.

-   For data objects of data type p, the [program attribute](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry") Fixed Point Arithmetic must be set so that the decimal separator is respected. Otherwise, in all operations, the content is handled as if there is no decimal separator. The sequence of digits in the variables of type p is interpreted as an integer value. Exceptions are:

-   Representation on screens

-   Formatting with [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\))

-   [Assignments](javascript:call_link\('abenconversion_type_p.htm'\)) to character-like objects with the types c and string

-   See also [Numeric Data Types](javascript:call_link\('abennumber_types.htm'\)).

Example

Declares variables with built-in numeric ABAP types for a numeric calculation.

DATA: num1   TYPE i,
      num2   TYPE i,
      result TYPE decfloat34.
...
result = num1 / num2.

Executable Example

[Value Ranges of Packed Numbers](javascript:call_link\('abentype_p_value_range_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Value Ranges of Packed Numbers](javascript:call_link\('abentype_p_value_range_abexa.htm'\))



**📖 Source**: [abenbuiltin_types_numeric.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)

### abenbuiltin_types_character.htm

> **📖 Official SAP Documentation**: [abenbuiltin_types_character.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Predefined Character-Like Types

The data objects of the character-like data types are used to handle character strings.

Properties

Type

Length

Standard Length

Name

c

1 to 262,143 characters

1 character

[Text Field](javascript:call_link\('abentext_field_glosry.htm'\) "Glossary Entry")

n

1 to 262,143 characters

1 character

[Numeric text field](javascript:call_link\('abennumeric_text_field_glosry.htm'\) "Glossary Entry")

string

Variable

 

[Text string](javascript:call_link\('abentext_string_glosry.htm'\) "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

c

Any alphanumeric characters

" " for every position

n

Any alphanumeric characters; only valid values are the digits 0 to 9, however

"0" for every position

string

As for type c

Empty string with length 0

Notes

-   The character-like data types are mainly used for [string processing](javascript:call_link\('abenabap_data_string.htm'\)).

-   The data types c and string are general character-like data types, but n, on the other hand, has special properties. The data type n corresponds to the special type [NUMC](javascript:call_link\('abenddic_special_character_types.htm'\)) in ABAP Dictionary.

-   Further character-like data types with special properties are the built-in [date types and time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) that match the corresponding types [DATS](javascript:call_link\('abenddic_date_time_types.htm'\)) and [TIMS](javascript:call_link\('abenddic_date_time_types.htm'\)) in ABAP Dictionary. All other special character-like data types in ABAP Dictionary are assigned to the general ABAP types listed here.

-   The content of the data objects of character-like data types is saved in the memory in accordance with the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry")

-   When specifying lengths for character-like types, note that the length of a character in bytes depends on the character representation used. The length of a character is two bytes for the character representation [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") used by the ABAP programming language.

-   The types c and n, for which a length interval is specified in the second column in the first table, are [generic](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), which means that the length is not part of the type description. The entries in the Standard Length column specify the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the relevant statement.

-   The system class CL\_ABAP\_ELEMDESCR contains constants TYPE\_C\_MAX\_LENGTH and TYPE\_N\_MAX\_LENGTH for the maximum length of the types c and n.

-   The valid values of the data type n are a subset of its value range. ABAP statements that work with data objects of this type are only guaranteed to function correctly for operands with valid values.

-   The [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) of strings must be respected.

Example

Declares character-like data objects with built-in character-like data types. The flag flag is limited to one character and the set of characters in the string html is variable.

DATA: flag TYPE c LENGTH 1,
      html TYPE string.



**📖 Source**: [abenbuiltin_types_character.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm)

### abenbuiltin_types_byte.htm

> **📖 Official SAP Documentation**: [abenbuiltin_types_byte.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Predefined Byte-Like Types

The data objects of the byte-like data types are used to include byte strings.

Properties

Type

Length

Standard Length

Name

x

1 to 524,287 bytes

1 byte

[Byte field](javascript:call_link\('abenbyte_field_glosry.htm'\) "Glossary Entry")

xstring

Variable

 

[Byte string](javascript:call_link\('abenbyte_string_glosry.htm'\) "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

x

Any byte values, hexadecimal 00 to FF

Hexadecimal 00

xstring

As for type x

Empty string with length 0

Notes

-   The byte-like data types are used for [byte string processing](javascript:call_link\('abenabap_data_string.htm'\)).

-   The type x, for which a length interval is specified in the second column in the first table, is [generic](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), which means that the length is not part of the type description. The entry in the Standard Length column specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the relevant statement.

-   The system class CL\_ABAP\_ELEMDESCR contains a constant TYPE\_X\_MAX\_LENGTH for the maximum length of the type x.

-   The [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) of strings must be respected.

Example

Declares a byte string of the built-in ABAP type xstring for the result of a functional method. This declaration could also be made [inline](javascript:call_link\('abendata_inline.htm'\)) on the left side of the assignment.

DATA hex TYPE xstring.
hex =  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`...\` ).



**📖 Source**: [abenbuiltin_types_byte.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm)

### abenbuiltin_types_date_time.htm

> **📖 Official SAP Documentation**: [abenbuiltin_types_date_time.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Built-In Date Types, Time Types, and Time Stamp Types

The data objects of the date types, time types, and time stamp types are used to handle calendar dates, times, and time stamps.

Attributes

Type

Length

Default Length

Name

d

8 characters

 

[Date field](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

t

6 characters

 

[Time field](javascript:call_link\('abentime_field_glosry.htm'\) "Glossary Entry")

utclong

8 byte

 

[Time stamp field](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

d

Any eight alphanumeric characters, but only those digits are valid that are valid as dates in accordance with the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31

"00000000"

t

Any six alphanumeric characters, but only those digits are valid that are valid as times in accordance in the format 24-hour clock format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

"000000"

utclong

Internal 8-byte integer representation of a UTC time stamp exact to 100 nanoseconds, in ISO-8601 notation between "0001-01-01T00:00:00.0000000" and "9999-12-31T23:59:59.9999999". There are 3,155,380,704,000,000,000 real values and one special [initial value](javascript:call_link\('abenutclong.htm'\)).

[0](javascript:call_link\('abenutclong.htm'\))

Notes

-   Date types and time types d and t

-   The date types and time types are used to handle values for calendar dates and times. Information about how they are used and their special handling can be found under [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)).

-   From a technical perspective, the data types d and t are flat character-like types. The content of their data objects is saved in accordance with the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry").

-   As character-like data types, data objects of the data types d and t can be used like text fields of the type c. This applies in particular also to structures with components of the types d and t.

-   The generic type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) also covers the types d and t.

-   Data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions.

-   The data types d and t are the built-in ABAP types that correspond to the special types [DATS](javascript:call_link\('abenddic_date_time_types.htm'\)), [DATN](javascript:call_link\('abenddic_date_time_types.htm'\)), and [TIMS](javascript:call_link\('abenddic_date_time_types.htm'\)), [TIMN](javascript:call_link\('abenddic_date_time_types.htm'\)) in ABAP Dictionary.

-   The valid values of the data types d and t are a subset of their value range. ABAP statements that work with data objects of these types are only guaranteed to function correctly for operands with valid values.

-   Time stamp type utclong

-   The time stamp type utclong represented internally by integer numbers is a type for real [time stamp fields](javascript:call_link\('abenutclong.htm'\)) and replaces the [time stamps](javascript:call_link\('abentime_stamps_packed.htm'\)) represented by packed numbers.

-   The data type utclong is the built-in ABAP type that corresponds to the special type [UTCLONG](javascript:call_link\('abenddic_date_time_types.htm'\)) in ABAP Dictionary.

-   The system class [CL\_ABAP\_UTCLONG](javascript:call_link\('abentimestamp_system_class.htm'\)) for time stamps in time stamp fields contains the minimum and maximum values of the type utclong as attributes.

-   Invalid values in time stamps (meaning integers outside of the string of valid values) can be produced by [casting](javascript:call_link\('abencast_casting_glosry.htm'\) "Glossary Entry").

-   There is not a time stamp for the missing days due to the switch from the Julian to the Gregorian calendar. The time stamp "1582-10-04T23:59:59.9999999" is followed by the time stamp "1582-10-15T00:00:00.0000000".

Example

Declares date fields and time fields of the built-in ABAP types d and t and examples for how to use them. These declarations are made both using the statement [DATA](javascript:call_link\('abapdata.htm'\)) and using the declaration operator [DATA](javascript:call_link\('abendata_inline.htm'\)).

DATA: tomorrow  TYPE d,
      next\_hour TYPE t.
DATA(today) = sy-datlo.
DATA(now)   = sy-timlo.
tomorrow  = today + 1.
next\_hour = ( now + 3600 ) / 3600 \* 3600.

Example

Creates a time stamp of the type utclong using the built-in function [utclong\_current](javascript:call_link\('abenutclong_current.htm'\)) and converts it into date fields and time fields.

DATA(ts) = utclong\_current( ).
CONVERT UTCLONG ts
        INTO DATE DATA(dat) TIME DATA(tim)
        TIME ZONE sy-zonlo.
cl\_demo\_output=>display(
  |{ ts }\\n| &&
  |{ dat }\\n| &&
  |{ tim }|  ).



**📖 Source**: [abenbuiltin_types_date_time.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm)

### abenbuilt_in_types_complete.htm

> **📖 Official SAP Documentation**: [abenbuilt_in_types_complete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

Built-In ABAP Types

The following types are predefined in every ABAP program:

-   [Built-in numeric types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

-   [Built-in character-like types](javascript:call_link\('abenbuiltin_types_character.htm'\))

-   [Built-in byte-like types](javascript:call_link\('abenbuiltin_types_byte.htm'\))

-   [Built-in date types and time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

All built-in ABAP types from these tables are elementary and are included in the generic type [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Apart from the types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), the built-in ABAP types can also be used to define separate [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") and [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry").

Besides the built-in ABAP types, there is a global predefined data type cursor, which currently has the same meaning as the built-in ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). This is required when declaring a cursor variable for [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") [handling](javascript:call_link\('abapopen_cursor.htm'\)).

Notes

-   If a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") is not specified when creating a data object with one of the built-in ABAP types, the start value is set to the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") specified for the relevant type.

-   The built-in data types [string](javascript:call_link\('abenbuiltin_types_character.htm'\)) and [xstring](javascript:call_link\('abenbuiltin_types_byte.htm'\)) describe data objects of variable length ([dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry")). While the length of data objects in all other elementary data types is determined for its whole lifetime, the length of text strings and byte strings varies according to their content (the maximum size of a string is determined by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\)))).
    

Continue
[Predefined Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))
[Predefined Character-Like Types](javascript:call_link\('abenbuiltin_types_character.htm'\))
[Predefined Byte-Like Types](javascript:call_link\('abenbuiltin_types_byte.htm'\))
[Built-In Date Types, Time Types, and Time Stamp Types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))



**📖 Source**: [abenbuilt_in_types_complete.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm)

### abenbuilt_in_types_generic.htm

> **📖 Official SAP Documentation**: [abenbuilt_in_types_generic.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenbuilt_in_types_generic.htm](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm)


  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

Generic ABAP Types

The following table shows the predefined generic ABAP types. A generic data type is an incomplete type specification that includes multiple complete type specifications. With the exception of object, all generic types can be used after [TYPE](javascript:call_link\('abentyping_generic.htm'\)) for the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"). When a data object is assigned to generically typed field symbols using the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)), or when a data object is used as an [actual parameter](javascript:call_link\('abenactual_parameter_glosry.htm'\) "Glossary Entry") for generically typed formal parameters for [procedure calls](javascript:call_link\('abencall_procedures.htm'\)), the system checks whether the concrete data type is [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the object (in other words, whether the data type is a subset of the generic type).

The only generic types that can be used after [TYPE REF TO](javascript:call_link\('abaptypes_references.htm'\)) are data, for the generic typing of data references, and object, for the generic typing of object references.

Type

Description

any

Any data type

any table

Internal table with any table type

c

Text field with a generic length

clike

Character-like (c, n, and string plus the date/time types d, t and character-like [flat structures](javascript:call_link\('abenflat_structure_glosry.htm'\) "Glossary Entry"))

csequence

Text-like (c, string)

data

Any data type

decfloat

[Decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") (decfloat16, decfloat34)

hashed table

[Hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry")

index table

[Index table](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry")

n

[Numeric text](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry") with generic length

numeric

Numeric ((b, s), i, int8, p, decfloat16, decfloat34, f)

object

Any object type (root class of the inheritance hierarchy)

p

Packed number with generic length and generic number of [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry")

simple

Elementary data type including [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") and structured types with exclusively character-like flat components

sorted table

[Sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry")

standard table

[Standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry")

table

Standard table

x

Byte field with generic length

xsequence

Byte-like (x, xstring)

A typing with the generic type data works like a typing with the generic type any, with the following exception: No [numeric functions](javascript:call_link\('abenmathematical_funktion_glosry.htm'\) "Glossary Entry"), [description functions](javascript:call_link\('abendescription_function_glosry.htm'\) "Glossary Entry"), or [arithmetic functions](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") can be passed to a formal parameter typed with the type data. All other expressions, built-in functions, and functional methods are possible.

Besides the built-in generic types shown in the table above, ABAP at present includes exactly one kind of self-defined generic type. A [table type](javascript:call_link\('abentable_type_glosry.htm'\) "Glossary Entry") defined with [TYPES - TABLE OF](javascript:call_link\('abaptypes_itab.htm'\)) or defined in ABAP Dictionary is generic if the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is not defined or is incompletely defined or if the [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") of the table type is generic.

Notes

-   When generic types are used for the [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry") of [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and [formal parameters](javascript:call_link\('abenformal_parameter_glosry.htm'\) "Glossary Entry"), it must be ensured that the correct results are obtained regardless of the actual type being used. For example, if csequence is used, the potential fixed types c and string must display different behavior with respect to trailing blanks or the potential numeric types in calculations for numeric must produce different [calculation types](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry"). More specifically, when existing typings are generalized, it may be necessary to modify the implementation accordingly.

-   Like all generic types mentioned here (except data and object), the generic type anycan only be specified directly after TYPE. any cannot be specified after [TYPE REF TO](javascript:call_link\('abaptypes_references.htm'\)). The only generic types allowed here are data for fully generic data reference variables and object for fully generic object reference variables. Specifying REF TO any would define a fully generic reference variable covering data references and object references. This is not currently possible.

-   The generic type object can only be specified after REF TO and not directly after TYPE.

-   The object type object plays a special role, because strictly speaking it is the empty root class of all object classes of ABAP Objects and is not a genuine generic type. An object reference variable typed using REF TO object can point to any object because of the general reference variable property stating that reference variables with the static type of a superclass can point to objects in all related subclasses. When compared with a data reference variable typed using the real generic data type data, which can point to any data object, it is perfectly possible to classify object as a generic type.

-   Note with generic type p that when passing functional methods or arithmetic expressions to this type of typed input parameters, the length is always set to 16. With generic types numeric, simple and data or any, this is only the case for arithmetic expressions.

-   The elementary data type utclong is incorporated only by the generic types simple, data, and any.

-   Regardless of their [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), [enumerative types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") are only enclosed by the generic types any, data and simple.

Example

Uses the built-in generic type numeric to type the input parameters of a method. Parameters with any numeric data types can be passed to the method (but no other data types).

METHODS numeric\_operation IMPORTING num1          TYPE numeric
                                    num2          TYPE numeric
                          RETURNING VALUE(result) TYPE decfloat34.
