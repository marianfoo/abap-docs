---
title: "FUNCTION-POOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction-pool_shortref.htm) Syntax FUNCTION-POOL fpool list_options(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_list_options.htm) MESSAGE-ID mid. Effect The statement FUNCTIO
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction-pool.htm"
abapFile: "abapfunction-pool.htm"
keywords: ["do", "try", "method", "class", "data", "abapfunction", "pool"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_program_statement.htm) → 

FUNCTION-POOL

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfunction-pool_shortref.htm)

Syntax

FUNCTION-POOL fpool *\[*[list\_options](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport_list_options.htm)*\]*
                    *\[*MESSAGE-ID mid*\]*.

Effect

The statement FUNCTION-POOL introduces a [function group](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_group_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The additions of the statement FUNCTION-POOL have the same function as the additions of the statement [REPORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreport.htm).

Function groups are defined using the [Function Builder](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenframe_program_glosry.htm "Glossary Entry") tool in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninclude_program_glosry.htm "Glossary Entry"). Here, a [master program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_builder_glosry.htm "Glossary Entry") and subordinate [include programs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry") are generated automatically. The statement FUNCTION-POOL is created in the [top include](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentop_include_glosry.htm "Glossary Entry").

The full name of the master program of a function group in the [repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm "Glossary Entry") consists of the prefix SAPL and the name fpool of the statement FUNCTION-POOL.

A function group is used as a container for [function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") and is organized in include programs as follows.

-   One top include with the prefix "L" and the ending "TOP" in the declaration part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "D.." for declaring local classes within the top include.
    
-   One include program with the prefix "L" and the ending "UXX" in the implementation part of the function group. This include program includes include programs with the ending "U.." for implementing each [function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_module_glosry.htm "Glossary Entry") of the function group. This structure must not be changed.
    
-   Optional include programs with the prefix "L" and the ending "P.." for implementing the methods of local classes in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "O.." for implementing [PBO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpbo_glosry.htm "Glossary Entry") modules in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "I.." for implementing [PAI](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpai_glosry.htm "Glossary Entry") modules in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "E.." for implementing [event blocks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenevent_block_glosry.htm "Glossary Entry") in the implementation part of the function group.
    
-   Optional include programs with the prefix "L" and the ending "F.." for implementing [subroutines](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubroutine_glosry.htm "Glossary Entry") in the implementation part of the function group.
    

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