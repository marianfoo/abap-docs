  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Predefined Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Predefined ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

Built-In Date Types and Time Types

The data objects of the date types and time types are used to handle calendar dates and times.

Attributes

Type

Length

Default Length

Name

d

8 characters

 

[Date field](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

t

6 characters

 

[Time field](javascript:call_link\('abentime_field_glosry.htm'\) "Glossary Entry")

Value Ranges and Initial Values

d

Any eight alphanumeric characters, but only those digits are valid that are valid as dates in accordance with the calendar rules in the format "yyyymmdd": "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31

"00000000"

t

Any six alphanumeric characters, but only those digits are valid that are valid as times in accordance in the format 24-hour clock format "hhmmss". "hh" (hours): 00 to 23, "mm" (minutes): 00 to 59, "ss" (seconds): 00 to 59.

"000000"

Notes

-   The date types and time types are used to handle values for calendar dates and times. Information about how they are used and their special handling can be found under [Date Fields and Time Fields](javascript:call_link\('abencharacter_date_time.htm'\)).

-   From a technical perspective, the data types d and t are flat character-like types. The content of their data objects is saved in accordance with the current [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry").

-   As character-like data types, data objects of the data types d and t can be used like text fields of the type c. This applies in particular also to structures with components of the types d and t.

-   The generic type [clike](javascript:call_link\('abenbuilt_in_types_generic.htm'\)) also covers the types d and t.

-   Data objects of the types d and t display character-like behavior in character-like operand positions and numeric behavior in numeric operand positions.

-   The data types d and t are the built-in ABAP types that correspond to the special types [DATS](javascript:call_link\('abenddic_date_time_types.htm'\)) and [TIMS](javascript:call_link\('abenddic_date_time_types.htm'\)) in ABAP Dictionary.

-   The valid values of the data types d and t are a subset of their value range. ABAP statements that work with data objects of these types are only guaranteed to work correctly for operands with valid values.

Example

Declares date fields and time fields of the built-in ABAP types d and t and examples for how to use them. These declarations are made both using the statement [DATA](javascript:call_link\('abapdata.htm'\)) and using the declaration operator [DATA](javascript:call_link\('abendata_inline.htm'\)).

DATA: tomorrow  TYPE d,
      next\_hour TYPE t.
DATA(today) = sy-datlo.
DATA(now)   = sy-timlo.
tomorrow  = today + 1.
next\_hour = ( now + 3600 ) / 3600 \* 3600.