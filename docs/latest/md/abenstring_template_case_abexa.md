  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Expressions (string\_exp)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string.htm) →  [string\_exp - String Templates (string\_tmpl)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm) →  [string\_tmpl - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_tmpl%20-%20Case%2C%20ABENSTRING_TEMPLATE_CASE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_tmpl - Case

This example demonstrates how case is specified for embedded expressions.

Source Code   

\* Public class definition
CLASS cl\_demo\_str\_template\_case DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_str\_template\_case IMPLEMENTATION.
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
    out->write( output ).
  ENDMETHOD.
ENDCLASS.

Description   

The three possible settings for case in a string template are specified dynamically.