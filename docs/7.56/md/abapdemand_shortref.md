---
title: "DEMAND - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdemand.htm) Syntax DEMAND val1 = f1 val2 = f2 ... FROM CONTEXT context_ref MESSAGES INTO itab. Effect Obsolete: Assigns the derived values val1, val2, ... of a context(https://help.sap.com/doc/abapdocu_756_index_ht
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdemand_shortref.htm"
abapFile: "abapdemand_shortref.htm"
keywords: ["do", "try", "data", "internal-table", "abapdemand", "shortref"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  D

DEMAND - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdemand.htm)

Syntax

DEMAND val1 = f1 val2 = f2 ...
       FROM CONTEXT context\_ref
       *\[*MESSAGES INTO itab*\]*.

Effect

Obsolete: Assigns the derived values val1, val2, ... of a [context](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencontext_glosry.htm "Glossary Entry") instance referenced by context\_ref to the data objects f1, f2, ...

Addition

-   MESSAGES INTO itab
    Appends [messages](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmessage_glosry.htm "Glossary Entry") of the context to the internal table itab. Otherwise messages are sent.