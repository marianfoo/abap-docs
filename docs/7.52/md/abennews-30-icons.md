  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

Displaying Icons on Screens in Release 3.0

As of Release 3.0, you can display icons on [screens](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"). To achieve this, you use either the Screen Painter or, if you want to set an icon dynamically from an ABAP program, the function module ICON\_CREATE. Include <ICON\> in your program so that you can address the icons by their symbolic names. Ensure that the [screen field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") intended to contain an icon at runtime is at least as long as the identically named ABAP field. Apart from the icon name, the field should also be able to accommodate a short information text.