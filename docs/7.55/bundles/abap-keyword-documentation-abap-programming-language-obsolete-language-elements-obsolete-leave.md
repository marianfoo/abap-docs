# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Leave

Included pages: 2


### abenobsolete_leave.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Leave

This section describes how to [leave](javascript:call_link\('abenabap_leave_program.htm'\)) a program with the [LEAVE](javascript:call_link\('abapleave-.htm'\)) statement and no further additions.

Continue
[LEAVE](javascript:call_link\('abapleave-.htm'\))


### abapleave-.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Leave](javascript:call_link\('abenobsolete_leave.htm'\)) → 

LEAVE

[Short Reference](javascript:call_link\('abapleave_shortref.htm'\))

Obsolete Syntax

LEAVE.

Effect

The statement LEAVE without additions is context-specific:

-   In list processing (when the [list processor](javascript:call_link\('abenlist_processor_glosry.htm'\) "Glossary Entry") is active), LEAVE works like [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)). The list processor is either called using [LEAVE TO LIST-PROCESSING](javascript:call_link\('abapleave_to_list-processing.htm'\)) or called implicitly when [executable programs are processed](javascript:call_link\('abenreporting_process.htm'\)).

-   In all other situations, LEAVE is executed only when the system field sy-calld is not initial; if this field is initial, it is ignored.

-   LEAVE exits a program called using [CALL TRANSACTION](javascript:call_link\('abapcall_transaction.htm'\)) or [SUBMIT ... AND RETURN](javascript:call_link\('abapsubmit.htm'\)), and returns to the point after the call point.

-   LEAVE does not exit a program if it was started using [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\)) or a transaction code from a [screen](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), or if the program is processed in [batch input](javascript:call_link\('abenbatch_input_glosry.htm'\) "Glossary Entry").

-   If a program was called using SUBMIT without the addition AND RETURN, LEAVE works the same way as in the calling program.

Hint

The behavior of the statement LEAVE without additions is particularly unpredictable (statically) when specified in callable units. Therefore, LEAVE should only be used with additions that uniquely control the behavior:

-   [LEAVE PROGRAM](javascript:call_link\('abapleave_program.htm'\))
    [LEAVE TO TRANSACTION](javascript:call_link\('abapleave_to_transaction.htm'\))
    [LEAVE *\[*TO*\]* SCREEN](javascript:call_link\('abapleave_screen.htm'\))
    [LEAVE LIST-PROCESSING](javascript:call_link\('abapleave_list-processing.htm'\)).
