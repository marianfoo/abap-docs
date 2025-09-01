  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_processing_expr_func.htm) →  [string\_exp - String Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string.htm) →  [string\_exp - String Templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm) →  [Examples of string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_abexas.htm) → 

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