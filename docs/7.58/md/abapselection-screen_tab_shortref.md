  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20TAB%2C%20ABAPSELECTION-SCREEN_TAB_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN TAB - Short Reference

[Reference](javascript:call_link\('abapselection-screen_tabbed.htm'\))

Syntax

SELECTION-SCREEN TAB (len) tab USER-COMMAND fcode
                *\[*DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr*\]*
                *\[*MODIF ID modid*\]*
                *\[*FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]**\]*.

Effect

Defines a [tab title](javascript:call_link\('abentab_title_glosry.htm'\) "Glossary Entry") with the name tab, the length len, and the [function code](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") fcode in a [tabstrip](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry") area.

Addition  

-   DEFAULT *\[*PROGRAM prog*\]* SCREEN dynnr
    Assigns the tab title a [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") dynnr in the program prog.
-   [MODIF ID modid](javascript:call_link\('abapselection-screen_modif_id.htm'\))
    Assigns the screen element to the [modification group](javascript:call_link\('abenmodification_group_glosry.htm'\) "Glossary Entry") modid.
-   [FOR *{*TABLE*|*NODE*}* node](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))
    Assigns the screen element in a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") to a node node of the associated structure.
-   [ID id](javascript:call_link\('abapselection-screen_ldb_additions.htm'\))
    Defines a maximum three-character ID id for the screen element in a logical database.