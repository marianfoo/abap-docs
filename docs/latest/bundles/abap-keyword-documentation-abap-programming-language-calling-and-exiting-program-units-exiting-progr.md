# ABAP - Keyword Documentation / ABAP - Programming Language / Calling and Exiting Program Units / Exiting Program Units / Exiting Loops

Included pages: 4


### abenleave_loops.htm

---
title: "Exiting Loops"
description: |
  The following statement can be used to exit a loop completely: -   EXIT(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_loop.htm) The following statements can be used to exit the current loop pass: -   CONTINUE(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_loops.htm"
abapFile: "abenleave_loops.htm"
keywords: ["loop", "do", "if", "abenleave", "loops"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_program_units.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exiting%20Loops%2C%20ABENLEAVE_LOOPS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exiting Loops

The following statement can be used to exit a loop completely:

-   [EXIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_loop.htm)

The following statements can be used to exit the current loop pass:

-   [CONTINUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue.htm)
-   [CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_loop.htm)

Continue
[EXIT, loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_loop.htm)
[CHECK, loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_loop.htm)
[CONTINUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue.htm)


### abapexit_loop.htm

---
title: "EXIT, loop"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_shortref.htm) Syntax EXIT. Effect If the EXIT statement is listed within a loop(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm 'Glossary Entry'), it exits the loop by ter
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_loop.htm"
abapFile: "abapexit_loop.htm"
keywords: ["loop", "do", "if", "try", "data", "abapexit"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXIT%2C%20loop%2C%20ABAPEXIT_LOOP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXIT, loop

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_shortref.htm)

Syntax

EXIT.

Effect

If the EXIT statement is listed within a [loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm "Glossary Entry"), it exits the loop by terminating the current loop pass. The program flow resumes after the closing statement of the loop.

Hint

Outside of a loop, the statement EXIT exits the current [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [EXIT - Processing Block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_processing_blocks.htm)). EXIT, however, it should only be used within loops.

Example

Exit of a loop using EXIT if the loop index sy-index is greater than a number limit.

DATA limit TYPE i VALUE 10.
DO.
  IF sy-index > limit.
    EXIT.
  ENDIF.
  cl\_demo\_output=>write( |{ sy-index } | ).
ENDDO.
cl\_demo\_output=>display( ).


### abapcheck_loop.htm

---
title: "CHECK, loop"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_shortref.htm) Syntax CHECK log_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm). Effect If the statement CHECK is listed in a loop(https://help.sap.com/doc/abapdocu_lat
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_loop.htm"
abapFile: "abapcheck_loop.htm"
keywords: ["loop", "do", "if", "try", "data", "abapcheck"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CHECK%2C%20loop%2C%20ABAPCHECK_LOOP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CHECK, loop

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_shortref.htm)

Syntax

CHECK [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).

Effect

If the statement CHECK is listed in a [loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm "Glossary Entry") and log\_exp is false, the statement CHECK immediately terminates the current loop pass and the program continues with the next loop pass. Any [logical expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expression_glosry.htm "Glossary Entry") can be specified for [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm).

Hints

-   Within a loop, CHECK log\_exp has the same effect as:
    
    IF NOT log\_exp.
      CONTINUE.
    ENDIF.
    
-   Outside a loop, the statement CHECK exits the current [processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocessing_block_glosry.htm "Glossary Entry") (see [CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_processing_blocks.htm)), however it is recommended that CHECK is used inside loops only.

Example

Termination of a loop pass using CHECK if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  CHECK remainder = 0.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).


### abapcontinue.htm

---
title: "CONTINUE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue_shortref.htm) Syntax CONTINUE. Effect The statement CONTINUE may only be used in loops(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm 'Glossary Entry'). If it is used
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue.htm"
abapFile: "abapcontinue.htm"
keywords: ["loop", "do", "if", "try", "data", "abapcontinue"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_program_units.htm) →  [Exiting Loops](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_loops.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONTINUE%2C%20ABAPCONTINUE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONTINUE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue_shortref.htm)

Syntax

CONTINUE.

Effect

The statement CONTINUE may only be used in [loops](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_glosry.htm "Glossary Entry"). If it is used, the current loop pass is terminated immediately and the program flow is continued with the next loop pass.

Example

Exit of a loop pass using CONTINUE if the loop index sy-index is an odd number.

DATA remainder TYPE i.
DO 20 TIMES.
  remainder = sy-index MOD 2.
  IF remainder <> 0.
    CONTINUE.
  ENDIF.
  cl\_demo\_output=>write\_text( |{ sy-index }| ).
ENDDO.
cl\_demo\_output=>display( ).
