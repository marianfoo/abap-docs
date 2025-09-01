  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [string\_exp - String Expressions](javascript:call_link\('abapcompute_string.htm'\)) →  [string\_exp - String Templates](javascript:call_link\('abenstring_templates.htm'\)) →  [Examples of String Templates](javascript:call_link\('abenstring_templates_abexas.htm'\)) → 

String Templates, Case

This example demonstrates how case is specified for embedded expressions.

Source Code

REPORT demo\_string\_template\_case.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: output  TYPE TABLE OF string,
          formats TYPE abap\_attrdescr\_tab,
          format  LIKE LINE OF formats.
    FIELD-SYMBOLS <case> LIKE cl\_abap\_format=>c\_raw.
    formats =
      CAST cl\_abap\_classdescr(
             cl\_abap\_classdescr=>describe\_by\_name( 'CL\_ABAP\_FORMAT' )
             )->attributes.
    DELETE formats WHERE name NP 'C\_\*' OR is\_constant <> 'X'.
    LOOP AT formats INTO format.
      ASSIGN cl\_abap\_format=>(format-name) TO <case>.
      APPEND |{ format-name WIDTH = 20 }| &
             |{ \`UPPER CASE, lower case \` CASE = (<case>) }|
             TO output.
    ENDLOOP.
    cl\_demo\_output=>display( output ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The three possible settings for case in a string template are specified dynamically.