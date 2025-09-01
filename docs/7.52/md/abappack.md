  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of Internal Data](javascript:call_link\('abendata_internal_obsolete.htm'\)) →  [Obsolete Assignments](javascript:call_link\('abenobsolete_assignments.htm'\)) → 

PACK

[Quick Reference](javascript:call_link\('abappack_shortref.htm'\))

Obsolete Syntax

PACK source TO destination.

Effect

This statement, which is forbidden in classes, converts the content of the data object source to the data type p of length 16 without [decimal places](javascript:call_link\('abenfractional_portion_glosry.htm'\) "Glossary Entry"). In contradiction to the [conversion rules for elementary data types](javascript:call_link\('abenconversion_elementary.htm'\)), any decimal separators in source are ignored. This assigns the converted content to the data object destination.

The data type of source must be character-like, [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry"), and its content must be interpretable as a numeric value. The data type of destination must be flat. If destination has the data type p, the intermediate result is assigned to it from left to right. Surplus places are cut off on the left, and the decimal places are determined by the data type of destination. If destination does not have the data type p, the intermediate result is converted to the data type of destination in accordance with the rules in the [conversion table for source field type p](javascript:call_link\('abenconversion_type_p.htm'\)).

Notes

-   The function of the statement PACK is based on the fact that the second half-byte of the code of a digit in most character representations matches the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") representation of the associated number value. This conversion is generally known as "packing".
    
-   If the source field contains a number without a decimal separator, and the target field has dobj2 of data type p with sufficient length and without decimal places, the result of the PACK statement matches the result of a regular [statement](javascript:call_link\('abapmove.htm'\)).
    
-   The statement [UNPACK](javascript:call_link\('abapunpack.htm'\)) does not demonstrate the same behavior as a regular [assignment](javascript:call_link\('abapmove.htm'\)) and is therefore not yet obsolete.
    

Bad Example

DATA: txt TYPE c LENGTH 30,
      num TYPE p.
PACK txt TO num.

Good Example

DATA: txt TYPE c LENGTH 30,
      num TYPE p.
num = txt.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions
CX\_SY\_CONVERSION\_NO\_NUMBER

-   Cause: Source field cannot be interpreted as a number
    Runtime error: CONVT\_NO\_NUMBER
    

CX\_SY\_CONVERSION\_OVERFLOW

-   Cause: Overflow during conversion (type p)
    Runtime error: BCD\_OVERFLOW
    

Non-Handleable Exceptions

-   Cause: Source field (type p) contains an incorrect BCD format
    Runtime error: BCD\_BADDATA