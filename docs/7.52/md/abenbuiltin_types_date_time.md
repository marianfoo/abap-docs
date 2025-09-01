---
title: "Built-In Date Types and Time Types"
description: |
  The data objects of the date types and time types are used to handle calendar dates and times. Attributes Type Length Default Length Name d 8 characters Date field(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm 'Glossary Entry') t 6 characters Time field(htt
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm"
abapFile: "abenbuiltin_types_date_time.htm"
keywords: ["do", "try", "data", "types", "abenbuiltin", "date", "time"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Predefined Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in.htm) →  [Predefined Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types.htm) →  [Predefined ABAP Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) → 

Built-In Date Types and Time Types

The data objects of the date types and time types are used to handle calendar dates and times.

Attributes

Type

Length

Default Length

Name

d

8 characters

 

[Date field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm "Glossary Entry")

t

6 characters

 

[Time field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentime_field_glosry.htm "Glossary Entry")

Value Ranges and Initial Values

d

Any eight alphanumeric characters, but only those digits are valid that are valid as dates in accordance with the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31

"00000000"

t

Any six alphanumeric characters, but only those digits are valid that are valid as times in accordance in the format 24-hour clock format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

"000000"

Notes

-   The date types and time types are used to handle values for calendar dates and times. Information about how they are used and their special handling can be found under [Date Fields and Time Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharacter_date_time.htm).

-   From a technical perspective, the data types d and t are flat character-like types. The content of their data objects is saved in accordance with the current [system code page](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_codepage_glosry.htm "Glossary Entry").

-   As character-like data types, data objects of the data types d and t can be used like text fields of the type c. This applies in particular also to structures with components of the types d and t.

-   The generic type [clike](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_generic.htm) also covers the types d and t.

-   Data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions.

-   The data types d and t are the built-in ABAP types that correspond to the special types [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm) and [TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm) in ABAP Dictionary.

-   The valid values of the data types d and t are a subset of their value range. ABAP statements that work with data objects of these types are only guaranteed to work correctly for operands with valid values.

Example

Declares date fields and time fields of the built-in ABAP types d and t and examples for how to use them. These declarations are made both using the statement [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm) and using the declaration operator [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_inline.htm).

DATA: tomorrow  TYPE d,
      next\_hour TYPE t.
DATA(today) = sy-datlo.
DATA(now)   = sy-timlo.
tomorrow  = today + 1.
next\_hour = ( now + 3600 ) / 3600 \* 3600.