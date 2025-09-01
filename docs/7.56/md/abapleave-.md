  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Leave](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobsolete_leave.htm) → 

LEAVE

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_shortref.htm)

Obsolete Syntax

LEAVE.

Effect

The statement LEAVE without additions is context-specific:

-   In list processing that is, when the [list processor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_processor_glosry.htm "Glossary Entry") is active, LEAVE works like [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_list-processing.htm). The list processor is either called using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_list-processing.htm) or called implicitly when [executable programs are processed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_process.htm).
-   In all other situations, LEAVE is executed only when the system field sy-calld is not initial; if this field is initial, otherwise it is ignored.
    -   LEAVE exits a program called using [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transaction.htm) or [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit.htm), and returns to after the calling position.
    -   LEAVE does not exit a program if it was started using [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm) or a transaction code from a [dynpro](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry"), or if the program is processed in [batch input](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbatch_input_glosry.htm "Glossary Entry").
    -   If a program was called using SUBMIT without the addition AND RETURN, LEAVE behaves in the same way as in the calling program.

Hint

The behavior of the statement LEAVE without additions cannot be predicted statically, particularly if it is specified in callable units. Therefore, LEAVE should only be used with additions that uniquely control the behavior:

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_program.htm)
    
    [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_to_transaction.htm)
    
    [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_screen.htm)
    
    [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapleave_list-processing.htm).