---
title: "CLEAR, WITH NULL"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear_shortref.htm) Obsolete Syntax CLEAR dobj WITH NULL. Effect This variant of the statement CLEAR(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm), which is not allowed in ABAP Objects, rep
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear_with_null.htm"
abapFile: "abapclear_with_null.htm"
keywords: ["do", "case", "data", "abapclear", "with", "null"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_assignments.htm) → 

CLEAR, WITH NULL

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear_shortref.htm)

Obsolete Syntax

CLEAR dobj WITH NULL.

Effect

This variant of the statement [CLEAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm), which is not allowed in ABAP Objects, replaces all bytes in dobj with the value hexadecimal 0. In this case, the data object dobj must be flat.

Hint

The addition WITH NULL should only be used for byte-like data objects and should therefore be replaced by the addition CLEAR WITH val, which offers a higher degree of security in this context.

Bad Example

CLEAR f WITH NULL.

Good Example

CONSTANTS hex TYPE x LENGTH VALUE IS INITIAL.
CLEAR f WITH hex.