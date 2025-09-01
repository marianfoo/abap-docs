  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Examples](javascript:call_link\('abenstring_functions_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20count%2C%20find%2C%20and%20match%2C%20ABENSTRING_FUNCTION_FIND_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

string\_func - count, find, and match

The example demonstrates the string functions [count](javascript:call_link\('abencount_functions.htm'\)), [find](javascript:call_link\('abensearch_functions.htm'\)), and [match](javascript:call_link\('abenmatch_functions.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_find\_and\_match DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_find\_and\_match IMPLEMENTATION.
  METHOD main.
    DATA: text TYPE c LENGTH 120
               VALUE \`Cathy's cat with the hat sat on Matt's mat.\`,
          regx TYPE c LENGTH 120
               VALUE \`\\b.at\\b\`.
    DATA: result TYPE i,
          substr TYPE string.
    DATA o TYPE c LENGTH 120.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = text
     )->request(   CHANGING field = regx ).
    out->write( text ).
    TRY.
        result = count( val  = text
                        pcre = regx ).
        IF result = 0.
          out->write( 'Nothing found' ).
          RETURN.
        ENDIF.
        DO result TIMES.
          result = find( val  = text
                         pcre = regx
                         occ   = sy-index ).
          substr = match( val  = text
                          pcre = regx
                          occ  = sy-index ).
          DATA(len) = strlen( substr ).
          IF len <> 0.
            o+result(len) = substr.
          ELSE.
            o+result(1) = '�' .
          ENDIF.
        ENDDO.
      CATCH cx\_sy\_invalid\_regex INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    out->write( o ).
  ENDMETHOD.
ENDCLASS.

Description   

In the text field text, all occurrences are found using count and find that match a regular expression. When a search is successful, the substring found is read and displayed using the function match.

Instead of using the function count, it is also possible to use an unlimited DO loop that is exited using EXIT if the result of find has the value -1.