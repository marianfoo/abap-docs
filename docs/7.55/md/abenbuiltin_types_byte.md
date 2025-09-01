  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types.htm) →  [Built-In ABAP Types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm) → 

Built-In Byte-Like Types

The data objects of the byte-like data types are used to record byte strings.

Properties

Type

Length

Standard Length

Name

x

1 to 524,287 bytes

1 byte

[Byte field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyte_field_glosry.htm "Glossary Entry")

xstring

Variable

 

[Byte string](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbyte_string_glosry.htm "Glossary Entry")

Value Ranges and Initial Values

Type

Value Range

Initial Value

x

Any byte values, hexadecimal 00 to FF

Hexadecimal 00

xstring

As for type x

Empty string with length 0

Hints

-   The byte-like data types are used for [byte string processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm).

-   The type x, for which a length interval is specified in the second column of the first table, is [generic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_generic.htm), which means that the length is not part of the type description. The entry in the column Standard Length specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.

-   The system class CL\_ABAP\_ELEMDESCR contains a constant TYPE\_X\_MAX\_LENGTH for the maximum length of the type x.

-   The [maximum size](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmemory_consumption_2.htm) of strings must be respected. If an operation with a string exceeds its maximum size, an exception of class CX\_SY\_STRING\_SIZE\_TOO\_LARGE is raised and can be handled.

Example

Declaration of a byte string of the built-in ABAP type xstring for the result of a functional method. This declaration could also be made [inline](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm) on the left side of the assignment.

DATA hex TYPE xstring.
hex =  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`...\` ).