  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20TITLEBAR%2C%20ABAPSET_TITLEBAR_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET TITLEBAR - Short Reference

[Reference](javascript:call_link\('abapset_titlebar_dynpro.htm'\))

Syntax

SET TITLEBAR title *\[*OF PROGRAM prog*\]*
                   *\[*WITH text1 ... text9*\]*.

Effect

Sets the [GUI title](javascript:call_link\('abengui_title_glosry.htm'\) "Glossary Entry").

Additions   

-   [OF PROGRAM prog](javascript:call_link\('abapset_titlebar_dynpro.htm'\))
    Specifies the program prog in which the GUI title is defined.
-   [WITH text1 ... text9](javascript:call_link\('abapset_titlebar_dynpro.htm'\))
    Replaces the placeholders for the GUI title with the content of the data objects text1, ..., text9.