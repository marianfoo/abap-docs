  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [Obsolete XML Interface](javascript:call_link\('abenabap_xml_obsolete.htm'\)) → 

CALL TRANSFORMATION - OBJECTS

[Quick Reference](javascript:call_link\('abapcall_transformation_shortref.htm'\))

Obsolete Syntax

... OBJECTS *{*o1 = e1 o2 = e2 ...*}**|*(otab) ...

Effect

This addition of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can be used to pass object references e1 e2 ... to an XSL transformation as external objects o1 o2 ... to call their methods here.

Instead of using a static parameter list, the objects can be passed dynamically as value pairs in the columns of the internal table otab with the type ABAP\_TRANS\_OBJBIND\_TAB from the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") ABAP.

Note

The addition OBJECTS is obsolete. External objects are handled like parameters and object references must be passed accordingly with the addition [PARAMETERS](javascript:call_link\('abapcall_transformation.htm'\)).