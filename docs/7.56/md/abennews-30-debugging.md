  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 3.0](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-30.htm) → 

Debugger in Release 3.0

[1\. Debugging system dynpros and system programs](#!ABAP_MODIFICATION_1@1@)
[2\. Debugging ABAP lists](#!ABAP_MODIFICATION_2@2@)
[3\. Table editor](#!ABAP_MODIFICATION_3@3@)
[4\. Structure expansion](#!ABAP_MODIFICATION_4@4@)
[5\. Program overview](#!ABAP_MODIFICATION_5@5@)

Modification 1   

Debugging system dynpros and system programs
There are now special procedures for handling system programs and system dynpros in ABAP debugging. (System programs are programs with the status 'S' in the program attributes, system dynpros are the [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") of system programs or dynpros that contain only system modules (module name SYST\-...).) ).
Examples for system dynpros: list dynpro, selection screen dynpro, ....
System programs and system dynpros must be debugged in system debugging. This can be accessed from anywhere in the system by choosing System → Utilities → Debugging System or by choosing Settings → System Debugging from the debugger.

Modification 2   

Debugging ABAP lists
It is now possible to track how a list is built. As soon as a list is created, it can be displayed by pressing the Display List pushbutton in debugging. The display shows all existing lines with their formats. Exception: The only exception is the current line, which is not formatted until after [NEW-LINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-line.htm).

Modification 3   

Table editor
In the display for internal tables, it is now also possible to change the displayed table. Rows can be changed, inserted, appended, and deleted.

Modification 4   

Structure expansion
In the structure and table displays, structures from fields and tables passed from external programs are now expanded.

Modification 5   

Program overview
A program overview is displayed. This lists all subroutines, functions, modules, and events belonging to the current program. The program source code can be displayed by double-clicking a line.