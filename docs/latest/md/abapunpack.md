  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [Special Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_move.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20UNPACK%2C%20ABAPUNPACK%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

UNPACK

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapunpack_shortref.htm)

Syntax

UNPACK source TO destination.

Effect

This statement converts the content of the data object source in accordance with special rules and assigns the converted content to the data object destination. source expects the data type p of length 16 without [decimal places](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendecimal_place_glosry.htm "Glossary Entry") and no operands of data type decfloat16 or decfloat34 can be used. The data type of destination must be character-like and [flat](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenflat_glosry.htm "Glossary Entry").

The conversion is performed according to the following rules:

-   If the data type of source is not of type p with length 16 and without decimal places, the content of source is converted to this data type. Contrary to the rules described in [Conversion Rules for Elementary Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm), any decimal separator in source is completely ignored.
-   The digits of the interim result are assigned as right-aligned digits to the data object destination and without a plus/minus sign. Any surplus places in destination are padded with zeros on the left. If the length of destination is not sufficient, it is truncated on the left.

Hints

-   The function of the statement UNPACK is based on the fact that the [BCD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbcd_glosry.htm "Glossary Entry") representation of a [place](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenplace_glosry.htm "Glossary Entry") corresponds to the second half byte of code of a digit in most character representations. This conversion is generally known as Unpacking.
-   The statement [PACK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abappack.htm) used for packing is obsolete and can be replaced by a regular [assignment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmove.htm).

Example

After the assignments, char1 and char2 contain the values 123,456 and 0000123456.

DATA: pack  TYPE p LENGTH 8 DECIMALS 3 VALUE '123.456',
      char1 TYPE c LENGTH 10,
      char2 TYPE c LENGTH 10.
char1 = pack.
UNPACK pack TO char2.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

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