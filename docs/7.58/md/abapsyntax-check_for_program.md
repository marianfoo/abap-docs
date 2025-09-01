---
title: "SYNTAX-CHECK FOR PROGRAM"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax SYNTAX-CHECK FOR PROGRAM prog MESSAGE mess LINE lin WORD wrd WITH CURRENT SWITCHSTATES error_handling(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_error_handling
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_for_program.htm"
abapFile: "abapsyntax-check_for_program.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapsyntax", "check", "for", "program"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_generic_program.htm) →  [Internal Statements for Source Code Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneric_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYNTAX-CHECK%20FOR%20PROGRAM%2C%20ABAPSYNTAX-CHECK_FOR_PROGRAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SYNTAX-CHECK FOR PROGRAM

This statement is for internal use only.
It must not be used in application programs.

Syntax

SYNTAX-CHECK FOR PROGRAM prog
                 MESSAGE mess LINE lin WORD wrd
                 *\[*WITH CURRENT SWITCHSTATES*\]*
                 *\[*[error\_handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_error_handling.htm)*\]*
                 *\[*REPLACING itab*\]*
                 *\[*SHORTDUMP-ID sid*\]*
                 *\[*TRACE-TABLE trt*\]*
                 *\[*ID id TABLE idt*\]*
                 *\[*FILTER flt*\]*.

Additions:

[1\. ... REPLACING itab](#!ABAP_ADDITION_1@1@)
[2\. ... SHORTDUMP-ID sid](#!ABAP_ADDITION_2@2@)
[3\. ... TRACE-TABLE trt](#!ABAP_ADDITION_3@3@)
[4\. ... ID id TABLE idt](#!ABAP_ADDITION_4@4@)
[5\. ... FILTER flt](#!ABAP_ADDITION_5@5@)

Effect

This statement performs a [syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensyntax_check_glosry.htm "Glossary Entry") for the program specified in prog. prog must be a [character-like data object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") that contains the name of an existing ABAP program. If the program specified does not exist, sy-subrc is set to 8. The properties of the specified program are used for the syntax check. The same applies to the additions MESSAGE, LINE, WORD, and [error\_handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_error_handling.htm) and the return codes in sy-subrc as to the statement [SYNTAX-CHECK FOR itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_for_itab.htm).

Addition 1   

... REPLACING itab

Effect

itab expects a standard table without secondary keys of table type SREPTAB with the line type SREPTABLN from the ABAP Dictionary, containing a replacement list for the include programs specified in the checked program. Each include program specified after INCLUDE in the program specified in prog is found in the column NAME of the internal table. If the name is found, the syntax check includes the source code referenced by the column SOURCE and not the specified include program. The properties used for the check are taken from the structure referenced by the column TRDIR.

Addition 2   

... SHORTDUMP-ID sid

Addition 3   

... TRACE-TABLE trt

Addition 4   

... ID id TABLE idt

Addition 5   

... FILTER flt

Effect

These additions work as described in [SYNTAX-CHECK - Internal Additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_internal.htm).