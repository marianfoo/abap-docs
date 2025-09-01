  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) →  [Obsolete XML Binding](javascript:call_link\('abenabap_xml_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CALL%20TRANSFORMATION%2C%20OBJECTS%2C%20ABAPCALL_TRANSFORMATION_OBJECTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CALL TRANSFORMATION, OBJECTS

[Short Reference](javascript:call_link\('abapcall_transformation_shortref.htm'\))

Obsolete Syntax

... OBJECTS *{*o1 = e1 o2 = e2 ...*}**|*(otab) ...

Effect

This addition of the statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can be used to pass object references e1 e2 ... to an XSL transformation as external objects o1 o2 ... to call their methods here.

Instead of using a static parameter list, the objects can be passed dynamically as value pairs in the columns of the internal table otab with the type abap\_trans\_objbind\_tab from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") ABAP.

Hint

The addition OBJECTS is obsolete. External objects are handled like parameters and object references must be passed accordingly with the addition [PARAMETERS](javascript:call_link\('abapcall_transformation.htm'\)).