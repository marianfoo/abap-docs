  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Leave](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_leave.htm) → 

LEAVE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_shortref.htm)

Obsolete Syntax

LEAVE.

Effect

The statement LEAVE without additions is context-specific:

-   In list processing (when the [list processor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_processor_glosry.htm "Glossary Entry") is active), LEAVE works like [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_list-processing.htm). The list processor is either called using [LEAVE TO LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_list-processing.htm) or called implicitly when [executable programs are processed](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreporting_process.htm).
    
-   In all other situations, LEAVE is executed only when the system field sy-calld is not initial; if this field is initial, it is ignored.
    

-   LEAVE exits a program called using [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction.htm) or [SUBMIT ... AND RETURN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm), and returns to the point after the call point.

-   LEAVE does not exit a program if it was started using [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_transaction.htm) or a transaction code from a [screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"), or if the program is processed in [batch input](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbatch_input_glosry.htm "Glossary Entry").

-   If a program was called using SUBMIT without the addition AND RETURN, LEAVE works the same way as in the calling program.

Note

The behavior of the statement LEAVE without additions is particularly unpredictable (statically) when specified in callable units. Therefore, LEAVE should only be used with additions that uniquely control the behavior:

-   [LEAVE PROGRAM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_program.htm)
    
-   [LEAVE TO TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_to_transaction.htm)
    
-   [LEAVE *\[*TO*\]* SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_screen.htm)
    
-   [LEAVE LIST-PROCESSING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapleave_list-processing.htm).