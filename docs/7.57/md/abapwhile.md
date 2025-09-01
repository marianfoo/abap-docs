---
title: "WHILE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhile_shortref.htm) Syntax WHILE log_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) statement_block ENDWHILE. Effect Conditional loop. The statements WHILE and ENDWHILE define
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhile.htm"
abapFile: "abapwhile.htm"
keywords: ["loop", "do", "while", "if", "try", "data", "internal-table", "abapwhile"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_structures.htm) →  [Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_loops.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: WHILE, ABAPWHILE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improve
ment:)

WHILE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhile_shortref.htm)

Syntax

WHILE [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm)
  *\[*statement\_block*\]*
ENDWHILE.

Effect

Conditional loop. The statements WHILE and ENDWHILE define a control structure that can contain a complete [statement block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstatement_block_glosry.htm "Glossary Entry") statement\_block. After WHILE, any [logical expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp.htm) can follow.

The statement block is repeated as long as the logical expression is true, or until it is exited with one of the statements to exit loops. In particular, the statement [EXIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexit_loop.htm) is intended for exiting a loop completely. Within the statement block, the system field sy-index contains the number of previous loop passes, including the current pass. In nested loops, sy-index always refers to the current loop.

Hints

-   A maximum runtime can be configured using the [profile parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/scheduler/prio\_low/max\_runtime, rdisp/scheduler/prio\_normal/max\_runtime, and rdisp/scheduler/prio\_high/max\_runtime. If this runtime is exceeded because the logical expression is never false and the loop is not exited in any other way, the program is terminated by the runtime framework.
-   If WHILE loops are used to construct values or fill internal tables, they can usually be expressed more elegantly using conditional iterations with [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_conditional.htm) in constructor expressions.
-   The obsolete addition [VARY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhile_vary.htm) can be used to process a sequence of data objects in the memory.

Example

Filling of an internal table with 100 lines. A [FOR](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor.htm) expression can now also be used for that purpose.

DATA itab TYPE TABLE OF i.
WHILE lines( itab ) < 100.
  itab = VALUE #( BASE itab ( sy-index ) ).
ENDWHILE.

Continue
[ENDWHILE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapendwhile.htm)