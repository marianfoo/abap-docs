  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Debugger%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-DEBUGGING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Debugger in ABAP Release 3.0

[1\. Debugging System Dynpros and System Programs](#!ABAP_MODIFICATION_1@1@)
[2\. Debugging ABAP Lists](#!ABAP_MODIFICATION_2@2@)
[3\. Table Editor](#!ABAP_MODIFICATION_3@3@)
[4\. Structure Expansion](#!ABAP_MODIFICATION_4@4@)
[5\. Program Overview](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Debugging System Dynpros and System Programs

There are now special procedures for handling system programs and system dynpros in ABAP debugging. (System programs are programs with the status 'S' in the program properties, system dynpros are the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of system programs or dynpros that contain only system modules (module name SYST\-...).)

Examples for system dynpros: list dynpro, selection screen dynpro, ....

System programs and system dynpros must be debugged in system debugging. This can be accessed from anywhere in the system by choosing System → Utilities → Debugging System or by choosing Settings → System Debugging from the debugger.

Modification 2   

Debugging ABAP Lists

It is now possible to track how a list is built. As soon as a list is created, it can be displayed by pressing the Display List pushbutton in debugging. The display shows all existing lines with their formats. Exception: The only exception is the current line, which is not formatted until after [NEW-LINE](javascript:call_link\('abapnew-line.htm'\)).

Modification 3   

Table Editor

In the display for internal tables, it is now also possible to change the displayed table. Rows can be changed, inserted, appended, and deleted.

Modification 4   

Structure Expansion

In the structure and table displays, structures from fields and tables passed from external programs are now expanded.

Modification 5   

Program Overview

A program overview is displayed. This lists all subroutines, functions, modules, and events belonging to the current program. The program source code can be displayed by double-clicking a line.