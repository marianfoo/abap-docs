  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [WRITE, TO](javascript:call_link\('abapwrite_to.htm'\)) →  [WRITE, format\_options](javascript:call_link\('abapwrite_to_options.htm'\)) → 

Decimal Floating Point Numbers, Formatting with STYLE

This example demonstrates the formatting of decimal floating point numbers.

Source Code

REPORT demo\_style LINE-SIZE 100 NO STANDARD PAGE HEADING.
CLASS cl\_abap\_format DEFINITION LOAD.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: BEGIN OF format,
                  value LIKE cl\_abap\_format=>e\_xml\_text,
                  name  TYPE abap\_attrdescr-name,
                END OF format,
                formats LIKE SORTED TABLE OF format
                        WITH UNIQUE KEY value.
    CLASS-METHODS get\_formats.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: number  TYPE decfloat34 VALUE '-12345.67890',
          BEGIN OF result,
            style         TYPE string,
            write\_to      TYPE c length 20,
            template\_raw  TYPE c length 20,
            template\_user TYPE c length 20,
          END OF result,
          results LIKE TABLE OF result,
          off     TYPE i,
          exc     TYPE REF TO cx\_sy\_unknown\_currency.
    get\_formats( ).
    LOOP AT demo=>formats INTO demo=>format.
      result-style = demo=>format-name+2.
      WRITE number TO result-write\_to
        STYLE demo=>format-value LEFT-JUSTIFIED.
      result-template\_raw =
        |{ number STYLE  = (demo=>format-value) }|.
      result-template\_user =
        |{ number STYLE  = (demo=>format-value)
                  NUMBER = USER }|.
      APPEND result TO results.
    ENDLOOP.
    cl\_demo\_output=>display( results ).  ENDMETHOD.
  METHOD get\_formats.
    DATA: formats  TYPE abap\_attrdescr\_tab,
          format   LIKE LINE OF formats.
    FIELD-SYMBOLS <format> LIKE cl\_abap\_format=>o\_scientific.
    formats =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
             )->attributes.
    DELETE formats WHERE name NP 'O\_\*' OR is\_constant <> 'X'.
    LOOP AT formats INTO format.
      ASSIGN cl\_abap\_format=>(format-name) TO <format>.
      demo=>format-value = <format>.
      demo=>format-name = format-name.
      INSERT demo=>format INTO TABLE demo=>formats.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The program depicts the effects of all possible output formats for a [decimal floating point number](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry") with the output formats from the class CL\_ABAP\_FORMAT. The possible output formats are read using RTTI and are sorted according to their value. Formatting takes place once with the addition [STYLE](javascript:call_link\('abapwrite_to_options.htm'\)) of the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) and twice with the parameter [STYLE](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) of [string templates](javascript:call_link\('abenstring_templates.htm'\)).

For the first string template, the format RAW is used implicitly for the formatting option NUMBER, which is why a period (.) and not a thousands separator is used as the decimal separator. Explicitly specifying the format USER creates the same formatting as WRITE TO.