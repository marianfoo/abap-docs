  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

garbage Collector

Deletes [objects](javascript:call_link\('abenobject_glosry.htm'\) "Glossary Entry") that are no longer referenced by [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry") or [field symbols](javascript:call_link\('abenfield_symbol_glosry.htm'\) "Glossary Entry") and for which no method is registered as an [event handler](javascript:call_link\('abenevent_handler_glosry.htm'\) "Glossary Entry"). The garbage collector is called periodically by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry"). It tracks the [reference variables](javascript:call_link\('abenreference_variable_glosry.htm'\) "Glossary Entry") of deleted objects. The static method DO\_GARBAGE\_COLLECTION of [system class](javascript:call_link\('abensystem_class_glosry.htm'\) "Glossary Entry") CL\_ABAP\_MEMORY\_UTILITIES can also be used to call the garbage collector explicitly in system programs. See also [weak reference](javascript:call_link\('abenweak_reference_glosry.htm'\) "Glossary Entry").