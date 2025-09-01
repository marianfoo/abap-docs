---
title: "Runtime Error"
description: |
  Runtime errors identify situations in which the system cannot continue running an ABAP program and has to terminate it. Runtime errors can occur in one of the following situations when ABAP programs are executed: -   Non-handled exceptions: -   A handleable exception is not handled. -   A non-handle
version: "7.54"
category: "error-handling"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennoncat_exceptions.htm"
abapFile: "abennoncat_exceptions.htm"
keywords: ["do", "if", "try", "class", "data", "exception-handling", "abennoncat", "exceptions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_exceptions.htm) → 

Runtime Error

Runtime errors identify situations in which the system cannot continue running an ABAP program and has to terminate it. Runtime errors can occur in one of the following situations when ABAP programs are executed:

-   Non-handled exceptions:

-   A handleable exception is not handled.

-   A non-handleable exception is raised.

-   Program-driven raise:

-   The statement [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_shortdump.htm) or the addition [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm) is used.

-   An [assertion](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassertion_glosry.htm "Glossary Entry") fails.

-   An [exit message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexit_message_glosry.htm "Glossary Entry") or [message](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmessage_glosry.htm "Glossary Entry") of type X is sent.

Each runtime error is identified by a name and assigned to a specific error situation. Each runtime error produces a [database rollback](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_rollback_glosry.htm "Glossary Entry"). Following a program termination caused by a runtime error, the system displays a [short dump](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshort_dump_glosry.htm "Glossary Entry") which indicates the name of the runtime error, the associated exception class, content of data objects, active calls, control structures, and so on, and allows the user to navigate directly to ABAP Debugger. Short dumps are kept in the system for 14 days by default and managed using the [ABAP dump analysis](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dump_analsyis_glosry.htm "Glossary Entry") (transaction ST22). The output of the short dump can be changed in the [profile parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") rdisp/verbose\_level if there are special requirements.

Note

If a program-driven termination of a program is needed in situations where it is not a good idea for the program to continue, it is best to use [RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_shortdump.htm), [THROW SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_result.htm), or [ASSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassert.htm) from now on and avoid using [exit messages](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexit_message_glosry.htm "Glossary Entry").

Example

Raises the runtime error COMPUTE\_INT\_ZERODIVIDE when the exception CX\_SY\_ZERODIVIDE is not caught.

cl\_demo\_output=>display( 1 / 0 ).

Continue
[RAISE SHORTDUMP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_shortdump.htm)