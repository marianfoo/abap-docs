---
title: "SYNTAX-TRACE"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax SYNTAX-TRACE  ON ...  OFF . Variants: 1. SYNTAX-TRACE ON.(#!ABAP_VARIANT_1@1@) 2. SYNTAX-TRACE ON OPTION CODING.(#!ABAP_VARIANT_2@2@) 3. SYNTAX-TRACE ON OPTION CLASS.(#!ABAP_V
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsyntax-trace.htm"
abapFile: "abapsyntax-trace.htm"
keywords: ["select", "do", "if", "try", "class", "abapsyntax", "trace"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentests_internal.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYNTAX-TRACE%2C%20ABAPSYNTAX-TRACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

This statement has no effect at runtime and only affects the syntax check or the generation of the program that contains the statement. If the syntax check or generation was called in the test environment, this statement switches on trace output.

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

This trace mode SYNCPOINTS (for internal test purposes only) logs the declaration units, that is, used global class and interface declarations as well as [type pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentype_pool_glosry.htm "Glossary Entry"), for which the routines for creating the load table entries must be called after a delay and not immediately.

In doing so, the call of the generation routine is delayed until a synchronization point is reached, for which the generation of a set of declaration units is executed afterwards.

The trace that operates on the ABAP code level and not on the RSYN level provides the information about where such synchronization points were defined and which declaration units at these points in time have to be incorporated in the delayed generation.

Hint

The delayed generation of declaration units is necessary to solve sequencing problems in the load tables when precompiled headers are used to generate ABAP programs.

Variant 7   

SYNTAX-TRACE OFF.

Effect

Switches off the syntax trace switched on with SYNTAX-TRACE ON.