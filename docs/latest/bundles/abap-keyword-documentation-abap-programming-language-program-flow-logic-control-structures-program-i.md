# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Control Structures / Program Interruption

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenwait.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwait.htm)
- [abapwait_up_to.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_up_to.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.943Z

---

### abenwait.htm

> **📖 Official SAP Documentation**: [abenwait.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwait.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Program%20Interruption%2C%20ABENWAIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Program Interruption

This section describes how programs can be generally interrupted using the statement WAIT UP TO.

-   [WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\))

Hint

Special variants of the WAIT statement interrupt programs in order to wait for the end of certain processes:

-   [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\))
-   [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\))
-   [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\))

Continue
[WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\))



**📖 Source**: [abenwait.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwait.htm)

### abapwait_up_to.htm

> **📖 Official SAP Documentation**: [abapwait_up_to.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_up_to.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapwait_up_to.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwait_up_to.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Program Interruption](javascript:call_link\('abenwait.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WAIT%20UP%20TO%2C%20ABAPWAIT_UP_TO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WAIT UP TO

[Short Reference](javascript:call_link\('abapwait_shortref.htm'\))

Syntax

WAIT UP TO sec SECONDS.

Effect

This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of the operand type f to which positive numbers can be passed, including 0. The unit of the number specified in sec is seconds and the time resolution is one millisecond. After the specified time has passed, the program execution continues with the statement following WAIT. When used, this statement always changes the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry").

Return Codes

This statement always sets sy-subrc to 0.

Hints

-   Each time this variant of the statement WAIT is used, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is triggered (except during [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry")). For this reason, WAIT must not be used between [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements that open or close a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry").
-   The variants [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_arfc.htm'\)), [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)), and [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) of this statement are useful only in combination with callback routines in [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry"), [AMC](javascript:call_link\('abenamc_glosry.htm'\) "Glossary Entry"), or [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry"). The variant shown here does not wait for callback routines.

Example

The output of the following example should correspond to approximately one million microseconds.

GET RUN TIME FIELD FINAL(t1).
WAIT UP TO 1 SECONDS.
GET RUN TIME FIELD FINAL(t2).
cl\_demo\_output=>display( |{ t2 - t1  STYLE = scientific }| ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Negative time specification for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT
