---
title: "CLEAR - WITH NULL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear_shortref.htm) Obsolete Syntax CLEAR dobj WITH NULL. Effect This variant of the statement CLEAR(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm), which is not allowed in ABAP Objects, rep
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear_with_null.htm"
abapFile: "abapclear_with_null.htm"
keywords: ["do", "case", "data", "abapclear", "with", "null"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_internal_obsolete.htm) →  [Obsolete Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_assignments.htm) → 

CLEAR - WITH NULL

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear_shortref.htm)

Obsolete Syntax

CLEAR dobj WITH NULL.

Effect

This variant of the statement [CLEAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapclear.htm), which is not allowed in ABAP Objects, replaces all bytes in dobj with the value hexadecimal 0. In this case, the data object dobj must be flat.

Note

The addition WITH NULL should only be used for byte-like data objects and should therefore be replaced by the addition CLEAR WITH val, which offers a higher degree of security in this context.

Bad Example

CLEAR f WITH NULL.

Good Example

CONSTANTS hex TYPE x LENGTH VALUE IS INITIAL.
CLEAR f WITH hex.