  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  E

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EVENTS, ABAPEVENTS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

EVENTS - Short Reference

[Reference](javascript:call_link\('abapevents.htm'\))

Syntax

EVENTS evt *\[* EXPORTING VALUE(p1) [typing](javascript:call_link\('abentyping_shortref.htm'\))
                         *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
                       VALUE(p2) [typing](javascript:call_link\('abentyping_shortref.htm'\))
                         *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
                        ... *\]*.

Effect

Declares an instance event evt of a class or interface.

Additions   

-   [EXPORTING VALUE(p1) ... VALUE(p2) ...](javascript:call_link\('abapevents.htm'\))
    Defines the output parameters p1, p2, ... of the event.
-   [typing](javascript:call_link\('abentyping_shortref.htm'\))
    Assigns a type to the output parameter.
-   [OPTIONAL*|*DEFAULT](javascript:call_link\('abapevents_parameters.htm'\))
    Specifies optional output parameters either with or without the replacement parameters def1, def2, ...