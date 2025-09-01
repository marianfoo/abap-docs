  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Character-Like Source Fields](javascript:call_link\('abencharacter_source_fields.htm'\)) → 

Source Field Type string

-   [Numeric Target Fields](#abenconversion-type-string-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_STRING_2)
-   [Byte-Like Target Fields](#abenconversion-type-string-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_STRING_4)

Numeric Target Fields

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)). If the source field has a length of 0, the target field is assigned the value 0.

p

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)). If the source field has a length of 0, the target field is assigned the value 0.

decfloat16, decfloat34

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)). If the source field has a length of 0, the target field is assigned the value 0.

f

Content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)). If the source field has a length of 0, the target field is assigned the value 0.

Hint

-   The class [CL\_ABAP\_DECFLOAT](javascript:call_link\('abencl_abap_decfloat_doc.htm'\)) contains the methods READ\_DECFLOAT34 and READ\_DECFLOAT16 for converting character strings into decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the rounding that was performed.

Example

The result of the following conversion has the value 1123.

DATA(result) = CONV decfloat34( \`1.123E+3\` ).

Character-Like Target Fields

Target

Conversion

c

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)), with the difference that trailing blanks are passed. If the length of the source field is 0, the target field is padded with blanks.

n

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)) If the length of the source field is 0, the target field is padded with the character "0".

string

No conversion takes place. After the assignment, the internal reference of the target field points to the same string as the source field. A new string is only created in the memory if a change request for the content of the source field or target field is submitted.

Hints

-   In ABAP, the [trailing blanks](javascript:call_link\('abenabap_data_string.htm'\)) are respected for source fields of type string but not for data objects of type c.
-   If characters are truncated on the right when character strings containing non-Unicode [double-byte](javascript:call_link\('abendouble_byte_code_glosry.htm'\) "Glossary Entry") characters are assigned, then such a character can be divided in the middle, which generally produces an invalid character at the right margin. To prevent this, the method CL\_SCP\_LINEBREAK\_UTIL=>STRING\_SPLIT\_AT\_POSITION can be used.

Example

The string resulting from the assignment is "abcd    " with length 8. The trailing blanks of the literal with type string and length 8 are respected.

DATA(result) = \`abcd    \`.

Byte-Like Target Fields

Target

Conversion

x

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)) If the length of the source field is 0, the target field is padded with hexadecimal 0.

xstring

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)) If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The byte chain resulting from the conversion is FFFF0000.

TYPES hex TYPE x LENGTH 4.
DATA(result) = CONV hex( \`FFFF\` ).

Date/Time Fields as Target Fields

Target

Conversion

d

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)), with the difference that trailing blanks are passed. If the length of the source field is 0, the target field is padded with the character "0".

t

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)) and, in particular, the trailing blanks are passed. If the length of the source field is 0, the target field is padded with the character "0".

utclong

The content is handled in the same way as a [source field of type c](javascript:call_link\('abenconversion_type_c.htm'\)) and, in particular the trailing blanks are ignored. An initial source field and a source field that contains only blanks produce the initial value of a time stamp field.

Example

The value of the date field resulting from the conversion is 00000000. If, on the other hand, a text field of type c containing only blanks is converted, this produces a target field containing eight blanks, despite the cutting off of all trailing blanks.

DATA(result) = CONV d( \`\` ).

Example

Conversion of a text string composed of date and time specifications in ISO format 8601 to a time stamp in a [time stamp field](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry").

DATA(ts) = CONV utclong( |{ sy-datum DATE = ISO }T{
                            sy-uzeit TIME = ISO }| ).