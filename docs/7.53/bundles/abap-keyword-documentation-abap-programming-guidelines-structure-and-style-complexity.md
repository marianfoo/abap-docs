# ABAP Keyword Documentation / ABAP Programming Guidelines / Structure and Style / Complexity

Included pages: 6


### abencomplexity_guidl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) → 

Complexity

The aim of program complexity is to keep the source code as clear and readable as possible for the human reader. The computer has no problems with compiling or executing highly complex programs. Unformatted source code does also not constitute any problems. The human reader, however, is usually overwhelmed by the program complexity.

High complexity in this context means, for example, voluminous procedures ([methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) and control structures with a very deep nesting or unclear classes without clearly defined tasks. The program complexity must not be confused with the complexity of the task that is handled by the program. Even if task complexity is very high, it is always possible to keep the program complexity manageable for individual procedures and classes by clearly [separating the tasks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenseperation_concerns_guidl.htm "Guideline").

To understand a program, the reader must be able to mentally trace the flow, and keep an eye on the different paths through the program that result from the control structure, under different external conditions. This is very difficult when dealing with voluminous procedures or deep nesting. In these situations, the program author may have been overwhelmed and consequently the program might contain errors. These situations increase the time required for corrections or further developments and the risk of errors. What makes the situation even more difficult is that testing complex procedures requires a great deal of time and effort, due to the high number of possible execution paths. Formulating a test case for every single execution path is often impossible due to the high number of paths.

-   [Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_guidl.htm "Guideline")

-   [Nesting Depth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennesting_depth_guidl.htm "Guideline")

-   [Procedure Volume](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenproc_volume_guidl.htm "Guideline")

-   [Class Size](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_size_guidl.htm "Guideline")

-   [Dead Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendead_code_guidl.htm "Guideline")

Continue
[Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexpression_guidl.htm)
[Nesting Depth](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennesting_depth_guidl.htm)
[Procedure Volume](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenproc_volume_guidl.htm)
[Class Size](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclass_size_guidl.htm)
[Dead Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendead_code_guidl.htm)


### abenexpression_guidl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm) → 

Expressions

Background

An expression is part of an ABAP statement that returns a result. An expression consists of one or more operands in combination with operators or special ABAP words. Expressions can be logical expressions constructed from relational expressions and also calculation expressions. The latter type is subdivided into arithmetic expressions, bit expressions, and character string expressions. Data objects, other suitable expressions, and calls of built-in functions and functional methods can all be used as expression operands. In character string processing, regular expressions for searches and pattern comparisons are also used.

These expressions can be nested and combined in many different ways. Nested and chained calls are possible for functional methods. The maximum nesting depth of expressions is restricted to 32 by ABAP Compiler.

Rule

Limit the complexity of expressions

Use expressions at operand positions in a way that means the program remains legible and understandable.

Details

The diverse options for expressions mean that the use of helper variables is superfluous in many places. The use of expressions and functional calls at operand positions is useful under the following prerequisites:

-   The result of an expression or a calculation is required only once. If an intermediate result is required multiple times, it should only be calculated once and saved in a helper variable. (ABAP Compiler does not implicitly handle this task at the moment)

-   The data type of the result matches the operand position, or the conversion rules for an expression/call used at an operand position are suitable for the task to be implemented. If special type conversions must be performed, for example, for date or time fields, helper variables of an appropriate type might be required.

Programs should always be kept clear and legible.. Do not be too ambitious and combine everything into one single expression. If an expression becomes too complex, it should be split at suitable points, and the intermediate results should be saved in helper variables. This particularly applies to character string processing with character string templates and to regular expressions. These are very powerful but they can also make programs difficult to read very quickly. [Comments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomments_guidl.htm "Guideline") can also help to describe the way a complex expression works.

Bad Example

The following source code shows an arithmetic expression in a relational expression in a loop. The same total must be recalculated for each loop pass.

LOOP AT itab ASSIGNING <wa>.
  IF oref->meth( <wa> ) < sy-tabix \* ( offset + length ).
    ...
  ENDIF.
ENDLOOP.

Good Example

The following source code has the same function as the example above. However, the total is only calculated once before the loop.

limit = offset + length.
LOOP AT itab ASSIGNING <wa>.
  IF oref->meth( <wa> ) < sy-tabix \* limit.
    ...
  ENDIF.
ENDLOOP.


### abennesting_depth_guidl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm) → 

Nesting Depth

Background

The nesting depth is the number of statement blocks that are nested due to the use of control structures (branches, loops). We will discuss the nesting depth at the level of a procedure ([method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")). [Implementations must not](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendial_mod_event_block_guidl.htm "Guideline") occur at other points.

The maximum nesting depth is restricted to 256 by ABAP Compiler.

Rule

Restrict the nesting depth of control structures

Restrict the maximum nesting depth within a procedure ([method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) to five levels.

Details

In addition to the [number of executable statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenproc_volume_guidl.htm "Guideline"), the control structures of a procedure ([method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) are also important for their clarity and traceability. Each new nesting level makes nested branches and loops (such as in the statements IF, CASE, DO, WHILE, and LOOP) increasingly complicated and difficult to interpret. For this reason, the nesting depth must be restricted within a procedure, for example by moving functions to other procedures.

A maximum nesting depth of five levels is considered tolerable. A deeper nesting requires a great deal of effort to trace the program flow based on the source code. This would considerably constrain maintenance and further development.

Note

The use of modern language elements can help to restrict the maximum nesting depth. This is the case if a statement or a built-in function replaces an entire control structure, for instance, for REPLACE with the addition ALL OCCURRENCES or for the numeric extremum functions, nmax( ) and nmin( ), to determine the maximum or minimum value. The former replaces a loop, the latter an IF control structure.

Example

The transition from the bad to the good example in the rule for [modern ABAP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodern_abap_guidl.htm "Guideline") shows how you can reduce the nesting depth by using modern language elements.


### abenproc_volume_guidl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm) → 

Procedure Volume

Background

The procedure volume is the number of executable ABAP statements in a procedure ([method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")). In theory, this number has no upper limit and is only limited by the maximum program size that fits into the current session memory.

Rule

Restrict the number of statements in procedures

Restrict the number of executable ABAP statements in a procedure ([method](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) to a manageable size. A maximum of 150 executable statements per procedure is the recommended guideline.

Details

Procedures with large volumes ([methods](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunct_module_subroutine_guidl.htm "Guideline")) generally have a complex decision structure, a lot of procedure parameters and work with a multitude of local data. These procedures, which often do not perform a clearly defined single task, are difficult to understand and therefore particularly prone to errors. You should use multiple small procedures with narrow interfaces and closely defined tasks. The ideal parameter interface has a small number of input parameters and only one [return value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentype_formal_param_proc_guidl.htm "Guideline").

The number of executable statements is a simple measure of the complexity of a procedure. All statements that are not declarations and do not define processing blocks can be regarded as executable statements. This is very similar to statements at which program execution can be stopped in the debugger. Procedure-concluding statements, such as ENDMETHOD, at which you can stop in the debugger are exceptions. However, these are not regarded as executable statements.

Note

The recommendation not to write procedures that are too large should not lead to the other extreme (too many procedures that are very small). Procedures should be of a reasonable size that is consistent with the ABAP programming language ([modularize instead of atomize](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodularization_guidl.htm "Guideline")).

Exception

Strict linear code (for example, programmatic filling of a table with single values) cannot be subdivided into multiple procedures. In these cases, a restriction on the number of statements does not make sense.

Example

See the [KISS Principle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenkiss_principle_guidl.htm "Guideline") figure.


### abenclass_size_guidl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm) → 

Class Size

Background

The class size is the number of components (attributes, methods, events) of a class. ABAP Compiler predefines a maximum number of 65,536 components. The total memory consumption by static attributes, instance attributes, and constants is restricted to 500KB in each case. With respect to deep data objects (tables, strings, and data references), only the fixed size of the reference is important and not the variable size of the referenced data object.

Rule

Maintain reasonable class sizes

Ensure that classes and interfaces do not contain an excessively high number of attributes, methods and events. The components contained must be class-specific and should not handle tasks that are extremely different from each other. The same applies to function groups.

Details

Complexity is not only important on the level of procedure implementations. The number of procedures to be considered and the data processed by these procedures are also very important when it comes to understanding the source code.

A class, interface or function group should not be mistaken as a container that can be used for any functions. Function groups play the same role here as abstract final classes for which no instances can be created. The function modules correspond to static public methods, and the global data corresponds to private static attributes. The situation should be viewed more as an abstraction of a certain subject or an object from real life. This modularization of a complex problem in objects of a manageable size makes it easier to understand the code. Therefore, the classes and interfaces must be designed appropriately and each class/interface must cover a manageable function that is easy to understand.

This is obviously not the case, if a class or an interface contains a large number of attributes and methods. The same applies to the number of function modules of a function group (with respect to the use of [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obj_progr_model_guidl.htm "Guideline")). Large classes, interfaces, and function groups either provide functions that are too heterogeneous or, conversely, are highly specialized, which restricts their reusability.

Besides the high degree of complexity, which makes it more difficult to maintain voluminous classes and function groups, you must consider another technical aspect: Even if you use just a few of the provided functions, the entire class/function group is loaded into the session memory, which negatively impacts the memory usage.

Note

It is [preferable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenproc_volume_guidl.htm "Guideline") to use multiple procedures, which are not too large and have clearly defined tasks, instead of a small number of large procedures. On the other hand, classes should not contain too many methods. However, these two rules are not contradictory, provided that the procedures do not become too small and are appropriately grouped into different classes with a clearly defined task field. In this process, very specialized classes can be created that do not require global visibility.

Functions that are only required in a global class, function group or any other program should therefore be encapsulated in local classes. (All functions of function groups, subroutine pools, and executable programs [should](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obj_progr_model_guidl.htm "Guideline") be implemented in local classes anyway). An example of this self-contained function is the display logic for [classic dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenencap_class_interf_guidl.htm "Guideline") within a function group. A meaningful reuse of classes that call the dynpros of the function group is not possible outside the function group. Therefore, local classes are the preferred elements for this task.

This procedure is also useful for global classes. By moving highly specialized functions to smaller, local classes, you reduce the number of methods of the global class, which results in a clearer overview and makes the class easier to maintain. When you use local classes within global classes, make sure you position them appropriately to [avoid](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocal_type_glob_class_guidl.htm "Guideline") unnecessary dependencies.


### abendead_code_guidl.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Structure and Style](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_style_guidl.htm) →  [Complexity](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencomplexity_guidl.htm) → 

Dead Code

Background

Dead code is program parts that are never executed because they are no longer required or were never actually required at any time. This code can accumulate during the development (rejected prototypes) or maintenance (changeover to new code without deleting the old code) of programs.

Rule

Remove dead code

Completely remove any unused or inaccessible program parts from live programs.

Details

Although dead code does not affect the executed program parts directly, it still has a negative impact on the product. Program parts that cannot be accessed during program execution do not provide any benefit. Instead they cause increased costs in the course of a program lifecycle because they must be identified as unused for maintenance and further development purposes. The worst case scenario is that if these program parts are not immediately recognized as unused, they will be reused or modified during further developments or refactoring measures. A lot of time and effort is wasted making changes to unused code. In addition, these program parts increase the space required in the program buffer during program execution.

Dead code also interferes with the aim of maximum [test coverage](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencorrectness_quality_guidl.htm "Guideline") by unit tests using ABAP Unit or scenario tests using eCATT. Code not used in the live system is either tested, which is very time-consuming, or is not tested, which results in poor test coverage. Unused and inaccessible program parts must therefore be identified and removed as quickly as possible.

Note

[Check tools](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencheck_correctness_guidl.htm "Guideline") indicate dead code if it can be identified. Examples:

-   The syntax check warns you about unused private methods of local classes.

-   The extended program check warns you about unused declarations or statement blocks in control structures that can never be accessed.

However, these static checks can never be complete because not every use of a program part has to be known statically. Therefore, Coverage Analyzer is another important tool for isolating potential dead code.
