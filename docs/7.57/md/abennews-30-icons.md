  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Representation of Icons on Dynpros in Release 3.0, ABENNEWS-30-ICONS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Representation of Icons on Dynpros in Release 3.0

From Release 3.0, icons can be represented on [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). Either Screen Painter is used to define the icons or the function module ICON\_CREATE for setting icons dynamically from an ABAP program. <ICON\> must be included in the program so that the icons can be addressed using their symbolic names. It is important that the [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") that contains an icon at runtime is at least as long as the identically named ABAP field. Apart from the icon name, the field should also be able to accommodate a short information text.