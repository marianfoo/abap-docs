---
title: "GENERATE REPORT"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax GENERATE REPORT prog error_handling. Additions: 1. ... MESSAGE f1(#!ABAP_ADDITION_1@1@) 2. ... INCLUDE f2(#!ABAP_ADDITION_2@2@) 3. ... LINE f3(#!ABAP_ADDITION_3@3@) 4. ... WORD f4(#!ABAP
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_report.htm"
abapFile: "abapgenerate_report.htm"
keywords: ["select", "do", "while", "if", "try", "method", "class", "data", "abapgenerate", "report"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_generic_program.htm) →  [Internal Statements for Source Code Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abengeneric_internal.htm) → 

GENERATE REPORT

This statement is for internal use only.
It must not be used in application programs.

Syntax

GENERATE REPORT prog *\[*error\_handling*\]*.

Additions:

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

The program specified in the prog field is generated in the current work process. If the program is an executable program, that is, a program of internal type 1, the [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry") is also generated automatically.

For the syntax check, the switch configuration of [Switch Framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenswitch_glosry.htm "Glossary Entry") is used in its current status when the statement is executed.

[Inline declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm) can be specified for the same operands, as in the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subroutine_pool.htm).

Hints

-   If the profile parameter abap/pxa has the value "develop", a [database commit](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is triggered after generation.
-   The static method GET\_VALUES of the system class CL\_ABAP\_GEN\_LIMITS returns the generation limits of an ABAP program. In the ABAP Workbench, these can be determined by choosing Program → Check → Generation Limits. The generation limits of an ABAP program are technical maximum values that must not be exceeded for a successful generation. The values affected include:
    -   Number of variables
    -   Jumping distance
    -   etc.

Return Code

sy-subrc = 0:

Program was generated successfully

sy-subrc <> 0:

Program could not be generated

sy-subrc = 4:

A syntax error occurred

sy-subrc = 8:

A generation error occurred

sy-subrc = 16:

Error while generating the selection screen

If a runtime error occurs during generation (sy-subrc has the value 8 or 16), a database rollback is executed as usual.

Addition 1   

... MESSAGE f1

Effect

When a syntax error occurs, the error message is stored in this field.

Addition 2   

... INCLUDE f2

Effect

When a syntax error occurs, the name of the [include program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninclude_program_glosry.htm "Glossary Entry") in which the error occurred is stored in this field.

Addition 3   

... LINE f3

Effect

When a syntax error occurs, the number of the incorrect line is stored in this field.

Addition 4   

... WORD f4

Effect

When a syntax error occurs, the incorrect word is stored in this field.

Addition 5   

... OFFSET f5

Effect

When a syntax error occurs, the position of the incorrect word in the incorrect line is stored in this field.

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

The [selection screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselection_screen_glosry.htm "Glossary Entry") is not generated.

Addition 9   

... MESSAGE-ID f8

Effect

If a syntax error occurs, the key of the corresponding error message is returned in field f8. This key has the same structure as the key of table TRMSG.

Addition 10   

... SHORTDUMP-ID f9

Effect

If a [short dump](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshort_dump_glosry.htm "Glossary Entry") occurs, the key of the corresponding short dump is returned in the f9 field. This key has a maximum length of 30 characters.

Addition 11   

... WITH PRECOMPILED HEADERS

This addition allows precompiled headers to be regenerated when generating the ABAP program prog. Precompiled headers are used to increase the translation speed of the ABAP Compiler by buffering the declaration data of global classes, interfaces, and [type pools](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") in formatted form for the ABAP Compiler.

Hint

If this addition is used, it must be ensured that the application performs a [COMMIT WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcommit.htm) or [ROLLBACK WORK](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm) within a short period of time. This ensures that the [database locks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_lock_glosry.htm "Glossary Entry") that are set when the precompiled headers are regenerated, are held for a short time only and therefore do not block generation of other ABAP programs.

Addition 12   

... WITH TEST CODE

With this addition, the [test classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentest_class_glosry.htm "Glossary Entry") of the program are generated independently of the [profile parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") abap/test\_generation.