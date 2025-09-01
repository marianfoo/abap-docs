  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [dynpro - Obsolete Statements in Dynpro Flow Logic](javascript:call_link\('abendynpro_obsolet.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Obsolete Processing of Step Loops, ABENSTEPLOOP, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

dynpro - Obsolete Processing of Step Loops

Step loops are the predecessors of [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") and are defined without individual names in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). A step loop contains screen elements that, unlike table controls, can occupy multiple rows, are grouped together in a group that can be repeated multiple times within the step loop on the [screen layout](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). The properties of the screen elements of the first group define the properties of the entire step loop. For this reason, the fields of a group must only be created once in each of the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") and the ABAP program.

In the Screen Painter, it is also possible to determine whether the size of the step loop is fixed or variable. For each screen, more than one fixed step loop can be defined, but only one variable step loop. If the user changes the vertical size of the GUI window, this also changes the vertical size of the variable step loop. This raises the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry").

Processing of step loops and table controls is based on the step loop technique, whose main features are the statements LOOP ... ENDLOOP in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). These statements produce a loop pass across the step loop rows displayed on the screen and a data transport between the ABAP program and dynpro for all identically named data objects.

Independent step loops are obsolete and have been replaced by table controls, which are based on step loop but encapsulate them. Accordingly, the specified variants of the [LOOP](javascript:call_link\('dynploop_obsolete.htm'\)) statement are obsolete in the dynpro flow logic. The LOOP statement of the dynpro flow logic should only be used with the [WITH CONTROL](javascript:call_link\('dynploop.htm'\)) addition, which assigns a table control to the statement.

Continue
[dynpro - LOOP, Step Loop](javascript:call_link\('dynploop_obsolete.htm'\))
![Example](exa.gif "Example") [dynpro - Step Loop](javascript:call_link\('abensteploop_abexa.htm'\))