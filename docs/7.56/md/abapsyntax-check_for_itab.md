  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_generic_program.htm) → 

SYNTAX-CHECK

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsyntax-check_shortref.htm)

Syntax

SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd
                 *\[*PROGRAM prog*\]* *\[*DIRECTORY ENTRY dir*\]*
                 *\[*WITH CURRENT SWITCHSTATES*\]*
*\[*[error\_handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsyntax-check_error_handling.htm)*\]*.

Additions:

[1\. ... PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... DIRECTORY ENTRY dir](#!ABAP_ADDITION_2@2@)
[3\. ... WITH CURRENT SWITCHSTATES](#!ABAP_ADDITION_3@3@)

Effect

This statement executes a [syntax check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensyntax_check_glosry.htm "Glossary Entry") on the content of the internal table itab. The internal table itab must be a [standard table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") with a character-like line type.

If the internal table does not contain syntactically correct ABAP source code, then:

-   The error message of the first syntax error is assigned to variable mess. mess must be a character-like data object.
-   The line number of the first syntax error, with reference to the program in which it occurs (either the source code in itab or an integrated [include program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninclude_program_glosry.htm "Glossary Entry") included there) is assigned to the variable lin. lin expects the data type i.
-   The first token with errors is assigned to the variable wrd. wrd must be a character-like data object.

The additions PROGRAM and DIRECTORY ENTRY are used to set the attributes for the syntax check. The addition WITH CURRENT SWITCHSTATES affects which switch configuration is used for the syntax check. The other [error\_handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsyntax-check_error_handling.htm) additions can be used to identify other attributes of the first syntax error.

System Fields

sy-subrc

Meaning

0

The internal table itab contains a syntactically correct ABAP program.

4

The internal table itab does not contain a syntactically correct ABAP program.

8

A runtime error occurred in the syntax check.

If a runtime error occurs during the syntax check (sy-subrc has the value 8), a database rollback is executed in the usual manner. As usual, the short dump of the runtime error can be found in the [ABAP Dump Analysis](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dump_analsyis_glosry.htm "Glossary Entry").

If the internal addition [ID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsyntax-check_internal.htm) is specified with ERR, the value 6 can also occur for sy-subrc.

Hint

It is not necessary to execute the statement SYNTAX-CHECK directly before [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subroutine_pool.htm) or [GENERATE REPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_report.htm), since the syntax check is always performed when these statements are executed.

Addition 1   

... PROGRAM prog

Addition 2   

... DIRECTORY ENTRY dir

Effect

These additions are used to specify the [program attributes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_attribute_glosry.htm "Glossary Entry") used for the syntax check.

-   The PROGRAM addition is used to specify in prog the name of an ABAP program whose program attributes are to be used for the syntax check. prog must be a character-like data object, whose content is not case-sensitive. If the specified program is not found, the program type is set to 1 and the other attributes are set to general standard values.
-   After the DIRECTORY ENTRY addition, a data object dir must be specified, whose data type corresponds to the structure of database table TRDIR from the ABAP Dictionary. The required program attributes can be specified in the components of this structure. Invalid values are replaced implicitly by internally defined standard values.

At least one of the two additions PROGRAM or DIRECTORY ENTRY must be specified. If both additions are specified, the program attributes are determined by the structure dir.

The [ABAP language version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_version_glosry.htm "Glossary Entry") used for the syntax check is either taken from program prog or from component UCCHECK of structure dir. If a restricted language version like [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_sap_cloud_glosry.htm "Glossary Entry") or [ABAP for Key Users](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry") is set, the syntax check leads to errors if:

-   ABAP language elements are used that are [not allowed for that ABAP version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrestricted_abap_elements.htm).
-   [Repository objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_object_glosry.htm "Glossary Entry") are accessed that are not part of the [released API](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreleased_api_glosry.htm "Glossary Entry") for that version.
    
    This check depends on the software component to which the program specified by prog or dir is assigned. This assignment is done in database table TDEVC for the [package](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpackage_glosry.htm "Glossary Entry") of the program. The statement SYNTAX-CHECK gets the package of the program from database table TADIR. It cannot be overridden by a component of structure dir.
    

Hints

-   It is advisable to use the addition PROGRAM, since the components of the structure dir and their valid values are only known to the ABAP runtime framework. If the addition DIRECTORY ENTRY is used in application programs nevertheless, the content of the structure dir should be set by reading the appropriate entry from the database table TRDIR and by modifying only such components that are identifiable.
-   Examples of program attributes that are important for the syntax check are the program types and the [ABAP language version](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_version_glosry.htm "Glossary Entry").

Example

Syntax check for source code in itab. By reading the attributes of the current program from the database TRDIR into the structure dir, these can be used after DIRECTORY ENTRY. When the version ID in the component dir-uccheck is set, the first syntax check is performed in the same way as for programs with the obsolete language version [Non-Unicode ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennon_unicode_abap_glosry.htm "Glossary Entry"). The second syntax check is executed as for programs with language version [Standard ABAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_abap_glosry.htm "Glossary Entry"). The first syntax check finds the error indicating that the program is not Unicode-enabled. The second syntax check always identifies the error when the addition BYTE or CHARACTER MODE is missing from the statement DESCRIBE.

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

[Program generation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_generation_abexa.htm)

Addition 3   

... WITH CURRENT SWITCHSTATES

Effect

This addition causes the syntax check to use the switch configuration of [Switch Framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry") as it was when the current transaction was called. Without the addition, the switch configuration valid when the statement is executed is used.

-   This addition causes the syntax check to run with the same switch states from the Switch Framework as when the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subroutine_pool.htm) was executed.
-   Without the addition, the syntax check is performed in the same way as for any regular compilation of ABAP programs.

Continue
[SYNTAX-CHECK, error\_handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsyntax-check_error_handling.htm)
[SYNTAX-CHECK, Internal Additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsyntax-check_internal.htm)