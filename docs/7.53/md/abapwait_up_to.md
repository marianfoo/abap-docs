---
title: "WAIT UP TO"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_shortref.htm) Syntax WAIT UP TO sec SECONDS. Effect This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a numerical expression position(https://help.sap.com/do
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_up_to.htm"
abapFile: "abapwait_up_to.htm"
keywords: ["update", "do", "if", "try", "data", "abapwait"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Control Structures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencontrol_structures.htm) →  [Program Interruption](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwait.htm) → 

WAIT UP TO

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_shortref.htm)

Syntax

WAIT UP TO sec SECONDS.

Effect

This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a [numerical expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type f to which positive numbers (including 0) can be passed. The unit of the number in sec is seconds and the time resolution is one millisecond. After the specified time has passed, the program continues with the statement following WAIT. When used, this statement always changes the [work process](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_process_glosry.htm "Glossary Entry").

Return Codes

This statement always sets sy-subrc to 0.

Notes

-   Each time this variant of the statement WAIT is used, a [database commit](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_commit_glosry.htm "Glossary Entry") is triggered (except in [updates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_glosry.htm "Glossary Entry")). For this reason, WAIT must not be used between [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements that open or close a [database cursor](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_cursor_glosry.htm "Glossary Entry").
    
-   The variants [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm), [WAIT FOR MESSAGING CHANNELS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_amc.htm), and [WAIT FOR PUSH CHANNELS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_apc.htm) of this statement are useful only when used in combination with callback routines in [aRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarfc_glosry.htm "Glossary Entry"), [AMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamc_glosry.htm "Glossary Entry"), or [APC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapc_glosry.htm "Glossary Entry"). The variant shown here does not wait for callback routines.
    

Example

The output of the following example should correspond to approximately one million microseconds.

GET RUN TIME FIELD DATA(t1).
WAIT UP TO 1 SECONDS.
GET RUN TIME FIELD DATA(t2).
cl\_demo\_output=>display( |{ t2 - t1  STYLE = scientific }| ).

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Negative time specified for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT