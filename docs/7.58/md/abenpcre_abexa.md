  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [FIND](javascript:call_link\('abapfind.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Find%20a%20PCRE%20Regular%20Expression%2C%20ABENPCRE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Find a PCRE Regular Expression

The example demonstrates how to search for a regular expression in PCRE syntax.

Source Code   

\* Public class definition
CLASS cl\_demo\_find\_pcre DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_find\_pcre IMPLEMENTATION.
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
          out->write\_html(
            \`<html><body>\` &&
            replace(
              val = text
              pcre = regex
              with = \`<font color="#FF0000"><b>$0</b></font>\` ) &&
                    \`</body></html>\` ).
        ELSE.
          out->write( \`Not found\` ).
        ENDIF.
      CATCH cx\_sy\_invalid\_regex INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

In the example, a line of text and a regular expression can be entered. The class searches the text line text for the first match of the search pattern defined in the regular expression regex and highlights this section in the result display. The search expects a PCRE regular expression and is case-sensitive. The statement [FIND](javascript:call_link\('abapfind.htm'\)) is used to search the statement, while the statement [REPLACE](javascript:call_link\('abapreplace.htm'\)) is used to mark the result. Here, the operator $0 serves as a placeholder for the match in the replacement text.

The predefined example text is:

Cathy's cat with the hat sat on Matt's mat.

and the predefined regular expression is:

(\\b.at\\b)

The regular expression describes a word consisting of three characters, where the first is any single character and the other two are at.

The case-sensitive search for the first occurrence finds the word cat.

Hint

The demonstration program DEMO\_REGEX can be used to test regular expressions before using them in programs.