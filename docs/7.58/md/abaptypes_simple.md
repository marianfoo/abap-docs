---
title: "Syntax"
description: |
  TYPES  dtype(len) TYPE abap_type DECIMALS dec  dtype TYPE abap_type LENGTH len DECIMALS dec. Addition: ... DECIMALS dec(#!ABAP_ONE_ADD@1@) Effect By specifying a built-in data type(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/a
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_simple.htm"
abapFile: "abaptypes_simple.htm"
keywords: ["do", "if", "try", "data", "types", "abaptypes", "simple"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_declarations.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentypes_statements.htm) →  [TYPES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TYPES%2C%20TYPE%20abap_type%2C%20ABAPTYPES_SIMPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TYPES, TYPE abap\_type

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_shortref.htm)

Syntax

TYPES *{* *{*dtype*\[*(len)*\]* TYPE abap\_type *\[*DECIMALS dec*\]**}*
      *|* *{*dtype TYPE abap\_type *\[*LENGTH len*\]* *\[*DECIMALS dec*\]**}**}*.

Addition:

[... DECIMALS dec](#!ABAP_ONE_ADD@1@)

Effect

By specifying a [built-in data type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") abap\_type, a non-generic elementary data type is defined. For abap\_type, all [built-in data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) can be used, except for the internal types b and s.

For the ABAP types c, n, p, and x, the length of the data type dtype must be specified by entering a number directly or by specifying a corresponding numeric constant len within the [length range](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) defined for the type in question. For all other ABAP types, the length is determined by the value in the [tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) of built-in ABAP types and no length can be specified in len.

The length len is specified either in parentheses directly after the type name dtype, or after the addition LENGTH. The specified length must be positive. If the length is not specified explicitly for the ABAP types c, n, p, and x, the [standard length](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuilt_in_types_complete.htm) is defined implicitly.

Hints

-   For reasons of legibility, it is best to always use the addition LENGTH instead of parentheses to specify the length len.
-   The non-specifiable internal types b and s can be achieved by referencing the built-in data types [INT1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) and [INT2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) in ABAP Dictionary.
-   It is not necessary to list all additions in [obsolete variants](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptypes_implicit.htm) of the above statement since they are added implicitly.

Example

These statements create three elementary data types that are local to the program. Values for the unspecified technical properties of the built-in types c and p are specified.

TYPES: text10 TYPE c LENGTH 10,
       text20 TYPE c LENGTH 20,
       number TYPE p LENGTH 8 DECIMALS 2.

Addition   

... DECIMALS dec

Effect

In the ABAP type [p](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuiltin_types_numeric.htm), the number of [decimal places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecimal_place_glosry.htm "Glossary Entry") must be defined using the addition DECIMALS and by specifying an unsigned number directly or a corresponding numeric constant dec. The addition cannot be specified in other data types.

A maximum of 14 decimal places can be specified. If the number of decimal places is greater than the number of places or digits calculated from 2 \* len - 1, a syntax check warning occurs. This is because only the last 2 \* len - 1 decimal places can be filled with digits.

For the decimal separator to be respected in operations with packed numbers, the [program property](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") fixed point arithmetic must be set. Otherwise, the addition DECIMALS only affects the output on dynpros and the format for the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm).

Hint

If the number of decimal places is greater than the number of digits, the decimal separator is outside the sequence of digits, which should be respected in assignments and outputs. Such a number can raise exceptions in conversions to external formats such as data types of the database in [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") or during serializations to [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_glosry.htm "Glossary Entry").

Example

Definition of a numeric type for a packed number with three digits and two decimal places. The value range is -9.99 to +9.99 in increments of 0.01.

TYPES number TYPE p LENGTH 2 DECIMALS 2.

Example

Defines a numeric type for a packed number with three digits and five decimal places. This statement produces a syntax check warning. The value range is -0.00999 to +0.00999 in increments of 0.00001. Not all decimal places can be used.

TYPES number TYPE p LENGTH 5 DECIMALS 5.