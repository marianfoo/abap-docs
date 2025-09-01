---
title: "String Functions, escape for XSS"
description: |
  This example demonstrates the string function escape(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm) for preventing XSS. Source Code REPORT demo_xss. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. CLASS-DATA: i
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_function_esc_xss_abexa.htm"
abapFile: "abenstring_function_esc_xss_abexa.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abenstring", "function", "esc", "xss", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Examples of String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_abexas.htm) → 

String Functions, escape for XSS

This example demonstrates the string function [escape](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenescape_functions.htm) for preventing XSS.

Source Code

REPORT demo\_xss.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
       main,
       class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      in  TYPE REF TO if\_demo\_input,
      icf\_node TYPE string.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    CONSTANTS xss\_demo TYPE string
                       VALUE \`foo" onmouseover="alert('Gotcha!')\`.
    DATA: query TYPE string VALUE \`ABAP Objects\`,
          esc\_flag  TYPE abap\_bool VALUE abap\_true,
          xss\_flag  TYPE abap\_bool VALUE abap\_false.
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
      DATA(html) =
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
    ENDDO.  ENDMETHOD.
  METHOD class\_constructor.
    CONSTANTS path TYPE string VALUE \`/sap/public/bc/abap/docu\`.
    DATA(location) =
      cl\_http\_server=>get\_location( application = path ).
    IF location IS NOT INITIAL.
      icf\_node = location && path.
    ENDIF.
    in  = cl\_demo\_input=>new( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A search term can be entered in a dialog box. An output window provides a search function in the ABAP keyword documentation and with an external search engine. By default, the input is escaped using the function escape and the format cl\_abap\_format=>e\_xss\_ml. This prevents cross site scripting ([XSS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxss_glosry.htm "Glossary Entry")).

The function can be disabled for specific input, which demonstrates the effects of an XSS attack. The input makes the links on the output window and the following input field unusable. More harmful functions could be used instead of the JavaScript function alert, but are not permitted in this example.