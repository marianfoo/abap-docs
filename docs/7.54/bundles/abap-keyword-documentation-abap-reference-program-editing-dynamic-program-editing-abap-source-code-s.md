# ABAP Keyword Documentation / ABAP − Reference / program editing / Dynamic Program Editing / ABAP Source Code / SYNTAX-CHECK

Included pages: 3


### abapsyntax-check_for_itab.htm

  

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


### abapsyntax-check_error_handling.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_program.htm) →  [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_for_itab.htm) → 

SYNTAX-CHECK - error\_handling

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_shortref.htm)

Syntax

... *\[*INCLUDE incl*\]*
    *\[*OFFSET off*\]*
    *\[*MESSAGE-ID mid*\]* ...

Extras:

[1\. ... INCLUDE incl](#!ABAP_ADDITION_1@1@)
[2\. ... OFFSET off](#!ABAP_ADDITION_2@2@)
[3\. ... MESSAGE-ID mid](#!ABAP_ADDITION_3@3@)

Effect

These additions can be used for analyzing the syntax errors identified using the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_for_itab.htm).

Addition 1

... INCLUDE incl

Effect

If one or more [include programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") are included in the source code contained in itab, and one of these programs contains the first syntax error of the checked program, the name of this include program is assigned to the variable incl. incl must be a character-like data object.

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


### abapsyntax-check_internal.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_generic_program.htm) →  [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsyntax-check_for_itab.htm) → 

SYNTAX-CHECK - Internal Additions

Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Extras:

[1\. ... SHORTDUMP-ID sid](#!ABAP_ADDITION_1@1@)
[2\. ... TRACE-TABLE trt](#!ABAP_ADDITION_2@2@)
[3\. ... REPLACING incl](#!ABAP_ADDITION_3@3@)
[4\. ... FRAME ENTRY dir](#!ABAP_ADDITION_4@4@)
[5\. ... ID id TABLE idt](#!ABAP_ADDITION_5@5@)
[6\. ... FILTER flt](#!ABAP_ADDITION_6@6@)

Addition 1

... SHORTDUMP-ID sid

Effect

If a runtime error occurs, the field sid returns the maximum 30-character key of the corresponding [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry").

Addition 2

... TRACE-TABLE trt

Effect

Any trace output is stored in the internal table trt. The trace output is controlled by the statements SYNTAX-TRACE ON and SYNTAX-TRACE OFF. A standard table without secondary keys can be specified for trt.

Addition 3

... REPLACING incl

Effect

This addition can only be used together with the PROGRAM addition and under the following prerequisites:

The program text contained in the internal table itab does not include the main program, it contains an [include program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") instead, and the program named under PROGRAM is to be checked. However, if the include program specified in incl is integrated in this program, the content of the internal table itab should be used instead.

Addition 4

... FRAME ENTRY dir

Effect

The attributes required for checking the program (e.g. [logical database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), [program type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_type_glosry.htm "Glossary Entry")) are taken from the field dir. Here, dir expects a structure of type TRDIR .

Addition 5

... ID id TABLE idt

Effect

This addition writes information to the internal table idt. The identifier id controls the type of information that is written to the corresponding table itab.

For correction proposals (ID 'CORR'), the type group SLIN must be incorporated, and for other information, the type group SYNT. These type groups contain the required type specifications.

After ID, the following values can be entered for id that create the specified information:

Information About Use in Internal SAP Development Tools

Value

Information

MSG

Warning messages

CORR

Correction Suggestions

ERR

Error Messages

If ERR (collection of error messages) is specified and not all of the source code can be processed, sy-subrc is set to the value 6 instead of the value 4.

Information About Use Only in Compiler-Related Tools

Value

Information

SYMB

Technical dump of the symbol table

DATA

Data objects of the program

DPAR

Help properties of data objects

TYPE

Type objects of program

FOTY

Type objects, used by subroutines

FUTY

Type objects, used by function modules

TYCH

Components of type objects

CROS

Referenced data objects

STR

Name

FORM

Subroutines

FPAR

Subroutine parameters (FORM)

PERF

Subroutine calls

APAR

Subroutine parameters (PERFORM)

FUNC

Function modules

FFPA

Function module parameter

CALL

Function module calls

FAPA

Function module parameters (CALL FUNCTION)

HYPH

Data objects with hyphens in names

INCL

Includes in program

This information should never be analyzed in general tools, since its structure can change at any time.

Note

Other values after ID are undocumented, partly obsolete, and not released for use.

Example

Collecting syntax warnings in a table.

DATA:  prog\_tab TYPE TABLE OF string,
       message  TYPE string,
       line     TYPE i,
       word     TYPE string,
       warnings TYPE STANDARD TABLE OF rslinlmsg.
SYNTAX-CHECK FOR prog\_tab
                 MESSAGE message
                 LINE    line
                 WORD    word
                 PROGRAM '...'
                 ID 'MSG' TABLE warnings.

Addition 6

... FILTER flt

Effect

Only the ABAP statements specified in flt are respected in the check. flt must have the type SYNT\_FILTER from the [type group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentype_group_1_glosry.htm "Glossary Entry") SYNT.

Possible values are:

"SYNT\_FILTER\_INTERFACE"

Statements included in the interface of a program

"SYNT\_FILTER\_MCALL"

Statements that are required for method calls.
