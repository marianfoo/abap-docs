---
title: "PROGRAM"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprogram_shortref.htm) Syntax PROGRAM prog list_options(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport_list_options.htm) MESSAGE-ID mid REDUCED FUNCTIONALITY. Addition:
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprogram.htm"
abapFile: "abapprogram.htm"
keywords: ["loop", "do", "if", "try", "abapprogram"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_layout.htm) →  [Program-Initiating Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_statement.htm) → 

PROGRAM

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapprogram_shortref.htm)

Syntax

PROGRAM prog *\[*[list\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport_list_options.htm)*\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Addition:

[... REDUCED FUNCTIONALITY](#!ABAP_ONE_ADD@1@)

Effect

The statement PROGRAM introduces a [module pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmodul_pool_glosry.htm "Glossary Entry") or a [subroutine pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_pool_glosry.htm "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninclude_program_glosry.htm "Glossary Entry") are resolved. The name prog must be specified directly. The following applies for the additions:

-   In module pools, the additions [list\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport_list_options.htm) and MESSAGE-ID of the statement PROGRAM have the same meaning as the identically named additions in the statement [REPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport.htm). The addition REDUCED FUNCTIONALITY works only in subroutine pools and is otherwise ignored.
-   In subroutine pools, the specification of MESSAGE-ID has the same meaning as in the statement [REPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport.htm). Any additions [list\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport_list_options.htm) for the basic list are ignored, since subroutine pools do not have a separate [list buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_buffer_glosry.htm "Glossary Entry"). Output statements in subroutine pools write to the current list of the calling [main program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_glosry.htm "Glossary Entry"). The addition REDUCED FUNCTIONALITY only works in subroutine pools..

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapreport.htm). In module pools or subroutine pools, REPORT has the same meaning as PROGRAM and can be used with its additions. As a convention, module pools and subroutine pools should only be introduced by using PROGRAM.
-   The specification of prog is not absolutely necessary, but the name of the ABAP program from the [repository](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrepository_glosry.htm "Glossary Entry") should always be used.
-   The name of a module pool is not fixed, but should follow the naming conventions in ABAP Workbench, which specify that the name of module pools should start with "SAPM".

Addition   

... REDUCED FUNCTIONALITY

Effect

This addition only has an effect in programs of program type [subroutine pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubroutine_pool_glosry.htm "Glossary Entry") and otherwise produces a syntax check warning. In a subroutine pool that is introduced with the addition REDUCED FUNCTIONALITY, not all components that are loaded with a regular ABAP program are loaded. This reduces the [program load](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenload_glosry.htm "Glossary Entry") and memory consumption in the [session memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroll_area_glosry.htm "Glossary Entry"). However, the full ABAP language scope is not available for this.

-   The built-in structure [syst](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_fields.htm) is not loaded. Instead of syst, the structure sy with the same meaning can be used.
-   The built-in structure [screen](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_structure_obsolete.htm) is not loaded. The statements [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaploop_at_screen.htm) and [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_screen.htm) are therefore not possible.
-   It is not possible to work with the [dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynpro_glosry.htm "Glossary Entry") of the [main program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current [program group](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprogram_group_glosry.htm "Glossary Entry").
-   No support is available for [spooling lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint.htm). The corresponding additions of the statements [NEW-PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page_print.htm) and [SUBMIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit_print_parameters.htm) cannot be used.

If no parts of the missing functions are required, the addition REDUCED FUNCTIONALITY can be used to avoid the unnecessary resource consumption by subroutine pools.

Hints

-   The addition REDUCED FUNCTIONALITY also works in subroutine pools that were created with [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgenerate_subroutine_pool.htm).
-   The use of REDUCED FUNCTIONALITY is especially recommended for small subroutine pools that only contain simple help procedures
-   The use of REDUCED FUNCTIONALITY in a subroutine pool produces a syntax check warning that indicates that not all ABAP functions are available. If nonexistent functions are used, corresponding syntax errors are produced.