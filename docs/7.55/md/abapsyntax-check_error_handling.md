---
title: "Syntax"
description: |
  ... INCLUDE incl OFFSET off MESSAGE-ID mid ... Additions: 1. ... INCLUDE incl(#!ABAP_ADDITION_1@1@) 2. ... OFFSET off(#!ABAP_ADDITION_2@2@) 3. ... MESSAGE-ID mid(#!ABAP_ADDITION_3@3@) Effect These additions can be used for analyzing the syntax errors identified using
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_error_handling.htm"
abapFile: "abapsyntax-check_error_handling.htm"
keywords: ["do", "while", "if", "try", "data", "abapsyntax", "check", "error", "handling"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_generic_program.htm) →  [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_for_itab.htm) → 

SYNTAX-CHECK, error\_handling

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_shortref.htm)

Syntax

... *\[*INCLUDE incl*\]*
    *\[*OFFSET off*\]*
    *\[*MESSAGE-ID mid*\]* ...

Additions:

[1\. ... INCLUDE incl](#!ABAP_ADDITION_1@1@)
[2\. ... OFFSET off](#!ABAP_ADDITION_2@2@)
[3\. ... MESSAGE-ID mid](#!ABAP_ADDITION_3@3@)

Effect

These additions can be used for analyzing the syntax errors identified using the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsyntax-check_for_itab.htm).

Addition 1

... INCLUDE incl

Effect

If one or more [include programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") are included in the source code contained in itab, and one of these programs contains the first syntax error of the checked program, the name of this include program is assigned to the variable incl. incl must be a character-like data object.

Addition 2

... OFFSET off

Effect

If the source code in itab contains one or more syntax errors, the offset of the first token with errors in relation to the line in the source code is assigned to the variable off. off expects the data type i.

Addition 3

... MESSAGE-ID mid

Effect

If the source code in itab contains one or more syntax errors, the key under which the first error message in the database table TRMSG is stored is assigned to the variable mid.

The key of the database table TRMSG is made up of the components SPRAS of length 1, KEYWORD of length 20, and MSGNUMBER of length 4. The component MSGNUMBER is used for a three-character ID. The fourth position can contain a blank character or a letter. For error messages with multiple parts that occupy more than one line in TRMSG, all parts have the same three-character ID, while the fourth character indicates a part of the message.

The data object mid must have the data type TRMSG\_KEY from ABAP Dictionary, constructed from the components SPRAS with length 1, KEYWORD with length 20, and MSGNUMBER with length 3.