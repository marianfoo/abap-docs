  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

CREATE OBJECT, OLE - Quick reference

[Reference](javascript:call_link\('abapcreate_object_ole2.htm'\))

Syntax

CREATE OBJECT ole class *\[*NO FLUSH*\]* *\[*QUEUE-ONLY*\]*.

Effect

Creates an [OLE automation object](javascript:call_link\('abenole_automation_glosry.htm'\) "Glossary Entry") ole of the automation class class. Here, ole must have the type ole2\_object from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") OLE2 and class specifies the name of the class.

Additions

-   NO FLUSH
    Specifies that the request to create an object is not passed to the current presentation server until the function module FLUSH is called or when the [screen](javascript:call_link\('abenscreen_glosry.htm'\) "Glossary Entry") changes.
    

-   QUEUE-ONLY
    Specifies that, in the case of a flush, the return codes of the methods called using [CALL METHOD OF](javascript:call_link\('abapcall_method_of_ole_shortref.htm'\)) in the automation queue are not written to the data objects rc.