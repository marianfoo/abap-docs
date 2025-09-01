---
title: "Decimal Floating Point Numbers, Formatting with STYLE"
description: |
  This example demonstrates the formatting of decimal floating point numbers. Source Code  CCDEF CLASS cl_abap_format DEFINITION LOAD.  Public class definition CLASS cl_demo_style DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRI
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwrite_style_abexa.htm"
abapFile: "abenwrite_style_abexa.htm"
keywords: ["insert", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenwrite", "style", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_processing_statements.htm) →  [WRITE, TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) →  [WRITE, format\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Decimal%20Floating%20Point%20Numbers%2C%20Formatting%20with%20STYLE%2C%20ABENWRITE_STYLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

Decimal Floating Point Numbers, Formatting with STYLE

This example demonstrates the formatting of decimal floating point numbers.

Source Code   

\* CCDEF
CLASS cl\_abap\_format DEFINITION LOAD.
\* Public class definition
CLASS cl\_demo\_style DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA: BEGIN OF format,
            value LIKE cl\_abap\_format=>e\_xml\_text,
            name  TYPE abap\_attrdescr-name,
          END OF format,
          formats LIKE SORTED TABLE OF format
              WITH UNIQUE KEY value.
    METHODS get\_formats.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_style IMPLEMENTATION.
  METHOD main.
    DATA: number TYPE decfloat34 VALUE '-12345.67890',
          BEGIN OF result,
            style         TYPE string,
            write\_to      TYPE c LENGTH 20,
            template\_raw  TYPE c LENGTH 20,
            template\_user TYPE c LENGTH 20,
          END OF result,
          results LIKE TABLE OF result,
          off     TYPE i,
          exc     TYPE REF TO cx\_sy\_unknown\_currency.
    get\_formats( ).
    LOOP AT me->formats INTO me->format.
      result-style = me->format-name+2.
      WRITE number TO result-write\_to
        STYLE me->format-value LEFT-JUSTIFIED.
      result-template\_raw =
        |{ number STYLE  = (me->format-value) }|.
      result-template\_user =
        |{ number STYLE  = (me->format-value)
                  NUMBER = USER }|.
      APPEND result TO results.
    ENDLOOP.
    out->write( results ).
  ENDMETHOD.
  METHOD get\_formats.
    DATA: formats TYPE abap\_attrdescr\_tab,
          format  LIKE LINE OF formats.
    FIELD-SYMBOLS <format> LIKE cl\_abap\_format=>o\_scientific.
    formats =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
             )->attributes.
    DELETE formats WHERE name NP 'O\_\*' OR is\_constant <> 'X'.
    LOOP AT formats INTO format.
      ASSIGN cl\_abap\_format=>(format-name) TO <format>.
      me->format-value = <format>.
      me->format-name = format-name.
      INSERT me->format INTO TABLE me->formats.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

The class depicts the effects of all possible output formats for a [decimal floating point number](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendecfloat_glosry.htm "Glossary Entry") with the output formats from the class CL\_ABAP\_FORMAT. The possible output formats are read using RTTI and are sorted according to their value. Formatting takes place once with the addition [STYLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm) of the statement [WRITE TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm) and twice with the parameter [STYLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute_string_format_options.htm) in [embedded expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates_expressions.htm) of [string templates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstring_templates.htm).

For the first string template, the format RAW is used implicitly for the formatting option NUMBER, which is why a period (.) and not a thousands separator is used as the decimal separator. Explicitly specifying the format USER creates the same formatting as WRITE TO.