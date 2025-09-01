---
title: "SYNTAX-CHECK"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_shortref.htm) Syntax SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd PROGRAM prog DIRECTORY ENTRY dir WITH CURRENT SWITCHSTATES error_handling(https://help.sap.com/doc/ab
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_for_itab.htm"
abapFile: "abapsyntax-check_for_itab.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "internal-table", "abapsyntax", "check", "for", "itab"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_program.htm) → 

SYNTAX-CHECK

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_shortref.htm)

Syntax

SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd
                 *\[*PROGRAM prog*\]* *\[*DIRECTORY ENTRY dir*\]*
                 *\[*WITH CURRENT SWITCHSTATES*\]*
                 *\[*[error\_handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_error_handling.htm)*\]*.

Extras:

[1\. ... PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... DIRECTORY ENTRY dir](#!ABAP_ADDITION_2@2@)
[3\. ... WITH CURRENT SWITCHSTATES](#!ABAP_ADDITION_3@3@)

Effect

This statement executes a [syntax check](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensyntax_check_glosry.htm "Glossary Entry") on the content of the internal table itab. The internal table itab must be a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") with a character-like row type.

If the internal table does not contain syntactically correct ABAP source code, then:

-   The error message of the first syntax error is assigned to variable mess. mess must be a character-like data object.
    
-   The line number of the first syntax error, with reference to the program in which it occurs (either the source code in itab or an integrated [include program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") included there) is assigned to the variable lin. lin expects the data type i.
    
-   The first token with errors is assigned to the variable wrd. wrd must be a character-like data object.
    

The additions PROGRAM and DIRECTORY ENTRY are used to set the attributes for the syntax check. The addition WITH CURRENT SWITCHSTATES specifies which switch configuration is used for the syntax check. The other [error\_handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_error_handling.htm) additions can be used to identify other attributes of the first syntax error.

System Fields

sy-subrc

Meaning

0 (means:

The internal table itab contains a syntactically correct ABAP program.

4

The internal table itab does not contain a syntactically correct ABAP program.

8

A runtime error occurred in the syntax check.

If a runtime error occurs during the syntax check (sy-subrc has the value 8), a database rollback is executed in the usual manner. As usual, the short dump of the runtime error can be found in [ABAP Dump Analysis](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dump_analsyis_glosry.htm "Glossary Entry").

If the internal addition [ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_internal.htm) is specified with ERR, the value 6 can also occur for sy-subrc.

Note

It is not required to execute the statement SYNTAX-CHECK directly before [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subroutine_pool.htm) or [GENERATE REPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_report.htm), since the syntax check is always performed when these statements are executed.

Addition 1

... PROGRAM prog

Addition 2

... DIRECTORY ENTRY dir

Effect

These additions are used to specify the [program attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") used for the syntax check.

-   The PROGRAM addition is used to specify in prog the name of an ABAP program whose program attributes are to be used for the syntax check. prog must be a character-like data object, whose content is not case-sensitive. If the specified program is not found, the standard attributes specified below are used.
    
-   After the DIRECTORY ENTRY addition, you must specify a data object dir, whose data type corresponds to the structure of database table TRDIR from ABAP Dictionary. In the components of this structure, you can specify the required program attributes. Invalid values are replaced implicitly by internally defined standard values.
    

At least one of the two additions PROGRAM or DIRECTORY ENTRY must be specified. If both additions are specified, the program attributes are determined by the structure dir.

Notes

-   It is advisable to use the addition PROGRAM, since the components of the structure dir and their valid values can be interpreted within the system only. If the addition DIRECTORY ENTRY is nevertheless used in application programs, the content of the structure dir should be set by reading the appropriate entry from the database table TRDIR and by modifying only individual components as required.
    
-   Examples of program attributes that are important for the syntax check are the program types and the [ABAP language version](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_version_glosry.htm "Glossary Entry").
    

Example

Syntax check for source code in itab. By reading the attributes of the current program from the database TRDIR into the structure dir, these can be used after DIRECTORY ENTRY. When the version ID in the component dir-uccheck is set, the first syntax check is executed in the same way as for programs with the obsolete language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennon_unicode_program_glosry.htm "Glossary Entry"). The second syntax check is executed as for programs with language version [Standard ABAP (Unicode)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunicode_program_glosry.htm "Glossary Entry"). The first syntax check finds the error indicating that the program is not Unicode-enabled. The second syntax check always identifies the error when the addition BYTE or CHARACTER MODE is missing from the statement DESCRIBE.

DATA: itab TYPE STANDARD TABLE OF string,
      mess TYPE string,
      lin  TYPE i,
      wrd  TYPE string,
      dir  TYPE trdir.
itab = VALUE  #(
  ( \`PROGRAM test.\` )
  ( \`DATA dat TYPE d.\` )
  ( \`DATA len TYPE i.\`   )
  ( \`DESCRIBE FIELD dat LENGTH len.\` ) ).
SELECT SINGLE \*
       FROM trdir
       WHERE name = @sy-repid
       INTO @dir.
dir-uccheck = ' '.
SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd
             DIRECTORY ENTRY dir.
IF sy-subrc = 4.
  MESSAGE mess TYPE 'I'.
ENDIF.
dir-uccheck = 'X'.
SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd
             DIRECTORY ENTRY dir.
IF sy-subrc = 4.
  MESSAGE mess TYPE 'I'.
ENDIF.

Executable Example

[Program generation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_generation_abexa.htm)

Addition 3

... WITH CURRENT SWITCHSTATES

Effect

This addition causes the syntax check to use the switch configuration of [Switch Framework](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenswitch_german_glosry.htm "Glossary Entry"), in the state it had when the current transaction was called. Without the addition, the switch configuration valid when the statement is executed is used.

-   This addition causes the syntax check to run with the same switch states from Switch Framework as were used when the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapgenerate_subroutine_pool.htm) was executed.
    
-   Without the addition, the syntax check is performed in the same way as for every regular compilation of ABAP programs.
    

Continue
[SYNTAX-CHECK - error\_handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_error_handling.htm)
[SYNTAX-CHECK - Internal Additions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_internal.htm)