  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Byte-Like Source Fields](javascript:call_link\('abenbyte_source_fields.htm'\)) → 

Source Field Type xstring

-   [Numeric Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_1)
-   [Character-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_2)
-   [Byte-Like Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_3)
-   [Date/Time Fields as Target Fields](#@@ITOC@@ABENCONVERSION_TYPE_XSTRING_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the source field has length 0, the target field is assigned the value 0.

p

Content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the source field has length 0, the target field is assigned the value 0.

decfloat16, decfloat34

Content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the source field has length 0, the target field is assigned the value 0.

f

Content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the source field has length 0, the target field is assigned the value 0.

Example

The result of the following conversion has the value 123456789. The first three bytes FFFFFF of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
DATA(result) = CONV i( hex ).

Character-Like Target Fields

Target

Conversion

c

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the target field is padded with blank characters.

n

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the target field is padded with the character "0".

string

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The string resulting from the conversion is FFFFFF075BCD15. All bytes of the source field are included in the conversion.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
DATA(result) = CONV string( hex ).

Byte-Like Target Fields

Target

Conversion

x

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the target field is padded with the hexadecimal 0.

xstring

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The byte chain resulting from the conversion is FFFFFF075BCD15. All bytes of the source field are included in the conversion.

DATA hex TYPE xstring VALUE 'FFFFFF075BCD15'.
DATA(result) =  hex.

Date/Time Fields as Target Fields

‎Target

Conversion

d

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the target field is padded with the character "0".

t

The content is handled in the same way as a [source field of type x](javascript:call_link\('abenconversion_type_x.htm'\)). If the length of the source field is 0, the target field is padded with the character "0".

utclong

Not supported. Produces a syntax error or raises the exception CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

Example

The value of the date field resulting from the conversion is 20170111 corresponding to 736341 days since 01/01/0001. The first three bytes FFFFFF of the source field are ignored.

DATA hex TYPE xstring VALUE 'FFFFFF000B3C55'.
DATA(result) = CONV d( hex ).