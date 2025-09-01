---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_bigint_sqrt DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. PRIVATE SECTION. DATA:p_int    TYPE i VALUE 2, p_digits TYPE i VALUE 1000. ENDCLASS.  Public class implementation CLASS cl_demo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbigint1_abexa.htm"
abapFile: "abenbigint1_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "abenbigint1", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencompute_expressions.htm) →  [System Classes for Numbers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_math.htm) →  [System Class CL\_ABAP\_BIGINT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_bigint_doc.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_ABAP_BIGINT%2C%20Square%20Root%20Calculation%2C%20ABENBIGINT1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_ABAP\_BIGINT, Square Root Calculation

This example uses methods of the system class CL\_ABAP\_BIGINT to calculate the square root of a natural number to any number of decimal places.

Source Code   

\* Public class definition
CLASS cl\_demo\_bigint\_sqrt DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:p\_int    TYPE i VALUE 2,
         p\_digits TYPE i VALUE 1000.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_bigint\_sqrt IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = p\_int
     )->add\_field( CHANGING field = p\_digits
     )->request( ).
    " compute arbitrary many digits of sqrt( p\_int )
    " compute the integer square root and add "2 \* p\_digits"
    " 0s at the end to get the "rational" part
    " at the end only the decimal point has to be positioned at the
    " right place
    out->write\_html(
      shift\_right( val =
        shift\_right( val = REDUCE string( LET number\_string =
          shift\_left( val = |{ p\_int NUMBER = RAW }| &&
          repeat( val = \`0\` occ = p\_digits \* 2 ) sub = \`0\` )
          sqrt = cl\_abap\_bigint=>factory\_from\_string(
            number\_string )->sqrt( )->to\_string( )
                             IN INIT sqrt\_str = \`\`
                             FOR n = 0 UNTIL n >= strlen( sqrt )
                             LET char = sqrt+n(1) IN
                             NEXT  sqrt\_str = sqrt\_str &&
                             COND #( WHEN n = strlen( sqrt ) - p\_digits
                             THEN \`.\` && char ELSE char ) )
                  sub = \`0\` )
                  sub = \`.\` )
    ).
  ENDMETHOD.
ENDCLASS.

Description   

The user can enter two integers:

-   p\_int is an integer that the square root will be calculated from.
-   p\_digits specifies the number of decimal places of the result.

Methods of the system class CL\_ABAP\_BIGINT are used to return the square root of p\_int with the required number of decimal places.