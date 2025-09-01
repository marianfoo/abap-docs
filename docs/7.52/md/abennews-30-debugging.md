  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 3.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-30.htm) → 

The Debugger in Release 3.0

[1\. Debugging system screens and system programs](#!ABAP_MODIFICATION_1@1@)

[2\. Debugging ABAP Lists](#!ABAP_MODIFICATION_2@2@)

[3\. Table editor](#!ABAP_MODIFICATION_3@3@)

[4\. Structure expansion](#!ABAP_MODIFICATION_4@4@)

[5\. Program overview](#!ABAP_MODIFICATION_5@5@)

Modification 1

Debugging system screens and system programs
There are now special procedures for handling system programs and system screens in ABAP/4 debugging. (System programs are programs with the status 'S' in the program attributes, system screens are the [screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry") of system programs or screens that contain only system modules (module name SYST\-...).)
Examples of system screens are list screens and selection screens.
If you want to debug system programs and/or system screens, you must switch to system debugging. To do this, you can access system debugging from anywhere in the system by choosing System → Utilities → Debugging System, or if you are already in debugging, you can choose Settings → System Debugging.

Modification 2

Debugging ABAP/4 lists
It is now possible to track the generation of a list. As soon as a list is generated, you can branch to the display by pressing the Display list pushbutton. The display shows all existing lines with their formats. The only exception is the current line, which is not formatted until after [NEW-LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-line.htm).

Modification 3

Table editor
In the internal table display, you can now make modifications by changing, inserting, appending and deleting lines.

Modification 4

Structure expansion
In the structure and table displays, structures from fields and tables passed from external programs are now expanded.

Modification 5

Program overview
A program overview is displayed. This lists all subroutines, functions, modules and events belonging to the current program. By double-clicking on a line, you can display the program source code.