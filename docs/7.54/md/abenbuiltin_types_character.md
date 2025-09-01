  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in.htm) →  [Predefined Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types.htm) →  [Built-In ABAP Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_complete.htm) → 

Predefined Character-Like Types

The data objects of the character-like data types are used to handle character strings.

Properties

Type

Length

Standard Length

Name

c

1 to 262,143 characters

1 character

[Text Field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_field_glosry.htm "Glossary Entry")

n

1 to 262,143 characters

1 character

[Numeric text field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumeric_text_field_glosry.htm "Glossary Entry")

string

Variable

 

[Text string](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_string_glosry.htm "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

c

Any alphanumeric characters

" " for every position

n

Any alphanumeric characters; only valid values are the digits 0 to 9, however

"0" for every position

string

As for type c

Empty string with length 0

Notes

-   The character-like data types are mainly used for [string processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm).

-   The data types c and string are general character-like data types, but n, on the other hand, has special properties. The data type n corresponds to the special type [NUMC](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_special_character_types.htm) in ABAP Dictionary.

-   Further character-like data types with special properties are the built-in [date types and time types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuiltin_types_date_time.htm) that match the corresponding types [DATS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm) and [TIMS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_types.htm) in ABAP Dictionary. All other special character-like data types in ABAP Dictionary are assigned to the general ABAP types listed here.

-   The content of the data objects of character-like data types is saved in the memory in accordance with the current [system code page](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_codepage_glosry.htm "Glossary Entry")

-   When specifying lengths for character-like types, note that the length of a character in bytes depends on the character representation used. The length of a character is two bytes for the character representation [UCS-2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language.

-   The types c and n, for which a length interval is specified in the second column in the first table, are [generic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuilt_in_types_generic.htm), which means that the length is not part of the type description. The entries in the Standard Length column specify the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the relevant statement.

-   The system class CL\_ABAP\_ELEMDESCR contains constants TYPE\_C\_MAX\_LENGTH and TYPE\_N\_MAX\_LENGTH for the maximum length of the types c and n.

-   The valid values of the data type n are a subset of its value range. ABAP statements that work with data objects of this type are only guaranteed to function correctly for operands with valid values.

-   The [maximum size](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption_2.htm) of strings must be respected.

Example

Declares character-like data objects with built-in character-like data types. The flag flag is limited to one character and the set of characters in the string html is variable.

DATA: flag TYPE c LENGTH 1,
      html TYPE string.