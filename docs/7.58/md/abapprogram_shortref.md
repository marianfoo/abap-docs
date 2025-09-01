  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  P

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PROGRAM%2C%20ABAPPROGRAM_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PROGRAM - Short Reference

[Reference](javascript:call_link\('abapprogram.htm'\))

Syntax

PROGRAM prog *\[*NO STANDARD PAGE HEADING*\]*
             *\[*LINE-SIZE width*\]*
             *\[*LINE-COUNT page\_lines*\[*(footer\_lines)*\]**\]*
             *\[*MESSAGE-ID mid*\]*
             *\[*REDUCED FUNCTIONALITY*\]*.

Effect

Initiates a [module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry") or a [subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry") prog.

Additions   

-   NO STANDARD PAGE HEADING, LINE-SIZE, LINE-COUNT, MESSAGE-ID
    See [REPORT](javascript:call_link\('abapreport_shortref.htm'\)).
-   [REDUCED FUNCTIONALITY](javascript:call_link\('abapprogram.htm'\))
    Minimizes the components loaded when calling a subroutine pool.