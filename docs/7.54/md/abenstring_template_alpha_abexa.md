---
title: "String Templates, Strings of Digits"
description: |
  The example demonstrates how the format ALPHA is specified for embedded expressions. Source Code REPORT demo_string_template_alpha. PARAMETERS: text    TYPE c LENGTH 20 LOWER CASE DEFAULT '     0000012345', length  TYPE i DEFAULT 20, width   TYPE i DEFAULT 0. CLASS demo DEFINITION. PUBLIC SECTION
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_alpha_abexa.htm"
abapFile: "abenstring_template_alpha_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "types", "abenstring", "template", "alpha", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) →  [Examples of string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates_abexas.htm) → 

String Templates, Strings of Digits

The example demonstrates how the format ALPHA is specified for embedded expressions.

Source Code

REPORT demo\_string\_template\_alpha.
PARAMETERS: text    TYPE c LENGTH 20
                           LOWER CASE
                           DEFAULT '     0000012345',
            length  TYPE i DEFAULT 20,
            width   TYPE i DEFAULT 0.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-METHODS output IMPORTING title TYPE csequence
                                   text  TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: textstring       TYPE string,
          resultstring\_in  TYPE string,
          resultfield\_in   TYPE REF TO data,
          resultstring\_out TYPE string,
          resultfield\_out  TYPE REF TO data.
    FIELD-SYMBOLS: <resultfield\_in>  TYPE data,
                   <resultfield\_out> TYPE data.
    CONCATENATE text \`\` INTO textstring RESPECTING BLANKS.
    CREATE DATA resultfield\_in  TYPE c LENGTH length.
    CREATE DATA resultfield\_out TYPE c LENGTH length.
    ASSIGN resultfield\_in->\* TO <resultfield\_in>.
    ASSIGN resultfield\_out->\* TO <resultfield\_out>.
    IF width = 0.
      resultstring\_in   = |{ textstring ALPHA = IN  }|.
      output( title = \`String, IN\` text = resultstring\_in ).
      <resultfield\_in>  = |{ textstring ALPHA = IN  }|.
      output( title = \`Field,  IN\` text = <resultfield\_in> ).
      resultstring\_out  = |{ textstring ALPHA = OUT }|.
      output( title = \`String, OUT\` text = resultstring\_out ).
      <resultfield\_out> = |{ textstring ALPHA = OUT }|.
      output( title = \`Field,  OUT\` text = <resultfield\_out> ).
    ELSE.
      resultstring\_in   = |{ textstring ALPHA = IN  WIDTH = width }|.
      output( title = \`String, IN\` text = resultstring\_in ).
      <resultfield\_in>  = |{ textstring ALPHA = IN  WIDTH = width }|.
      output( title = \`Field,  IN\` text = <resultfield\_in> ).
      resultstring\_out  = |{ textstring ALPHA = OUT WIDTH = width }|.
      output( title = \`String, OUT\` text = resultstring\_out ).
      <resultfield\_out> = |{ textstring ALPHA = OUT WIDTH = width }|.
      output( title = \`Field,  OUT\` text = <resultfield\_out> ).
    ENDIF.  ENDMETHOD.
  METHOD output.
    DATA fill TYPE c LENGTH 40.
    WRITE: /(12) title COLOR COL\_HEADING NO-GAP,
            (3)  fill COLOR COL\_POSITIVE NO-GAP,
                 text COLOR COL\_NORMAL   NO-GAP,
                 fill COLOR COL\_POSITIVE NO-GAP,
            40   fill.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
AT SELECTION-SCREEN.
  IF length < 1 OR length > 20.
    MESSAGE 'Length between 1 and 20 only' TYPE 'E'.
  ENDIF.
  IF width < 0 OR width > 20.
    MESSAGE 'Width between 0 and 20 only' TYPE 'E'.
  ENDIF.

Description

This program demonstrates the use of the formatting option ALPHA with the parameters IN and OUT on a text string textstring. This string always has a length of 20 and its content can be entered on the selection screen. The results of the formatting are assigned to target fields of the types string and c, where the length of the text field can also be entered on the selection screen. The length of the formatting option WIDTH can also be entered. If the length is 0, the formatting option is ignored.