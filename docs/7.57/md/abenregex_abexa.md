  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions (regex)](javascript:call_link\('abenregular_expressions.htm'\)) →  [regex - System Classes](javascript:call_link\('abenregex_system_classes.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: regex - Search for a Regular Expression, ABENREGEX_ABEXA, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

regex - Search for a Regular Expression

The example demonstrates how to search for a regular expression.

Source Code   

REPORT demo\_find\_regex.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
      cl\_demo\_output=>display\_html(
        \`<html><body>\` && text && \`</body></html>\`).
    ELSE.
      cl\_demo\_output=>display( \`Not found\` ).
    ENDIF.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The example allows a text, a regular expression, and the syntax of the regular expression to be entered. The program searches the text line text for the first match of the search pattern defined in the regular expression and highlights this section in the result display. The search is case-sensitive. For searching the statement [FIND](javascript:call_link\('abapfind.htm'\)) is used, while for marking the result, the statement [REPLACE](javascript:call_link\('abapreplace.htm'\)) is used where the operator $0 serves as a placeholder for the match in the replacement text.

Hint

You can use the demonstration program DEMO\_REGEX to test regular expressions before using them in programs.