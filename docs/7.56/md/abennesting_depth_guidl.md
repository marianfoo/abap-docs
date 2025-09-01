  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Structure and Style](javascript:call_link\('abenstructure_style_gdl.htm'\)) →  [Complexity](javascript:call_link\('abencomplexity_gdl.htm'\)) → 

Nesting Depth

Background

The nesting depth is the number of statement blocks that are nested due to the use of control structures (branches, loops). We will discuss the nesting depth at the level of a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")). [Implementations must not](javascript:call_link\('abendial_mod_event_block_guidl.htm'\) "Guideline") occur at other points.

The maximum nesting depth is restricted to 256 by ABAP Compiler.

Rule

Restrict the nesting depth of control structures

Restrict the maximum nesting depth within a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) to five levels.

Details

In addition to the [number of executable statements](javascript:call_link\('abenproc_volume_guidl.htm'\) "Guideline"), the control structures of a procedure ([method](javascript:call_link\('abenfunct_module_subroutine_guidl.htm'\) "Guideline")) are also important for their clarity and traceability. Each new nesting level makes nested branches and loops (such as in the statements IF, CASE, DO, WHILE, and LOOP) increasingly complicated and difficult to interpret. For this reason, the nesting depth must be restricted within a procedure, for example by moving functions to other procedures.

A maximum nesting depth of five levels is considered tolerable. A deeper nesting requires a great deal of effort to trace the program flow based on the source code. This would considerably constrain maintenance and further development.

Note

The use of modern language elements can help to restrict the maximum nesting depth. This is the case if a statement or a built-in function replaces an entire control structure, for instance, for REPLACE with the addition ALL OCCURRENCES or for the numeric extremum functions, nmax( ) and nmin( ), to determine the maximum or minimum value. The former replaces a loop, the latter an IF control structure.

Example

The transition from the bad to the good example in the rule for [modern ABAP](javascript:call_link\('abenmodern_abap_guidl.htm'\) "Guideline") shows how you can reduce the nesting depth by using modern language elements.