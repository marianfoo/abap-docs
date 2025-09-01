---
title: "WHILE - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhile.htm) Syntax WHILE log_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm) VARY dobj FROM dobj1 NEXT dobj2 RANGE range VARY .... statement_bl
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhile_shortref.htm"
abapFile: "abapwhile_shortref.htm"
keywords: ["loop", "do", "while", "if", "data", "abapwhile", "shortref"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  W

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WHILE%2C%20ABAPWHILE_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WHILE - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhile.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlog_exp_shortref.htm)
      *\[*VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
      *\[*VARY ...*\]**\]*.
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Executes the statement block statement\_block in a loop as long as the logical expression log\_exp is true.

Addition  

-   VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
    Obsolete: In each loop pass of a variable, assigns a value from the sequence defined in the memory using dobj1 and dobj2 to a variable dobj. The data object range limits the addressable memory area.