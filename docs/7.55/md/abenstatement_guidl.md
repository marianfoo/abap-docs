---
title: "Statements per Program Line"
description: |
  Background An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines. Rule Maximum of one statement per program line Write a maximum of one statement in every source
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstatement_guidl.htm"
abapFile: "abenstatement_guidl.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "abenstatement", "guidl"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructure_style_guidl.htm) →  [Formatting the Source Code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenformatting_code_guidl.htm) → 

Statements per Program Line

Background

An ABAP statement (declaration or executable statement) is closed with a period. This statement can be followed by further statements in the same line. Statements can also span multiple lines.

Rule

Maximum of one statement per program line

Write a maximum of one statement in every source code line. Long statements can and should be split at suitable places. This means the statements can be divided up across consecutive lines.

Details

Using multiple statements in one line makes the source code harder to read. If a line contains an entire control structure, the lack of indentations makes it especially difficult to identify the logical structure. Therefore you should try to avoid using more than one statement in a program line.

Besides reduced readability, using multiple statements in one line can also make the code more difficult to debug. Even in single steps, ABAP Debugger stops a maximum of once per executable program line. This makes it impractical for the debugging process if there is more than one statement in a line.

If a statement spans [multiple lines](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_width_guidl.htm "Guideline") (which occurs frequently due to the potential length of complex ABAP statements), there should be no empty lines between the parts of the statement. The breaks in the statement should occur at semantically suitable places so that groups with a similar semantic meaning are next to each other, if possible. Indentations should be used to ensure that the statement is as well structured and readable as possible.

Bad Example

The following source code shows a program section with correct syntax but that is poorly laid out and difficult to understand. Even the [Pretty Printer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_pretty_printer_guidl.htm "Guideline") can barely improve the layout of the pattern shown here.

CLASS class DEFINITION.
  PUBLIC SECTION. METHODS meth. ENDCLASS.

CLASS class IMPLEMENTATION. METHOD meth.
  DATA: itab TYPE TABLE OF dbtab, wa TYPE dbtab.
  SELECT \* FROM dbtab WHERE column = ' ' INTO TABLE @itab.
  IF sy-subrc <> 0. RETURN. ENDIF.
  LOOP AT itab INTO wa. ... ENDLOOP.
  ENDMETHOD. ENDCLASS.

Good Example

The following source code shows the same code as above but with the recommended limit of one statement per line. The complex SELECT statement contains numerous clauses and hence spans multiple consecutive lines.

CLASS class DEFINITION.
  PUBLIC SECTION.
    METHODS meth.
ENDCLASS.

CLASS class IMPLEMENTATION.
  METHOD meth.
    DATA: itab TYPE TABLE OF dbtab,
          wa   TYPE dbtab.
    SELECT \*
           FROM dbtab
           WHERE column = ' '
           INTO TABLE @itab.
    IF sy-subrc <> 0.
      RETURN.
    ENDIF.
    LOOP AT itab INTO wa.
       ...
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.