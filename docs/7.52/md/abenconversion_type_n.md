  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Character-Like Source Fields](javascript:call_link\('abencharacter_source_fields.htm'\)) → 

Source Field Type n

The conversion rules are designed in such a way that when data objects of type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) are assigned to character-like data objects they behave as character-like data objects. Valid data for data objects of type n is in the form of digit-only strings. When assigning valid data to number data objects, the numeric value of the string of digits is assigned to the target object. The conversion rules, however, also allow assignment of numeric text fields that contain invalid data. The latter is not recommended.

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_1)

-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_2)

-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_3)

-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_N_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

p

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

decfloat16, decfloat34

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

f

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

Note

-   The CL\_ABAP\_DECFLOAT class contains the methods READ\_DECFLOAT34 and READ\_DECFLOAT16, to convert character strings into floating point numbers. The exceptions of these methods are more significant than those of a normal assignment. Furthermore, the methods return a return value that reveals information about the roundings carried out.

Example

The result of the following conversion has the value 0.

DATA num4 type n LENGTH 4 VALUE IS INITIAL.
DATA(result) = CONV i( num4 ).

Character-Like Target Fields

Target

Conversion

c

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

n

The characters in the source field are passed right-justified to the target field. Trailing blanks are copied. If the target field is longer than the characters passed, the field is padded with "0" characters from the left. If the target field is shorter, the characters are cut off on the left.

string

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

Example

The string produced by the conversion is 0000001234.

DATA num4 TYPE n LENGTH 4 VALUE '1234'.
TYPES num10 TYPE n LENGTH 10.
DATA(result) = CONV num10( num4 ).

Byte-Like Target Fields

Target

Conversion

x

The content of the source field is converted first to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

xstring

The content of the source field is converted first to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

Example

The byte chain produced by the conversion is 04D2.

DATA num4 TYPE n LENGTH 4 VALUE '1234'.
DATA(result) = CONV xstring( num4 ).

Date/Time Fields as Target Fields

‎Target

Conversion

d

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

t

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

Example

The value of the date field produced by the conversion is the unchanged value 20000101 of the source field.

DATA num8 TYPE n LENGTH 8 VALUE '20000101'.
DATA(result) = CONV d( num8 ).