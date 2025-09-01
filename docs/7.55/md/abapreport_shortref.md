  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

REPORT - Quick reference

[Reference](javascript:call_link\('abapreport.htm'\))

Syntax

REPORT rep *\[*NO STANDARD PAGE HEADING*\]*
           *\[*LINE-SIZE width*\]*
           *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]*
           *\[*MESSAGE-ID mid*\]*
           *\[*DEFINING DATABASE ldb*\]*
           *\[*REDUCED FUNCTIONALITY*\]*.

Effect

Introduces an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") rep.

Additions

-   [NO STANDARD PAGE HEADING](javascript:call_link\('abapreport_list_options.htm'\))
    Suppresses the output of a [standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry").
    

-   [LINE-SIZE width](javascript:call_link\('abapreport_list_options.htm'\))
    Sets the line width of lists of the program to width characters.
    

-   [LINE-COUNT page\_lines*\[*(footer\_lines)*\]*](javascript:call_link\('abapreport_list_options.htm'\))
    Sets the page length of the basic list of the program to page\_lines and reserves footer\_lines footer lines.
    

-   [MESSAGE-ID mid](javascript:call_link\('abapreport.htm'\))
    Specifies a message class mid for short forms of MESSAGE.
    

-   [DEFINING DATABASE ldb](javascript:call_link\('abapreport_defining.htm'\))
    Obsolete: Does not call an executable program, but calls the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") of the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") ldb instead.
    

-   [REDUCED FUNCTIONALITY](javascript:call_link\('abapprogram.htm'\))
    This addition is only intended for the [PROGRAM](javascript:call_link\('abapprogram.htm'\)) statement in subroutine pools.