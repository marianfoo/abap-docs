  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

Built-In ABAP Types

The following types are built-in in every ABAP program:

-   [Built-in numeric types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

-   [Built-in character-like types](javascript:call_link\('abenbuiltin_types_character.htm'\))

-   [Built-in byte-like types](javascript:call_link\('abenbuiltin_types_byte.htm'\))

-   [Built-in date types and time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

All built-in ABAP types from these tables are elementary and are included in the generic type [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Apart from the types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), the built-in ABAP types can be used to define separate [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") and [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry").

In addition to the actual built-in ABAP types, there is a predefined data type cursor that is global to the program, which currently has the same meaning as the built-in ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). It is required when declaring a cursor variable for [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") [handling](javascript:call_link\('abapopen_cursor.htm'\)).

Hints

-   If no explicit [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") is specified when creating a data object with one of the built-in ABAP types, it is set to the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") specified for the relevant type.

-   The built-in data types [string](javascript:call_link\('abenbuiltin_types_character.htm'\)) and [xstring](javascript:call_link\('abenbuiltin_types_byte.htm'\)) describe data objects of variable length ([dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry")). While the length of data objects of all other elementary data types is fixed for their whole lifetime, the length of text strings and byte strings varies according to their content (the maximum size of a string is determined by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB, see [Maximum Size of Dynamic Data Objects](javascript:call_link\('abenmemory_consumption_2.htm'\))).
    

Continue
[Built-In Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))
[Built-In Character-Like Types](javascript:call_link\('abenbuiltin_types_character.htm'\))
[Built-In Byte-Like Types](javascript:call_link\('abenbuiltin_types_byte.htm'\))
[Built-In Date Types, Time Types, and Time Stamp Types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))