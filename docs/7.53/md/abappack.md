---
title: "PACK"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abappack_shortref.htm) Obsolete Syntax PACK source TO destination. Effect This statement, which is forbidden in classes, converts the content of the data object source to the data type p of length 16 without decimal places
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abappack.htm"
abapFile: "abappack.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abappack"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobsolete_assignments.htm) → 

PACK

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abappack_shortref.htm)

Obsolete Syntax

PACK source TO destination.

Effect

This statement, which is forbidden in classes, converts the content of the data object source to the data type p of length 16 without [decimal places](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfractional_portion_glosry.htm "Glossary Entry"). In contradiction to the [conversion rules for elementary data types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_elementary.htm), any decimal separators in source are ignored. This assigns the converted content to the data object destination.

The data type of source must be character-like, [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry"), and its content must be interpretable as a numeric value. The data type of destination must be flat. If destination has the data type p, the intermediate result is assigned to it from left to right. Surplus places are cut off on the left, and the decimal places are determined by the data type of destination. If destination does not have the data type p, the intermediate result is converted to the data type of destination in accordance with the rules in the [conversion table for source field type p](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_type_p.htm).

Notes

-   The function of the statement PACK is based on the fact that the second half-byte of the code of a digit in most character representations matches the [BCD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry") representation of the associated number value. This conversion is generally known as "packing".
    
-   If the source field contains a number without a decimal separator, and the target field has dobj2 of data type p with sufficient length and without decimal places, the result of the PACK statement matches the result of a regular [statement](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm).
    
-   The statement [UNPACK](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunpack.htm) does not demonstrate the same behavior as a regular [assignment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmove.htm) and is therefore not yet obsolete.
    

Bad Example

DATA: txt TYPE c LENGTH 30,
      num TYPE p.
PACK txt TO num.

Good Example

DATA: txt TYPE c LENGTH 30,
      num TYPE p.
num = txt.

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

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