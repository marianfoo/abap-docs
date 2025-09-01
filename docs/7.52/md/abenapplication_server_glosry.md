  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

application server

Part of the [application layer](javascript:call_link\('abenapplication_layer_glosry.htm'\) "Glossary Entry") in [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). The application layer can be distributed across multiple application servers, usually instantiated on different computers whose operating systems do not need to be identical. However, multiple application servers of one or more AS ABAPs may run on one computer. Application servers communicate with the [presentation layer](javascript:call_link\('abenpresentation_layer_glosry.htm'\) "Glossary Entry"), the [database layer](javascript:call_link\('abendatabase_layer_glosry.htm'\) "Glossary Entry"), and with each other using the [message server](javascript:call_link\('abenmessage_server_glosry.htm'\) "Glossary Entry"). The most important components of an application server are its [work processes](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"), the number and [type](javascript:call_link\('abentype_glosry.htm'\) "Glossary Entry") of which are determined when the AS ABAP is started. An [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") is executed by a suitable application server work process. The memory areas of an application server that can be accessed in the ABAP programs are the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry"), the [user memory](javascript:call_link\('abenuser_memory_glosry.htm'\) "Glossary Entry"), the [ABAP memory](javascript:call_link\('abenabap_memory_glosry.htm'\) "Glossary Entry"), and the [program memory](javascript:call_link\('abenroll_area_glosry.htm'\) "Glossary Entry") in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

[→ More](javascript:call_link\('abenorganization_of_modules.htm'\))