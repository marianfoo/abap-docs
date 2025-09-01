---
title: "Field Symbols, Cast Structures"
description: |
  This example demonstrates how field symbols are cast. Source Code  Public class definition CLASS cl_demo_fld_smbls_structure DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS cl_demo_f
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbols_struc_abexa.htm"
abapFile: "abenfield_symbols_struc_abexa.htm"
keywords: ["do", "if", "method", "class", "data", "field-symbol", "abenfield", "symbols", "struc", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_declarations.htm) →  [Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbols_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Field%20Symbols%2C%20Cast%20Structures%2C%20ABENFIELD_SYMBOLS_STRUC_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Field Symbols, Cast Structures

This example demonstrates how field symbols are cast.

Source Code   

\* Public class definition
CLASS cl\_demo\_fld\_smbls\_structure DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_fld\_smbls\_structure IMPLEMENTATION.
  METHOD main.
    DATA: wa(10) TYPE c VALUE '0123456789'.
    DATA: BEGIN OF line1,
            col1(3) TYPE c,
            col2(2) TYPE c,
            col3(5) TYPE c,
          END OF line1.
    DATA: BEGIN OF line2,
            col1(2) TYPE c,
            col2    TYPE sy-datum,
          END OF line2.
\* correct --------------------------------------------------------------
    FIELD-SYMBOLS: <f1> LIKE line1,
                   <f2> LIKE line2.
    ASSIGN wa TO: <f1> CASTING,
                  <f2> CASTING.
\* obsolete, not supported in methods -----------------------------------
    "FIELD-SYMBOLS: <f1> STRUCTURE line1 DEFAULT wa,
    "               <f2> STRUCTURE line2 DEFAULT wa.
\* ----------------------------------------------------------------------
    out->write(
             |{ <f1>-col1 } { <f1>-col2 } { <f1>-col3 }\\n| &&
             |{ <f2>-col1 } { <f2>-col2 }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The structures line1 and line2 are cast to the number string 0123456789. The structure is then accessed using the corresponding field symbol and the components are output individually. It should be noted that the date component contains an invalid date after the assignment, which is only used here for demonstration purposes.

The structures are cast using the ASSIGN CASTING statement. The obsolete addition STRUCTURE of the statement FIELD-SYMBOLS, replaced by ASSIGN CASTING, is shown here as a comment.