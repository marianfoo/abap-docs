  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [Regular Expressions](javascript:call_link\('abenregular_expressions.htm'\)) → 

Regular Expressions

The example demonstrates how to search for regular expressions.

An extended example that also allows replacements is DEMO\_REGEX\_TOY.

Source Code

REPORT demo\_regex.
DATA: text   TYPE c LENGTH 120,
      regx   TYPE c LENGTH 120,
      first  TYPE c LENGTH 1 VALUE 'X',
      all    TYPE c LENGTH 1,
      nocase TYPE c LENGTH 1 VALUE 'X',
      case   TYPE c LENGTH 1,
      docu   TYPE REF TO cl\_gui\_control.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA: result\_area TYPE REF TO cl\_gui\_custom\_container,
                result\_view TYPE REF TO cl\_gui\_html\_viewer,
                result\_wa   TYPE string.
    CONSTANTS   repl TYPE string
                     VALUE \`@@tgl@@$0@@tgr@@\`.
    CLASS-METHODS: display,
                   append\_text IMPORTING value(text) TYPE string
                               CHANGING  html        TYPE w3\_htmltab.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    text = \`Cathy's cat with the hat sat on Matt's mat.\`.
    regx = '(.AT)|(\\<.at\\>)'.
    DO.
      TRY.
          result\_wa = text.
          IF first = 'X' AND nocase = 'X'.
            REPLACE FIRST OCCURRENCE OF REGEX regx IN result\_wa
                    WITH repl
                    IGNORING CASE.
          ELSEIF all = 'X' AND nocase = 'X'.
            REPLACE ALL OCCURRENCES OF REGEX regx IN result\_wa
                    WITH repl
                    IGNORING CASE.
          ELSEIF first = 'X' AND case = 'X'.
            REPLACE FIRST OCCURRENCE OF REGEX regx IN result\_wa
                    WITH repl
                    RESPECTING CASE.
          ELSEIF all = 'X' AND case = 'X'.
            REPLACE ALL OCCURRENCES OF REGEX regx IN result\_wa
                    WITH repl
                    RESPECTING CASE.
          ENDIF.
        CATCH cx\_sy\_regex.
          MESSAGE 'Invalid Regular Expression' TYPE 'S'
                                               DISPLAY LIKE 'E'.
          CLEAR result\_wa.
        CATCH cx\_sy\_regex\_too\_complex.
          MESSAGE 'Regular Expression too Complex' TYPE 'S'
                                                   DISPLAY LIKE 'E'.
          CLEAR result\_wa.
      ENDTRY.
      display( ).
    ENDDO.  ENDMETHOD.
  METHOD display.
    DATA: result\_html TYPE w3\_htmltab,
          url         TYPE c LENGTH 255.
    IF result\_area IS INITIAL.
      CREATE OBJECT: result\_area EXPORTING container\_name = 'RESULT',
                     result\_view EXPORTING parent = result\_area.
    ENDIF.
    "Prepare result for HTML browser
    result\_wa = escape( val    = result\_wa
                        format = cl\_abap\_format=>e\_html\_attr\_dq ).
    REPLACE ALL OCCURRENCES OF:
      '@@tgl@@' IN result\_wa WITH '<font color="#FF0000"><b>',
      '@@tgr@@' IN result\_wa WITH '</b></font>'.
    CLEAR result\_html.
    APPEND '<html><body>'   TO result\_html.
    append\_text(
      EXPORTING text = result\_wa
      CHANGING  html   = result\_html ).
    APPEND '</body></html>' TO result\_html.
    result\_view->load\_data( IMPORTING assigned\_url = url
                            CHANGING  data\_table   = result\_html ).
    result\_view->show\_url( url = url ).
    CALL SCREEN 100.
    IF sy-ucomm = 'DEMO'.
      SUBMIT demo\_regex\_toy.
    ELSEIF sy-ucomm = 'DOCU'.
      cl\_abap\_docu=>show(
        EXPORTING
          area           = 'ABEN'
          name           = 'REGEX\_SYNTAX'
        IMPORTING
          docu\_container =  docu ).
    ENDIF.
  ENDMETHOD.
  METHOD append\_text.
    DATA: html\_line TYPE w3html,
          length    TYPE i,
          pos       TYPE i.
    DESCRIBE FIELD html\_line LENGTH length IN CHARACTER MODE.
    pos = strlen( text ).
    WHILE pos > length.
      APPEND text(length) TO html.
      SHIFT text LEFT BY length PLACES.
      SUBTRACT length FROM pos.
    ENDWHILE.
    APPEND text TO html.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).
MODULE status\_0100 OUTPUT.
  SET TITLEBAR  'TITLE\_100'.
  SET PF-STATUS 'SCREEN\_100'.
  SET CURSOR FIELD 'RES'.
  IF NOT docu IS INITIAL.
    cl\_gui\_control=>set\_focus(
      EXPORTING
        control = docu ).
    CLEAR docu.
  ENDIF.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.

Description

The example displays a screen in which a text line and a regular expression can be entered. The program scans the text line text for the first or all areas that match the search pattern defined in the regular expression regx and highlights these areas in a result field. The search can be case-sensitive, if required. The search uses the statement [REPLACE](javascript:call_link\('abapreplace.htm'\)), which embeds the occurrence between "@@tgl@@ to the left and "@@tgr@@ to the right. The operator $0 is used as a placeholder for the occurrence in the replacement text repl. The method display formats the text for the representation of the occurrences in HTML format and displays it.

The predefined example text is:

"Cathy's cat with the hat sat on Matt's mat."

and the predefined regular expression is:

(.AT)|(\\<.at\\>)

The regular expression describes

-   a sequence of three characters, where the first is any single character and the other two are "AT", or

-   a word made of three characters, where the first is any single character and the other two are "at".

Depending on the search settings, the following occurrences are found:

-   The non-case-sensitive search for the first occurrence finds the "Cat" of "Cathy". This occurrence matches the expression .AT, but not the expression \\<.at\\>.

-   The case-sensitive search for the first occurrence finds the word "cat". This occurrence matches the expression \\<.at\\>, but not the expression .AT.

-   The non-case-sensitive search for all occurrences finds all three subsequences consisting of three characters that end with "at": "Cat", "cat", "hat", "sat", "Mat", and "mat". All occurrences match the expression .AT. However, only the words "cat", "hat", "sat", and "mat" match the expression \\<.at\\>.

-   The case-sensitive search for all occurrences finds the words "cat", "hat", "sat", and "mat". They all match the expression \\<.at\\>. None of the occurrences, however, matches .AT.