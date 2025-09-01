---
title: "SHIFT - direction"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_shortref.htm) Syntax ... LEFTRIGHT CIRCULAR ... Extras: 1. ... LEFTRIGHT(#!ABAP_ADDITION_1@1@) 2. ... CIRCULAR(#!ABAP_ADDITION_2@2@) Addition 1 ... LEFTRIGHT Effect The shift directi
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_direction.htm"
abapFile: "abapshift_direction.htm"
keywords: ["insert", "do", "if", "data", "abapshift", "direction"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_statements.htm) →  [SHIFT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift.htm) → 

SHIFT - direction

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_shortref.htm)

Syntax

... *\[*LEFT*|*RIGHT*\]* *\[*CIRCULAR*\]* ...

Extras:

[1\. ... LEFT*|*RIGHT](#!ABAP_ADDITION_1@1@)
[2\. ... CIRCULAR](#!ABAP_ADDITION_2@2@)

Addition 1

... LEFT*|*RIGHT

Effect

The shift direction is defined using LEFT or RIGHT. If neither of the additions is specified, LEFT is used implicitly. If the data object dobj is a string and the addition CIRCULAR is not specified, it is truncated when shifted to the left by the places shifted and lengthened accordingly when shifted to the right.

Example

The content of text field text is moved one place to the right, by which the digit "9" is lost. The data type string would lengthen the string by one space.

DATA(text) = '0123456789'.
SHIFT text RIGHT.
cl\_demo\_output=>display( text ).

Addition 2

... CIRCULAR

Effect

Using the addition CIRCULAR, the content shifted from the data object to the left or to the right, is inserted again in the places that become available on the opposite side. If the addition CIRCULAR is specified, data objects of the type string or xstring are not shortened or lengthened; instead, they are handled as data objects of fixed length.

Example

This example is a variant of the second example under [places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapshift_places.htm). Using the addition CIRCULAR, the result becomes "you know I know".

DATA text TYPE string VALUE \`I know you know \`.
SHIFT text UP TO 'you' LEFT CIRCULAR.