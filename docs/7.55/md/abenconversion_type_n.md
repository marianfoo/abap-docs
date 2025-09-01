  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Character-Like Source Fields](javascript:call_link\('abencharacter_source_fields.htm'\)) → 

Source Field Type n

The conversion rules are designed in such a way that when data objects of type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) are assigned to character-like data objects they behave character-like, and when assigned to numeric data objects they behave numeric. Valid data for data objects of type n is in the form of pure digit sequences. When assigning valid data to numeric data objects, the numeric value of the digit sequence is assigned to the target object. The conversion rules, however, also allow the assignment of numeric text fields that contain invalid data. The latter is not recommended.

-   [Numeric Target Fields](#abenconversion-type-n-1--------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_N_2)

-   [Byte-Like Target Fields](#abenconversion-type-n-3--------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_N_4)

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

Hint

-   The class [CL\_ABAP\_DECFLOAT](javascript:call_link\('abencl_abap_decfloat_doc.htm'\)) contains the methods READ\_DECFLOAT34 and READ\_DECFLOAT16 to convert character strings into decimal floating point numbers. The exceptions of these methods are more significant than those of a normal assignment. Furthermore, the methods return a return value that reveals information about the rounding that was performed.

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

The characters in the source field are passed right-aligned to the target field. Trailing blanks are passed. If the target field is longer than the characters passed, the field is padded with "0" characters on the left. If the target field is shorter, the characters are truncated on the left.

string

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

Example

The string resulting from the conversion is 0000001234.

DATA num4 TYPE n LENGTH 4 VALUE '1234'.
TYPES num10 TYPE n LENGTH 10.
DATA(result) = CONV num10( num4 ).

Byte-Like Target Fields

Target

Conversion

x

The content of the source field is first converted to data type i (see above) and then to type x (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

xstring

The content of the source field is first converted to data type i (see above) and then to type xstring (see [conversion table for source field type i, int8, (b, s)](javascript:call_link\('abenconversion_type_ibs.htm'\))).

Example

The byte chain resulting from the conversion is 04D2.

DATA num4 TYPE n LENGTH 4 VALUE '1234'.
DATA(result) = CONV xstring( num4 ).

Date/Time Fields as Target Fields

Target

Conversion

d

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

t

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\))

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The value of the date field resulting from the conversion is the unchanged value 20000101 of the source field.

DATA num8 TYPE n LENGTH 8 VALUE '20000101'.
DATA(result) = CONV d( num8 ).