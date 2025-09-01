---
title: "SYNTAX-TRACE"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax SYNTAX-TRACE  ON ...  OFF . Variants: 1. SYNTAX-TRACE ON.(#!ABAP_VARIANT_1@1@) 2. SYNTAX-TRACE ON OPTION CODING.(#!ABAP_VARIANT_2@2@) 3. SYNTAX-TRACE ON OPTION CLASS.(#!ABAP_V
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-trace.htm"
abapFile: "abapsyntax-trace.htm"
keywords: ["select", "do", "if", "try", "class", "abapsyntax", "trace"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentests_internal.htm) → 

SYNTAX-TRACE

This statement is for internal use only.
It must not be used in application programs.

Syntax

SYNTAX-TRACE *{* *{*ON *\[*...*\]**}* *|* OFF *}*.

Variants:

[1\. SYNTAX-TRACE ON.](#!ABAP_VARIANT_1@1@)
[2\. SYNTAX-TRACE ON OPTION CODING.](#!ABAP_VARIANT_2@2@)
[3\. SYNTAX-TRACE ON OPTION CLASS.](#!ABAP_VARIANT_3@3@)
[4\. SYNTAX-TRACE ON OPTION CLASS-CODING.](#!ABAP_VARIANT_4@4@)
[5\. SYNTAX-TRACE ON OPTION EXPAND.](#!ABAP_VARIANT_5@5@)
[6\. SYNTAX-TRACE ON OPTION SYNCPOINTS.](#!ABAP_VARIANT_6@6@)
[7\. SYNTAX-TRACE OFF.](#!ABAP_VARIANT_7@7@)

Variant 1

SYNTAX-TRACE ON.

Effect

This statement is ignored at runtime except to switch on the syntax check or generate the program in question. If the syntax check or generation was called in the test environment, this statement switches on a syntax trace.

Variant 2

SYNTAX-TRACE ON OPTION CODING.

Effect

This statement has the same effect as SYNTAX-TRACE ON, except that the trace output is restricted to the processed program lines.

Variant 3

SYNTAX-TRACE ON OPTION CLASS.

Effect

This statement has the same effect as SYNTAX-TRACE ON. Additionally, all operations are traced that are relevant for loading classes.

Variant 4

SYNTAX-TRACE ON OPTION CLASS-CODING.

Effect

This statement has the same effect as SYNTAX-TRACE ON, except that the trace output is restricted to the processed program lines. Additionally, as for addition 3, all operations are traced that are relevant for loading classes.

Variant 5

SYNTAX-TRACE ON OPTION EXPAND.

Effect

This statement is currently ignored.

Variant 6

SYNTAX-TRACE ON OPTION SYNCPOINTS.

Effect

This statement can be used to activate the trace function of the ABAP syntax check and to select a certain mode for the trace output.

This trace mode SYNCPOINTS (for internal test purposes only) logs thedeclaration units (that is, used global class and interface declarations as well as [type groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry")) for which the routines for creating the load table entries must be called after a delay and not immediately.

In doing so, the call of the generation routine is delayed until a synchronization point is reached, for which the generation of a quantity of declaration units is executed afterwards.

The trace that operates on the ABAP coding level and not on the RSYN level, provides the information, where such synchronization points were defined and which declaration units at these points in time have to go to the delayed generation.

Note

The delayed generation of declaration units is neccessary to solve sequencing problems in the load tables when precompiled headers are used to generate ABAP programs.

Variant 7

SYNTAX-TRACE OFF.

Effect

Switches off the syntax trace switched on with SYNTAX-TRACE ON.