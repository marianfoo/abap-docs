# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Leave

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.58](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenobsolete_leave.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_leave.htm)
- [abapleave-.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave-.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.58
**Generated**: 2025-09-01T11:25:28.963Z

---

### abenobsolete_leave.htm

> **📖 Official SAP Documentation**: [abenobsolete_leave.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_leave.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abenobsolete_leave.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_leave.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Obsolete%20Leave%2C%20ABENOBSOLETE_LEAVE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Obsolete Leave

This section describes how to [leave](javascript:call_link\('abenabap_leave_program.htm'\)) a program with the [LEAVE](javascript:call_link\('abapleave-.htm'\)) statement and no further additions.

Continue
[LEAVE](javascript:call_link\('abapleave-.htm'\))



**📖 Source**: [abenobsolete_leave.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobsolete_leave.htm)

### abapleave-.htm

> **📖 Official SAP Documentation**: [abapleave-.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave-.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


> **📖 Official SAP Documentation**: [abapleave-.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave-.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapleave-.htm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave-.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Leave](javascript:call_link\('abenobsolete_leave.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LEAVE%2C%20ABAPLEAVE-%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LEAVE

[Short Reference](javascript:call_link\('abapleave_shortref.htm'\))

Obsolete Syntax

LEAVE.

Effect

The statement LEAVE without additions is context-specific:

-   In list processing that is, when the [list processor](javascript:call_link\('abenlist_processor_glosry.htm'\) "Glossary Entry") is active, LEAVE works like [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)). The list processor is either called using [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) or called implicitly when [executable programs are processed](javascript:call_link\('abenreporting_process.htm'\)).
-   In all other situations, LEAVE is executed only when the system field sy-calld is not initial; if this field is initial, otherwise it is ignored.
    -   LEAVE exits a program called using [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) or [SUBMIT ... AND RETURN](javascript:call_link\('abapsubmit.htm'\)), and returns to after the calling position.
    -   LEAVE does not exit a program if it was started using [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) or a transaction code from a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), or if the program is processed in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry").
    -   If a program was called using SUBMIT without the addition AND RETURN, LEAVE behaves in the same way as in the calling program.

Hint

The behavior of the statement LEAVE without additions cannot be predicted statically, particularly if it is specified in callable units. Therefore, LEAVE should only be used with additions that uniquely control the behavior:

-   [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))
    
    [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))
    
    [LEAVE *\[*TO*\]* SCREEN](javascript:call_link\('abapleave_screen.htm'\))
    
    [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)).
