  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Predefined Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Predefined Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) → 

Predefined ABAP Types

The following types are predefined in every ABAP program:

-   [Predefined Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))

-   [Predefined Character-Like Types](javascript:call_link\('abenbuiltin_types_character.htm'\))

-   [Predefined Byte-Like Types](javascript:call_link\('abenbuiltin_types_byte.htm'\))

-   [Predefined date types and time types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))

All predefined ABAP types from these tables are elementary and are included in the generic type [simple](javascript:call_link\('abenbuilt_in_types_generic.htm'\)). Apart from the types [b](javascript:call_link\('abenbuiltin_types_numeric.htm'\)) and [s](javascript:call_link\('abenbuiltin_types_numeric.htm'\)), the predefined ABAP types can also be used to define separate [data types](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") and [data objects](javascript:call_link\('abendata_object_glosry.htm'\) "Glossary Entry") and for [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry").

Besides the predefined ABAP types, there is a global predefined data type cursor, which currently has the same meaning as the predefined ABAP type [i](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). This is required for the declaration of a cursor variable for [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry") [handling](javascript:call_link\('abapopen_cursor.htm'\)).

Notes

-   If a [start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") is not specified when creating a data object with one of the predefined ABAP types, the start value is set to the [initial value](javascript:call_link\('abeninitial_value_glosry.htm'\) "Glossary Entry") specified for the relevant type.

-   The predefined data types [string](javascript:call_link\('abenbuiltin_types_character.htm'\)) and [xstring](javascript:call_link\('abenbuiltin_types_byte.htm'\)) describe data objects of variable length ([dynamic data objects](javascript:call_link\('abendynamic_data_object_glosry.htm'\) "Glossary Entry")). While the length of data objects in all other elementary data types is determined for its whole lifetime, the length of text and byte strings varies according to their content (the maximum size of a string is determined by the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") ztta/max\_memreq\_MB, see [Maximum size of dynamic data objects](javascript:call_link\('abenmemory_consumption_2.htm'\))).
    

Continue
[Predefined Numeric Types](javascript:call_link\('abenbuiltin_types_numeric.htm'\))
[Built-In Character-Like Types](javascript:call_link\('abenbuiltin_types_character.htm'\))
[Built-In Byte-Like Types](javascript:call_link\('abenbuiltin_types_byte.htm'\))
[Built-In Date Types and Time Types](javascript:call_link\('abenbuiltin_types_date_time.htm'\))