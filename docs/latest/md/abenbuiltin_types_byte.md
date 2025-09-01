---
title: "Built-In Byte-Like Types"
description: |
  The data objects of the byte-like data types are used to store byte strings. Properties Type Length Standard Length Meaning Data Object x 1 to 524,287 bytes 1 byte Byte field type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_field_type_glosry.htm 'Glossary Entry') Byte
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm"
abapFile: "abenbuiltin_types_byte.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenbuiltin", "byte"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types.htm) →  [Built-In ABAP Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_complete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20Byte-Like%20Types%2C%20ABENBUILTIN_TYPES_BYTE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In Byte-Like Types

The data objects of the byte-like data types are used to store byte strings.

Properties

Type

Length

Standard Length

Meaning

Data Object

x

1 to 524,287 bytes

1 byte

[Byte field type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_field_type_glosry.htm "Glossary Entry")

[Byte field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_field_glosry.htm "Glossary Entry")

xstring

Variable

 

[Byte string type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_string_type_glosry.htm "Glossary Entry")

[Byte string](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_string_glosry.htm "Glossary Entry")

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

-   The byte-like data types are used for [byte string processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm).
-   For more about strings, see [Strings](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring.htm).
-   The type x, for which a length interval is specified in the second column of the first table, is [generic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_types_generic.htm), which means that the length is not part of the type description. The entry in the column Standard Length specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.
-   The system class CL\_ABAP\_ELEMDESCR contains a constant TYPE\_X\_MAX\_LENGTH for the maximum length of the type x.
-   The [maximum size](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmemory_consumption_2.htm) of strings must be respected. If an operation with a string exceeds its maximum size, an exception of class CX\_SY\_STRING\_SIZE\_TOO\_LARGE is raised and can be handled.

Example

Declaration of a byte string of the built-in ABAP type xstring for the result of a functional method. This declaration could also be made [inline](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm) on the left side of the assignment.

DATA hex TYPE xstring.
hex =  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`...\` ).