  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONTROLS%2C%20ABAPCONTROLS_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CONTROLS - Short Reference

[Reference](javascript:call_link\('abapcontrols.htm'\))

Syntax

CONTROLS contrl TYPE *{* TABLEVIEW USING SCREEN dynnr *}*
                   *|* *{* TABSTRIP *}*.

Effect

Declares the use of a [control](javascript:call_link\('abencontrol_glosry.htm'\) "Glossary Entry") contrl on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") of the program. An identically named structure is created for controlling the control.

Additions   

-   [TABLEVIEW USING SCREEN dynnr](javascript:call_link\('abapcontrols_tableview.htm'\))
    Declares the use of a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") on the dynpro specified in dynnr.
-   [TABSTRIP](javascript:call_link\('abapcontrols_tabstrip.htm'\))
    Declares the use of a [tabstrip control](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry").