  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_flow_logic.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Control Structures, ABENCONTROL_STRUCTURES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

Control Structures

The statements in a [processing block](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocessing_block_glosry.htm "Glossary Entry") are organized in control structures. These define statement blocks and control the progress of the program within a processing block. They determine the conditions for processing statement blocks and how often they are run. Control structures can be nested. Statement blocks in control structures can themselves contain control structures.

The following control structures exist:

-   Sequence
    
    A sequence consists of a statement block that is not defined explicitly by control statements. The statements it contains are processed exactly once without conditions. The execution of a sequence can be suspended for a certain time using a [WAIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_up_to.htm) statement.
    
-   Branch (selection)
    
    A branch consists of one or more statement blocks that are defined by control statements such as [IF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapif.htm) or [CASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcase.htm), and that are executed depending on conditions.
    
-   Loop (iteration)
    
    A loop consists of a statement block that is defined by control statements such as [DO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapdo.htm) or [WHILE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwhile.htm), and that can be executed multiple times.
    

There are also special control structures for [exception handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_exceptions.htm).

Hint

One obsolete control structure is [ON CHANGE OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapon.htm).

Continue
[Branches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_branches.htm)
[Loops](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_loops.htm)
[Program Interruption](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwait.htm)