---
title: "Find a PCRE Regular Expression"
description: |
  The example demonstrates how to search for a regular expression in PCRE syntax. Source Code REPORT demo_find_pcre. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(regex) = `b.atb`. DATA(text)  = `Cathy's cat with the hat sat
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_abexa.htm"
abapFile: "abenpcre_abexa.htm"
keywords: ["select", "do", "while", "if", "case", "try", "catch", "method", "class", "data", "abenpcre", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) →  [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Find a PCRE Regular Expression, ABENPCRE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Find a PCRE Regular Expression

The example demonstrates how to search for a regular expression in PCRE syntax.

Source Code   

REPORT demo\_find\_pcre.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(regex) = \`\\b.at\\b\`.
    DATA(text)  = \`Cathy's cat with the hat sat on Matt's mat.\`.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = text
      )->add\_field( CHANGING field = regex
      )->request( ).
    TRY.
        FIND PCRE regex IN text.
        IF sy-subrc = 0.
          cl\_demo\_output=>display\_html(
            \`<html><body>\` &&
            replace(
              val = text
              pcre = regex
              with = \`<font color="#FF0000"><b>$0</b></font>\` ) &&
                    \`</body></html>\`).
        ELSE.
          cl\_demo\_output=>display( \`Not found\` ).
        ENDIF.
      CATCH cx\_sy\_invalid\_regex INTO FINAL(exc).
        cl\_demo\_output=>display( exc->get\_text( ) ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

In the example, a line of text and a regular expression can be entered. The program searches the text line text for the first match of the search pattern defined in the regular expression regex and highlights this section in the result display. The search expects a PCRE regular expression and is case-sensitive. The statement [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) is used to search the statement, while the statement [REPLACE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreplace.htm) is used to mark the result. Here, the operator $0 serves as a placeholder for the match in the replacement text.

The predefined example text is:

Cathy's cat with the hat sat on Matt's mat.

and the predefined regular expression is:

(\\b.at\\b)

The regular expression describes a word consisting of three characters, where the first is any single character and the other two are at.

The case-sensitive search for the first occurrence finds the word cat.

Hint

The demonstration program DEMO\_REGEX can be used to test regular expressions before using them in programs.