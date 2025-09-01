  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types.htm) →  [Built-In ABAP Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Character-Like%20Types%2C%20ABENBUILTIN_TYPES_CHARACTER%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Character-Like Types

The data objects of the character-like data types are used to store character strings.

Properties

Type

Length

Standard Length

Meaning

Data Object

c

1 to 262,143 characters

1 character

[Text field type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_type_glosry.htm "Glossary Entry")

[Text field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_field_glosry.htm "Glossary Entry")

n

1 to 262,143 characters

1 character

[Numeric text field type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_text_field_type_glosry.htm "Glossary Entry")

[Numeric text field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumeric_text_field_glosry.htm "Glossary Entry")

string

Variable

 

[Text string type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_string_type_glosry.htm "Glossary Entry")

[Text string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_string_glosry.htm "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

c

Any Unicode characters that can be encoded in [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry").

Blank for every position

n

Any Unicode characters that can be encoded in [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry"); valid characters are only the digits 0 to 9

0 for every position

string

As for type c

Empty string with length 0

Hints

-   The character-like data types are mainly used for [string processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm).
-   For more about strings, see [Strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring.htm).
-   The data types c and string are general character-like data types, whereas n has special properties. The data type n matches the special type [NUMC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_special_character_types.htm) in ABAP Dictionary.
-   Further character-like data types with special properties are the built-in [date types and time types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm) that match the corresponding types [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm) and [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm) of the ABAP Dictionary. All other special character-like data types in ABAP Dictionary are assigned to the general ABAP types listed here.
-   The content of the data objects of character-like data types is stored in the memory according to the current [system code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_codepage_glosry.htm "Glossary Entry").
-   When specifying lengths for character-like types, note that the length of a character in bytes depends on the character representation used. For the character representation [UCS-2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenucs2_glosry.htm "Glossary Entry") used by the ABAP programming language, the length of a character is two bytes.
-   The types c and n, for which a length interval is specified in the second column of the first table, are [generic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm), which means that the length is not part of the type description. The entries in the column Standard Length specify the length that is used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.
-   The system class CL\_ABAP\_ELEMDESCR contains the constants TYPE\_C\_MAX\_LENGTH and TYPE\_N\_MAX\_LENGTH for the maximum length of the types c and n.
-   The valid values of the data type n are a subset of its value range. ABAP statements that work with data objects of this type are only guaranteed to function correctly for operands with valid values.
-   The [maximum size](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm) of strings must be respected. If an operation with a string exceeds its maximum size, an exception of class CX\_SY\_STRING\_SIZE\_TOO\_LARGE is raised and can be handled.

Example

Declaration of character-like data objects with built-in character-like data types. The flag flag is limited to one character and the set of characters in the string html is variable.

DATA: flag TYPE c LENGTH 1,
      html TYPE string.