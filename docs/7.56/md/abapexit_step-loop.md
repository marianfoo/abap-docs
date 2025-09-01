  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - ABAP Statements](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

EXIT FROM STEP-LOOP

[Short Reference](javascript:call_link\('abapexit_from_step-loop_shortref.htm'\))

Syntax

EXIT FROM STEP-LOOP.

Effect

When processing [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") or [step loops](javascript:call_link\('abenstep_loop_glosry.htm'\) "Glossary Entry") with the statement [LOOP](javascript:call_link\('dynploop.htm'\)) in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"), this statement causes the loop to be terminated immediately. The current ABAP- [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") is exited instantly and the dynpro flow logic continues after the statement ENDLOOP. During [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing, the statement causes the current table control line and the following lines or step loop groups to be hidden on the screen. If the statement is not executed in the processing of a LOOP loop in the dynpro flow logic, the program terminates with a [termination message](javascript:call_link\('abentermination_message_glosry.htm'\) "Glossary Entry").