  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Calling and leaving program units](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures.htm) →  [External Procedure Call](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencall_procedures_extern.htm) → 

Program Groups in External Procedure Calls

The programs within an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") are grouped into [program groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session.htm) in the session. There is always one [main program group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_group_glosry.htm "Glossary Entry") and a number of optional [additional program groups](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenadditional_prog_group_glosry.htm "Glossary Entry"). Each program group contains a main program and any other programs loaded. In an external procedure calls where the procedure accesses shared resources of the program group, it is important to know the program group of the master program of the procedure. Here, non-critical external procedure calls can be distinguished from critical external procedure calls.

Non-Critical External Procedure Calls

The only procedures designed for external calls are the visible methods of global classes and function modules. The master programs of these procedures are always [main programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_glosry.htm "Glossary Entry") in their program groups and the procedures always work with the resources of this program group.

Note

For this reason, only the methods of global classes and function modules should be called externally.

Critical External Procedure Calls

Subroutines and the methods of local classes are not designed for external calls. Both in external subroutine calls and in dynamic calls of the local class of a program that is not its own program group, there is no static assignment to a program group. The program in which a non-loaded program is used for the first time determines the program group. The order of the user actions, field content, or switches can determine the order in which the programs are used, which means that the master program of the procedure can be in the main program group in one instance, and in an additional program group in another instance.

The way external procedures of additionally loaded programs are used is critical for the following reasons:

-   Within a program group, only the [dynpros](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_glosry.htm "Glossary Entry"), [selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry"), [lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_glosry.htm "Glossary Entry"), and [GUI statuses](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_status_glosry.htm "Glossary Entry") of the main program are used. For example, the statement [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm) does not call any dynpros of its own master program in an externally called subroutine of another loaded program and calls a dynpro of the main program of its program group instead. The responses to user actions are also raised in the main program.

-   [Interface work areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") declared using the statements [TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptables.htm), [NODES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnodes.htm), or [DATA BEGIN OF COMMON PART](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdata_common.htm) exist once only in each program group and are shared by all of its programs. Each main program is shared by the additionally loaded programs of the interface work areas.

This means there is no static way of defining which interface work areas and which screens are used by an externally called subroutine or local class. The following figure shows how programs are loaded into program groups, using the example of an external subroutine call.

![Figure](abdoc_prog_group.gif)

Subroutines and methods of local classes must always be called internally and never externally.

Note

The [text elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_element_glosry.htm "Glossary Entry") of an additionally loaded program are always taken from its own [text pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_pool_glosry.htm "Glossary Entry").

Example

The table work area dbtab declared in sapssubr is shared either with sapmprog or with saplfugr. If share has the value 'FUGR', saplfugr and sapssubr share the table work area. Otherwise it is shared by sapmprog and sapssubr.

PROGRAM sapmprog.
TABLES dbtab.
...
IF share = 'FUGR'.
  CALL FUNCTION 'FUNC'.
ENDIF.
...
PERFORM sub IN PROGRAM sapssubr.

FUNCTION-POOL saplfugr.
TABLES dbtab.
...
FUNCTION func.
  PERFORM sub IN PROGRAM sapssubr.
ENDFUNCTION.

PROGRAM sapssubr.
TABLES dbtab.
...
FORM sub.
  ...
ENDFORM.