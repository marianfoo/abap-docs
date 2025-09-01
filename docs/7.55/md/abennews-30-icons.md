  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

Representation of Icons on Dynpros in Release 3.0

From Release 3.0, icons can be represented on [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). Either Screen Painter is used to define the icons or the function module ICON\_CREATE for setting icons dynamically from an ABAP program. <ICON\> must be included in the program so that the icons can be addressed using their symbolic names. It is important that the [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") that contains an icon at runtime is at least as long as the identically named ABAP field. Apart from the icon name, the field should also be able to accommodate a short information text.