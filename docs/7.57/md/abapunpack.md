  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Special Assignments](javascript:call_link\('abenabap_data_move.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: UNPACK, ABAPUNPACK, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for impro
vement:)

UNPACK

[Short Reference](javascript:call_link\('abapunpack_shortref.htm'\))

Syntax

UNPACK source TO destination.

Effect

This statement converts the content of the data object source in accordance with special rules and assigns the converted content to the data object destination. source expects the data type p of length 16 without [decimal places](javascript:call_link\('abendecimal_place_glosry.htm'\) "Glossary Entry") and no operands of data type decfloat16 or decfloat34 can be used. The data type of destination must be character-like and [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry").

The conversion is performed according to the following rules:

-   If the data type of source is not of type p with length 16 and without decimal places, the content of source is converted to this data type. Contrary to the rules described in [Conversion Rules for Elementary Data Types](javascript:call_link\('abenconversion_elementary.htm'\)), any decimal separator in source is completely ignored.
-   The digits of the interim result are assigned as right-aligned digits to the data object destination and without a plus/minus sign. Any surplus places in destination are padded with zeros on the left. If the length of destination is not sufficient, it is truncated on the left.

Hints

-   The function of the statement UNPACK is based on the fact that the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") representation of a [place](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry") corresponds to the second half byte of code of a digit in most character representations. This conversion is generally known as "Unpacking".
-   The statement [PACK](javascript:call_link\('abappack.htm'\)) used for packing is obsolete and can be replaced by a regular [assignment](javascript:call_link\('abapmove.htm'\)).

Example

After the assignments, char1 and char2 contain the values "123,456" and "0000123456".

DATA: pack  TYPE p LENGTH 8 DECIMALS 3 VALUE '123.456',
      char1 TYPE c LENGTH 10,
      char2 TYPE c LENGTH 10.
char1 = pack.
UNPACK pack TO char2.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Source field cannot be interpreted as a number
    Runtime error: CONVT\_OVERFLOW

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow during conversion (type p)
    Runtime error: BCD\_OVERFLOW

Uncatchable Exceptions

-   Cause: Source field (type p) contains an incorrect BCD format
    Runtime error: BCD\_BADDATA