---
title: "CREATE DATA - REF TO"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref area_handle(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm) TYPE REF TO type(name). Effect The addition T
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_reference.htm"
abapFile: "abapcreate_data_reference.htm"
keywords: ["do", "if", "case", "try", "class", "data", "types", "abapcreate", "reference"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) → 

CREATE DATA - REF TO

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref *\[*[area\_handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm)*\]*
                 TYPE REF TO *{*type*|*(name)*}*.

Effect

The addition TYPE REF TO is used by the statement CREATE DATA to create a reference variable. The static type of the reference variable can be specified either directly as type or dynamically in name.

When type is specified, the same rules apply as to the definition of reference types using the statement [TYPES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptypes.htm). For data reference variables, either the generic type data or a fully specified data type can be specified. For object reference variables, either a class or an interface can be specified.

For name, a character-like field can be specified that has to contain the name of a class, an interface, or a data type when the statement is executed. The name of the reference type in name can also be specified as an [absolute type name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabsolute_typename_glosry.htm "Glossary Entry").

Note

Object types in name can also be specified dynamically in lowercase letters.

Example

Creation of an anonymous data object as reference variable of the static type of a class. The dereferenced reference variable can be used to create an object of the class and for access to its components.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    DATA attr TYPE string VALUE \`Oh my ...\`.
ENDCLASS.
TYPES reftype TYPE REF TO cls.
DATA dref TYPE REF TO reftype.
CREATE DATA dref TYPE REF TO cls.
CREATE OBJECT dref->\*.
cl\_demo\_output=>display( dref->\*->attr ).

Executable Example

[Creating Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_reference_abexa.htm)

Continue
![Example](exa.gif "Example") [Creating Reference Variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_reference_abexa.htm)