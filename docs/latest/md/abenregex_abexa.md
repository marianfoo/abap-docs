  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [Regular Expressions (regex)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregular_expressions.htm) →  [regex - System Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenregex_system_classes.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20regex%20-%20Search%20for%20a%20Regular%20Expression%2C%20ABENREGEX_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

regex - Search for a Regular Expression

The example demonstrates how to search for a regular expression.

Source Code   

\* Public class definition
CLASS cl\_demo\_find\_regex DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_find\_regex IMPLEMENTATION.
  METHOD main.
    DATA regobj TYPE REF TO cl\_abap\_regex.
    DATA(regex)    = \`\\b.at\\b\`.
    DATA(text)     = \`Cathy's cat with the hat sat on Matt's mat.\`.
    DATA standard TYPE cl\_abap\_regex=>regex\_standard.
    standard = cl\_abap\_regex=>c\_regex\_standard-pcre.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = text
      )->add\_field( CHANGING field = regex
      )->add\_field( CHANGING field = standard
      )->request( ).
    CASE standard.
      WHEN cl\_abap\_regex=>c\_regex\_standard-pcre.
        regobj = cl\_abap\_regex=>create\_pcre( regex ).
      WHEN cl\_abap\_regex=>c\_regex\_standard-xpath2.
        regobj = cl\_abap\_regex=>create\_xpath2( regex ).
      WHEN cl\_abap\_regex=>c\_regex\_standard-xsd.
        regobj = cl\_abap\_regex=>create\_xsd( regex ).
      WHEN cl\_abap\_regex=>c\_regex\_standard-posix.
        regobj = cl\_abap\_regex=>create\_posix( regex ) ##regex\_posix.
    ENDCASE.
    FIND REGEX regobj IN text.
    IF sy-subrc = 0.
      REPLACE REGEX regobj IN text
              WITH  \`<font color="#FF0000"><b>$0</b></font>\`.
      out->write\_html(
        \`<html><body>\` && text && \`</body></html>\` ).
    ELSE.
      out->write( \`Not found\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

Description   

The example allows a text, a regular expression, and the syntax of the regular expression to be entered. The class searches the text line text for the first match of the search pattern defined in the regular expression and highlights this section in the result display. The search is case-sensitive. For searching the statement [FIND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfind.htm) is used, while for marking the result, the statement [REPLACE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapreplace.htm) is used where the operator $0 serves as a placeholder for the match in the replacement text.

Hint

You can use the demonstration program DEMO\_REGEX to test regular expressions before using them in programs.