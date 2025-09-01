  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

list cursor

Current cursor position for the output in a [list](javascript:call_link\('abenclassic_list_glosry.htm'\) "Glossary Entry") in the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry"). This is represented by the content of the [system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry") [sy-colno](javascript:call_link\('abensystem_fields.htm'\)) (position) and [sy-linno](javascript:call_link\('abensystem_fields.htm'\)) (line) and refers to the current page in the list. Since a single character can occupy more columns in the list than positions in the list buffer, the horizontal position of the list cursor is only guaranteed to correspond to the column in the displayed list for the lower and upper output limits of the individual output.