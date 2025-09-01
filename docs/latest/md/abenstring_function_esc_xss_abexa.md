  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20escape%20for%20XSS%2C%20ABENSTRING_FUNCTION_ESC_XSS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

string\_func - escape for XSS

This example demonstrates the string function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm) for preventing XSS.

Source Code   

\* Public class definition
CLASS cl\_demo\_xss DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor .
  PRIVATE SECTION.
    DATA:
      in       TYPE REF TO if\_demo\_input,
      icf\_node TYPE string.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_xss IMPLEMENTATION.
  METHOD main.
    CONSTANTS xss\_demo TYPE string
                       VALUE \`foo" onmouseover="alert('Gotcha!')\`.
    DATA: query    TYPE string VALUE \`ABAP Objects\`,
          esc\_flag TYPE abap\_bool VALUE abap\_true,
          xss\_flag TYPE abap\_bool VALUE abap\_false.
    DO.
      in->add\_field( EXPORTING text = 'Input'
                     CHANGING field = query
       )->add\_field( EXPORTING text = 'Escape'
                               as\_checkbox = abap\_true
                     CHANGING field =  esc\_flag
       )->request(   EXPORTING text = 'XSS-Demo'
                               as\_checkbox = abap\_true
                     CHANGING field =  xss\_flag ).
      IF query IS INITIAL AND xss\_flag = abap\_false.
        EXIT.
      ENDIF.
      IF xss\_flag = abap\_true.
        query = escape( val    = xss\_demo
                        format = cl\_abap\_format=>e\_xss\_ml ).
        xss\_flag = abap\_false.
        CONTINUE.
      ENDIF.
      IF esc\_flag = abap\_true.
        query = escape( val    = query
                        format = cl\_abap\_format=>e\_xss\_ml ).
      ELSEIF query <> xss\_demo.
        MESSAGE
          \`Without escaping only the prepared XSS-Demo is allowed.\`
          TYPE 'I'.
        CONTINUE.
      ENDIF.
      FINAL(html) =
        \`<html>\`  &&
        \`<body>\`  &&
        \`<p><a href="\` && icf\_node &&
        \`?query=\` && query &&
        \`">Search in ABAP Documentation</a></p>\` &&
        \`<p><a href="http://www.google.com/search?q=\` &&
        query && \`">Search with Google</a></p>\` &&
        \`</body>\` &&
        \`</html>\` ##no\_text.
      cl\_abap\_browser=>show\_html( html\_string  = html
                                  buttons      = abap\_true
                                  check\_html   = abap\_false
                                  context\_menu = abap\_true ).
    ENDDO.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/docu\`.
    FINAL(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
    in  = cl\_demo\_input=>new( ).
  ENDMETHOD.
ENDCLASS.

Description   

A search term can be entered in a dialog box. An output window provides a search function in the ABAP keyword documentation and with an external search engine. By default, the input is escaped using the function escape and the format cl\_abap\_format=>e\_xss\_ml. This prevents cross site scripting ([XSS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxss_glosry.htm "Glossary Entry")).

The function can be disabled for specific input to demonstrate the effects of an XSS attack. The input makes the links on the output window and the following input field unusable. More harmful functions could be used instead of the JavaScript function alert, but are not allowed in this example.