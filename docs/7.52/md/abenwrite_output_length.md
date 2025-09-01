---
title: "WRITE - Output Length"
description: |
  When data is written using the statement WRITE, the output is saved to the list buffer(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_buffer_glosry.htm 'Glossary Entry') and accessed from there for display when the list is called. -   Predefined Output Lengths(#abenwrite-out
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_output_length.htm"
abapFile: "abenwrite_output_length.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenwrite", "output", "length"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Creating Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_lists.htm) →  [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) → 

WRITE - Output Length

When data is written using the statement WRITE, the output is saved to the [list buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_buffer_glosry.htm "Glossary Entry") and accessed from there for display when the list is called.

-   [Predefined Output Lengths](#abenwrite-output-length-1--------numeric-data-types---@ITOC@@ABENWRITE_OUTPUT_LENGTH_2)

-   [Character-Like Data Types](#abenwrite-output-length-3--------byte-like-data-types---@ITOC@@ABENWRITE_OUTPUT_LENGTH_4)

-   [Enumerated Types](#abenwrite-output-length-5--------output-length-in-list-buffer---@ITOC@@ABENWRITE_OUTPUT_LENGTH_6)

-   [Output Length in the List](#abenwrite-output-length-7--------class-for-calculating-output-lengths---@ITOC@@ABENWRITE_OUTPUT_LENGTH_8)

Each time a data object is produced by a WRITE, an output length is defined, either implicitly (in accordance with the tables below), or [explicitly](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) (if len is specified after the addition AT). The output length defines the following:

-   The number of places (or memory space) available for characters in the list buffer

-   The number of columns (or cells) available in the actual list

Predefined Output Lengths

If the output length is not specified explicitly, it is set for predefined ABAP types as shown in the following tables:

Notes

-   With all data objects, except those of type string, and with text field literals, it is possible that fewer characters are displayed in the list than are saved in the list buffer when predefined output lengths are used. With data objects of data type string and text field literals it is assumed that all characters should be displayed. For this reason the implicit output length is calculated using the characters contained in the data object so that it corresponds to the number of columns needed in the list. Any blanks added in the list buffer are removed when the actual list is written.

-   For data objects whose data types are defined in reference to ABAP Dictionary, a different output length can be specified in the corresponding [domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_domains.htm) or using the [predefined type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). The output length specified here is used instead of the implicit output length from the table above.

Numeric Data Types

Data Type

Output Length

b

3

s

5

i

11

int8

20

p

2 x length of dobj (+ 1, if there is a decimal separator)

decfloat16

24

decfloat34

46

f

24

Notes

-   The predefined output length specified in the table above for the type s is not sufficient to display the sign for a 5-digit number. If the types i and int8 are used, the length is sufficient for all possible numbers without decimal separators.

-   If, in the case of type p, the number of decimal places is greater than the number of digits calculated from 2 x the length of dobj - 1, the predefined length is not enough. This is because the decimal separator is outside the string of digits and needs to be padded with zeroes.

Character-Like Data Types

Data Type

Output Length

c

Length of dobj, maximum 255

string

Number of columns required in the list. If this is greater than the number of characters in dobj, the surplus places are padded with blanks when written to the list buffer. The padding is done on the right of left-justified output, on the left of right-justified output, and alternately on the right and on the left of centered output.

n

Length of dobj, maximum 255

d

8

t

6

The output lengths of text field literals is set in the same way as those of data objects of the data type string.

Notes

-   The predefined output lengths given in the table above for the types d and t are not sufficient to display the correct [separator](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_formats.htm).

-   For the data types SSTRING and STRING, it is not possible specify an output length in ABAP Dictionary and the lengths given in the table above always apply.

Byte-Like Data Types

Data Type

Output Length

x

2 x length of dobj, maximum 255

xstring

2 x number of bytes contained

Note

For the data type RAWSTRING, it is not possible specify an output length in ABAP Dictionary and the lengths given in the table above always apply.

Enumerated Types

The output length of an [enumerated type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry") is 30.

Note

In the list output, an [enumerated object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_object_glosry.htm "Glossary Entry") is converted to the name of the [enumerated value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_value_glosry.htm "Glossary Entry"), which can have a maximum of 30 characters.

Output Length in List Buffer

If the output length is shorter than the length of the data format specified for the data object or defined using [int\_format\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm), the output is shortened in accordance with the [cutoff behavior](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwrite_cutoffs.htm) described in [WRITE ... TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_int_options.htm).

If the output length is greater than the length of a predefined or user-defined format, this output length is filled in the list buffer and output is arranged there according to the predefined or user-defined alignment. Space that is not required is padded with blanks.

Output Length in the List

When displaying or printing a list, the content stored in the list buffer is passed to the list Each character generally occupies one position in the list buffer. However, a character can occupy more than one column in the list (this is particularly the case with East Asian characters). However, since the list only contains the same number of columns as there are places in the list buffer, this means the list can only display fewer characters than are saved in the list buffer. The list output is then shortened when passed from the list buffer to the list, left-justified output is shortened from the right, right-justified output is shortened from the left. Centered output is shortened by the alternate removal of the first blank from both sides, starting with the side with the most blanks, then other characters are removed on the right. If characters are removed when passed from the list buffer to the list, this is indicated on the left by the character < and on the right by the character \>. On a displayed list, the entire list content can be displayed by choosing System → List → Unicode Display.

Class for Calculating Output Lengths

The methods of the system class CL\_ABAP\_LIST\_UTILITIES can be used to calculate output lengths in the list buffer and in list display. The return values of these methods can be used to program a correct column alignment for ABAP lists, even if they contain characters that require more than one column.