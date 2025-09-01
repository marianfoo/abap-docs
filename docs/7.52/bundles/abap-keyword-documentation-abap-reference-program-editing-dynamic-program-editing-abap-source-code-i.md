# ABAP - Keyword Documentation / ABAP - Reference / program editing / Dynamic Program Editing / ABAP Source Code / Internal Statements for Source Code Processing

Included pages: 6



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abengeneric_internal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_internal.htm)
- [abapsyntax-check_for_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_program.htm)
- [abapgenerate_report.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_report.htm)
- [abapload.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload.htm)
- [abapdelete_report.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_report.htm)
- [abapscan.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapscan.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.500Z

---

### abengeneric_internal.htm

> **📖 Official SAP Documentation**: [abengeneric_internal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_internal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) → 

Internal Statements for Source Code Processing

Internal Statements

These statements are for internal use only.
They cannot be used in application programs.

-   [SYNTAX-CHECK FOR PROGRAM](javascript:call_link\('abapsyntax-check_for_program.htm'\))

-   [GENERATE REPORT](javascript:call_link\('abapgenerate_report.htm'\))

-   [LOAD REPORT](javascript:call_link\('abapload.htm'\))

-   [DELETE REPORT](javascript:call_link\('abapdelete_report.htm'\))

-   [SCAN](javascript:call_link\('abapscan.htm'\))

Continue
[SYNTAX-CHECK FOR PROGRAM](javascript:call_link\('abapsyntax-check_for_program.htm'\))
[GENERATE REPORT](javascript:call_link\('abapgenerate_report.htm'\))
[LOAD REPORT](javascript:call_link\('abapload.htm'\))
[DELETE REPORT](javascript:call_link\('abapdelete_report.htm'\))
[SCAN](javascript:call_link\('abapscan.htm'\))



**📖 Source**: [abengeneric_internal.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_internal.htm)

### abapsyntax-check_for_program.htm

> **📖 Official SAP Documentation**: [abapsyntax-check_for_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_program.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [Internal Statements for Source Code Processing](javascript:call_link\('abengeneric_internal.htm'\)) → 

SYNTAX-CHECK FOR PROGRAM

This statement is for internal use only.
It must not be used in application programs.

Syntax

SYNTAX-CHECK FOR PROGRAM prog
                 MESSAGE mess LINE lin WORD wrd
                 *\[*WITH CURRENT SWITCHSTATES*\]*
                 *\[*[error\_handling](javascript:call_link\('abapsyntax-check_error_handling.htm'\))*\]*
                 *\[*REPLACING itab*\]*
                 *\[*SHORTDUMP-ID sid*\]*
                 *\[*TRACE-TABLE trt*\]*
                 *\[*ID id TABLE idt*\]*
                 *\[*FILTER flt*\]*.

Extras:

[1\. ... REPLACING itab](#!ABAP_ADDITION_1@1@)
[2\. ... SHORTDUMP-ID sid](#!ABAP_ADDITION_2@2@)
[3\. ... TRACE-TABLE trt](#!ABAP_ADDITION_3@3@)
[4\. ... ID id TABLE idt](#!ABAP_ADDITION_4@4@)
[5\. ... FILTER flt](#!ABAP_ADDITION_5@5@)

Effect

This statement performs a [syntax check](javascript:call_link\('abensyntax_check_glosry.htm'\) "Glossary Entry") for the program specified in prog. prog must be a [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") that contains the name of an existing ABAP program. If the program specified does not exist, sy-subrc is set to 8. The attributes of the specified program are used for the syntax check. The additions MESSAGE, LINE, WORD, and [error\_handling](javascript:call_link\('abapsyntax-check_error_handling.htm'\)) as well as the return codes in sy-subrc are subject to the same rules as the statement [SYNTAX-CHECK FOR itab](javascript:call_link\('abapsyntax-check_for_itab.htm'\)).

Addition 1

... REPLACING itab

Effect

itab specifies a standard table without secondary keys of table type SREPTAB with the row type SREPTABLN from ABAP Dictionary, containing a replacement list for the include programs specified in the checked program. Each include program specified after INCLUDE in the program specified in prog is found in the column NAME of the internal table. If the name is found, the syntax check includes the source code referenced by the column SOURCE and not the specified include program. The attributes used for the check are taken from the structure referenced by the column TRDIR.

Addition 2

... SHORTDUMP-ID sid

Addition 3

... TRACE-TABLE trt

Addition 4

... ID id TABLE idt

Addition 5

... FILTER flt

Effect

These additions work as described in [SYNTAX-CHECK - Internal Additions](javascript:call_link\('abapsyntax-check_internal.htm'\)).



**📖 Source**: [abapsyntax-check_for_program.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_program.htm)

### abapgenerate_report.htm

> **📖 Official SAP Documentation**: [abapgenerate_report.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_report.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [Internal Statements for Source Code Processing](javascript:call_link\('abengeneric_internal.htm'\)) → 

GENERATE REPORT

This statement is for internal use only.
It must not be used in application programs.

Syntax

GENERATE REPORT prog *\[*error\_handling*\]*.

Extras:

[1\. ... MESSAGE f1](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDE f2](#!ABAP_ADDITION_2@2@)
[3\. ... LINE f3](#!ABAP_ADDITION_3@3@)
[4\. ... WORD f4](#!ABAP_ADDITION_4@4@)
[5\. ... OFFSET f5](#!ABAP_ADDITION_5@5@)
[6\. ... TRACE-FILE f6](#!ABAP_ADDITION_6@6@)
[7\. ... DIRECTORY ENTRY f7](#!ABAP_ADDITION_7@7@)
[8\. ... WITHOUT SELECTION-SCREEN](#!ABAP_ADDITION_8@8@)
[9\. ... MESSAGE-ID f8](#!ABAP_ADDITION_9@9@)
[10.... SHORTDUMP-ID f9](#!ABAP_ADDITION_10@10@)
[11.... WITH PRECOMPILED HEADERS](#!ABAP_ADDITION_11@11@)
[12.... WITH TEST CODE](#!ABAP_ADDITION_12@12@)

Effect

The program specified in the prog field is generated in the current work process. If the program is an executable program (that is, a type 1 program), the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is also generated automatically.

For the syntax check, the switch configuration of [Switch Framework](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") is used in its current status at the time the statement is executed.

[Inline declarations](javascript:call_link\('abendata_inline.htm'\)) can be specified for the same operands, as is the case with the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)).

Notes

-   If the profile parameter abap/pxa has the value "develop", a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is triggered after generation.
    
-   The static method GET\_VALUES of the system class CL\_ABAP\_GEN\_LIMITS gets the generation limits of an ABAP program. In ABAP Workbench, these can be determined by choosing Program → Check → Generation Limits. The generation limits of an ABAP program are technical maximum values which must not be exceeded for a successful generation. The values affected include:
    

-   Number of variables

-   Size of the jump

-   etc.

Return Value

SY-SUBRC = 0:

Program was generated successfully

SY-SUBRC <> 0:

Program could not be generated

SY-SUBRC = 4:

A syntax error occurred

SY-SUBRC = 8:

A generation error occurred

SY-SUBRC = 16:

Error while generating the selection screen

If a runtime error occurs during generation (sy-subrc has the value 8 or 16), a database rollback is executed in the usual manner.

Addition 1

... MESSAGE f1

Effect

When a syntax error occurs, the error message is stored in this field.

Addition 2

... INCLUDE f2

Effect

When a syntax error occurs, the name of the [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") in which the error occurred is stored in this field.

Addition 3

... LINE f3

Effect

When a syntax error occurs, the number of the line in which the error occurred is stored in this field.

Addition 4

... WORD f4

Effect

When a syntax error occurs, the incorrect word is stored in this field.

Addition 5

... OFFSET f5

Effect

When a syntax error occurs, the position of the word with the error in the line with the error is stored in this field.

Addition 6

... TRACE-FILE f6

Effect

Trace output is stored in this file. This addition automatically activates trace mode.

Addition 7

... DIRECTORY ENTRY f7

Effect

The program attributes required for checking are read from field f7. This field must match the structure of table TRDIR.

Addition 8

... WITHOUT SELECTION-SCREEN

Effect

The [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is not generated.

Addition 9

... MESSAGE-ID f8

Effect

If a syntax error occurs, the key of the corresponding error message is returned in field f8. This key has the same layout as the key of table TRMSG.

Addition 10

... SHORTDUMP-ID f9

Effect

If a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry") occurs, the key of the corresponding short dump is returned in the f9 field. This key has a maximum length of 30 characters.

Addition 11

... WITH PRECOMPILED HEADERS

This addition allows precompiled headers to be regenerated when generating the ABAP program prog. Precompiled headers are used to increase the translation speed of ABAP Compiler by buffering the declaration data of global classes, interfaces, and [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") in formatted form for ABAP Compiler.

Note

If this addition is used, it must be ensured that the application performs a [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) or [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)) within a short period of time. This ensures that the [database locks](javascript:call_link\('abendatabase_lock_glosry.htm'\) "Glossary Entry") that are set when the precompiled headers are regenerated, are held for a short time only and therefore do not block generation of other ABAP programs.

Addition 12

... WITH TEST CODE

With this addition, the [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry") of the program are generated independently of the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") abap/test\_generation.



**📖 Source**: [abapgenerate_report.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_report.htm)

### abapload.htm

> **📖 Official SAP Documentation**: [abapload.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [Internal Statements for Source Code Processing](javascript:call_link\('abengeneric_internal.htm'\)) → 

LOAD REPORT

This statement is for internal use only.
It must not be used in application programs.

Syntax

LOAD REPORT prog PART part INTO itab.

Effect

The part (specified in part) of the generated form ([load](javascript:call_link\('abenload_glosry.htm'\) "Glossary Entry")) of the program prog, given in prog is loaded to the internal table itab for analysis.itab must be a standard table. Secondary keys are permitted.

The following table displays the possible content of part, its relevance, and the requested row type of itab.

part

Meaning

Row Type

'BASE'

Segment table

RBASE

'CLAS'

Defined classes

RCLAS

'CLFR'

Load table CLFR

RCLFR

'CONS'

Table of constants

x

'CREF'

Static addressing of classes

RCREF

'COMP'

Description of the components of the internal structures that are used in the program

RDATA

'CONT'

Processing control blocks

RCONT

'DATA'

Static data descriptions (see below)

RDATA

'DATL'

Load table DATL

RDATA

'DATP'

Data descriptions of the parameters and local field symbols

RDATA

'DATV'

Variable data descriptions (see below)

RDATA

'DDNM'

Used types from ABAP Dictionary

RDDNM

'EVNT'

Event descriptors defined by triggering class

REVNT

'EXCP'

Load table EXCP

REXCP

'GCIX'

Load table GCIX

RGCIX

'HEAD'

Program header

RHEAD

'INCL'

Load table INCL

c, length 40

'INIT'

Initial values of the local data

x

'INTC'

Load table INTC

RINTC

'INTD'

Used interfaces

RINTD

'INTI'

Implemented interfaces

RINTI

'INTR'

Load table INTR

RINTR

'IREF'

Additional information for addressing using [interface reference variables](javascript:call_link\('abeninterface_ref_variable_glosry.htm'\) "Glossary Entry")

RIREF

'LITL'

Literal table

x

'LITX'

Index table of literals

RLITX

'LREF'

Row reference

RLREF

'OREF'

Additional information for addressing using object references

ROREF

'PBAG'

Additional descriptions of the data types used in the program

RPBAG

'SELC'

Description of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") variables

RSELC

'SREF'

Load table SREF

RSREF

'SSCR'

Description of the selection screen

RSSCR

'STCO'

Load table STCO

x

'STOR'

Initial values of the global data

x

'STIX'

Load table SREF

RSTIX

'SYMB'

Symbol table

RSYMB

'SYMBDATA'

Load table SYMBDATA

RSYMBDATA

'SYMBEVNT'

Load table SYMBEVNT

RSYEV

'SYMBINTFEVNT'

Load table SYMBINTFEVNT

RSYIEV

'SYMBINTFMETH'

Load table SYMBINTFMETH

RSYIME

'SYMBMETH'

Load table SYMBMETH

RSYME

'SYMBMETHEXCP'

Load table SYMBMETHEXCP

RSYME

'SYMBMETHPARM'

Load table SYMBMETHPARM

RSYME

'TPLR'

Load table TPLR

RTPLR

'TRIG'

Event or time control blocks

RTRIG

'TXID'

Index of text elements (assignment of text keys to data control blocks)

RTXID

'TYPE'

Description of the data types

RTYPE

'VTAB'

Offsets for all methods (classes, [event handlers](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry"), instances, interfaces)

RVTAB

Comment on DATA and DATV:

To find the data description that belongs to a data index i, proceed as follows:

   0 <= i < 2^14  ==>  i+1        index in data\_itab
2^14 <= i < 2^15  ==>  i+1 - 2^14 index in datv\_itab
2^15 <= i < 2^16  ==>  i+1 - 2^15 parameter index

(2^14 = 16384, 2^15 = 32768)

Comment on row type x:

If the row type x is specified for the internal table, the width of the internal table determines the line break.

System Fields

sy-subrc

Meaning

 

0

The load of the program prog exists and is up-to-date. The internal table itab was filled.

 

4

The load of the program prog does not exist.

 

8

The load of the program prog exists, but is not up-to-date. In special cases, this sy-subrc can also mean that the program load has been destroyed. This can be fixed by generating again. In PART 'LREF', sy-subrc = 8 means that the row reference table does not fit the program. In PART 'CONT', the reference part of the internal table is not filled.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: An invalid description has been specified in PART .
    Runtime error: LOAD\_REPORT\_PART\_NOT\_FOUND
    
-   Cause: The specified internal table is too short.
    Runtime error: LOAD\_REPORT\_TABLE\_TOO\_SHORT



**📖 Source**: [abapload.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload.htm)

### abapdelete_report.htm

> **📖 Official SAP Documentation**: [abapdelete_report.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_report.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [Internal Statements for Source Code Processing](javascript:call_link\('abengeneric_internal.htm'\)) → 

DELETE REPORT

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE REPORT prog.

Addition:

[... STATE state](#!ABAP_ONE_ADD@1@)

Effect

Deletes the source code, attributes, text elements, and generated version of the program, whose names are in the data object prog. An entry for prog in the database table TADIR remains unchanged.

System Fields

sy-subrc

Meaning

0

The program was deleted.

4

The program does not exist.

Note

This statement does not delete the package assignment, the documentation, or the variants of the program in prog on the database. For this reason, the function module RS\_DELETE\_PROGRAM should be used to delete a program in full.

Addition

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    

-   the active version of the repository object or

-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.

-   If the addition state is specified, the statement accesses
    

-   the active version of the repository object if "A" is specified,

-   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE



**📖 Source**: [abapdelete_report.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_report.htm)

### abapscan.htm

> **📖 Official SAP Documentation**: [abapscan.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapscan.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapscan.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapscan.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [program editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [Internal Statements for Source Code Processing](javascript:call_link\('abengeneric_internal.htm'\)) → 

SCAN

This statement is for internal use only.
It must not be used in application programs.

Variants:

[1\. SCAN ABAP-SOURCE itab1 ...TOKENS INTO itab2](#!ABAP_VARIANT_1@1@)
                         ...STATEMENTS INTO itab3.
[2\. SCAN AND CHECK ABAP-SOURCE itab1 ...RESULT INTO itab2.](#!ABAP_VARIANT_2@2@)

Variant 1

SCAN ABAP-SOURCE itab1 ...TOKENS INTO itab2
                       ...STATEMENTS INTO itab3.
Parts marked with " ..." are interchangeable

Extras:

[1\. ... FROM n1](#!ABAP_ADDITION_1@1@)
[2\. ... TO   n2](#!ABAP_ADDITION_2@2@)
[3\. ... KEYWORDS   FROM itab](#!ABAP_ADDITION_3@3@)
[4\. ... LEVELS     INTO itab](#!ABAP_ADDITION_4@4@)
[5\. ... STRUCTURES INTO itab](#!ABAP_ADDITION_5@5@)
[6\. ... OVERFLOW INTO c1](#!ABAP_ADDITION_6@6@)
[7\. ... WITH ANALYSIS](#!ABAP_ADDITION_7@7@)
[8\. ... WITH DECLARATIONS](#!ABAP_ADDITION_8@8@)
[9\. ... WITH BLOCKS](#!ABAP_ADDITION_9@9@)
[10\. ... WITH COMMENTS](#!ABAP_ADDITION_10@10@)
[11\. ... WITH PRAGMAS pragmas](#!ABAP_ADDITION_11@11@)
[12\. ... WITH INCLUDES *\[*IMPLEMENTATIONS FROM itab*\]*](#!ABAP_ADDITION_12@12@)
[13\. ... WITH TYPE-POOLS](#!ABAP_ADDITION_13@13@)
[14\. ... WITH LIST TOKENIZATION](#!ABAP_ADDITION_14@14@)
[15\. ... PRESERVING IDENTIFIER ESCAPING](#!ABAP_ADDITION_15@15@)
[16\. ... WITHOUT TRMAC](#!ABAP_ADDITION_16@16@)
[17\. ... *\[*INCLUDE*\]* PROGRAM FROM c2](#!ABAP_ADDITION_17@17@)
[18\. ... INCLUDE INTO c3](#!ABAP_ADDITION_18@18@)
[19\. ... MESSAGE INTO c4](#!ABAP_ADDITION_19@19@)
[20\. ... WORD    INTO c5](#!ABAP_ADDITION_20@20@)
[21\. ... LINE    INTO n3](#!ABAP_ADDITION_21@21@)
[22\. ... OFFSET  INTO n4](#!ABAP_ADDITION_22@22@)
[23\. ... WITH EXPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*](#!ABAP_ADDITION_23@23@)
[24\. ... WITH IMPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*](#!ABAP_ADDITION_24@24@)
[25\. ... ENHANCEMENT OPTIONS INTO itab](#!ABAP_ADDITION_25@25@)
[26\. ... ENHANCEMENTS INTO itab](#!ABAP_ADDITION_26@26@)
[27\. ... WITH INACTIVE ENHANCEMENTS](#!ABAP_ADDITION_27@27@)
[28\. ... FRAME PROGRAM FROM c2](#!ABAP_ADDITION_28@28@)
[29\. ... REPLACING itab](#!ABAP_ADDITION_29@29@)

Effect

Breaks down the ABAP source code in the source code table itab1 into tokens according to the rules of the ABAP scanner. The tokens are written – one per row – to the token table itab2. The source code to be broken down need not necessarily be contained in an internal table. It can be specified in any character-like field. In particular, fields of the type STRING can be used. However, this variant only makes sense if the program to be broken down does not contain any comments. When an internal table is specified, itab1 must be a standard table.
The token table itab2 must be a standard table and have the structure STOKES. If the addition WITH ANALYSIS is specified, the token table must have the extended structure STOKESX.
(For reasons of downward compatibility, STOKEN and STOKEX can still be used. The main difference is that in the new structures the character string which makes up the token is typed with reference to the data type string. With the structures STOKEN and STOKEX, a C field of length 30 and an OVERFLOW area are used instead.)
Normally, comments are filtered out and subordinate source code units ([include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"), called [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry")) are ignored. These semantics can be modified by using the additions WITH COMMENTS and WITH ANALYSIS.
In addition to classifying the source code by token, the scanner organizes the tokens themselves into statements (using the colon-comma logic to form chained statements) and the statement table itab3 contains a statement description on each row. Here, a three-part [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry") "a: b, c1 c2, d." produces three entries "a b,", "a c1 c2,", and "a d." in the statement table itab3.
The statement table itab3 must be a standard table without secondary keys and have the structure SSTMNT.
The statement classification characters colon, comma, and period are not written to the token table itab2. Instead, the table itab3 contains details about the position of a colon or the type (comma or period) and position of the end marker in the statement description.

System Fields

sy-subrc

Meaning

0

Source code table is not empty, contains no errors, and is broken down into tokens.

1

Source code table is not empty and is broken down into tokens, but at least one include program does not exist (can occur only in connection with the addition WITH INCLUDES).

2

Source code table itab1 is empty or a blank row range was selected (applies to the additions FROM and TO).

4

Scanner detects error in source code.

8

Other error or runtime error in scanner.

If a runtime error occurs in the scanner (sy-subrc has the value 8), a database rollback is executed as usual.

Components of the Structure STOKES

The fields of the structure STOKES, and thus the columns of the token table itab2, have the following meaning:

TYPE

Type of token with possible values:
I (identifier)
S (string, hence a character literal)
L (list, enclosed in parentheses)
C (comment)
B (beginning of a list)
D (separator (divider) between list elements)
E (end of a list)
Types B, D, and E can only appear if the addition WITH
LIST TOKENIZATION is specified.

ROW

Number of row where token occurs or where it begins (>= 1)

COL

Offset of first character of token relative to start of row (>= 0)

STR

Character string forming the token.

If the structure STOKEN is specified, three more fields are filled and the following must be noted:

STR

The character string forming the token contains only the first part if the character string is longer than 30.

LEN

Length of the token

OVFL

Overflow flag for field STR with the following possible values:
SPACE (no overflow, token fits completely in field STR)
X (overflow, either not resolved (no overflow area specified) or token fits in overflow area c1))
O (overflow of token and overflow of overflow area c1)

OFF1

Offset in overflow area, if
token does not fit completely in field STR and
an overflow area c1 is specified and
token fits completely in overflow area c1.

Components of the Structure SSTMNT

The fields of the structure SSTMNT, and thus the columns of the statement table itab3, have the following meaning:

TYPE

Type of statement with possible values:
E ( [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement between EXEC SQL and ENDEXEC)
I (INCLUDE prog)
J (INCLUDE prog, prog does not exist, can occur only in connection with the addition WITH INCLUDES)
T (TYPE-POOLS pool)
V (TYPE-POOLS pool, pool does not exist)
R (call a macro from table TRMAC)
D (call a macro internally defined with DEFINE)
M (macro definition between DEFINE and END-OF-DEFINITION)
C (COMPUTE statement, sometimes without COMPUTE as first token)
A (method call in short form)
K (other ABAP keyword)
N (blank statement)
P (comment between statements)
S (comment within statements)
U (unknown, non-blank statement)

LEVEL

Index of source code unit in the level table itab specified after LEVELS INTO (>= 1, if level table specified, else 0).

STRUC

Index of the statement in the structure table itab specified after STRUCTURES INTO (0 if the structure table is not specified or the structure in which the statement occurs could not be constructed).

FROM

Index of first token of statement in the token table itab2 (FROM = TO + 1, if the statement consists only of the end marker (comma or period))

TO

Index of last token of statement in the token table itab2 (the end marker of the statement no longer counts as a token)

NUMBER

Statement counter in a source code unit. Covers all statements, regardless of how many are actually selected (in cases where a keyword table itab is specified after KEYWORDS FROM)

PREFIXLEN

Number of tokens before the colon (with chained statements >= 1, else 0)

COLONROW

Row number of colon (with chained statements >= 1, else 0)

COLONCOL

Column number of colon (with chained statements >= 0, else 0)

TERMINATOR

End marker of a statement (normally a period or a comma, but SPACE in the case of embedded Native SQL statements and internal macro definitions)

TROW

Row number of the end marker (>= 1, if TERMINATOR <> SPACE, else 0)

TCOL

Column position of the end marker (>= 0, if TERMINATOR <> SPACE, else 0)

ENHMT

Index in the enhancement table of type SENHMT, if the statement was enhanced or originates completely from an enhancement implementation. If addition ENHANCEMENTS INTO itab is not specified, this value is always 0.

Notes

1.  When macro calls are expanded, no positions can be specified. The corresponding fields in the token table itab2 and in the statement table itab3 are then set to 0.
    
2.  Unlike in the usual syntax check, the following are not handled as errors:
    

-   Comma without preceding colon (the comma then acts as an end marker),
    
-   Open chained statement sequence at the end of the source code, which means that the last statement is closed by a comma, not by a period,
    
-   Open statement at the end of the source code, which means that the last statement is not closed using a period or a comma.
    

1.  To enable errors to be analyzed without the program being modified, the additions INCLUDE, MESSAGE, WORD, LINE, and OFFSET must be specified to gather information about the error in question.
    

Addition 1

... FROM n1

Addition 2

... TO   n2

Effect

Breaks down the source code table itab1 into tokens not from start to finish, but only from row n1 to row n2.
The additions FROM n1 and TO n2 must, in this order, follow the specified source code table itab1.

Notes

1.  When using the specified start n1, the addition WITHOUT TRMAC must be used to ensure that there are no unnecessary database accesses to the table TRMAC.
    
2.  The specified end n2 is handled as "soft", meaning a statement that begins on a line <= n2, but ends only on a line > n2, is returned completely.
    If the specified end n2 splits a [chained statement](javascript:call_link\('abenchained_statement_glosry.htm'\) "Glossary Entry"), only the split part up to the next comma is returned completely, not the entire chained statement up to the next period.
    
3.  Negative specified lines are not allowed and produce a runtime error.
    
4.  A line specified as 0 is essentially the same as no specified line.
    
5.  If n1 > number of rows in source code table, the scanner is not called (sy-subrc = 2).
    
6.  If n1 > n2 and n2 > 0, the scanner is not called (sy-subrc = 2).
    

Addition 3

... KEYWORDS   FROM itab

Effect

Does not return all statements, only those specified in the keyword table itab.
If the keyword table is empty (hence it contains 0 rows), all the statements are selected.
The rows of the keyword table are handled as a character field. It must be a standard table without secondary keys.
To select a [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") statement or a macro definition, the pseudo keywords EXEC\_SQL or DEFINE\_MACRO can be specified. It makes no difference whether the statements EXEC or DEFINE occur as well. Native SQL statements and macro definitions are returned as one statement (of type E or M even if the expansion of a macro definition produces more than one statement.
If the keyword table contains a blank row, blank statements are also selected.

Addition 4

... LEVELS     INTO itab

Effect

Stores details about each edited source code unit (source code table itab1 itself, expanded [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"), expanded macro definitions) in the level table itab.
Specify a level table only with the additions WITH INCLUDES or WITH IMPLICIT ENHANCEMENTS.
The level table itab must have the structure SLEVEL. It must be a standard table without secondary keys.

The fields of the structure SLEVEL (and consequently the columns of the level table itab) have the following meaning:

TYPE

Type of source code unit with possible values:
P (program)
D (internal DEFINE macro)
R (macro from table TRMAC)

NAME

Name of source code unit (name of include program, macro name)

DEPTH

Current nesting depth of source code unit (>= 1)

LEVEL

Index of superior (including or calling) source code unit in the level table (>= 1, if DEPTH >= 2, else 0)

STMNT

Index of superior (including or calling) statement in the statement table (>= 1, if DEPTH >= 2, else 0)

FROM

Index of first statement of source code unit in the statement table (>= 1)

TO

Index of last statement of source code unit in the statement table (>= 1)

If the source code unit contains include programs or macro calls, the row range \[FROM, TO\] in the statement table also covers the statements in subordinate source code units.

Note

Enhancements of type E are saved as normal includes in the level table.

Addition 5

... STRUCTURES INTO itab

Effect

Details of the construction of the source code table itab1 are written to the structure table itab.
The structure tableitab must have the structure SSTRUC. It must be a standard table without secondary keys.

If the addition STRUCTURES INTO is used, it is essential that itab2 has the type STOKES or STOXESX. If not, tokens may be cut off and the structure analysis could fail.

The fields in SSTRUC (which are also the columns of structure table itab) have the following meanings:

TYPE

Type of structure with possible values:
P (beginning of the source code)
R (subroutine)
M (macro, EXEC SQL)
I (loop)
A (case distinction)
C (condition in a case distinction)
J (jump command)
D (structured declaration)
E (event)
S (sequence of statements with simple structures)

STMNT\_TYPE

The statement type of the beginning of the structure. The values are listed in the type pool SCAN in structure SCAN\_STRUC\_STMNT\_TYPE.

KEY\_START

Flags whether the start of the structure is described semantically ('X' if there is a special statement, else ' ').

KEY\_END

Flags whether the end of the structure is described semantically ('X' if there is a special statement, else ' ').

STMNT\_FROM

Index of the first statement of the structure in the statement table itab3.

STMNT\_TO

Index of the last statement of the structure in the statement table itab3.

STRUC\_FROM

Index of the first substructure of the structure in structure table itab.

STRUC\_TO

Index of the last substructure of the structure in structure table itab.

BACK

Index of the structure in the structure table itab that contains the structure as a substructure (0 if the structure is the root structure of a structure tree).

If the program that is executed for the statement has incorrect syntax, the behavior is undefined.

Addition 6

... OVERFLOW INTO c1

Effect

This addition is only allowed and required if the token table itab2 has the structure STOKEN or STOKEX.
If a token is too large to be stored in the token table in the field STR, it is placed in the overflow area c1. The offset of the token in the overflow area then lies in the token table in the field OFF1.

Addition 7

... WITH ANALYSIS

Effect

Breaks down each token t = a+b(c) according to the logic of the RSYN keyword ANALYSIS into its three components a, b, and c.
Offset and length of components a, b and, c are stored in the fields LEN1, OFF2, LEN2, OFF3, and LEN3 in the token table. (The offset of OFF1 is always 0 and therefore not required.)
If the addition WITH ANALYSIS is specified, the token table itab2 must have the structure STOKESX, so that the fields LEN1, OFF2, LEN2, OFF3 and LEN3 are available.

If the token table has the structure STOKEX, the following must be noted:
If the whole token exists in the token table, the offsets specified are relative to the start of the token. If the token is in the overflow area c1, the offsets specified are relative to the start of the overflow area.

Addition 8

... WITH DECLARATIONS

Effect

Returns all declarative statements and all statements with [inline declarations](javascript:call_link\('abeninline_declaration_glosry.htm'\) "Glossary Entry").

Addition 9

... WITH BLOCKS

Effect

Returns all statements that define a processing block or a statement block.

Addition 10

... WITH COMMENTS

Effect

Also returns comments, with each individual comment representing a token. Also writes entries for each cohesive block to the table itab3. Here, a distinction is made between comments within statements and comments at program level. In itab3, an entry for a comment within a statement always comes before the statement containing the comment.

Example

Look at the following program fragment. The prefixed numbers are the indexes of the tokens.

1    \* An example
2    \* with scattered comments
6    MOVE
3    \* inserted comment 1
7    X
4    \* inserted comment 2
8    TO
9    Y
5    \* inserted comment 3
.

SCAN then enters the following values for the components TYPE, FROM and TO (in this order from left to right) into itab3.

'P'

1

2

 

'S'

3

5

 

'K'

6

9

Note

If the addition WITH COMMENTS is used, the table itab2 must have the row type STOKES or STOKESX.

Addition 11

... WITH PRAGMAS pragmas

Effect

This addition returns all relevant pragmas for each statement before the first correct token of the statement but after a block of comments collected using the addition WITH COMMENTS. pragmas expects a data object of the type c with length 1, usually containing the value "\*". Other values are intended for and recognized by special test tools.

A block of pragmas is combined in the statement table under the statement type "G". In this way, the block order is for a statement which contains comments and matching pragmas "S-G-K".

Pragmas which are not determined for ABAP Compiler are searched for in the TRPRAGMA database table.

Illegal (for example, unknown or lexically incorrect) pragmas are processed in the same way as legal pragmas, that is, they are summarized in a block preceding the actual statement (ID "G"). This corresponds to the behavior of the scanner in the compiler.

Addition 12

... WITH INCLUDES *\[*IMPLEMENTATIONS FROM itab*\]*

Effect

Also breaks down subordinate source code units (include programs, called macros) into tokens.

In addition, [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") of explicit and implicit [enhancement options](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") which may exist are automatically inserted in the source code to be split. The optional addition IMPLEMENTATIONS FROM itab can be used to limit the number of inserted enhancements to the number specified in itab. If itab is empty, any enhancements are ignored. itab must be a standard table without secondary keys.

Notes

1.  The addition WITH INCLUDES is normally combined with the addition LEVELS INTO itab.
    
2.  If (at least) one include program does not exist, sy-subrc is set to 1 and the relevant INCLUDE statement is flagged in the statement table itab3 by the statement type J (instead of I), but the breakdown process continues. The level table itab contains no entry for [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") that do not exist.
    
3.  If WITH INCLUDES is combined with the addition WITHOUT TRMAC, TRMAC [macros](javascript:call_link\('abenmacro_glosry.htm'\) "Glossary Entry") are not expanded because the system does not recognize them as subordinate source code units.
    
4.  When macro calls are expanded, no positions can be specified. The corresponding fields in the token table itab2 and in the statement table itab3 are then set to 0.
    
5.  The additions FRAME PROGRAM FROM and INCLUDE PROGRAM FROM are required to correctly solve the source code enhancements.
    
6.  The addition INCLUDE PROGRAM FROM is required to resolve the include programs for methods of global classes.
    

Addition 13

... WITH TYPE-POOLS

Effect

This addition has the same effect as the WITH INCLUDES addition, except that with the former, include programs belonging to [type groups](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") are broken down into tokens.

Addition 14

... WITH LIST TOKENIZATION

Effect

Tokens of the form (a1, a2, a3) are not returned as tokens but broken down into the elementary components.

Addition 15

... PRESERVING IDENTIFIER ESCAPING

Effect

By default, exclamation marks before names (identifiers) are deleted. Exclamation marks can be used to distinguish between names and keywords. This addition prevents their deletion.

Addition 16

... WITHOUT TRMAC

Effect

If a statement does not start with an ABAP keyword or with a DEFINE macro, the system does not check whether this is a TRMAC macro, but assumes that the statement is unknown. (Unknown statements are flagged in the statement table itab3 with a U in the field TYPE.)
To avoid unnecessary database accesses to the table TRMAC, the addition WITHOUT TRMAC should be used whenever it is assumed that the source code being scanned contains unknown statements. Unknown statements are particularly likely to occur if the addition FROM n1 is used, because the scanner does not start at the beginning of the source code, but from a specified point.

Note

If WITHOUT TRMAC is used with WITH INCLUDES, TRMAC macros are not expanded because the system does not recognize them as subordinate source code units.

Addition 17

... *\[*INCLUDE*\]* PROGRAM FROM c2

Addition 18

... INCLUDE INTO c3

Addition 19

... MESSAGE INTO c4

Addition 20

... WORD    INTO c5

Addition 21

... LINE    INTO n3

Addition 22

... OFFSET  INTO n4

Effect

The above additions have the same effect as the corresponding additions in the statement [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)): c2 is an input field for a program name to be assigned to the source code, while the fields c3, c4, c5, n3, and n4 are output fields in case an error occurs.

In Release 7.00, the addition PROGRAM FROM was renamed as INCLUDE PROGRAM FROM to clarify the difference between the master program and the split source code unit. If the addition is used in its previous form PROGRAM FROM, it sets the master program and the source code text unit to be scanned at the same time.
To be able to analyze errors without modifying programs, use the additions INCLUDE INTO, MESSAGE INTO, WORD INTO, LINE INTO and OFFSET INTO. These provide information about the errors which have occurred.

Addition 23

... WITH EXPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*

Effect

When WITH EXPLICIT ENHANCEMENTS is specified, the existing [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") for explicit [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") are automatically inserted into the split source code.

The optional addition IMPLEMENTATIONS FROM can limit the number of inserted enhancements to the number specified in itab. If itab is empty, any enhancements are ignored.

Addition 24

... WITH IMPLICIT ENHANCEMENTS *\[*IMPLEMENTATIONS FROM itab*\]*

Effect

When WITH IMPLICIT ENHANCEMENTS is specified, the existing [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") for implicit [enhancement points](javascript:call_link\('abenenhancement_point_glosry.htm'\) "Glossary Entry") are automatically inserted into the split source code.

The optional addition IMPLEMENTATIONS FROM can limit the number of inserted enhancements to the number specified in itab. If itab is empty, any enhancements are ignored.

Addition 25

... ENHANCEMENT OPTIONS INTO itab

Effect

Details about the enhancement points that exist in the source code unit that is being edited are stored in the description table itab. It therefore only makes sense to specify an enhancement table together with additions WITH INCLUDES, WITH EXPLICIT ENHANCEMENTS, or WITH IMPLICIT ENHANCEMENTS.

The level table itab must be a standard table without a secondary key and must have the row structure SEOPTN whose fields have the following meaning:

LEVEL

Index of the relevant entry in the level table. If this information is required, the addition LEVELS INTO must be specified at the same time to fill the level table.

ROW, COL

Position of the enhancement point in the source code. This position is not unique, since enhancements can be inserted to all blanks around the position specified by ROW and COLUMN.

FULL\_NAME

Full name of the enhancement point. This name uniquely identifies an implicit enhancement point.

TYPE

The type of enhancement point. I is for an implicit enhancement point and E is for an explicit enhancement point.

MODE

The mode of the enhancement point. Type S is for static, type D is for dynamic, and type A is for any enhancement point.

ENHMT

Index of the first relevant enhancement implementation in the enhancement table or 0 if the enhancement point is not implemented. If this information is required, the addition ENHANCEMENTS INTO must be specified at the same time to fill the enhancement table.

Notes

-   The additions FRAME PROGRAM FROM and INCLUDE PROGRAM FROM are used, especially for explicit enhancement points, to find out the name of the master program or the name of the current include program. These names are used to determine the full names of explicit enhancement points.
    
-   The addition ENHANCEMENT OPTIONS INTO is independent of the addition ENHANCEMENTS INTO and they can be used at the same time.
    

Addition 26

... ENHANCEMENTS INTO itab

Effect

Details of the enhancement implementations in the source code that is being edited are saved in the enhancement table itab. It therefore only makes sense to specify an enhancement table together with additions WITH INCLUDES, WITH EXPLICIT ENHANCEMENTS, or WITH IMPLICIT ENHANCEMENTS.

The enhancement table itab must be a standard table without secondary keys and have the row structure SENHMT, whose fields have the following meaning:

ENHMT

The index of the superior enhancement.

STMNT

The index of the statement in the statement table to which the enhancement is connected (such as ENHANCEMENT-POINT for explicit enhancements or METHOD for an implicit enhancement of a method implementation).

FROM

With regular enhancements (type "E"), this is the index of the first statement of the enhancement in the statement table. With fragmentary enhancements (type "F"), this is the index of the first token of the enhancement in the token table.

TO

With regular enhancements (type "E"), this is the index of the last statement of the enhancement in the statement table. With fragmentary enhancements (type "F"), this is the index of the first token of the enhancement in the token table.

NAME

Name of the enhancement.

INCLUDE

Name of the include that contains the implementation of the enhancement.

ID

Internal ID of the enhancement implementation within the implementation include.

TYPE

Type of the enhancement. Type "E" stands for a normal enhancement with one or more complete statements. Type "F" stands for a fragmentary enhancement of one or more tokens within an individual statement.

MODE

Mode of the enhancement: "D" (dynamic) or "S" (static).

Notes

-   For enhancements to be identified correctly, it is imperative that the additions FRAME PROGRAM FROM and INCLUDE PROGRAM FROM are specified correctly.
    
-   Multiple fragmentary enhancements can exist for a statement. In this case, the statement table refers to the entry in the first enhancement in the enhancement table; all other enhancements are connected directly to this and can be identified uniquely using the STMNT field.
    
-   The addition ENHANCEMENT INTO is independent of the addition ENHANCEMENTS OPTIONS INTO and they can be used at the same time.
    

Addition 27

... WITH INACTIVE ENHANCEMENTS

Effect

This addition is only possible with ENHANCEMENTS INTO. If WITH INACTIVE ENHANCEMENTS is specified as well, deactivated or overwritten enhancement implementations are respected. For these, the values "e" and "f" are stored instead of "E" and "F" in the TYPE column of the itab enhancement table.

Addition 28

... FRAME PROGRAM FROM c2

Effect

Using this addition, the master program is specified to the source code unit to be split. This is necessary, especially for inserting [source code plug-ins](javascript:call_link\('abensource_code_plugin_glosry.htm'\) "Glossary Entry") correctly.

Note

In the case of the master program, remember that even when this addition of the statement SCAN is specified, it is not edited at the same time. The statement SCAN always edits only the passed source code and possibly the included type groups or include programs. To edit an include program in its context, the master program must be passed itself. Here, any non-relevant include programs can be hidden using the addition REPLACING. As an alternative to the use of REPLACING, a mock master program, which constructs the correct context for include programs to be edited but remains empty the rest of the time, is also possible.

Addition 29

... REPLACING itab

Effect

Individual INCLUDE statements can be overridden by specifying an internal table of type SREPTAB. If itab contains an entry "INCL" in column name, the statement INCLUDE incl does not read the include INCL. Instead the source code from column itab-source is inserted.

It has the same effect as the addition REPLACING of the internal statement [SYNTAX-CHECK FOR PROGRAM](javascript:call_link\('abapsyntax-check_for_program.htm'\)). However, the entry itab-trdir is ignored.

itab must be a standard table without secondary keys.

Variant 2

SCAN AND CHECK ABAP-SOURCE itab1 ...RESULT INTO itab2.

Parts marked with " ..." are interchangeable

Extras:

[1\. ... PROGRAM FROM c1](#!ABAP_ADDITION_1@30@)
2\. ... INCLUDE INTO c2
3\. ... MESSAGE INTO c3
4\. ... WORD    INTO c4
5\. ... LINE    INTO n1
6\. ... OFFSET  INTO n2

Effect

Checks the syntax of the program in table itab1. This check writes all information collected about the program, such as statement structures, statements, tokens, data objects, or types, to the variable result. Here, result must have the type SYSCH\_RESULT, defined in the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") SYSCH.

Addition 1

... PROGRAM FROM c1

Addition 2

... INCLUDE INTO c2

Addition 3

... MESSAGE INTO c3

Addition 4

... WORD    INTO c4

Addition 5

... LINE    INTO n1

Addition 6

... OFFSET  INTO n2

Effect

The above additions have the same effect as the corresponding additions in the statement [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)): c1 is an input field for a program name to be assigned to the source code, the fields c2, c3, c4, n1, and n2 are output fields, used when errors occur.
To enable errors to be analyzed without the program being modified, the additions INCLUDE, MESSAGE, WORD, LINE, and OFFSET must be specified to gather information about the error in question.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_SCAN\_SOURCE\_TOO\_WIDE

-   Cause: A string was passed that is longer than 32767 characters, or a string table that contains a row with more than 32767 characters.
    Runtime error: SCAN\_SOURCE\_TOO\_WIDE
