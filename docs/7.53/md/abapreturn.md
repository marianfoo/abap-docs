  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenleave_processing_blocks.htm) → 

RETURN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreturn_shortref.htm)

Syntax

RETURN.

Effect

This statement ends the current processing block immediately. It can appear at any point in a [processing block](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocessing_block_glosry.htm "Glossary Entry") and ends this block regardless of the statement block or control structure in which the block appears.

After the processing block is exited, the runtime environment responds in the same way as when the [processing block is exited in a regular way](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenend_processing_blocks.htm) (with the exception of [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) and the [reporting event blocks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_event_glosry.htm "Glossary Entry") START-OF-SELECTION and GET) . In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using RETURN.
    
-   After the reporting event block START-OF-SELECTION is exited using RETURN, the runtime environment does not trigger any more reporting events; instead, it calls the list processor directly to display the basic list.
    
-   After the reporting event block GET is exited using RETURN, subordinate nodes in the hierarchical structure of the associated [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.
    

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexit_procedure_guidl.htm "Guideline")

Note

The statement RETURN is provided for exiting processing blocks early but correctly. However, since RETURN behaves differently in [GET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget-.htm) events than when the event block is exited as usual, the statement [REJECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreject_shortref.htm) should be used here, which was designed especially for this purpose.

Example

Exits the method show\_list using RETURN if one of the formal parameters required (structure or data\_tab) is initial.

METHOD show\_list.
  "IMPORTING structure TYPE c
  "          data\_tab  TYPE ANY TABLE.
  DATA alv\_list TYPE REF TO cl\_gui\_alv\_grid.
  IF structure IS INITIAL OR
     data\_tab  IS INITIAL.
    RETURN.
  ENDIF.
  CREATE OBJECT alv\_list
         EXPORTING i\_parent = cl\_gui\_container=>screen0.
  alv\_list->set\_table\_for\_first\_display(
    EXPORTING i\_structure\_name = structure
    CHANGING  it\_outtab        = data\_tab ).
  CALL SCREEN 100.
ENDMETHOD.