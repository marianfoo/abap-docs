---
title: "Source Field Type string"
description: |
  -   Numeric Target Fields(#abenconversion-type-string-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_STRING_2) -   Byte-Like Target Fields(#abenconversion-type-string-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_STRING_4) Numeric Target Fields Target
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_string.htm"
abapFile: "abenconversion_type_string.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenconversion", "type", "string"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) →  [Character-Like Source Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencharacter_source_fields.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Source%20Field%20Type%20string%2C%20ABENCONVERSION_TYPE_STRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Source Field Type string

-   [Numeric Target Fields](#abenconversion-type-string-1-------character-like-target-fields---@ITOC@@ABENCONVERSION_TYPE_STRING_2)
-   [Byte-Like Target Fields](#abenconversion-type-string-3-------date-time-fields-as-target-fields---@ITOC@@ABENCONVERSION_TYPE_STRING_4)

Numeric Target Fields   

Target

Conversion

i, int8, (b, s)

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm). If the source field has a length of 0, the target field is assigned the value 0.

p

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm). If the source field has a length of 0, the target field is assigned the value 0.

decfloat16, decfloat34

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm). If the source field has a length of 0, the target field is assigned the value 0.

f

Content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm). If the source field has a length of 0, the target field is assigned the value 0.

Hint

The class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_decfloat_doc.htm) contains the methods READ\_DECFLOAT34 and READ\_DECFLOAT16 for converting character strings into decimal floating point numbers. The exceptions of these methods are more significant than those of a regular assignment. Furthermore, the methods return a return value that reveals information about the rounding that was performed.

Example

The result of the following conversion has the value 1123.

FINAL(result) = CONV decfloat34( \`1.123E+3\` ).

Character-Like Target Fields   

Target

Conversion

c

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm), with the difference that trailing blanks are passed. If the length of the source field is 0, the target field is padded with blanks.

n

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) If the length of the source field is 0, the target field is padded with the character 0.

string

No conversion takes place. After the assignment, the internal reference of the target field points to the same string as the source field. A new string is only created in the memory if a change request for the content of the source field or target field is submitted.

Hints

-   In ABAP, the [trailing blanks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) are respected for source fields of type string but not for data objects of type c.
-   If characters are truncated on the right when character strings containing non-Unicode [double-byte](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendouble_byte_code_glosry.htm "Glossary Entry") characters are assigned, then such a character can be divided in the middle, which generally produces an invalid character at the right margin. To prevent this, the method CL\_SCP\_LINEBREAK\_UTIL=>STRING\_SPLIT\_AT\_POSITION can be used.

Example

The string resulting from the assignment is abcd     with length 8. The trailing blanks of the literal with type string and length 8 are respected.

FINAL(result) = \`abcd    \`.

Byte-Like Target Fields   

Target

Conversion

x

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) If the length of the source field is 0, the target field is padded with hexadecimal 0.

xstring

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) If the length of the source field is 0, the length of the target field is also 0 after the assignment.

Example

The byte chain resulting from the conversion is FFFF0000.

TYPES hex TYPE x LENGTH 4.
FINAL(result) = CONV hex( \`FFFF\` ).

Date/Time Fields as Target Fields   

Target

Conversion

d

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm), with the difference that trailing blanks are passed. If the length of the source field is 0, the target field is padded with the character 0.

t

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) and, in particular, the trailing blanks are passed. If the length of the source field is 0, the target field is padded with the character 0.

utclong

The content is handled in the same way as a [source field of type c](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) and, in particular the trailing blanks are ignored. An initial source field and a source field that contains only blanks produce the initial value of a time stamp field.

Example

The value of the date field resulting from the conversion is 00000000. If, on the other hand, a text field of type c containing only blanks is converted, this produces a target field containing eight blanks, despite the cutting off of all trailing blanks.

FINAL(result) = CONV d( \`\` ).

Example

Conversion of a text string composed of date and time specifications in ISO format 8601 to a time stamp in a [time stamp field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_field_glosry.htm "Glossary Entry").

FINAL(time) = cl\_demo\_date\_time=>get\_system\_time( ).
FINAL(date) = cl\_demo\_date\_time=>get\_system\_date( ).
FINAL(ts) = CONV utclong( |{ date DATE = ISO }T{
                             time TIME = ISO }| ).