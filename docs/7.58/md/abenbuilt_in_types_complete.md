---
title: "Built-In ABAP Types"
description: |
  The following types are built-in in every ABAP program: -   Built-In Numeric Types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) -   Built-In Character-Like Types(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_character.ht
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm"
abapFile: "abenbuilt_in_types_complete.htm"
keywords: ["do", "while", "if", "try", "data", "types", "abenbuilt", "complete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in.htm) →  [Built-In Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Built-In%20ABAP%20Types%2C%20ABENBUILT_IN_TYPES_COMPLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Built-In ABAP Types

The following types are built-in in every ABAP program:

-   [Built-In Numeric Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm)
-   [Built-In Character-Like Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_character.htm)
-   [Built-In Byte-Like Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_byte.htm)
-   [Built-In Date Types, Time Types, and Time Stamp Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm)

All built-in ABAP types from these tables are elementary and are included in the generic type [simple](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_generic.htm). Apart from the types [b](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm) and [s](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm), the built-in ABAP types can be used to define separate [data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_type_glosry.htm "Glossary Entry") and [data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_object_glosry.htm "Glossary Entry") and for [typing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentyping_glosry.htm "Glossary Entry").

In addition to the actual built-in ABAP types, there is a predefined data type cursor that is global to the program, which currently has the same meaning as the built-in ABAP type [i](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm). It is required when declaring a cursor variable for [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry") [handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_cursor.htm).

Hints

-   If no explicit [start value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstart_value_glosry.htm "Glossary Entry") is specified when creating a data object with one of the built-in ABAP types, the start value is set to the [initial value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninitial_value_glosry.htm "Glossary Entry") specified for the relevant type.
-   The built-in data types [string](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_character.htm) and [xstring](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_byte.htm) describe data objects of variable length ([dynamic data objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_data_object_glosry.htm "Glossary Entry")). While the length of data objects of all other elementary data types is fixed for their whole lifetime, the length of text strings and byte strings varies according to their content.
-   The maximum size of a string is determined by the [profile parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") ztta/max\_memreq\_MB (see [Maximum Size of Dynamic Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmemory_consumption_2.htm)).

Continue
[Built-In Numeric Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm)
[Built-In Character-Like Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_character.htm)
[Built-In Byte-Like Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_byte.htm)
[Built-In Date Types, Time Types, and Time Stamp Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_date_time.htm)