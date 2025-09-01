  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in Dynpro Flow Logic](javascript:call_link\('abendynpro_obsolet.htm'\)) → 

Obsolete Processing of Step Loops

Step loops are the predecessors of [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") and are defined without individual descriptions in [Screen Painter](javascript:call_link\('abenscreen_painter_glosry.htm'\) "Glossary Entry"). A step loop contains screen elements that, unlike table controls, can occupy multiple rows, grouped together in one group that can be repeated multiple times within the step loop on the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry"). The attributes of the screen elements of the first group define the attributes of the whole step loop. For this reason, the fields of a group can only be created once in the [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") and once in the ABAP program.

In Screen Painter, it is also possible to determine whether the size of the step loop is fixed or variable. For each screen, more than one fixed step loop can be defined, but only one variable step loop. If the user changes the vertical size of the GUI window, this also changes the vertical size of the variable step loop. This raises the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry").

Processing of step loops and table controls is based on the step loop technique, whose main features are the statements LOOP ... ENDLOOP in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). These statements produce a loop pass across the step loop rows displayed on the screen and a data transport between the ABAP program and dynpro for all data objects with the same name.

Standalone step loops are obsolete and are replaced by table controls, which are based on step loops but encapsulate them too. Accordingly, the specified variants of the [LOOP](javascript:call_link\('dynploop_obsolete.htm'\)) statement are obsolete in the dynpro flow logic. The LOOP statement of the dynpro flow logic should only be used with the [WITH CONTROL](javascript:call_link\('dynploop.htm'\)) addition, which assigns a table control to the statement.

Continue
[LOOP - Step Loop](javascript:call_link\('dynploop_obsolete.htm'\))
![Example](exa.gif "Example") [Step Loop](javascript:call_link\('abensteploop_abexa.htm'\))