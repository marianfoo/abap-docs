  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) → 

Complexity

The aim of program complexity is to keep the source code as clear and readable as possible for the human reader. The computer has no problems with compiling or executing highly complex programs. Unformatted source code does also not constitute any problems. The human reader, however, is usually overwhelmed by the program complexity.

High complexity in this context means, for example, voluminous procedures ([methods](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) and control structures with a very deep nesting or unclear classes without clearly defined tasks. The program complexity must not be confused with the complexity of the task that is handled by the program. Even if task complexity is very high, it is always possible to keep the program complexity manageable for individual procedures and classes by clearly [separating the tasks](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline").

To understand a program, the reader must be able to mentally trace the flow, and keep an eye on the different paths through the program that result from the control structure, under different external conditions. This is very difficult when dealing with voluminous procedures or deep nesting. In these situations, the program author may have been overwhelmed and consequently the program might contain errors. These situations increase the time required for corrections or further developments and the risk of errors. What makes the situation even more difficult is that testing complex procedures requires a great deal of time and effort, due to the high number of possible execution paths. Formulating a test case for every single execution path is often impossible due to the high number of paths.

-   [Expressions](javascript:call_link\('abenexpression_guidl.htm'\) "Guideline")
-   [Nesting Depth](javascript:call_link\('abennesting_depth_guidl.htm'\) "Guideline")
-   [Procedure Volume](javascript:call_link\('abenproc_volume_guidl.htm'\) "Guideline")
-   [Class Size](javascript:call_link\('abenclass_size_guidl.htm'\) "Guideline")
-   [Dead Code](javascript:call_link\('abendead_code_guidl.htm'\) "Guideline")

Continue
[Expressions](javascript:call_link\('abenexpression_guidl.htm'\))
[Nesting Depth](javascript:call_link\('abennesting_depth_guidl.htm'\))
[Procedure Volume](javascript:call_link\('abenproc_volume_guidl.htm'\))
[Class Size](javascript:call_link\('abenclass_size_guidl.htm'\))
[Dead Code](javascript:call_link\('abendead_code_guidl.htm'\))