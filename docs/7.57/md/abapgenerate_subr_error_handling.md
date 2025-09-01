---
title: "Syntax"
description: |
  ... MESSAGE mess INCLUDE incl LINE lin WORD wrd OFFSET off MESSAGE-ID mid SHORTDUMP-ID sid ... Additions: 1. ... MESSAGE mess(#!ABAP_ADDITION_1@1@) 2. ... INCLUDE incl(#!ABAP_ADDITION_2@2@) 3. ... LINE lin(#!ABAP_ADDITION_3@3@) 4. ..
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subr_error_handling.htm"
abapFile: "abapgenerate_subr_error_handling.htm"
keywords: ["select", "do", "if", "try", "data", "abapgenerate", "subr", "error", "handling"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_generic_program.htm) →  [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subroutine_pool.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GENERATE SUBROUTINE POOL, error_handling, ABAPGENERATE_SUBR_ERROR_HANDLING, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

GENERATE SUBROUTINE POOL, error\_handling

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_shortref.htm)

Syntax

... *\[*MESSAGE mess*\]*
    *\[*INCLUDE incl*\]*
    *\[*LINE lin*\]*
    *\[*WORD wrd*\]*
    *\[*OFFSET off*\]*
    *\[*MESSAGE-ID mid*\]*
    *\[*SHORTDUMP-ID sid*\]* ...

Additions:

[1\. ... MESSAGE mess](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE incl](#!ABAP_ADDITION_2@2@)
[3\. ... LINE lin](#!ABAP_ADDITION_3@3@)
[4\. ... WORD wrd](#!ABAP_ADDITION_4@4@)
[5\. ... OFFSET off](#!ABAP_ADDITION_5@5@)
[6\. ... MESSAGE-ID mid](#!ABAP_ADDITION_6@6@)
[7\. ... SHORTDUMP-ID sid](#!ABAP_ADDITION_7@7@)

Effect

These additions can be used to analyze syntax and generation errors of the [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subroutine_pool.htm) statement. Syntax errors can either occur in the source code specified in itab, or in the [include programs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry") included using the [INCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinclude_prog.htm) statement. Generation errors can occur, for example, if the program contains errors in declaration statements that are not identified in the static syntax check.

The following can be specified in all operand positions behind these additions:

-   An existing variable that matches the operand type.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable that matches the operand type is declared.

Addition 1   

... MESSAGE mess

Effect

If the subroutine pool contains one or more syntax errors, the text of the error message for the first syntax error is assigned to the variable mess. A character-like variable or an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) that creates a variable of type string can both be specified for mess.

If a generation error occurs (see the addition SHORTDUMP-ID), mess is also filled with the corresponding error message. If the subroutine pool can be generated, the content of mess remains unchanged.

Addition 2   

... INCLUDE incl

Effect

If one or more include programs are included in the subroutine pool and one of these contains the first syntax error of the subroutine pool, the name of this include program is assigned to the variable incl. A character-like variable or an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) that creates a variable of type PROGNAME can both be specified for incl.

If the first syntax error in the source code occurs in itab, incl is assigned the internal name that would have been returned if generation in prog had been successful. This name always begins with "%\_".

If a generation error occurs (see the addition SHORTDUMP-ID), incl is also filled with the name of the corresponding [include program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninclude_program_glosry.htm "Glossary Entry"). If the subroutine pool can be generated, the content of incl is not changed.

Addition 3   

... LINE lin

Effect

If the subroutine pool contains one or more syntax errors, the line number of the first syntax error in relation to the program in which it occurs (either the source code in itab or an integrated include program), is assigned to the variable lin. A variable of type i or an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) that creates a variable of this type can both be specified for lin.

If a generation error occurs (see the addition SHORTDUMP-ID), lin is also filled with the corresponding line number. If the subroutine pool can be generated, the content of lin is not changed.

Addition 4   

... WORD wrd

Effect

If the subroutine pool contains one or more syntax errors, the first token with an error is assigned to the variable wrd. A character-like variable or an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) that creates a variable of type string can be specified for wrd.

If a generation error occurs (see the addition SHORTDUMP-ID), wrd is also filled with the corresponding token. If the subroutine pool can be generated, the content of wrd is not changed.

Addition 5   

... OFFSET off

Effect

If the subroutine pool contains one or more syntax errors, the offset of the first token with errors, with reference to the line in the source code, is assigned to the variable off. A variable of type i or an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) that creates a variable of this type can both be specified for off.

If a generation error occurs (see the addition SHORTDUMP-ID), off is also filled with the corresponding offset. If the subroutine pool can be generated, the content of off is not changed.

Addition 6   

... MESSAGE-ID mid

Effect

If the subroutine pool contains one or more syntax errors, the key under which the first error message is stored in the database table TRMSG is assigned to the variable mid.

If a generation error occurs (see the addition SHORTDUMP-ID), mid is also filled with the corresponding key. If the subroutine pool can be generated, the content of mid is not changed.

The key of the database table TRMSG consists of the components SPRAS of length 1, KEYWORD of length 20, and MSGNUMBER of length 4. The component MSGNUMBER is used for a three-character ID. The fourth position can contain a blank character or a letter. For error messages with multiple parts that fill more than one line in the database table TRMSG, all parts have the same three-character ID. The fourth character indicates the part of the message.

The data object mid must have the data type TRMSG\_KEY from the ABAP Dictionary, which consists of the components SPRAS with length 1, KEYWORD with length 20, and MSGNUMBER with length 3. An [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) creates a structure like this.

Hint

The return value in mid only contains the three-character ID of a syntax error message. For example, to use SELECT to read all parts of an error message from table TRMSG, the key component MSGNUMBER must be specified generically in the [WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_stmt_logexp.htm), for example, by using LIKE and the wildcard character "%".

Addition 7   

... SHORTDUMP-ID sid

Effect

If the subroutine pool does not contain any statically known syntax errors, but an exception is raised during generation, the ID of the runtime error that is assigned to the exception is assigned to the variable sid. A character-like variable or an [inline declaration](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) that creates a variable of type string can be specified for sid.

If the subroutine pool can be generated, the content of sid is not changed.

Hints

-   An exception during generation interrupts the generation but does not terminate the program. The runtime error is handled internally, but still causes a [database rollback](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_commit_glosry.htm "Glossary Entry") and the [short dump](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshort_dump_glosry.htm "Glossary Entry") to be saved.
-   The IDs of runtime errors are contained in the key column ERRID of the database table SNAPT. Texts are assigned to the errors here.

Example

Detection and display of any syntax and generation errors that occur when a subroutine pool with errors is generated.

DATA tab TYPE STANDARD TABLE OF string WITH EMPTY KEY.
tab = VALUE #(
  ( \`PROGRAM subpool.\`     )
  ( \`FRM form.\`            )
  ( \` ...\`                 )
  ( \`ENDFORM.\`             ) ).
GENERATE SUBROUTINE POOL tab NAME FINAL(prog)
         MESSAGE                  FINAL(mess)
         INCLUDE                  FINAL(incl)
         LINE                     FINAL(line)
         WORD                     FINAL(wrd)
         OFFSET                   FINAL(off)
         MESSAGE-ID               FINAL(mid)
         SHORTDUMP-ID             FINAL(sid).
cl\_demo\_output=>display(
  |MESSAGE:      { mess }\\n| &&
  |INCLUDE:      { incl }\\n| &&
  |LINE:         { line }\\n| &&
  |WORD:         { wrd  }\\n| &&
  |OFFSET:       { off  }\\n| &&
  |MESSAGE-ID:   { CONV string( mid ) }\\n| &&
  |SHORTDUMP-ID: { sid }| ).