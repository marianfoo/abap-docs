---
title: "WHILE, VARY"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_shortref.htm) Obsolete Syntax WHILE ... VARY dobj FROM dobj1 NEXT dobj2 RANGE range VARY .... statement_block ENDWHILE. Effect The addition VARY and its addition RANGE have exactly the sam
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_vary.htm"
abapFile: "abapwhile_vary.htm"
keywords: ["loop", "do", "while", "if", "try", "catch", "data", "abapwhile", "vary"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_control_structures.htm) → 

WHILE, VARY

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile_shortref.htm)

Obsolete Syntax

WHILE ... VARY dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
         *\[*VARY ...*\]*.
  *\[*statement\_block*\]*
ENDWHILE.

Effect

The addition VARY and its addition RANGE have exactly the same effect on a [WHILE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapwhile.htm) loop as the other obsolete additions [VARYING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_varying.htm) and [RANGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo_varying.htm) of the statement [DO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapdo.htm). The addition VARY can be used more than once in a WHILE statement.

Hints

-   The way the addition VARY works depends on the internal structure of the working memory, which itself can be affected by [alignment gaps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenalignment_gap_glosry.htm "Glossary Entry").
-   Instead of the addition VARY, the statement [ASSIGN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign.htm) should be used in the loop with the addition [INCREMENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapassign_mem_area_dynamic_dobj.htm).

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Invalid access to tables, strings, field references, or object references within the range specified by the addition RANGE.
    Runtime error: DO\_WHILE\_VARY\_ILLEGAL\_ACCESS
-   Cause: Access to data outside the range specified by the RANGE addition.
    Runtime error: DO\_WHILE\_VARY\_NOT\_IN\_RANGE