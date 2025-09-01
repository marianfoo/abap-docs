---
title: "Syntax"
description: |
  ... INCLUDE incl OFFSET off MESSAGE-ID mid ... Additions: 1. ... INCLUDE incl(#!ABAP_ADDITION_1@1@) 2. ... OFFSET off(#!ABAP_ADDITION_2@2@) 3. ... MESSAGE-ID mid(#!ABAP_ADDITION_3@3@) Effect These additions can be used for analyzing the syntax errors detected using t
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_error_handling.htm"
abapFile: "abapsyntax-check_error_handling.htm"
keywords: ["do", "while", "if", "try", "data", "abapsyntax", "check", "error", "handling"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_generic_program.htm) →  [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_for_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYNTAX-CHECK%2C%20error_handling%2C%20ABAPSYNTAX-CHECK_ERROR_HANDLING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SYNTAX-CHECK, error\_handling

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_shortref.htm)

Syntax

... *\[*INCLUDE incl*\]*
    *\[*OFFSET off*\]*
    *\[*MESSAGE-ID mid*\]* ...

Additions:

[1\. ... INCLUDE incl](#!ABAP_ADDITION_1@1@)
[2\. ... OFFSET off](#!ABAP_ADDITION_2@2@)
[3\. ... MESSAGE-ID mid](#!ABAP_ADDITION_3@3@)

Effect

These additions can be used for analyzing the syntax errors detected using the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-check_for_itab.htm).

Addition 1   

... INCLUDE incl

Effect

If one or more [include programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninclude_program_glosry.htm "Glossary Entry") are included in the source code contained in itab, and one of these programs contains the first syntax error of the checked program, the name of this include program is assigned to the variable incl. incl must be a character-like data object.

Addition 2   

... OFFSET off

Effect

If the source code in itab contains one or more syntax errors, the offset of the first token with errors in relation to the line in the source code is assigned to the variable off. off expects the data type i.

Addition 3   

... MESSAGE-ID mid

Effect

If the source code in itab contains one or more syntax errors, the key under which the first error message in the database table TRMSG is stored is assigned to the variable mid.

The key of the database table TRMSG consists of the components SPRAS of length 1, KEYWORD of length 20, and MSGNUMBER of length 4. The component MSGNUMBER is used to include a three-character ID. The fourth position can contain a blank character or a letter. For error messages with multiple parts that occupy more than one line in TRMSG, all parts have the same three-character ID, while the fourth character indicates a part of the message.

The data object mid must have the data type TRMSG\_KEY from the ABAP Dictionary, which consists of the components SPRAS with length 1, KEYWORD with length 20, and MSGNUMBER with length 3.