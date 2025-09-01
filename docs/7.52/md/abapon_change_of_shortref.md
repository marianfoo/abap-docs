---
title: "ON CHANGE OF - Quick reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapon.htm) Syntax ON CHANGE OF dobj OR dobj1 OR dobj2 .... statement_block ENDON. Effect Obsolete: Defines a control structure with a statement block statement_block. The statement block is executed if the data
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapon_change_of_shortref.htm"
abapFile: "abapon_change_of_shortref.htm"
keywords: ["do", "if", "data", "abapon", "change", "shortref"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  O

ON CHANGE OF - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapon.htm)

Syntax

ON CHANGE OF dobj *\[*OR dobj1 *\[*OR dobj2*\]* ...*\]*.
  statement\_block
ENDON.

Effect

Obsolete: Defines a control structure with a statement block statement\_block. The statement block is executed if the data object dobj has changed since the last time the statement ON CHANGE OF was executed.

Addition

-   OR dobj1 *\[*OR dobj2*\]* ...
    Executes the statement block even if the content of one of the data objects dobj1, dobj2, ... changed.