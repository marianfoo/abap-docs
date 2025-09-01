  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Built-In Data Types in ABAP Dictionary](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [Attributes of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) or [date fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](javascript:call_link\('abencalendar_date_glosry.htm'\) "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) for [time fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](javascript:call_link\('abenday_time_glosry.htm'\) "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)) for posting periods

From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the types DATS and TIMS specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))) and there is enough output length, a point is inserted between the year YYYY and the month MM.