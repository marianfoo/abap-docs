---
title: "WAIT UP TO"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_shortref.htm) Syntax WAIT UP TO sec SECONDS. Effect This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a numeric expression position(https://help.sap.com/doc/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_up_to.htm"
abapFile: "abapwait_up_to.htm"
keywords: ["update", "do", "if", "try", "catch", "data", "abapwait"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencontrol_structures.htm) →  [Program Interruption](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwait.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WAIT%20UP%20TO%2C%20ABAPWAIT_UP_TO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WAIT UP TO

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_shortref.htm)

Syntax

WAIT UP TO sec SECONDS.

Effect

This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a [numeric expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of the operand type f to which positive numbers can be passed, including 0. The unit of the number specified in sec is seconds and the time resolution is one millisecond. After the specified time has passed, the program execution continues with the statement following WAIT. When used, this statement always changes the [work process](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwork_process_glosry.htm "Glossary Entry").

Return Codes

This statement always sets sy-subrc to 0.

Hints

-   Each time this variant of the statement WAIT is used, a [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is triggered (except during [updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_glosry.htm "Glossary Entry")). For this reason, WAIT must not be used between [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements that open or close a [database cursor](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_cursor_glosry.htm "Glossary Entry").
-   The variants [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_arfc.htm), [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_amc.htm), and [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwait_apc.htm) of this statement are useful only in combination with callback routines in [aRFC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarfc_glosry.htm "Glossary Entry"), [AMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_glosry.htm "Glossary Entry"), or [APC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenapc_glosry.htm "Glossary Entry"). The variant shown here does not wait for callback routines.

Example

The output of the following example should correspond to approximately one million microseconds.

GET RUN TIME FIELD FINAL(t1).
WAIT UP TO 1 SECONDS.
GET RUN TIME FIELD FINAL(t2).
cl\_demo\_output=>display( |{ t2 - t1  STYLE = scientific }| ).

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Negative time specification for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT