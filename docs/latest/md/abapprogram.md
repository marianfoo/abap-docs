  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Structure](javascript:call_link\('abenabap_program_layout.htm'\)) →  [Program-Initiating Statements](javascript:call_link\('abenabap_program_statement.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PROGRAM%2C%20ABAPPROGRAM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PROGRAM

[Short Reference](javascript:call_link\('abapprogram_shortref.htm'\))

Syntax

PROGRAM prog *\[*[list\_options](javascript:call_link\('abapreport_list_options.htm'\))*\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Addition:

[... REDUCED FUNCTIONALITY](#!ABAP_ONE_ADD@1@)

Effect

The statement PROGRAM introduces a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry") or a [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry"). It must be the first statement of a standalone program after any [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") are resolved. The name prog must be specified directly. The following applies to the additions:

-   In module pools, the additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) and MESSAGE-ID of the statement PROGRAM have the same meaning as the identically named additions in the statement [REPORT](javascript:call_link\('abapreport.htm'\)). The addition REDUCED FUNCTIONALITY works only in subroutine pools and is otherwise ignored.
-   In subroutine pools, the specification of MESSAGE-ID has the same meaning as in the statement [REPORT](javascript:call_link\('abapreport.htm'\)). Any additions [list\_options](javascript:call_link\('abapreport_list_options.htm'\)) for the basic list are ignored, since subroutine pools do not have a separate [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry"). Output statements in subroutine pools write to the current list of the calling [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry"). The addition REDUCED FUNCTIONALITY only works in subroutine pools..

Hints

-   The keyword PROGRAM can also be replaced by the keyword [REPORT](javascript:call_link\('abapreport.htm'\)). In module pools or subroutine pools, REPORT has the same meaning as PROGRAM and can be used with its additions. As a convention, module pools and subroutine pools should only be introduced by using PROGRAM.
-   The specification of prog is not absolutely necessary, but the name of the ABAP program from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") should always be used.
-   The name of a module pool is not fixed, but should follow the naming conventions in ABAP Workbench, which specify that the name of module pools should start with SAPM.

Addition   

... REDUCED FUNCTIONALITY

Effect

This addition only has an effect in programs of program type [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry") and otherwise produces a syntax check warning. In a subroutine pool that is introduced with the addition REDUCED FUNCTIONALITY, not all components that are loaded with a regular ABAP program are loaded. This reduces the [program load](javascript:call_link\('abenload_glosry.htm'\) "Glossary Entry") and memory consumption in the [session memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry"). However, the full ABAP language scope is not available for this.

-   The built-in structure [syst](javascript:call_link\('abensystem_fields.htm'\)) is not loaded. Instead of syst, the structure sy with the same meaning can be used.
-   The built-in structure [screen](javascript:call_link\('abenscreen_structure_obsolete.htm'\)) is not loaded. The statements [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)) and [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) are therefore not possible.
-   It is not possible to work with the [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current [program group](javascript:call_link\('abenprogram_group_glosry.htm'\) "Glossary Entry").
-   No support is available for [spooling lists](javascript:call_link\('abenprint.htm'\)). The corresponding additions of the statements [NEW-PAGE](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT](javascript:call_link\('abapsubmit_print_parameters.htm'\)) cannot be used.

If no parts of the missing functions are required, the addition REDUCED FUNCTIONALITY can be used to avoid the unnecessary resource consumption by subroutine pools.

Hints

-   The addition REDUCED FUNCTIONALITY also works in subroutine pools that were created with [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)).
-   The use of REDUCED FUNCTIONALITY is especially recommended for small subroutine pools that only contain simple help procedures
-   The use of REDUCED FUNCTIONALITY in a subroutine pool produces a syntax check warning that indicates that not all ABAP functions are available. If nonexistent functions are used, corresponding syntax errors are produced.