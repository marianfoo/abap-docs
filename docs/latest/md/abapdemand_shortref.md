---
title: "DEMAND - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdemand.htm) Syntax DEMAND val1 = f1 val2 = f2 ... FROM CONTEXT context_ref MESSAGES INTO itab. Effect Obsolete: Assigns the derived values val1, val2, ... of a context(https://help.sap.com/doc/abapdocu_latest_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdemand_shortref.htm"
abapFile: "abapdemand_shortref.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abapdemand", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  D

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DEMAND%2C%20ABAPDEMAND_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DEMAND - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdemand.htm)

Syntax

DEMAND val1 = f1 val2 = f2 ...
       FROM CONTEXT context\_ref
       *\[*MESSAGES INTO itab*\]*.

Effect

Obsolete: Assigns the derived values val1, val2, ... of a [context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencontext_glosry.htm "Glossary Entry") instance referenced by context\_ref to the data objects f1, f2, ...

Addition  

-   MESSAGES INTO itab
    Appends [messages](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmessage_glosry.htm "Glossary Entry") of the context to the internal table itab. Otherwise messages are sent.