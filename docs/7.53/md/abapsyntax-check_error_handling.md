  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) → 

SYNTAX-CHECK - error\_handling

[Quick Reference](javascript:call_link\('abapsyntax-check_shortref.htm'\))

Syntax

... *\[*INCLUDE incl*\]*
    *\[*OFFSET off*\]*
    *\[*MESSAGE-ID mid*\]* ...

Extras:

[1\. ... INCLUDE incl](#!ABAP_ADDITION_1@1@)
[2\. ... OFFSET off](#!ABAP_ADDITION_2@2@)
[3\. ... MESSAGE-ID mid](#!ABAP_ADDITION_3@3@)

Effect

These additions can be used for analyzing the syntax errors identified using the statement [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)).

Addition 1

... INCLUDE incl

Effect

If one or more [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are included in the source code contained in itab, and one of these programs contains the first syntax error of the checked program, the name of this include program is assigned to the variable incl. incl must be a character-like data object.

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