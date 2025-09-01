# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Control Structures / Program Interruption

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenwait.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwait.htm)
- [abapwait_up_to.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_up_to.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.505Z

---

### abenwait.htm

> **📖 Official SAP Documentation**: [abenwait.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwait.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) → 

Program Interruption

This section describes how programs are usually interrupted using the statement [WAIT](javascript:call_link\('abapwait_up_to.htm'\)). A special [variant](javascript:call_link\('abapwait_until.htm'\)) is explained in the context of [asynchronous RFC](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry").

Continue
[WAIT UP TO](javascript:call_link\('abapwait_up_to.htm'\))



**📖 Source**: [abenwait.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwait.htm)

### abapwait_up_to.htm

> **📖 Official SAP Documentation**: [abapwait_up_to.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_up_to.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapwait_up_to.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwait_up_to.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Control Structures](javascript:call_link\('abencontrol_structures.htm'\)) →  [Program Interruption](javascript:call_link\('abenwait.htm'\)) → 

WAIT UP TO

[Quick Reference](javascript:call_link\('abapwait_shortref.htm'\))

Syntax

WAIT UP TO sec SECONDS.

Effect

This statement interrupts the execution of the program by the number of seconds specified in sec. sec is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i to which positive numbers (and 0) can be passed. The unit of the number in sec is seconds and the time resolution is one millisecond. After the specified time has passed, the program continues with the statement following WAIT. When used, this statement always changes the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry").

Return Codes

This statement always sets sy-subrc to 0.

Notes

-   Each time this variant of the statement WAIT is used, a [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry") is triggered (except in [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry")). For this reason, WAIT must not be used between [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements that open or close a [database cursor](javascript:call_link\('abendatabase_cursor_glosry.htm'\) "Glossary Entry").
    
-   The variants [WAIT FOR ASYNCHRONOUS TASKS](javascript:call_link\('abapwait_until.htm'\)), [WAIT FOR MESSAGING CHANNELS](javascript:call_link\('abapwait_amc.htm'\)), and [WAIT FOR PUSH CHANNELS](javascript:call_link\('abapwait_apc.htm'\)) of this statement are useful only when used in combination with callback routines in [aRFC](javascript:call_link\('abenarfc_glosry.htm'\) "Glossary Entry"), [AMC](javascript:call_link\('abenamc_glosry.htm'\) "Glossary Entry"), or [APC](javascript:call_link\('abenapc_glosry.htm'\) "Glossary Entry"). The variant shown here does not wait for callback routines.
    

Example

The output of the following example should correspond to approximately one million microseconds.

GET RUN TIME FIELD DATA(t1).
WAIT UP TO 1 SECONDS.
GET RUN TIME FIELD DATA(t2).
cl\_demo\_output=>display( |{ t2 - t1  STYLE = scientific }| ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: Negative time specified for sec.
    Runtime error: WAIT\_ILLEGAL\_TIME\_LIMIT
