  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Built-In Types, Data Objects, Functions, and Constructors](javascript:call_link\('abenbuilt_in.htm'\)) →  [Built-In Data Types](javascript:call_link\('abenbuilt_in_types.htm'\)) →  [Built-In ABAP Types](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Built-In Byte-Like Types, ABENBUILTIN_TYPES_BYTE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

Built-In Byte-Like Types

The data objects of the byte-like data types are used to store byte strings.

Properties

Type

Length

Standard Length

Name

x

1 to 524,287 bytes

1 byte

[Byte field](javascript:call_link\('abenbyte_field_glosry.htm'\) "Glossary Entry")

xstring

Variable

 

[Byte string](javascript:call_link\('abenbyte_string_glosry.htm'\) "Glossary Entry")

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

-   The byte-like data types are used for [byte string processing](javascript:call_link\('abenabap_data_string.htm'\)).
-   The type x, for which a length interval is specified in the second column of the first table, is [generic](javascript:call_link\('abenbuilt_in_types_generic.htm'\)), which means that the length is not part of the type description. The entry in the column Standard Length specifies the length used in declarations of data objects when using types with generic lengths, if no explicit length is specified in the corresponding statement.
-   The system class CL\_ABAP\_ELEMDESCR contains a constant TYPE\_X\_MAX\_LENGTH for the maximum length of the type x.
-   The [maximum size](javascript:call_link\('abenmemory_consumption_2.htm'\)) of strings must be respected. If an operation with a string exceeds its maximum size, an exception of class CX\_SY\_STRING\_SIZE\_TOO\_LARGE is raised and can be handled.

Example

Declaration of a byte string of the built-in ABAP type xstring for the result of a functional method. This declaration could also be made [inline](javascript:call_link\('abeninline_declarations.htm'\)) on the left side of the assignment.

DATA hex TYPE xstring.
hex =  cl\_abap\_conv\_codepage=>create\_out(  )->convert( \`...\` ).