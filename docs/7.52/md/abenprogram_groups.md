  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [External Procedure Call](javascript:call_link\('abencall_procedures_extern.htm'\)) → 

Program Groups in External Procedure Calls

The programs within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") are grouped into [program groups](javascript:call_link\('abeninternal_session.htm'\)) there. There is always a [main program group](javascript:call_link\('abenmain_program_group_glosry.htm'\) "Glossary Entry") and possibly multiple [additional program groups](javascript:call_link\('abenadditional_prog_group_glosry.htm'\) "Glossary Entry"). Each program group contains a main program and possibly several additional programs. In an external procedure call, it is important to know the program group of the master program of the procedure, if the procedure accesses shared resources of the program group. This causes non-critical and critical external procedure calls.

Non-Critical External Procedure Calls

The only procedures designed for external calls are the visible methods of global classes and function modules. The master programs of these procedures are always [main programs](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of their program groups and the procedure always works with the resources of this program group.

Note

For this reason, only call the methods of global classes and function modules.

Critical External Procedure Calls

Subroutines and the methods of local classes are not designed for external calls. There is no static assignment to a program group in external subroutine calls or in dynamic calls of the local class of a program that does not form its own program group. The program in which an unloaded program is used for the first time determines the program group. The order of user actions, field contents, or switches can determine the order of the programs, which means that the master program of the procedure can be in the main program group in one instance, and in an additional program group in another instance.

The usage of external procedures of additional programs is critical for the following reasons:

-   Within a program group, only the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"), [lists](javascript:call_link\('abenlist_glosry.htm'\) "Glossary Entry"), and [GUI statuses](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry") of the main program are used. For example, the statement [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) does not call any dynpros of its own master program in an externally called subroutine of an additional program; instead, it calls a dynpro of the main program of its program group. The reaction to user actions also takes place in the main program.

-   [Interface work areas](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") declared using the statements [TABLES](javascript:call_link\('abaptables.htm'\)), [NODES](javascript:call_link\('abapnodes.htm'\)), or [DATA BEGIN OF COMMON PART](javascript:call_link\('abapdata_common.htm'\)) exist once only in each program group, and are shared by all of its programs. Each main program is shared by the additional programs of the interface work areas.

Therefore, there is no static way of defining which interface work areas and which screens are used by an externally called subroutine or local class. The following figure shows how programs are added to program groups, using the example of an external subroutine call.

![Figure](abdoc_prog_group.gif)

Subroutines and methods of local classes must always be called internally and never externally.

Note

The [text elements](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry") of an added program are always taken from its own [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry").

Example

The table work area dbtab declared in sapssubr is shared either with sapmprog or with saplfugr. If share has the value 'FUGR', saplfugr andsapssubr share the table work area. Otherwise it is shared by sapmprog and sapssubr.

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