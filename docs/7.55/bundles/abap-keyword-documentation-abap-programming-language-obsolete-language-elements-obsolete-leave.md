# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Leave

Included pages: 2


### abenobsolete_leave.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) → 

Obsolete Leave

This section describes how to [leave](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_leave_program.htm) a program with the [LEAVE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave-.htm) statement and no further additions.

Continue
[LEAVE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave-.htm)


### abapleave-.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Leave](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_leave.htm) → 

LEAVE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_shortref.htm)

Obsolete Syntax

LEAVE.

Effect

The statement LEAVE without additions is context-specific:

-   In list processing (when the [list processor](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_processor_glosry.htm "Glossary Entry") is active), LEAVE works like [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_list-processing.htm). The list processor is either called using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_list-processing.htm) or called implicitly when [executable programs are processed](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreporting_process.htm).

-   In all other situations, LEAVE is executed only when the system field sy-calld is not initial; if this field is initial, it is ignored.

-   LEAVE exits a program called using [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction.htm) or [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit.htm), and returns to the point after the call point.

-   LEAVE does not exit a program if it was started using [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm) or a transaction code from a [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry"), or if the program is processed in [batch input](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_glosry.htm "Glossary Entry").

-   If a program was called using SUBMIT without the addition AND RETURN, LEAVE works the same way as in the calling program.

Hint

The behavior of the statement LEAVE without additions is particularly unpredictable (statically) when specified in callable units. Therefore, LEAVE should only be used with additions that uniquely control the behavior:

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_program.htm)
    [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_to_transaction.htm)
    [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_screen.htm)
    [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapleave_list-processing.htm).
