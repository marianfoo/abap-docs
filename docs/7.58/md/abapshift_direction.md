---
title: "SHIFT, direction"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapshift_shortref.htm) Syntax ... LEFTRIGHT CIRCULAR ... Additions: 1. ... LEFTRIGHT(#!ABAP_ADDITION_1@1@) 2. ... CIRCULAR(#!ABAP_ADDITION_2@2@) Addition 1 ... LEFTRIGHT Effect The shift dire
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapshift_direction.htm"
abapFile: "abapshift_direction.htm"
keywords: ["insert", "do", "if", "data", "abapshift", "direction"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_statements.htm) →  [SHIFT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapshift.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SHIFT%2C%20direction%2C%20ABAPSHIFT_DIRECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SHIFT, direction

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapshift_shortref.htm)

Syntax

... *\[*LEFT*|*RIGHT*\]* *\[*CIRCULAR*\]* ...

Additions:

[1\. ... LEFT*|*RIGHT](#!ABAP_ADDITION_1@1@)
[2\. ... CIRCULAR](#!ABAP_ADDITION_2@2@)

Addition 1   

... LEFT*|*RIGHT

Effect

The shift direction is defined using LEFT or RIGHT. If neither of the additions is specified, LEFT is used implicitly. If the data object dobj is a string and the addition CIRCULAR is not specified, it is truncated when shifted to the left by the places shifted and extended accordingly when shifted to the right.

Example

The content of text field text is moved one place to the right, which means that the digit 9 is lost. The data type string would extend the string by one space.

DATA(text) = '0123456789'.
SHIFT text RIGHT.
cl\_demo\_output=>display( text ).

Addition 2   

... CIRCULAR

Effect

Using the addition CIRCULAR, the content shifted from the data object to the left or to the right, is inserted again in the places that become available on the opposite side. If the addition CIRCULAR is specified, data objects of the type string or xstring are not truncated or extended. Instead, they are handled like data objects of fixed length.

Example

This example is a variant of the second example under [places](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapshift_places.htm). Using the addition CIRCULAR makes the result you know I know.

DATA text TYPE string VALUE \`I know you know \`.
SHIFT text UP TO 'you' LEFT CIRCULAR.