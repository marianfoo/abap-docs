  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) →  [Predefined Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm) → 

Built-In ABAP Types

The following types are predefined in every ABAP program:

-   [Built-in numeric types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)

-   [Built-in character-like types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm)

-   [Built-in byte-like types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm)

-   [Built-in date types and time types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm)

All built-in ABAP types from these tables are elementary and are included in the generic type [simple](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm). Apart from the types [b](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm) and [s](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm), the built-in ABAP types can also be used to define separate [data types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_type_glosry.htm "Glossary Entry") and [data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_object_glosry.htm "Glossary Entry") and for [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_glosry.htm "Glossary Entry").

Besides the built-in ABAP types, there is a global predefined data type cursor, which currently has the same meaning as the built-in ABAP type [i](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm). This is required when declaring a cursor variable for [database cursor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") [handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_cursor.htm).

Notes

-   If a [start value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstart_value_glosry.htm "Glossary Entry") is not specified when creating a data object with one of the built-in ABAP types, the start value is set to the [initial value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_value_glosry.htm "Glossary Entry") specified for the relevant type.

-   The built-in data types [string](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm) and [xstring](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm) describe data objects of variable length ([dynamic data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_data_object_glosry.htm "Glossary Entry")). While the length of data objects in all other elementary data types is determined for its whole lifetime, the length of text strings and byte strings varies according to their content (the maximum size of a string is determined by the [profile parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption_2.htm))).
    

Continue
[Predefined Numeric Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_numeric.htm)
[Predefined Character-Like Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_character.htm)
[Predefined Byte-Like Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_byte.htm)
[Built-In Date Types, Time Types, and Time Stamp Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm)