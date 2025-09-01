---
title: "TRACE-ENTRY"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax TRACE-ENTRY text. Effect This statement writes the string contained in a flat character-like data object text to the current system trace if the trace is enabled in the transaction ST01 using the trace compo
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptrace-entry.htm"
abapFile: "abaptrace-entry.htm"
keywords: ["do", "if", "try", "data", "abaptrace", "entry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Testing and Checking Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_tests.htm) →  [Internal Test Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentests_internal.htm) → 

TRACE-ENTRY

This statement is for internal use only.
It must not be used in application programs.

Syntax

TRACE-ENTRY text.

Effect

This statement writes the string contained in a flat character-like data object text to the current system trace if the trace is enabled in the transaction ST01 using the trace component General kernel.