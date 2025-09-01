  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Control%20Structures%2C%20ABENCONTROL_STRUCTURES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Control Structures

The statements in a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") are organized in control structures. These define statement blocks and control the progress of the program within a processing block. They determine the conditions for processing statement blocks and how often they are run. Control structures can be nested. Statement blocks in control structures can themselves contain control structures.

The following control structures exist:

-   Sequence
    
    A sequence consists of a statement block that is not defined explicitly by control statements. The statements it contains are processed exactly once without conditions. The execution of a sequence can be suspended for a certain time using a [WAIT](javascript:call_link\('abapwait_up_to.htm'\)) statement.
    
-   Branch (selection)
    
    A branch consists of one or more statement blocks that are defined by control statements such as [IF](javascript:call_link\('abapif.htm'\)) or [CASE](javascript:call_link\('abapcase.htm'\)), and that are executed depending on conditions.
    
-   Loop (iteration)
    
    A loop consists of a statement block that is defined by control statements such as [DO](javascript:call_link\('abapdo.htm'\)) or [WHILE](javascript:call_link\('abapwhile.htm'\)), and that can be executed multiple times.
    

There are also special control structures for [exception handling](javascript:call_link\('abenabap_exceptions.htm'\)).

Hint

One obsolete control structure is [ON CHANGE OF](javascript:call_link\('abapon.htm'\)).

Continue
[Branches](javascript:call_link\('abenabap_branches.htm'\))
[Loops](javascript:call_link\('abenabap_loops.htm'\))
[Program Interruption](javascript:call_link\('abenwait.htm'\))