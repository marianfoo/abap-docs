  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Displaying Lists](javascript:call_link\('abenlists_displayed.htm'\)) → 

SET TITLEBAR - List

[Quick Reference](javascript:call_link\('abapset_titlebar_shortref.htm'\))

Syntax

SET TITLEBAR title *\[*OF PROGRAM prog*\]*
                   *\[*WITH text1 ... text9*\]*.

Extras:

[1\. ... OF PROGRAM prog](#!ABAP_ADDITION_1@1@)
[2\. ... WITH text1 ... text9](#!ABAP_ADDITION_2@2@)

Effect

In list processing, this statement sets the GUI title specified in title for the display window of the current list level and all following list levels up to the next statement SET TITLEBAR. The statement has mostly the same syntax and semantics as for [dynpros](javascript:call_link\('abapset_titlebar_dynpro.htm'\)).

Unlike in [screens](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of dynpros, each list level remains automatically associated with the title set for it. When the display of a higher list level is switched to the display of a lower list level, the latter is displayed with the title that was set for it.

Addition 1

...  OF PROGRAM prog

Addition 2

... WITH text1 ... text9

Effect

As for [dynpros](javascript:call_link\('abapset_titlebar_dynpro.htm'\)).