---
title: "PROGRAM"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprogram_shortref.htm) Syntax PROGRAM prog list_options(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport_list_options.htm) MESSAGE-ID mid REDUCED FUNCTIONALITY. Addition:
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprogram.htm"
abapFile: "abapprogram.htm"
keywords: ["loop", "do", "if", "try", "types", "abapprogram"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Introductory Statements for Programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_statement.htm) → 

PROGRAM

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapprogram_shortref.htm)

Syntax

PROGRAM prog *\[*[list\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport_list_options.htm)*\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Addition:

[... REDUCED FUNCTIONALITY](#!ABAP_ONE_ADD@1@)

Effect

The statement PROGRAM introduces a [module pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmodul_pool_glosry.htm "Glossary Entry") or a [subroutine pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_pool_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name prog must be specified directly. The following applies for the additions:

-   In module pools, the additions [list\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport_list_options.htm) and MESSAGE-ID of the statement PROGRAM have the same meaning as the additions of the same name in the statement [REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport.htm). The addition REDUCED FUNCTIONALITY works only in subroutine pools and is otherwise ignored.
    
-   In subroutine pools, MESSAGE-ID (if specified) has the same meaning as in the statement [REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport.htm). The possible additions [list\_options](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport_list_options.htm) for the basic list are ignored, since subroutine pools do not have a separate [list buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). Output statements in subroutine pools write to the current list of the calling [main program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_program_glosry.htm "Glossary Entry"). The addition REDUCED FUNCTIONALITY only works in subroutine pools..
    

Notes

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreport.htm). In module pools or subroutine pools, REPORT has the same meaning as PROGRAM and can be used with its additions. As a rule, module pools and subroutine pools should only be introduced by using PROGRAM.
    
-   The name prog is not absolutely necessary, but the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.
    
-   The name of a module pool is not fixed, but should follow the naming conventions in ABAP Workbench. These specify that the name of module pools should start with "SAPM".
    

Addition

... REDUCED FUNCTIONALITY

Effect

This addition only has an effect in programs of program type [subroutine pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubroutine_pool_glosry.htm "Glossary Entry"). In other program types, the syntax check raises a warning. In a subroutine pool introduced with the addition REDUCED FUNCTIONALITY, not all components that are usually loaded with an ABAP program are loaded. This reduces the [program load](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenload_glosry.htm "Glossary Entry") and memory consumption in the [session memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroll_area_glosry.htm "Glossary Entry"). This means that the full ABAP language range is not available.

-   The built-in structure [syst](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_fields.htm) is not loaded. Instead of syst, the structure sy with the same meaning can be used.
    
-   The built-in structure [screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenscreen_structure_obsolete.htm) is not loaded. The statements [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) and [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm) are then not possible.
    
-   It is not possible to work with the [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") of the [main program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_group_glosry.htm "Glossary Entry").
    
-   No support is available for [spooling lists](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprint.htm). The corresponding additions of the statements [NEW-PAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnew-page_print.htm) and [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit_print_parameters.htm) cannot be used.
    

If none of the missing functions are required, the addition REDUCED FUNCTIONALITY can be used to avoid the unnecessary resources being consumed by subroutine pools.

Notes

-   The addition REDUCED FUNCTIONALITY also works in subroutine pools which were created with [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_subroutine_pool.htm).
    
-   The use of REDUCED FUNCTIONALITY is especially recommended for small subroutine pools which only contain simple help procedures
    
-   The use of REDUCED FUNCTIONALITY in a subroutine pool produces a warning from the syntax check, indicating that not all ABAP functions are available. If nonexistent functions are used, corresponding syntax errors are produced.