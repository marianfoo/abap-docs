  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

dynpro - Including Subscreens Directly

The statement [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) can be used to insert other screens directly into the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") of a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") in the form of subscreens. Subscreen areas must first be defined in the current screen of the dynpro. Every subscreen area has a unique name and can be configured to support changes in screen size. If the latter is defined, each size change in the current GUI window raises the [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") event.

Subscreens are the screens of special [subscreen dynpros](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry"). When a subscreen is inserted, the flow logic of the subscreen dynpro is also inserted. Subscreens can also insert other subscreens. Subscreens cannot have their own OK field. Instead, user actions on subscreens pass the function codes to the OK field of the dynpro that includes the subscreen. In the PAI event block of a subscreen dynpro, a [MODULE](javascript:call_link\('dynpmodule.htm'\)) statement is never executed with the AT EXIT-COMMAND addition.

Hint

Subscreens dynpros are defined like normal dynpros in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry") and are flagged there as regular dynpros. [Selection screens](javascript:call_link\('abapselection-screen_subscreen.htm'\)) can also be defined as subscreens.

Executable Example

[Dynpros, Subscreens](javascript:call_link\('abendynpro_subscreen_abexa.htm'\))