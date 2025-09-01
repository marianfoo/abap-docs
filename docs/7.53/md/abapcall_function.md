  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) → 

CALL FUNCTION

[Quick Reference](javascript:call_link\('abapcall_function_shortref.htm'\))

Syntax Forms

[General Function Module Call](javascript:call_link\('abapcall_function_general.htm'\))
1\. CALL FUNCTION func *{* [parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\))
                     *|* [parameter\_tables](javascript:call_link\('abapcall_function_dynamic.htm'\)) *}*.
[Registration of an Update Task Function Module](javascript:call_link\('abapcall_function_update.htm'\))
2\. CALL FUNCTION update\_function IN UPDATE TASK
                *\[*EXPORTING p1 = a1 p2 = a2 ...*\]*
                *\[*TABLES t1 = itab1 t2 = itab2 ...*\]*.
[Remote Function Call](javascript:call_link\('abapcall_function_destination-.htm'\))
3\. CALL FUNCTION... DESTINATION ...

Effect

Calls or registers a function module. Static and dynamic function module calls have no syntatic differences. The function module is always specified by a data object and the name of the called function module not determined until runtime.

System Fields

The system field sy-subrc is set to 0 when a function module is called. If a [non-class-based exception](javascript:call_link\('abenexceptions_non_class.htm'\)) is raised that was handled by the assignment of a value, sy-subrc is set to this value. After the registration of an update function module using CALL FUNCTION ... IN UPDATE TASK, sy-subrc is undefined.

Notes

-   Unlike method calls, there are no different syntatic variants for static und dynamic calls of function modules. They can, however, be distinguished as follows
    

-   In static function module calls, a known static function module is specified as a [character literal](javascript:call_link\('abencharacter_literal_glosry.htm'\) "Glossary Entry") or as a constant and the parameter is passed statically. This static data is evaluated by tools like the [Extended Program Check](javascript:call_link\('abenextended_program_check_glosry.htm'\) "Glossary Entry") or the where-used list.

-   In a dynamic function module call, the name of the function module is specified in a variable and the parameter is passed dynamically. This is possible in general function module calls.

In both cases, incorrectly specified function modules or parameters produce runtime errors and not syntax errors.

-   [CALL CUSTOMER-FUNCTION](javascript:call_link\('abapcall_customer-function.htm'\)) is another variant for calling obsolete function module exits.
    

Security Note

If the name of a program unit is specified dynamically when it is called, and this name is passed to a program from outside, the result is a serious security risk. Any names passed to a program from outside must be checked thoroughly before being used in calls. The system class CL\_ABAP\_DYN\_PRG, for example, can be used to do this. See [Dynamic Calls](javascript:call_link\('abendyn_call_scrty.htm'\)).

Continue
[CALL FUNCTION func](javascript:call_link\('abapcall_function_general.htm'\))
[CALL FUNCTION - parameter\_list](javascript:call_link\('abapcall_function_parameter.htm'\))
[CALL FUNCTION - parameter\_tables](javascript:call_link\('abapcall_function_dynamic.htm'\))