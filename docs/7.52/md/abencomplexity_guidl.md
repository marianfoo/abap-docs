  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstructure_style_guidl.htm) → 

Complexity

The aim of program complexity is to keep the source code as clear and readable as possible for the human reader. The computer has no problems with compiling or executing highly complex programs. Unformatted source code does also not constitute any problems. The human reader, however, is usually overwhelmed by the program complexity.

High complexity in this context means, for example, voluminous procedures ([methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) and control structures with a very deep nesting or unclear classes without clearly defined tasks. The program complexity must not be confused with the complexity of the task that is handled by the program. Even if task complexity is very high, it is always possible to keep the program complexity manageable for individual procedures and classes by clearly [separating the tasks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenseperation_concerns_guidl.htm "Guideline").

To understand a program, the reader must be able to mentally trace the flow, and keep an eye on the different paths through the program that result from the control structure, under different external conditions. This is very difficult when dealing with voluminous procedures or deep nesting. In these situations, the program author may have been overwhelmed and consequently the program might contain errors. These situations increase the time required for corrections or further developments and the risk of errors. What makes the situation even more difficult is that testing complex procedures requires a great deal of time and effort, due to the high number of possible execution paths. Formulating a test case for every single execution path is often impossible due to the high number of paths.

-   [Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_guidl.htm "Guideline")

-   [Nesting Depth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennesting_depth_guidl.htm "Guideline")

-   [Procedure Volume](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenproc_volume_guidl.htm "Guideline")

-   [Class Size](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_size_guidl.htm "Guideline")

-   [Dead Code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendead_code_guidl.htm "Guideline")

Continue
[Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_guidl.htm)
[Nesting Depth](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennesting_depth_guidl.htm)
[Procedure Volume](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenproc_volume_guidl.htm)
[Class Size](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclass_size_guidl.htm)
[Dead Code](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendead_code_guidl.htm)