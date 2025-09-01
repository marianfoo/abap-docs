  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Robust ABAP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrobust_abap_guidl.htm) →  [Modularization units](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmodularization_unit_guidl.htm) → 

Exiting Procedures

Background

You can exit procedures in the usual way using the END... statement or by using one of the following statements:

-   RETURN

-   EXIT

-   CHECK log\_exp

These statements end a procedure properly, that is, the system passes output parameters for which passing by value is specified and returns values to the assigned actual parameters. In addition, you can terminate the processing of a procedure as follows, without supplying the actual parameters with values:

-   Calling another unit (program, dynpro) without returning to the procedure

-   Triggering an exception or sending a dialog message if an [error occurs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenerror_handling_guidl.htm "Guideline")

Rule

Only use RETURN to exit procedures

Use the statement RETURN to properly exit a procedure (method, see rule [no implementations in function modules and subroutines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) early.

Details

The statement RETURN is used to exit procedures and always has this result. The behavior of the EXIT and CHECK statements (conditional exit), in contrast, is context- dependent: Within a loop, only the loop is exited; outside a loop, the surrounding procedure is exited. This ambiguity limits the legibility of source code. Therefore, EXIT and CHECK should only be used to exit loops, and RETURN only to exit procedures. Only RETURN enables you to exit a procedure in a loop context.

Note

As well as the statements RETURN, EXIT, and CHECK specified here, the statements REJECT and STOP can be used to exit special [event blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendial_mod_event_block_guidl.htm "Guideline"). Conversely, RETURN, EXIT, and CHECK can also exit processing blocks other than procedures. In both cases, you must consider the particular behavior of the ABAP runtime environment regarding the exited processing block. Because other processing blocks are only supposed to contain one method call according to the rules [use ABAP Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") and [no implementations in dialog modules and event blocks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendial_mod_event_block_guidl.htm "Guideline"), these cases should no longer occur in new programs.

Exception

An exception to the rule to only use RETURN to exit procedures are CHECK statements that are located at the beginning of a procedure and that check the prerequisites for the execution of the procedure there. Using the CHECK statement in such a way does not impair the legibility and is thus allowed. However, this exception does not apply to other positions within a procedure and outside loops.

Bad Example

The following source code shows how a method is left early with a CHECK statement, whose meaning cannot be identified by simply looking at it. You have to know that CHECK exits the procedure if the following logical expression is wrong, which is why a double negation is necessary here.

METHOD some\_method.
   ...
   CHECK is\_finished = abap\_false.
   ...
ENDMETHOD.

Good Example

The following source code corrects and simplifies the above example by implementing a conditional exit with an IF control structure that is easy to read.

METHOD some\_method.
   ...
   IF is\_finished = abap\_true.
      RETURN.
   ENDIF.
   ...
ENDMETHOD.