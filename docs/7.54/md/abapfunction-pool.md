  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Layout](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Introductory Statements for Programs](javascript:call_link\('abenabap_program_statement.htm'\)) → 

FUNCTION-POOL

[Quick Reference](javascript:call_link\('abapfunction-pool_shortref.htm'\))

Syntax

FUNCTION-POOL fpool *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
                    *\[*MESSAGE-ID mid*\]*.

Effect

The statement FUNCTION-POOL introduces a [function group](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The additions of the statement FUNCTION-POOL have the same function as the additions of the statement [REPORT](javascript:call_link\('abapreport.htm'\)).

Function groups are defined using the [Function Builder](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") tool in [ABAP Workbench](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"). Here, a [master program](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry") and subordinate [include programs](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") are generated automatically. The statement FUNCTION-POOL is created in the [top include](javascript:call_link\('abentop_include_glosry.htm'\) "Glossary Entry").

The full name of the master program of a function group in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") consists of the prefix SAPL and the name fpool of the statement FUNCTION-POOL.

A function group is used as a container for [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") and is organized in include programs as follows.

-   One top include with the prefix "L" and the ending "TOP" in the declaration part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "D.." for declaring local classes within the top include.
    
-   One include program with the prefix "L" and the ending "UXX" in the implementation part of the function group. This include program includes include programs with the ending "U.." for implementing each [function module](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") of the function group. This structure must not be changed.
    
-   Optional include programs with the prefix "L" and the ending "P.." for implementing the methods of local classes in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "O.." for implementing [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") modules in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "I.." for implementing [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") modules in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "E.." for implementing [event blocks](javascript:call_link\('abenevent_block_glosry.htm'\) "Glossary Entry") in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "F.." for implementing [subroutines](javascript:call_link\('abensubroutine_glosry.htm'\) "Glossary Entry") in the implementation part of the function group.
    

The periods ".." represent a two-digit number. The functions in Function Builder are based on adherence to this naming convention.

Example

Constructs the function group SAPLABAP\_DOCU from include programs:

\*&---------------------------------------------------------------------\*
\*&  Function Group SAPLABAP\_DOCU
\*&---------------------------------------------------------------------\*
INCLUDE labap\_docutop.               " Global Declarations
INCLUDE labap\_docue00.               " Load of Program
INCLUDE labap\_docuuxx.               " Function Modules
INCLUDE labap\_docuo01.               " PBO Modules
INCLUDE labap\_docui01.               " PAI Modules
INCLUDE labap\_docue01.               " Handling of Runtime-Events
INCLUDE labap\_docup01.               " Class implementations
INCLUDE labap\_docup02.
INCLUDE labap\_docup03.
INCLUDE labap\_docup04.

The function group includes the top include in the first place. This include contains the statement FUNCTION-POOL and other include programs for data and class declarations:

\*&---------------------------------------------------------------------\*
\*&  Include           LABAP\_DOCUTOP
\*&---------------------------------------------------------------------\*
FUNCTION-POOL abap\_docu.
INCLUDE labap\_docud00.               " Global Data for Screens
INCLUDE labap\_docud01.               " Classes for Docu Display