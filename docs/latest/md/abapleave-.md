  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Leave](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_leave.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LEAVE%2C%20ABAPLEAVE-%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LEAVE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_shortref.htm)

Obsolete Syntax

LEAVE.

Effect

The statement LEAVE without additions is context-specific:

-   In list processing that is, when the [list processor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_processor_glosry.htm "Glossary Entry") is active, LEAVE works like [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_list-processing.htm). The list processor is either called using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_to_list-processing.htm) or called implicitly when [executable programs are processed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm).
-   In all other situations, LEAVE is executed only when the system field sy-calld is not initial; if this field is initial, otherwise it is ignored.
    -   LEAVE exits a program called using [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm) or [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm), and returns to after the calling position.
    -   LEAVE does not exit a program if it was started using [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_to_transaction.htm) or a transaction code from a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"), or if the program is processed in [batch input](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbatch_input_glosry.htm "Glossary Entry").
    -   If a program was called using SUBMIT without the addition AND RETURN, LEAVE behaves in the same way as in the calling program.

Hint

The behavior of the statement LEAVE without additions cannot be predicted statically, particularly if it is specified in callable units. Therefore, LEAVE should only be used with additions that uniquely control the behavior:

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_program.htm)
    
    [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_to_transaction.htm)
    
    [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_screen.htm)
    
    [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapleave_list-processing.htm).